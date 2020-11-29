import { createStore, applyMiddleware, compose } from 'redux'
import { CartReducer } from './CartReducer'
import { ShopReducer } from './ShopReducer'
import { CommonReducer } from './CommonReducer'
import { asyncActions } from './AsyncMiddleware'

const middlewareEnhancer = applyMiddleware(asyncActions)
const composedEnhancers = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer), undefined, composedEnhancers)
