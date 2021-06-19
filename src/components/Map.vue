<template>
  <div id="map-container">
    <div id="mapbox" />
    <v-btn
      id="setting-button"
      class="front"
      @click.stop="drawer = !drawer"
      color="blue-grey darken-2"
      elevation="6"
      fab
    >
      <v-icon color="white">mdi-cog</v-icon>
    </v-btn>
    <div
      id="slider-container"
      class="front"
    >
      <v-slider
        class="front"
        v-model="sliderIdx"
        step="1"
        :min="0"
        :max="sliderValues.length - 1"
        thumb-label="always"
        :thumb-size="40"
        ticks
      >
        <template v-slot:thumb-label="{ value }">
          {{ sliderValues.length > 0 ? formatDate(sliderValues[value].validtime) : "" }}
        </template>
      </v-slider>
    </div>
    <v-navigation-drawer
      class="front"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>
        <v-list-item>
          TODO
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      map: undefined,
      drawer: null,
      sliderIdx: 0,
      sliderValues: []
    }
  },
  watch: {
    sliderIdx (idx) {
      const selected = this.sliderValues[idx]
      if (!selected) return
      const radarTileUrl = `https://www.jma.go.jp/bosai/jmatile/data/nowc/${selected.basetime}/none/${selected.validtime}/surf/hrpns/{z}/{x}/{y}.png`
      // Update layer: remove and add again
      if (typeof this.map.getLayer('radar-tiles') !== 'undefined') {
        this.map.removeLayer('radar-tiles')
      }
      if (typeof this.map.getSource('radar') !== 'undefined') {
        this.map.removeSource('radar')
      }
      this.addRadarLayer(radarTileUrl)
    }
  },
  methods: {
    formatDate (timeStr) {
      const date = `${timeStr.slice(0, 4)}-${timeStr.slice(4, 6)}-${timeStr.slice(6, 8)}`
      const time = `${timeStr.slice(8, 10)}:${timeStr.slice(10, 12)}:${timeStr.slice(12, 14)}`
      return (new Date(`${date}T${time}Z`)).toLocaleTimeString().split(':').slice(0, 2).join(':')
    },
    async fetchDataList () {
      const results = await Promise.all([
        fetch(jsonUrls.future).then(resp => resp.json()),
        fetch(jsonUrls.past).then(resp => resp.json())
      ])
      const currentIndex = results[1].length - 1 // Index of latest (first element of past) in reversed
      const dataList = results.flat().reverse()
      return { currentIndex, dataList }
    },
    addRadarLayer (url) {
      // By setting maxzoom to source (not layer), ovezooming seems to be working
      this.map.addSource('radar', {
        type: 'raster',
        tiles: [url],
        tileSize: 256,
        minzoom: 4,
        maxzoom: 10, // Seems to be the max
        attribution: 'Japan Meteorological Agency'
      })
      this.map.addLayer({
        id: 'radar-tiles',
        type: 'raster',
        source: 'radar',
        paint: {
          'raster-opacity': 0.6
        }
      })
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

      // Set slider position (radar layer will be added)
      const { currentIndex, dataList } = await this.fetchDataList()
      this.sliderValues = dataList
      this.sliderIdx = currentIndex
    }
  },
  mounted () {
    const map = new mapboxgl.Map(options)
    map.on('load', () => {
      map.resize()
      this.render(map)
    })
    this.map = map
  }
}
</script>

<style scoped>
#mapbox, #map-container {
  width: 100%;
  height: 100%;
}
.front {
  z-index: 999;
}
#setting-button {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
#slider-container {
  position: absolute;
  bottom: 80px;
  left: 10vw;
  width: 80vw;
  height: 32px;
  padding: 0px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
}
</style>
