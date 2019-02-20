'use strict'

m3.model.action = {}

m3.model.action.create = function(...args) {
  const instance = Object.create(this.prototype)
  return instance.construct(...args)
}

m3.model.action.prototype = (
  (undefined) => {
    const _prototype = m3.model.base.prototype

    function construct(...args) {
      _prototype.construct.call(this, ...args)

      this.cell = this.config.cell
      this.tile = this.config.tile
      this.turn = this.config.turn

      _claimCheck.call(this)
      _swapTile.call(this)

      return this
    }

    function destruct() {
      return this
    }

    // XXX: Not the time or place for this
    // TODO: Good luck future us
    function _claimCheck() {
      // TODO
    }

    // XXX: Not the time or place for this
    // TODO: Good luck future us
    function _swapTile() {
      this.cell.setTile(this.tile)
    }

    return Object.setPrototypeOf({
      construct,
      destruct,
    }, _prototype)
  }
)()
