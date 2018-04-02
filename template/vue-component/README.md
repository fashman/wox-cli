#### 安装

```javascript {.line-numbers}

  // yarn 
  $ yarn add component-name

  // npm 
  $ npm i component-name

  // 本地测试
  $ npm start

```

### 注意事项

```javascript

  // 引入
  import { name } from 'component-name';

  // { name } 组件名取决于 lib/index.js 内的命名;
  ...
  export default vueCom;
  export { TestComponent, install };
  // 默认组件名为 TestComponent，发布前需修改为自己的组件名；

```