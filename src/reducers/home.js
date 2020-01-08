/*
 * @Author: weijing
 * @since: 2019-12-24 18:29:25
 * @Description: 
 * @文件相对于项目的路径: /my-app/src/reducers/home.js
 * @lastTime     : 2019-12-27 17:51:53
 * @LastAuthor   : weijing
 */
import { combineReducers } from 'redux'
import {
    ACTION_TEST
} from '../actions'

function actiontest(state = 'test', action){
    switch (action.type) {
        case ACTION_TEST:
            return action.message
        default:
            return state
    }
}

const rootRudecers = combineReducers({
    actiontest,
})

export default rootRudecers