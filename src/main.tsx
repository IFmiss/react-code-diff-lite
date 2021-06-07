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
    <div className={'code-diff'}>
      <div className={'home-page'}>
        <h3>基于 <a href={"https://diff2html.xyz/index.html"}><span>diff</span><span>2</span><span>html</span></a> 的React diff 组件</h3>
        <p>支持 diff2html 全部api | 支持系统夜间模式🌛</p>
        <p><a href="https://github.com/IFmiss/react-code-diff-lite">github</a></p>
      </div>

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
    </div>
  )
}

export default Main
