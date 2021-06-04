import React from 'react'
import CodeDiff from './lib/index'
import './index.less';

const newStr = `{
  a: 1,
  b: 2,
  c: () => {
    return this.a
  }
}`

const oldStr = `{
  a: 1,
  b: 2,
  getValue: () => {
    return this.b
  }
}`

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <p>修改</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr={newStr} context={10}/>
      </div>

      <p>删除</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr='' context={10}/>
      </div>

      <p>添加</p>
      <div>
        <CodeDiff oldStr='' newStr={newStr} context={10}/>
      </div>

      <p>新增</p>
      <div>
        <CodeDiff oldStr='' newStr={newStr} context={10} outputFormat="side-by-side"/>
      </div>

      <p>编辑</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr={newStr} context={10} outputFormat="line-by-line"/>
      </div>

      <p>删除</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr='' context={10} outputFormat="side-by-side"/>
      </div>
    </React.Fragment>
  )
}

export default Main
