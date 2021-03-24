# hiker-monitor
性能监控平台
工具选择：
1. 基础包构建工具：rollup
优势：

对比方案：
webpack
parcel
snowpack
esbuild
swc
vite

最终选择工具microbundle(脚手架)+parcel/snowpack(使用snowpack替换)
优势：可以很方便的将文件生成对应的模块，不需要任何的配置生成对应的文件（amd.js cmd.js common.js esmodule node min.js）

2. 准备上线： 一部分是源代码 github
            二部分推送到npm上（dist）

3. api文档+d.ts
使用microbundle生成的d.ts太过于分散，所以使用api-extractor把文档merge起来
api-extractor生成文档，需要配置对应的文件，api-extractor.json
tsdocs 生产文档，这里使用typedoc文档替换

4. 错误的捕获，
try...catch 里面的错误无法被捕获到


1. 项目脚手架工具，和一个demo活动页面
2. 前端监控平台上线
3. 使用TS+react hooks完成一个项目的开发



1. 监测站点性能
2. 监测错误回溯
3. 还原sourceMap
    webpack需要构建两次，第一次有sourceMap，第二次没有sourceMap


1.开发一个SDK 基础包构建包（web项目 核心的构建工具 只能编译TS而且不太多的配置）
webpack parcel snowpack esbuild、swc vite (rollup --> 核心做什么)
2.amd.js cmd.js common.js esmodule node min.js
3.选择 microbundle + parcel/snowpack
4.准备上线 代码分割成2部分 1部分代码是源文件 GitHub issues
        第2部分直接推到npm上（dist目录拷贝 package.json ）【npm login/npm publish】
5.api文档 + d.ts

1.microbundle 生成我们需要的模块化代码
2.parcel/snowpack 测试开发环境
3.api-extractor 帮我合并生成分分散的d.ts->index.d.ts ->dist目录去
4.typedoc 遵循Tsdoc规范生成代码文档 gitbook
5.性能监控的基本api 错误监控api 还原souremap 回溯用户操作
6.压缩用数据 ->远程 ?? 

 server端 json -> 洗数据的过程
 1*1 gif 小的 a.gif?data=xxx.666.777
 fetch



  1.现在webrtc理论 
2.视频 一帧一帧的 html2canvas.
3.[xpath]
html/div[3]/ul[2]/a[1]
无头浏览器 -》 还原xpath -》png -》合成
代理掉用户的全部 操作
鼠标没有（假的 小圆点）

4.
4-1 html 转换成虚拟dom(唯一id)
4-2 MutationObserver dom丝丝变化 
4-3 dom那些被动了虚拟dom记录下来
4-4 动了dom还原成真实dom 
4-5 表单的事件
window.addEventListener('blur', this.onFormBlur, true)