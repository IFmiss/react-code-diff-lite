# react-code-diff

一个基于 diff2html 的diff组件

### 使用方法
```tsx
import React from 'react'
import CodeDiff, {
  ICodeOutputFormatEnum
} from 'react-hook-code-diff'

const newStr = `
{
  a: 1,
  b: 2,
  c: () => {
    return this.a
  }
}
`

const oldStr = `
{
  a: 1,
  b: 2,
  getValue: () => {
    return this.b
  }
}
`


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
        <CodeDiff oldStr='' newStr={newStr} context={10} outputFormat={ICodeOutputFormatEnum.OUTSIDE}/>
      </div>

      <p>编辑</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr={newStr} context={10} outputFormat={ICodeOutputFormatEnum.OUTSIDE}/>
      </div>

      <p>删除</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr='' context={10} outputFormat={ICodeOutputFormatEnum.OUTSIDE}/>
      </div>

    </React.Fragment>
  )
}
```


代码来自于 [vue-react-diff](https://github.com/guhuaijin/react-code-diff)

引入他的npm包并不能使用，在他的基础上用hooks实现

### 实现效果
#### line-by-line 行内对比
![](https://raw.githubusercontent.com/IFmiss/react-code-diff/master/src/inline.png)

#### 两个窗口对比
side-by-side
![](https://raw.githubusercontent.com/IFmiss/react-code-diff/master/src/outline.png)
