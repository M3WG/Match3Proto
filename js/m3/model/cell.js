'use strict'

m3.model.cell = {}

m3.model.cell.create = function(...args) {
  const instance = Object.create(this.prototype)
  return instance.construct(...args)
}

m3.model.cell.prototype = (
  function prototypeIIFE(undefined) {
    const _prototype = m3.model.base.prototype

    function construct() {
      _prototype.construct.apply(this, arguments)

      return this
    }

    function destruct() {
      return this
    }

    function getTile() {
      return this.tile
    }

    function getX() {
      return this.config.x
    }

    function getY() {
      return this.config.y
    }

    function setTile(tile) {
      this.tile = tile
      this.emit('change')
      return this
    }

    // Tile
    // Claim

    return Object.setPrototypeOf({
      construct,
      destruct,
      getTile,
      getX,
      getY,
      setTile,
    }, _prototype)
  }
)()
