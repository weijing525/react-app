/*
 * @Author: weijing
 * @since: 2019-12-27 15:59:19
 * @Description: 
 * @文件相对于项目的路径: /my-app/src/store/index.js
 * @lastTime     : 2019-12-27 17:57:18
 * @LastAuthor   : weijing
 */
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { actionTest } from '../actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
)

store.dispatch(actionTest('reactjs'))