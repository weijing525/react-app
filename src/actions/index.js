/*
 * @Author: weijing
 * @since: 2019-12-27 15:35:39
 * @Description: 
 * @文件相对于项目的路径: /my-app/src/actions/home.js
 * @lastTime     : 2019-12-27 17:28:16
 * @LastAuthor   : weijing
 */
export const ACTION_TEST = 'ACTION_TEST'
export function actionTest(message) {
    return {
        type: ACTION_TEST,
        message,
    }
}