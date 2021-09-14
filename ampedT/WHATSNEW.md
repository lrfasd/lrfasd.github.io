# ampedT
>*InnerTool for [Getamped](http://bfo.sdo.com/)*
>
>[功能介绍](README.md)
## 更新历史
>　【[ampedT_20210914.html](ampedT_20210914.html)】
>* 增加信息标签，文件读取、失效、不支持时予以信息显示；
>* 优化最初加载时的显示逻辑；
>* 切换显示预览开关实时生效；
>* 显示预览开关可通过长按标题实现；
>* 优化url参数帮助、显示、检查文本的显示方式；
>* 修改部分url参数的语法；
>* 增加部分url参数；
>* 支持以url参数的语法保存文件流读入、选项操作的状态，将文件放在同目录下生效，通过长按文件选择器以显示或隐藏该功能按钮；
>* 为保证性能，保存文件流超过50MB时不予记录；
>* 从dmp、cem提取资源时将不同类型文件存放对应文件夹，ser、tex、class文件的文件名不增加编号前缀。
>
---
>　【[ampedT_20210801.html](ampedT_20210801.html)】
>* 优化从dmp、cem提取文件的去重性能；
>* 直接读取资源文件识别为以包读取；
>* 修正写出bmp像素数据每行没有补位的问题；
>* 保存bmp时如果图像不包含透明度则以24位写出。
>
---
>　【[ampedT_20210720.html](ampedT_20210720.html)】
>* 优化写出wav、bmp、zip文件的性能；
>* 读取dmp功能增加支持cem格式。
>
---
>　【[ampedT_20201223.html](ampedT_20201223.html)】
>* 提升从包读取文件进行筛选的性能；
>* 增加支持读取tex的模式；
>* 对未定格式的文件进行智能识别；
>* 支持自动加载外部插件；
>* 支持从dmp提取class文件；
>* 支持读取以下格式呈现数据预览并保存为html：
>* 　prm；
>* 　srt；
>* 　shp；
>* 　ptc；
>* 　pt2；
>* 　mop；
>* 　mpv；
>* 　atk；
>* 　tech；
>* 　itech；
>* 　objinfo；
>* 　npcinfo；
>* 　npc；
>* 　oa；
>* 　aoa；
>* 　ioa；
>* 　poa；
>* 　md；
>* 　fp；
>* 　face；
>* 　body；
>* 　skn；
>* 　accs；
>* 　rep。
>
---
>　【[ampedT_20200922.html](ampedT_20200922.html)】
>* 修复从dmp提取tex时部分文件原始文件名读取失败的问题；
>* 支持读取sr并保存为wav；
>* 支持读取sc并保存为txt；
>* 从包读取文件支持筛选格式进行数据转换；
>* 增加对ANSI、UCS-2、UTF-16文字编码的支持。
>
---
>　【[ampedT_20200917.html](ampedT_20200917.html)】
>* 从dmp提取tex时文件名中增加原始文件名后缀；
>* 支持读取tex并保存为bmp和png，均包含透明度。
>
---
>　【[ampedT_20200907.html](ampedT_20200907.html)】
>* 初始版本
>
