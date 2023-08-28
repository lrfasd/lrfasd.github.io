# ampedT
>*InnerTool for [Getamped](http://bfo.sdo.com/)*
>
>[更新历史](WHATSNEW.md)
## 功能介绍
>支持从Windows转储文件dmp中提取或从压缩文档zip、jar中读取class文件或以下文件并进行保存、转换格式、以html预览数据，支持批量操作：
>
>* 　tex；
>* 　sr；
>* 　sc；
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
>* 　accs；
>* 　myskin；
>* 　myaccs；
>* 　replay；
>* 　mymap；
>* 　mysoa；
>* 　agi。
>
## 插件介绍
>　支持以下插件的手动加载☆，部分支持自动加载★：
>
>★[**tab插件**](https://www.bilibili.com/read/cv17416453)（[[F]内部公开](http://t.fenchuan8.com/wurus1hr)）
>
>　基础型插件，支持tab文件的解包、打包。
>
>★[**kar插件**](https://www.bilibili.com/read/cv17416453)（[[F]内部公开](http://t.fenchuan8.com/T1U2K3Sf)）
>
>　基础型插件，支持kar、dat、repkar、skin、hskin、hhskin、omd、ssoa文件的解包、打包。
>
>☆[**kar_guess插件**](https://www.bilibili.com/read/cv20602933)（[[F]内部公开](http://t.fenchuan8.com/xWyzV3XN)）
>
>　辅助型插件，支持在解析kar系列文件密码失败后猜测密码（须先加载kar插件）。
>
>★[**myskin_check插件**](https://www.bilibili.com/read/cv20636645)（[[F]内部公开](http://t.fenchuan8.com/3sd1B2pf)）
>
>　辅助型插件，支持在识别myskin文件数字验证错误后重新验证。
>
>★[**myskinProtector插件**](https://www.bilibili.com/read/cv17865646)（[[F]内部公开](http://t.fenchuan8.com/qLqq12RF)）
>
>　转换型插件，支持批量转换myskin文件为skin、hskin、hhskin文件（须先加载kar插件）。
>
>★[**skinUnprotector插件**](https://www.bilibili.com/read/cv20051529)（[[F]内部公开](http://t.fenchuan8.com/vdByG182)）
>
>　转换型插件，支持批量转换skin、hskin、hhskin文件为myskin文件或html预览（须先加载kar插件）。
>
>★[**myskinUsurper插件**](https://www.bilibili.com/read/cv20889718)（[[F]内部公开](http://t.fenchuan8.com/GPUJY1xr)）
>
>　修改型插件，支持批量修改myskin文件的userID值。
>
>★[**skinUsurper插件**](https://www.bilibili.com/read/cv17865446)（[[F]内部公开](http://t.fenchuan8.com/GPUJY1xr)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的userID值（须先加载kar插件、myskinUsurper插件）。
>
>★[**myskinTranslator插件**](https://www.bilibili.com/read/cv20890895)（[[F]内部公开](http://t.fenchuan8.com/Jfqwd2KT)）
>
>　修改型插件，支持批量修改myskin文件为其他服务器支持的数据（须先加载kar插件）。
>
>★[**skinTranslator插件**](https://www.bilibili.com/read/cv18082144)（[[F]内部公开](http://t.fenchuan8.com/Jfqwd2KT)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件为其他服务器支持的数据（须先加载kar插件、myskinTranslator）。
>
>★[**myskinRedrawer插件**](https://www.bilibili.com/read/cv20998907)（[[F]内部公开](http://t.fenchuan8.com/9jBfALa)）
>
>　修改型插件，支持批量修改myskin文件的头饰、脸部、身体纹理图片。
>
>★[**skinRedrawer插件**](https://www.bilibili.com/read/cv20998994)（[[F]内部公开](http://t.fenchuan8.com/9jBfALa)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的头饰、脸部、身体纹理图片（须先加载kar插件、myskinRedrawer插件）。
>
>★[**replayProtector插件**](https://www.bilibili.com/read/cv26056175)（[[F]内部公开](http://t.fenchuan8.com/xy4fg4wc)）
>
>　转换型插件，支持批量转换replay文件为repkar文件（须先加载kar插件）。
>
>★[**repkarUnprotector插件**](https://www.bilibili.com/read/cv26056595)（[[F]内部公开](http://t.fenchuan8.com/WsLup1rW)）
>
>　转换型插件，支持批量转换repkar文件为replay文件或html预览（须先加载kar插件）。
>
>★[**replayTranslator插件**](https://www.bilibili.com/read/cv26049339)（[[F]内部公开](http://t.fenchuan8.com/zTcaY1Va)）
>
>　转换型插件，支持转换replay文件为其他服务器支持的数据（须先加载myskinTranslator插件）。
>
>★[**repkarTranslator插件**](https://www.bilibili.com/read/cv26049509)（[[F]内部公开](http://t.fenchuan8.com/zTcaY1Va)）
>
>　转换型插件，支持转换repkar文件为其他服务器支持的数据（须先加载kar插件、replayTranslator插件、myskinTranslator插件）。
>
>☆[**replayExtractor插件**](https://www.bilibili.com/read/cv)（[[F]内部公开](http://t.fenchuan8.com/lexcp1XG)）
>
>　导出型插件，支持从replay文件提取myassc、tex、myskin等资源。
>
>☆[**repkarExtractor插件**](https://www.bilibili.com/read/cv)（[[F]内部公开](http://t.fenchuan8.com/lexcp1XG)）
>
>　导出型插件，支持从repkar文件提取myassc、tex、myskin等资源（须先加载kar插件、replayExtractor插件）。
>
>★[**mymapProtector插件**](https://www.bilibili.com/read/cv20898754)（[[F]内部公开](http://t.fenchuan8.com/25l3w3l0)）
>
>　转换型插件，支持批量转换mymap文件为omd文件（须先加载kar插件）。
>
>★[**omdUnprotector插件**](https://www.bilibili.com/read/cv20891585)（[[F]内部公开](http://t.fenchuan8.com/i2reQpJ)）
>
>　转换型插件，支持批量转换omd文件为mymap文件或html预览（须先加载kar插件）。
>
>★[**omdUsurper插件**](https://www.bilibili.com/read/cv20998480)（[[F]内部公开](http://t.fenchuan8.com/VdW8F2GS)）
>
>　修改型插件，支持批量修改omd文件的userID值（须先加载kar插件）。
>
>★[**mysoaProtector插件**](https://www.bilibili.com/read/cv20898839)（[[F]内部公开](http://t.fenchuan8.com/t3cPjrw)）
>
>　转换型插件，支持批量转换mysoa文件为ssoa文件（须先加载kar插件）。
>
>★[**ssoaUnprotector插件**](https://www.bilibili.com/read/cv20891588)（[[F]内部公开](http://t.fenchuan8.com/meyTtul)）
>
>　转换型插件，支持批量转换ssoa文件为mysoa文件或html预览（须先加载kar插件）。
>
>★[**ssoaUsurper插件**](https://www.bilibili.com/read/cv20998587)（[[F]内部公开](http://t.fenchuan8.com/N46Vj2sn)）
>
>　修改型插件，支持批量修改ssoa文件的userID值（须先加载kar插件）。
>
>★[**settingPatcher插件**](https://www.bilibili.com/read/cv17799215)（[[F]内部公开](http://t.fenchuan8.com/duoPa3Mn)）
>
>　修改型插件，支持批量修改、添加setting.kar的键值数据（须先加载kar插件）。
>
>☆[**settingExporter插件**](https://www.bilibili.com/read/cv17863811)（[[F]内部公开](http://t.fenchuan8.com/YViAW3Oz)）
>
>　导出型插件，支持从setting.kar导出unicode文件（须先加载kar插件）。
>
>☆[**settingAnalyzer_island插件**](https://www.bilibili.com/read/cv26048912)（[[F]内部公开](http://t.fenchuan8.com/g8vBS11r)）
>
>　导出型插件，支持从setting.kar解析无人岛不同钓竿工具单次用时、产出物品概率、兑换奖励概率并计算每小时平均兑换奖励列表及数量（须先加载kar插件）。
>
>☆[**settingAnalyzer_mission插件**](https://www.bilibili.com/read/cv19552864)（[[F]内部公开](http://t.fenchuan8.com/M3ktH3Cq)）
>
>　导出型插件，支持从setting.kar解析不同探索任务携带不同装备道具增加的成功率并进行排序（须先加载kar插件）。
>
>☆[**resourceAnalyzer_oaResource插件**](https://www.bilibili.com/read/cv19552864)（[[F]内部公开](http://t.fenchuan8.com/2s1Nb4p0)）
>
>　导出型插件，支持从resource.kar内含的oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源分析汇总字符串资源列表（须先加载kar插件）。
>
>☆[**resourceAnalyzer_scFunction插件**](https://www.bilibili.com/read/cv21432832)（[[F]内部公开](http://t.fenchuan8.com/Dt6QT2PA)）
>
>　导出型插件，支持从resource.kar内含的sc文件和oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源中的sc数据分析汇总脚本方法列表（须先加载kar插件）。
>

