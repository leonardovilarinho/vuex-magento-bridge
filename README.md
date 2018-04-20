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
import { mixin } from 'magento-store'

export default {
  mixins: [
    mixin('Category')
  ],
  mounted () {
    this.searchAll() // get and store in state 'all'
    this.searchAll('SET_LIST') // get and store in state 'list'
    this.searchAll('SET_ALL', 1, 10) // get page 1 with 10 products and store in state 'all'
    this.searchAll('SET_ALL', 1, 10, true) // get page 1 with 10 products, suffle and store in state 'all'
  }
}
```

## Globals actions

- **searchAll**: `function (mutation = 'SET_ALL', page = 0, pageSize = 0, shuffle = false)`

## Globals mutations

- **SET_ALL**: `function (list)`


## Globals getters

- **getAll**: `function ()`

## Globals modules state

- **all**: `Array []`
