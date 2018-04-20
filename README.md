# Magento Store Vuex

Enpoints of Magento bridge for Vuex

## Usage

```javascript
import { category } from 'magento-store'

const { state, getters, actions, mutations } = category(URL, KEY, TIMEOUT)

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

// ...
// in component
import createNamespacedHelpers from 'vuex'
const { mapActions } = createdNamespacedHelpers('Category')

export default {
  mounted () {
    this.searchAll()
  },
  methods: {
    ...mapActions(['searchAll'])
  }
}
```