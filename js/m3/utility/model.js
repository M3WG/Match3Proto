'use strict'

m3.utility.model = {}

m3.utility.model.factory = (prototype, mixin = {}) => ({
  create: function (...args) {
    return Object.create(this.prototype).create(...args)
  },
  extendDefaults: function (mixin = {}) {
    this.prototype.defaults = {...this.prototype.defaults, ...mixin}
    return this
  },
  extendPrototype: function (mixin = {}) {
    Object.keys(mixin).forEach((key) => this.prototype[key] = mixin[key])
    return this
  },
  extendValidators: function (mixin = {}) {
    this.prototype.validators = {...this.prototype.validators, ...mixin}
    return this
  },
  is: function (x) {
    return this.prototype.isPrototypeOf(x)
  },
  prototype,
  ...mixin,
})

m3.utility.model.invent = (definition = {}, prototype) => {
  prototype = m3.utility.model.is(prototype) ? prototype : m3.model.base.prototype

  return Object.setPrototypeOf(
    {
      ...definition,
      defaults: {...prototype.defaults, ...definition.defaults},
      validators: {...prototype.validators, ...definition.validators},
    },
    prototype
  )
}

m3.utility.model.inventFactory = (definition, mixin = {}, prototype) => m3.utility.model.factory(m3.utility.model.invent(definition, prototype), mixin)
m3.utility.model.inventSingletonFactory = (definition, mixin = {}, prototype) => m3.utility.model.singletonFactory(m3.utility.model.invent(definition, prototype), mixin)

m3.utility.model.is = (x) => m3.model.base.prototype.isPrototypeOf(x)

m3.utility.model.singletonFactory = (prototype, mixin = {}) => m3.utility.model.factory(prototype, {
  data: {},
  get: function (id) {
    if (this.is(id)) {
      return id
    }

    if (this.store.has(id)) {
      return this.store.get(id)
    }

    const data = this.data[id] || {}
    data.id = id

    const instance = this.create(data)
    this.store.set(id, instance)
    return instance
  },
  getSome: function(ids) {
    return ids.map((id) => this.get(id))
  },
  getAll: function() {
    return Object.keys(this.data).map((id) => this.get(id))
  },
  store: new Map(),
  ...mixin,
})
