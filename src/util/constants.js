export const options = {
  accessToken: 'pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA', // only for public usage (URL restricted)
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [139.7, 35.7],
  zoom: 8
}

export const jsonUrls = {
  past: 'https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json',
  future: 'https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json'
}

export const TRANSITION_MSEC = 400

export const tileSets = [
  {
    name: '陰影起伏図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png'
  },
  {
    name: '淡色地図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
  },
  {
    name: '標準地図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
  },
  {
    name: '白地図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png'
  },
  {
    name: '航空写真',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'
  },
  {
    name: '色別標高図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png'
  },
  {
    name: '傾斜量図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png'
  },
  {
    name: 'アナグリフ',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/anaglyphmap_color/{z}/{x}/{y}.png'
  },
  {
    name: '[一部地域のみ] 数値地図25000（土地条件）',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/lcm25k_2012/{z}/{x}/{y}.png'
  },
  {
    name: '[一部地域のみ] 治水地形分類図 更新版（2007～2020年）',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/lcmfc2/{z}/{x}/{y}.png'
  },
  {
    name: '[一部地域のみ] 土地条件図（初期整備版）',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/lcm25k/{z}/{x}/{y}.png'
  }
]
