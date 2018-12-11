import React from 'react';
import {Button, List} from 'antd-mobile'; // 引入组建

class App extends React.Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <One name="张大苗"></One>
        <Qi name="孙德胜"></Qi>
      </div>
    )
  }
}

function Qi(props) {
  return <h2>骑兵连连长：{props.name}, 冲啊</h2>
}

class One extends React.Component {
  constructor(props) {
    // 状态初始化
    super(props) // 继承？
    this.state = { // 初始化值  这个值不能直接修改
      solders: ['胡子', '主子', '王歌声']
    }
    // 第一种解决方案
    // this.addSolder = this.addSolder.bind(this)
  }
  // 第三种 addSolder()=>{}
  addSolder= () =>{
    console.log('新兵入伍')
    this.setState({
      // 返回的是新的对象 不能直接修改
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }
  render() {
    return (
      <div>
        <h4>一营营长：{this.props.name}</h4>
        {/* 第二种解决方案 ()=> */}
        <Button type='primary' onClick={this.addSolder}>新兵入伍</Button>
        {/* <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul> */}
        <List renderHeader={()=>'士兵列表'}>
          {this.state.solders.map(v=>{
            return( <List.Item key={v}>
              {v}
            </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}
export default App