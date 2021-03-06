import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux' // applyMiddleware 开启异步 compose组合函数
import { counter, addGun, removeGun, addGunAsync} from './index.redux'
import thunk  from 'redux-thunk'

// 第二参数是开启中间件
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension(): f => f // 在这里开启redux调试  // 是否存在 不存在为空
)) // 第一步 新建一个store 并把值传递给组件
function render() {
    ReactDom.render(<App store= {store} addGunAsync={addGunAsync} addGun = {addGun} removeGun = {removeGun}/>,document.getElementById('root'))   
}
render()
// 状态修改后需要在重新 在渲染一下 订阅一下 如果redux 有任何变化会重新执行
// 第二步 监听 如果有变化会重新渲染
store.subscribe(render)