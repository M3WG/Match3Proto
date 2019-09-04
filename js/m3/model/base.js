'use strict'

/**
 * Namespace for the base model that all models extend.
 * There is no factory here because it's intended to be abstract.
 *
 * @namespace m3.model.base
 */
m3.model.base = {}

/**
 * Prototype for the base model.
 *
 * The base model provides a simple wrapper for a flat internal data structure.
 * Users are encouraged to extend it with custom members with getters and setters.
 *
 * @borrows utility.pubsub.prototype.emit
 * @borrows utility.pubsub.prototype.off
 * @borrows utility.pubsub.prototype.on
 */
m3.model.base.prototype = {
  /**
   * Called when instantiating a new instance, typically automatically via a factory.
   * Models must not override this method.
   *
   * @final
   * @see {@link m3.model.base.setup}
   */
  create: function (data, ...args) {
    this.data = {...data}

    utility.pubsub.decorate(this)
    this.setup(...args)

    return this
  },
  /**
   * Prepares the model for garbage collection.
   * Models must not override this method.
   *
   * @final
   * @see {@link m3.model.base.teardown}
   */
  destroy: function () {
    this.teardown()
    this.pubsub.destroy()

    this.data = {}

    return this
  },
  /**
   * Returns whether `key` exists within the internal data structure.
   */
  has: function(key) {
    return typeof this.data[key] != 'undefined'
  },
  /**
   * Returns the value for `key` within the internal data structure.
   */
  get: function(key) {
    return this.data[key]
  },
  /**
   * Returns the identifier.
   * Shorthand for `this.get('id')`.
   */
  getId: function () {
    return this.data.id
  },
  /**
   * Returns whether `key` is equal to `value` within the internal data structure.
   */
  is: function (key, value, strict) {
    if (strict) {
      return this.data[key] === value
    }

    return this.data[key] == value
  },
  /**
   * Sets `key` to `value` within the internal data structure.
   */
  set: function (key, value) {
    this.data[key] = value
    this.emit('change')
    return this
  },
  /**
   * Called via {@link app.model.base.create}.
   * Models can override this method to initialize custom members.
   *
   * @param {...*} - Additional arguments from {@link app.model.base.create}
   */
  setup: function () {
    return this
  },
  /**
   * Called via {@link m3.model.base.destroy}.
   * Models should override this method to free any refrences for garbage collection.
   */
  teardown: function () {
    return this
  }
}
