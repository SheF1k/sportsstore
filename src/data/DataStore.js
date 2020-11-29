import { createStore } from 'redux'
import { CartReducer } from './CartReducer'
import { ShopReducer } from './ShopReducer'
import { CommonReducer } from './CommonReducer'

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
