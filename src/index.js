'use strict'
import { createNamespacedHelpers } from 'vuex'
import mod from './utils/mod'
import { categorymodule } from './category'
import { productmodule } from './product'

export const product = productmodule
export const category = categorymodule

/**
 * create new mixin vuex module based
 * @function
 * @param {string} moduleName vuex module name
 */
export const mixin = (moduleName) => {
  const { mapActions, mapGetters } = createNamespacedHelpers(moduleName)
  const name = moduleName.toLowerCase()

  return {
    computed: {
      ...mapGetters(mod.getters(name))
    },
    methods: {
      ...mapActions(mod.actions(name))
    }
  }
}
