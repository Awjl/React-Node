import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { counter, addGun, removeGun } from './index.redux'

const store = createStore(counter) // 第一步 新建一个store 并把值传递给组件
function render() {
    ReactDom.render(<App store= {store} addGun = {addGun} removeGun = {removeGun}/>,document.getElementById('root'))   
}
render()
// 状态修改后需要在重新 在渲染一下 订阅一下 如果redux 有任何变化会重新执行
// 第二步 监听 如果有变化会重新渲染
store.subscribe(render)