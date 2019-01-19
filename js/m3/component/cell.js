'use strict'

m3.component.cell = {}

m3.component.cell.create = function create(...args) {
  const instance = Object.create(m3.component.cell.prototype)
  instance.construct(...args)
  return instance
}

m3.component.cell.prototype = (
  function prototypeIIFE(undefined) {
    const _prototype = m3.component.base.prototype

    function construct(...args) {
      _prototype.construct.call(this, ...args)

      this._cell = []
      _build.call(this)

      if (this.config.model) {
        this.config.model.on('change', _onModelChange.bind(this))
      }

      this.render().attach()

      return this
    }

    function getModel() {
      return this.config.model
    }

    function getX() {
      return this.config.x
    }

    function getY() {
      return this.config.y
    }

    function render() {
      this._rootElement.innerHTML = this.getModel().getTile() || 0

      return this
    }

    function _build() {
      this._rootElement = document.createElement('div')
      this._rootElement.className = 'm3-c-cell'
      this._rootElement.addEventListener('click', _onClick.bind(this))
    }

    function _onClick(e) {
      e.preventDefault()
      e.stopPropagation()

      if (this.config.onClick) {
        this.config.onClick(this)
      }
    }

    function _onModelChange(data) {
      this.render()
    }

    return Object.setPrototypeOf({
      construct,
      getModel,
      getX,
      getY,
      render,
    }, _prototype)
  }
)()
