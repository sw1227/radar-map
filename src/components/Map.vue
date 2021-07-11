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
    <v-btn
      id="gps-button"
      class="front"
      @click.stop="findLocation"
      :loading="isGettingLocation"
      :disabled="isGettingLocation"
      color="grey lighten-5"
      small
      elevation="6"
      fab
    >
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>
    <v-btn
      id="refresh-button"
      class="front"
      @click.stop="refreshTileData"
      :loading="isFetchingData"
      :disabled="isFetchingData"
      color="grey lighten-5"
      small
      elevation="6"
      fab
    >
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
    <v-btn
      id="left-button"
      class="front"
      @click.stop="onLeftClick"
      color="grey lighten-5"
      small
      elevation="2"
      fab
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      id="right-button"
      class="front"
      @click.stop="onRightClick"
      color="grey lighten-5"
      small
      elevation="2"
      fab
    >
      <v-icon>mdi-arrow-right</v-icon>
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
        :color="sliderIdx > currentIdx ? 'lime darken-1' : 'indigo darken-1'"
        track-color="gray"
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

const TRANSITION_MSEC = 400

export default {
  name: 'Map',
  data () {
    return {
      map: undefined,
      drawer: null,
      sliderIdx: 0,
      currentIdx: 0, // sliderIdx of current time
      sliderValues: [],
      gpsMarker: null,
      location: {},
      isGettingLocation: false,
      isFetchingData: true,
      count: 0 // for layer management
    }
  },
  watch: {
    sliderIdx (idx) {
      const selected = this.sliderValues[idx]
      if (!selected) return
      const radarTileUrl = `https://www.jma.go.jp/bosai/jmatile/data/nowc/${selected.basetime}/none/${selected.validtime}/surf/hrpns/{z}/{x}/{y}.png`
      // Update layer: add and delayed removing for smooth transition
      this.count += 1
      this.addRadarLayer(radarTileUrl, this.count)
      this.maybeDelayedRemoveRadarLayer(this.count - 1)
    },
    location (loc) {
      if (this.gpsMarker) this.gpsMarker.remove()
      this.gpsMarker = new mapboxgl.Marker()
        .setLngLat([loc.lng, loc.lat])
        .addTo(this.map)
    }
  },
  methods: {
    formatDate (timeStr) {
      const date = `${timeStr.slice(0, 4)}-${timeStr.slice(4, 6)}-${timeStr.slice(6, 8)}`
      const time = `${timeStr.slice(8, 10)}:${timeStr.slice(10, 12)}:${timeStr.slice(12, 14)}`
      return (new Date(`${date}T${time}Z`)).toLocaleTimeString().split(':').slice(0, 2).join(':')
    },
    onLeftClick () {
      if (this.sliderIdx > 0) {
        this.sliderIdx -= 1
      }
    },
    onRightClick () {
      if (this.sliderIdx < this.sliderValues.length) {
        this.sliderIdx += 1
      }
    },
    findLocation () {
      if (navigator.geolocation) {
        this.isGettingLocation = true
        navigator.geolocation.getCurrentPosition(
          (pos) => { // onSuccess
            this.isGettingLocation = false
            this.location = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            }
          },
          (err) => { // onError
            this.isGettingLocation = false
            alert(`現在地の取得に失敗しました。\n${err}`)
          },
          { timeout: 10000 }
        )
      } else {
        alert('お使いのブラウザでは現在地を取得できません')
      }
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
    maybeDelayedRemoveRadarLayer (suffix) {
      setTimeout(() => {
        if (typeof this.map.getLayer(`radar-tiles-${suffix}`) !== 'undefined') {
          this.map.removeLayer(`radar-tiles-${suffix}`)
        }
        if (typeof this.map.getSource(`radar-${suffix}`) !== 'undefined') {
          this.map.removeSource(`radar-${suffix}`)
        }
      }, TRANSITION_MSEC)
    },
    addRadarLayer (url, suffix) {
      // By setting maxzoom to source (not layer), ovezooming seems to be working
      this.map.addSource(`radar-${suffix}`, {
        type: 'raster',
        tiles: [url],
        tileSize: 256,
        minzoom: 4,
        maxzoom: 10, // Seems to be the max
        attribution: 'Japan Meteorological Agency'
      })
      this.map.addLayer({
        id: `radar-tiles-${suffix}`,
        type: 'raster',
        source: `radar-${suffix}`,
        paint: {
          'raster-opacity': 0.6
        }
      })
    },
    setLayer (map) {
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
    },
    async refreshTileData () {
      this.isFetchingData = true
      // Set slider position (radar layer will be added)
      const { currentIndex, dataList } = await this.fetchDataList()
      this.sliderValues = dataList
      this.sliderIdx = currentIndex
      this.currentIdx = currentIndex
      this.isFetchingData = false
    }
  },
  mounted () {
    window.scrollTo(0, document.body.scrollHeight) // TEMP: for iPhone
    const map = new mapboxgl.Map(options)
    map.on('load', () => {
      map.resize()
      this.setLayer(map)
      this.refreshTileData()
    })
    this.map = map
  }
}
</script>

<style scoped>
#mapbox, #map-container {
  width: 100%;
  height: 100vh;
}
.front {
  z-index: 999;
}
#setting-button {
  position: absolute;
  bottom: 30px;
  left: 10px;
  position: fixed;
  touch-action: none;
}
#gps-button {
  position: absolute;
  bottom: 40px;
  right: 10px;
  position: fixed;
  touch-action: none;
}
#refresh-button {
  position: absolute;
  bottom: 40px;
  right: 60px;
  position: fixed;
  touch-action: none;
}
#left-button {
  position: absolute;
  bottom: 50px;
  left: calc(50% - 50px);
  position: fixed;
  touch-action: none;
}
#right-button {
  position: absolute;
  bottom: 50px;
  left: calc(50% + 10px);
  position: fixed;
  touch-action: none;
}
#slider-container {
  position: absolute;
  bottom: 100px;
  left: 10vw;
  width: 80vw;
  height: 32px;
  padding: 0px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  position: fixed;
  touch-action: pan-x;
}
</style>
