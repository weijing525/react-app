/*
 * @Author: weijing
 * @since: 2019-12-24 18:24:48
 * @Description: 集成所有reducers
 * @文件相对于项目的路径: /my-app/src/reducers/index.js
 * @lastTime     : 2019-12-27 15:38:52
 * @LastAuthor   : weijing
 */
import { combineReducers } from 'redux'
import home from './home'

export default combineReducers({
    home,
})