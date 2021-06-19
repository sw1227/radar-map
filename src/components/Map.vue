<template>
  <div>
    <div id="mapbox" />
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

const options = {
  accessToken: 'pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA', // only for public usage (URL restricted)
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [139.7, 35.7],
  zoom: 8
}

const jsonUrls = {
  past: 'https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json',
  future: 'https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json'
}

export default {
  name: 'Map',
  data () {
    return {
      map: undefined
    }
  },
  methods: {
    async fetchDataList () {
      const results = await Promise.all([
        fetch(jsonUrls.future).then(resp => resp.json()),
        fetch(jsonUrls.past).then(resp => resp.json())
      ])
      const dataList = results.flat()
      const currentIndex = results[0].length // Index of latest (first element of past)
      return { currentIndex, dataList }
    },
    async render (map) {
      // Add terrain layer
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 13
      })
      map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: 1.5
      })

      // Add base layer
      map.addSource('base', {
        type: 'raster',
        tiles: [
          'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        minzoom: 4,
        maxzoom: 16,
        attribution: '地理院タイル'
      })
      map.addLayer({
        id: 'base-tiles',
        type: 'raster',
        source: 'base'
      })

      // Add radar layer
      const { currentIndex, dataList } = await this.fetchDataList()
      const selected = dataList[currentIndex] // Latest data
      const radarTileUrl = `https://www.jma.go.jp/bosai/jmatile/data/nowc/${selected.basetime}/none/${selected.validtime}/surf/hrpns/{z}/{x}/{y}.png`
      // By setting maxzoom to source (not layer), ovezooming seems to be working
      map.addSource('radar', {
        type: 'raster',
        tiles: [radarTileUrl],
        tileSize: 256,
        minzoom: 4,
        maxzoom: 10, // Seems to be the max
        attribution: 'Japan Meteorological Agency'
      })
      map.addLayer({
        id: 'nowcast-tiles',
        type: 'raster',
        source: 'radar',
        paint: {
          'raster-opacity': 0.6
        }
      })
    }
  },
  mounted () {
    const map = new mapboxgl.Map(options)
    map.on('load', () => {
      this.render(map)
    })
    this.map = map
  }
}
</script>

<style scoped>
#mapbox {
  width: 100vw;
  height: 100vh;
}
</style>
