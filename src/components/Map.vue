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

export default {
  name: 'Map',
  data () {
    return {
      map: undefined
    }
  },
  methods: {
    render (map) {
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

      // Add radar layer
      // TODO: fixed URL
      const nowcastUrl = 'https://www.jma.go.jp/bosai/jmatile/data/nowc/20210619045500/none/20210619045500/surf/hrpns/{z}/{x}/{y}.png'
      // By setting maxzoom to source (not layer), ovezooming seems to be working
      map.addSource('radar', {
        type: 'raster',
        tiles: [nowcastUrl],
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
