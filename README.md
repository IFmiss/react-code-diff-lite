# react-code-diff

一个基于 diff2html 的diff组件

### 使用方法
```tsx
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

<CodeDiff oldStr={oldStr}
          newStr={newStr}
          context={10}/>


<CodeDiff oldStr={oldStr}
          newStr='' 
          context={10}/>

<CodeDiff oldStr={oldStr}
          newStr={newStr}
          context={10}
          outputFormat={ICodeOutputFormatEnum.OUTSIDE}/>
```


代码来自于 [vue-react-diff](https://github.com/guhuaijin/react-code-diff)

引入他的npm包并不能使用，在他的基础上用hooks实现

### 实现效果
#### line-by-line 行内对比
![](https://github.com/react-code-diff/blob/master/src/inline.png)

#### 两个窗口对比
side-by-side
![](https://github.com/react-code-diff/blob/master/src/outline.png)
