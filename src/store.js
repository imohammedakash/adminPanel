import { configureStore } from '@reduxjs/toolkit'
import {adminReducer} from './reducers/admin'
import { BannerReducer } from './reducers/banner'
import { CategoryReducer } from './reducers/category'
import { CouponReducer } from './reducers/coupon'
import { DeliveryProfileReducer } from './reducers/delivertProfile'
import { OrderReducer } from './reducers/orders'
import { ProductReducer } from './reducers/products'
import { SupportReducer } from './reducers/support'
import {userReducer} from './reducers/user'
import { vendorReducer } from './reducers/vendors'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import { subCategoryReducer } from './reducers/subCategory'
const persistConfig = {
    key: "root",
    vision: 1,
    storage
}
const reducer = combineReducers({
    admin: adminReducer,
    user: userReducer,
    category: CategoryReducer,
    vendor: vendorReducer,
    order: OrderReducer,
    banner: BannerReducer,
    coupon: CouponReducer,
    product: ProductReducer,
    support: SupportReducer,
    deliveryProfile: DeliveryProfileReducer,
    subCategory : subCategoryReducer
})
const persistedReducer = persistReducer(persistConfig,reducer)
export const store = configureStore({
    reducer: persistedReducer,
})