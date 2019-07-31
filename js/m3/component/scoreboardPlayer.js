'use strict'

m3.component.scoreboardPlayer = m3.utility.component.inventFactory(
  ((undefined) => {

    function getModel() {
      return this.config.model
    }

    function setup() {
      this._rootElement = document.createElement('li')
      this._rootElement.className = 'm3-c-scoreboard--player'

      this._color = document.createElement('div')
      this._color.className = 'm3-c-scoreboard--playerColor'
      this._rootElement.appendChild(this._color)

      this._name = document.createElement('div')
      this._name.className = 'm3-c-scoreboard--playerName'
      this._rootElement.appendChild(this._name)

      this._score = document.createElement('div')
      this._score.className = 'm3-c-scoreboard--playerScore'
      this._rootElement.appendChild(this._score)

      const model = this.getModel()

      if (model) {
        model.on('change', _onModelChange.bind(this))
      }

      this.update()

      return this
    }

    function update() {
      const model = this.getModel()

      this._color.style.backgroundColor = model.getColor()
      this._name.innerHTML = model.getName()
      this._score.innerHTML = model.score

      return this
    }

    function _onModelChange() {
      this.update()
    }

    return {
      getModel,
      setup,
      update,
    }
  })()
)
