# Magento Store Vuex

Enpoints of Magento bridge for Vuex

## Usage

```javascript
import { category } from '@onestic/magento-store'

const Category = category(URL, KEY, TIMEOUT)

export default Category

// ...
// in component
import { mixin } from '@onestic/magento-store'

export default {
  mixins: [
    mixin('Category')
  ],
  mounted () {
    this.searchAll() // get and store in state 'all'
    this.searchAll({ mutation: 'SET_LIST' }) // get and store in state 'list'
    this.searchAll({ mutation: 'SET_ALL', page: 1, pagesize: 10}) // get page 1 with 10 products and store in state 'all'
    this.searchAll({ mutation: 'SET_ALL', page: 1, pagesize: 10, shuf: true}) // get page 1 with 10 products, suffle and store in state 'all'
  }
}
```

## Globals actions

- **searchAll**: `function ({mutation = 'SET_ALL', page = 0, pagesize = 0, shuffle = false})`

## Globals mutations

- **SET_ALL**: `function (list)`


## Globals getters

- **getAll**: `function ()`

## Globals modules state

- **all**: `Array []`
