'use strict'

m3.config.tiles = {
  0: {
    id: 0,
    color: '#4B0082',
    desc: 'void',
    icon: '🌀',
    picker: {},
    randomWeight: 10,
  },
  1: {
    id: 1,
    claimType: 1,
    color: '#FFFFFF',
    desc: 'house',
    icon: '👪',
    matchable: true,
    picker: {
      active: true,
      position: 0,
    },
    randomWeight: 196,
  },
  2: {
    id: 2,
    color: '#5B60E1',
    desc: 'water',
    icon: '🌊',
    picker: {
      active: true,
      position: 4,
    },
    placeableInWater: true, // 🤣
    randomWeight: 196,
  },
  3: {
    id: 3,
    claimType: 2,
    color: '#F0E48A',
    desc: 'field',
    icon: '🌻',
    matchable: true,
    picker: {
      active: true,
      position: 1,
    },
    randomWeight: 196,
  },
  4: {
    id: 4,
    claimType: 3,
    color: '#287736',
    desc: 'forest',
    icon: '🌲',
    matchable: true,
    picker: {
      active: true,
      position: 2,
    },
    randomWeight: 196,
  },
  5: {
    id: 5,
    claimType: 4,
    color: '#424242',
    desc: 'stone',
    icon: '⛰️',
    matchable: true,
    picker: {
      active: true,
      position: 3,
    },
    randomWeight: 196,
  },
  6: {
    id: 6,
    claimType: 5,
    color: '#FF9900',
    desc: 'gold',
    icon: '💎',
    matchable: true,
    picker: {
      active: true,
      position: 5,
    },
    randomWeight: 5,
  },
  7: {
    id: 7,
    claimType: 7,
    color: '#FF66FF',
    desc: 'magic',
    icon: '🧙',
    matchable: true,
    picker: {
      active: true,
      position: 6,
    },
    placeableInFog: true,
    placeableInWater: true,
    randomWeight: 5,
  },
}
