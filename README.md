# vite-react-template

### vite2 react模板

vite 2.x 使用react 构建的中后端项目<br>

react   > 17.x  <br> 
antd    > 4.x<br>
redux   > 4.x<br>
react-redux  > 7.0<br>
@reduxjs/toolkit  > 1.6x<br>
react-router  > 6.x  beta<br>
react-router-dom  > 6.x beta<br>
moment      时区：全局设置为亚州/上海时区


#### 全局变量

util    工具函数库<br>
> src/util/index.ts<br>

http    fetch的简单封装<br>
> src/util/http.ts

```
    http(url: string, data, options)     default method: post
    http.get(url: string, data, options)
    http.post(url: string, data, options)

    data : {}      fetch body data;  
    options: {}    from fetch options;  
```


#### 命令

npm run dev<br>
npm run serve<br>
npm run build      <br>

npm run build-zip   > 编译并压缩打包文件到桌面<br>
npm run zip  >  压缩dist目录 到桌面<br>