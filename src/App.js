import React from 'react'
// import { addGUN } from './index.redux'  不建议这样使用 避免强耦合性可以在父级传如

class App extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // 第三步 获取相对应的值和函数或者action
        const store = this.props.store
        const num = store.getState()
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsync = this.props.addGunAsync
      return (
          <div>
            <h1>现在有机枪{num}吧</h1>
            {/*第四步 执行action */}
            <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
            <button onClick={()=>store.dispatch(removeGun())}>回收武器</button>
            <button onClick={()=>store.dispatch(addGunAsync())}>拖两天再给</button>
          </div>
      )
    }
}
export default App