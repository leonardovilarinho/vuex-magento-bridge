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

export const shuffle = (arr) =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
