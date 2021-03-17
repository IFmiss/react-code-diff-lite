# react-code-diff-lite

一个基于 diff2html 的 React diff 组件

# demo https://www.daiwei.site/diff

### 使用方法

安装

```code
npm install react-code-diff-lite
```

引入

```tsx
import React from "react";
import CodeDiff from "react-code-diff-lite";

const newStr = `{
  a: 1,
  b: 2,
  c: () => {
    return this.a
  }
}`;

const oldStr = `{
  a: 1,
  b: 2,
  getValue: () => {
    return this.b
  }
}`;

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <p>修改</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr={newStr} context={10} />
      </div>

      <p>删除</p>
      <div>
        <CodeDiff oldStr={oldStr} newStr="" context={10} />
      </div>

      <p>添加</p>
      <div>
        <CodeDiff oldStr="" newStr={newStr} context={10} />
      </div>

      <p>新增</p>
      <div>
        <CodeDiff
          oldStr=""
          newStr={newStr}
          context={10}
          outputFormat="side-by-side"
        />
      </div>

      <p>编辑</p>
      <div>
        <CodeDiff
          oldStr={oldStr}
          newStr={newStr}
          context={10}
          outputFormat="line-by-line"
        />
      </div>

      <p>删除</p>
      <div>
        <CodeDiff
          oldStr={oldStr}
          newStr=""
          context={10}
          outputFormat="side-by-side"
        />
      </div>
    </React.Fragment>
  );
};
```

### 组件属性如下：

- `oldStr`: 旧代码
- `newStr`: 新代码
- `context`: 代码对比范围，默认为 0 也就是只显示改动的地方，如果为 10 就是除改动地方之外多显示上下 10 行代码
- `outputFormat`: 展示方式行内对比和两个窗口对比 'line-by-line' | 'side-by-side'

### 实现效果

#### line-by-line 行内对比

![](https://raw.githubusercontent.com/IFmiss/react-code-diff/master/src/inline.png)

#### 两个窗口对比

side-by-side
![](https://raw.githubusercontent.com/IFmiss/react-code-diff/master/src/outline.png)
