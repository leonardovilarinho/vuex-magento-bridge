'use strict'
import { createNamespacedHelpers } from 'vuex'
import mod from './utils/mod'
import _category from './category'

export const category = _category

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
