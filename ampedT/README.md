# ampedT
>*InnerTool for [Getamped](http://bfo.sdo.com/)*
>
>[更新历史](WHATSNEW.md)
## 功能介绍
>[**myskin数据详情html**](myskin_details.html)
>
>[**myskin模型3D预览html**](myskin_model.html)
>
>[**shp数据详情html**](stalker.shp_details.html)
>
>[**shp模型3D预览html**](stalker.shp_model.html)
>
>[**oa数据详情html**](mechasuit.oa_details.html)
>
>[**oa模型3D预览html**](mechasuit.oa_model.html)
>
>支持从Windows转储文件dmp中提取或从压缩文档zip、jar中读取以下文件并进行保存、转换格式、以html预览数据，支持批量操作：
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
>　支持以下插件的手动加载☆，部分支持自动加载★（需将本体html和插件js放于同一文件夹）：
>
>★[**tab插件**](https://www.bilibili.com/read/cv17416453)（[[F]内部公开￥0](http://t.fenchuan8.com/wurus1hr)）
>
>　基础型插件，支持tab文件的解包、打包。
>
>★[**kar插件**](https://www.bilibili.com/read/cv17416453)（[[F]内部公开￥198](http://t.fenchuan8.com/T1U2K3Sf)）
>
>　基础型插件，支持kar、dat、repkar、skin、hskin、hhskin、omd、ssoa文件的解包、打包。
>
>☆[**ser_check插件**](https://www.bilibili.com/read/cv40249041)（[[F]内部公开￥2](http://t.fenchuan8.com/A_NIuyf24i)）
>
>　辅助型插件，支持在识别ser文件无效时自动排除。
>
>☆[**kar_guess插件**](https://www.bilibili.com/read/cv20602933)（[[F]内部公开￥30](http://t.fenchuan8.com/xWyzV3XN)）
>
>　辅助型插件，支持在解析kar系列文件密码失败后猜测密码（需先加载kar插件）。
>
>★[**myskin_check插件**](https://www.bilibili.com/read/cv20636645)（[[F]内部公开￥30](http://t.fenchuan8.com/3sd1B2pf)）
>
>　辅助型插件，支持在识别myskin文件数字验证错误后重新验证。
>
>★[**myskin_local插件**](https://www.bilibili.com/read/cv41023037)（[[F]内部公开￥68](http://t.fenchuan8.com/B_dmg0Q2DJ)）
>
>　辅助型插件，支持将myskin文件从服务器化修正为本地化。
>
>★[**skinReporter插件**](https://www.bilibili.com/read/cv41373804)（[[F]内部公开￥30](http://t.fenchuan8.com/B_NICVAdC)）
>
>　辅助型插件，支持将skin、hskin、hhskin文件以服务器验证标准生成未通过验证数据的分析报告（需先加载kar插件）。
>
>★[**myskinProtector插件**](https://www.bilibili.com/read/cv17865646)（[[F]内部公开￥2](http://t.fenchuan8.com/qLqq12RF)）
>
>　转换型插件，支持批量转换myskin文件为skin、hskin、hhskin文件（需先加载kar插件）。
>
>★[**skinUnprotector插件**](https://www.bilibili.com/read/cv20051529)（[[F]内部公开￥2](http://t.fenchuan8.com/vdByG182)）
>
>　转换型插件，支持批量转换skin、hskin、hhskin文件为myskin文件或html预览（需先加载kar插件）。
>
>★[**myskinUsurper插件**](https://www.bilibili.com/read/cv20889718)（[[F]内部公开￥12](http://t.fenchuan8.com/GPUJY1xr)）
>
>　修改型插件，支持批量修改myskin文件的userID值。
>
>★[**skinUsurper插件**](https://www.bilibili.com/read/cv17865446)（[[F]内部公开￥12同上](http://t.fenchuan8.com/GPUJY1xr)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的userID值（需先加载kar插件、myskinUsurper插件）。
>
>★[**myskinTranslator插件**](https://www.bilibili.com/read/cv20890895)（[[F]内部公开￥30](http://t.fenchuan8.com/Jfqwd2KT)）
>
>　修改型插件，支持批量修改myskin文件为其他服务器支持的数据（需先加载kar插件）。
>
>★[**skinTranslator插件**](https://www.bilibili.com/read/cv18082144)（[[F]内部公开￥30同上](http://t.fenchuan8.com/Jfqwd2KT)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件为其他服务器支持的数据（需先加载kar插件、myskinTranslator）。
>
>★[**myskinRedrawer插件**](https://www.bilibili.com/read/cv20998907)（[[F]内部公开￥68](http://t.fenchuan8.com/9jBfALa)）
>
>　修改型插件，支持批量修改myskin文件的头部、脸部、身体纹理图片。
>
>★[**skinRedrawer插件**](https://www.bilibili.com/read/cv20998994)（[[F]内部公开￥68同上](http://t.fenchuan8.com/9jBfALa)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的头部、脸部、身体纹理图片（需先加载kar插件、myskinRedrawer插件）。
>
>★[**myskinRestructurer插件**](https://www.bilibili.com/read/cv39677857)（[[F]内部公开￥98](http://t.fenchuan8.com/WsOr4cx)）
>
>　修改型插件，支持批量修改myskin文件的头部、身体节点。
>
>★[**skinRestructurer插件**](https://www.bilibili.com/read/cv39677918)（[[F]内部公开￥98同上](http://t.fenchuan8.com/WsOr4cx)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的头部、身体节点（需先加载kar插件、myskinRestructurer插件）。
>
>★[**myskinRewearer插件**](https://www.bilibili.com/read/cv39458607)（[[F]内部公开￥198](http://t.fenchuan8.com/ryX1VmG)）
>
>　修改型插件，支持批量修改myskin文件头部的纹理版本。
>
>★[**skinRewearer插件**](https://www.bilibili.com/read/cv39458730)（[[F]内部公开￥198同上](http://t.fenchuan8.com/ryX1VmG)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件头部的纹理版本（需先加载kar插件、myskinRewearer插件）。
>
>★[**myskinFixer插件**](https://www.bilibili.com/read/cv39628869)（[[F]内部公开￥168](http://t.fenchuan8.com/VpPL5RH)）
>
>　修改型插件，支持批量修改myskin文件头部是否prm（需先加载tab插件）。
>
>★[**skinFixer插件**](https://www.bilibili.com/read/cv39628945)（[[F]内部公开￥168同上](http://t.fenchuan8.com/VpPL5RH)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件头部是否prm（需先加载kar插件、tab插件）。
>
>★[**myskinRehider插件**](https://www.bilibili.com/read/cv39590653)（[[F]内部公开￥12](http://t.fenchuan8.com/18R0CuL)）
>
>　修改型插件，支持批量修改myskin文件脸部是否隐藏。
>
>★[**skinRehider插件**](https://www.bilibili.com/read/cv39590696)（[[F]内部公开￥12同上](http://t.fenchuan8.com/18R0CuL)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件脸部是否隐藏（需先加载kar插件、myskinRehider插件）。
>
>★[**myskinReplacer插件**](https://www.bilibili.com/read/cv41024424)（[[F]内部公开￥30](http://t.fenchuan8.com/B_NXYxn1KR)）
>
>　修改型插件，支持批量修改myskin文件的头部、脸部、身体。
>
>★[**skinReplacer插件**](https://www.bilibili.com/read/cv41026687)（[[F]内部公开￥30同上](http://t.fenchuan8.com/B_NXYxn1KR)）
>
>　修改型插件，支持批量修改skin、hskin、hhskin文件的头部、脸部、身体（需先加载kar插件、myskinReplacer插件）。
>
>★[**prmMerger插件**](https://www.bilibili.com/read/cv41023564)（[[F]内部公开￥198](http://t.fenchuan8.com/B_6n5IY41s)）
>
>　修改型插件，支持批量修改prm文件为从多个prm文件或shp、oa、aoa、ioa、poa文件提取的prm数据合并文件。
>
>★[**replayProtector插件**](https://www.bilibili.com/read/cv26056175)（[[F]内部公开￥2](http://t.fenchuan8.com/xy4fg4wc)）
>
>　转换型插件，支持批量转换replay文件为repkar文件（需先加载kar插件）。
>
>★[**repkarUnprotector插件**](https://www.bilibili.com/read/cv26056595)（[[F]内部公开￥2](http://t.fenchuan8.com/WsLup1rW)）
>
>　转换型插件，支持批量转换repkar文件为replay文件或html预览（需先加载kar插件）。
>
>★[**replayTranslator插件**](https://www.bilibili.com/read/cv26049339)（[[F]内部公开￥30](http://t.fenchuan8.com/zTcaY1Va)）
>
>　转换型插件，支持转换replay文件为其他服务器支持的数据（需先加载myskinTranslator插件）。
>
>★[**repkarTranslator插件**](https://www.bilibili.com/read/cv26049509)（[[F]内部公开￥30同上](http://t.fenchuan8.com/zTcaY1Va)）
>
>　转换型插件，支持转换repkar文件为其他服务器支持的数据（需先加载kar插件、replayTranslator插件、myskinTranslator插件）。
>
>☆[**replayExtractor插件**](https://www.bilibili.com/read/cv26072027)（[[F]内部公开￥128](http://t.fenchuan8.com/lexcp1XG)）
>
>　导出型插件，支持从replay文件提取myassc、tex、myskin等资源。
>
>☆[**repkarExtractor插件**](https://www.bilibili.com/read/cv26072017)（[[F]内部公开￥128同上](http://t.fenchuan8.com/lexcp1XG)）
>
>　导出型插件，支持从repkar文件提取myassc、tex、myskin等资源（需先加载kar插件、replayExtractor插件）。
>
>★[**mymapProtector插件**](https://www.bilibili.com/read/cv20898754)（[[F]内部公开￥2](http://t.fenchuan8.com/25l3w3l0)）
>
>　转换型插件，支持批量转换mymap文件为omd文件（需先加载kar插件）。
>
>★[**omdUnprotector插件**](https://www.bilibili.com/read/cv20891585)（[[F]内部公开￥2](http://t.fenchuan8.com/i2reQpJ)）
>
>　转换型插件，支持批量转换omd文件为mymap文件或html预览（需先加载kar插件）。
>
>★[**omdUsurper插件**](https://www.bilibili.com/read/cv20998480)（[[F]内部公开￥2](http://t.fenchuan8.com/VdW8F2GS)）
>
>　修改型插件，支持批量修改omd文件的userID值（需先加载kar插件）。
>
>★[**mysoaProtector插件**](https://www.bilibili.com/read/cv20898839)（[[F]内部公开￥2](http://t.fenchuan8.com/t3cPjrw)）
>
>　转换型插件，支持批量转换mysoa文件为ssoa文件（需先加载kar插件）。
>
>★[**ssoaUnprotector插件**](https://www.bilibili.com/read/cv20891588)（[[F]内部公开￥2](http://t.fenchuan8.com/meyTtul)）
>
>　转换型插件，支持批量转换ssoa文件为mysoa文件或html预览（需先加载kar插件）。
>
>★[**ssoaUsurper插件**](https://www.bilibili.com/read/cv20998587)（[[F]内部公开￥2](http://t.fenchuan8.com/N46Vj2sn)）
>
>　修改型插件，支持批量修改ssoa文件的userID值（需先加载kar插件）。
>
>★[**configEditor插件**](https://www.bilibili.com/read/cv40541536)（[[F]内部公开￥98](http://t.fenchuan8.com/B_cPZeZ1I4)）
>
>　修改型插件，支持批量编辑setting/config文件的键值数据。
>
>★[**settingPatcher插件**](https://www.bilibili.com/read/cv17799215)（[[F]内部公开￥12](http://t.fenchuan8.com/duoPa3Mn)）
>
>　修改型插件，支持批量修改、添加setting.kar的键值数据（需先加载kar插件）。
>
>☆[**settingExporter插件**](https://www.bilibili.com/read/cv17863811)（[[F]内部公开￥30](http://t.fenchuan8.com/YViAW3Oz)）
>
>　导出型插件，支持从setting.kar导出unicode文件（需先加载kar插件）。
>
>☆[**settingAnalyzer_island插件**](https://www.bilibili.com/read/cv26048912)（[[F]内部公开￥12](http://t.fenchuan8.com/g8vBS11r)）
>
>　导出型插件，支持从setting.kar解析无人岛不同钓竿工具单次用时、产出物品概率、兑换奖励概率并计算每小时平均兑换奖励列表及数量（需先加载kar插件）。
>
>☆[**settingAnalyzer_mission插件**](https://www.bilibili.com/read/cv19552864)（[[F]内部公开￥12](http://t.fenchuan8.com/M3ktH3Cq)）
>
>　导出型插件，支持从setting.kar解析不同探索任务携带不同装备道具增加的成功率并进行排序（需先加载kar插件）。
>
>☆[**settingAnalyzer_quiz插件**](https://www.bilibili.com/read/cv26104028)（[[F]内部公开￥12](http://t.fenchuan8.com/0msgm1c)）
>
>　导出型插件，支持从setting.kar解析并列出死亡问答题目及答案（需先加载kar插件）。
>
>☆[**resourceAnalyzer_oaResource插件**](https://www.bilibili.com/read/cv21298913)（[[F]内部公开￥12](http://t.fenchuan8.com/2s1Nb4p0)）
>
>　导出型插件，支持从resource.kar内含的oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源分析汇总字符串资源列表（需先加载kar插件）。
>
>☆[**resourceAnalyzer_scFunction插件**](https://www.bilibili.com/read/cv21432832)（[[F]内部公开￥12](http://t.fenchuan8.com/Dt6QT2PA)）
>
>　导出型插件，支持从resource.kar内含的sc文件和oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源中的sc数据分析汇总脚本方法列表（需先加载kar插件）。
>
>★[**resource_head插件**](https://www.bilibili.com/read/cv40249096)（[[F]内部公开￥2](http://t.fenchuan8.com/A_zyqWZ26l)）
>
>　资源型插件，支持为head有关功能提供所需的prm资源（需先加载tab插件）。
>
>★[**resource_face插件**](https://www.bilibili.com/read/cv40249126)（[[F]内部公开￥2](http://t.fenchuan8.com/A_2ZDjZ2So)）
>
>　资源型插件，支持为face有关功能提供所需的fp、prm、tex资源（需先加载tab插件）。
>
>★[**resource_body插件**](https://www.bilibili.com/read/cv40249155)（[[F]内部公开￥2](http://t.fenchuan8.com/A_pkh634iV)）
>
>　资源型插件，支持为body有关功能提供所需的body、shp、prm资源（需先加载tab插件）。
>
>★[**resource_structure插件**](https://www.bilibili.com/read/cv40249188)（[[F]内部公开￥2](http://t.fenchuan8.com/A_RyrgK3rh)）
>
>　资源型插件，支持为转换模型预览html有关功能提供所需的srt资源（需先加载tab插件）。
>
>★[**headPreviewer插件**](https://www.bilibili.com/read/cv40260120)（[[F]内部公开￥128](http://t.fenchuan8.com/A_AGsOQ20P)）
>
>　转换型插件，支持批量转换prm文件为模型预览html，或批量转换myskin文件的head为模型预览html（需先加载tab插件、resource_structure插件、resource_head插件）。
>
>★[**facePreviewer插件**](https://www.bilibili.com/read/cv40260247)（[[F]内部公开￥168](http://t.fenchuan8.com/A_npWGCcR)）
>
>　转换型插件，支持批量转换face文件为模型预览html，或批量转换myskin文件的face为模型预览html（需先加载tab插件、resource_structure插件、resource_face插件）。
>
>★[**bodyPreviewer插件**](https://www.bilibili.com/read/cv40260282)（[[F]内部公开￥198](http://t.fenchuan8.com/A_qPdZidX)）
>
>　转换型插件，支持批量转换body文件为模型预览html，或批量转换myskin文件的body为模型预览html（需先加载tab插件、resource_structure插件、resource_body插件）。
>
>★[**myskinPreviewer插件**](https://www.bilibili.com/read/cv40260478)（[[F]内部公开￥98](http://t.fenchuan8.com/A_RbGsC1Oe)）
>
>　转换型插件，支持批量转换myskin文件为模型预览html（需先加载tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）。
>
>★[**skinPreviewer插件**](https://www.bilibili.com/read/cv40260553)（[[F]内部公开￥98同上](http://t.fenchuan8.com/A_RbGsC1Oe)）
>
>　转换型插件，支持批量转换skin、hskin、hhskin文件为模型预览html（需先加载myskinPreviewer插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）。
>
>★[**myskinSnapshoter插件**](https://www.bilibili.com/read/cv40267331)（[[F]内部公开￥198](http://t.fenchuan8.com/A_1hZu9L)）
>
>　转换型插件，支持批量转换myskin文件为自定义模型快照bmp、png、tex（需先加载myskinPreviewer插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）。
>
>★[**skinSnapshoter插件**](https://www.bilibili.com/read/cv40267336)（[[F]内部公开￥198同上](http://t.fenchuan8.com/A_1hZu9L)）
>
>　转换型插件，支持批量转换skin、hskin、hhskin文件为自定义模型快照bmp、png、tex（需先加载myskinPreviewer插件、myskinSnapshoter插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）。
>
>★[**shpPreviewer插件**](https://www.bilibili.com/read/cv41023263)（[[F]内部公开￥128](http://t.fenchuan8.com/B_9qbrq2cb)）
>
>　转换型插件，支持批量转换shp文件为模型预览html。
>
>★[**oaPreviewer插件**](https://www.bilibili.com/read/cv41023267)（[[F]内部公开￥30](http://t.fenchuan8.com/B_jDcyl1ZI)）
>
>　转换型插件，支持批量转换oa、aoa、ioa、poa文件为模型预览html（需先加载shpPreviewer插件）。
>
>★[**shpSnapshoter插件**](https://www.bilibili.com/read/cv41102945)（[[F]内部公开￥68](http://t.fenchuan8.com/B_Oevwr3aZ)）
>
>　转换型插件，支持批量转换shp文件为自定义模型快照bmp、png、tex（需先加载shpPreviewer插件）。
>
>★[**oaSnapshoter插件**](https://www.bilibili.com/read/cv41102984)（[[F]内部公开￥12](http://t.fenchuan8.com/B_2XXPLMx)）
>
>　转换型插件，支持批量转换oa、aoa、ioa、poa文件为自定义模型快照bmp、png、tex（需先加载shpPreviewer插件、oaPreviewer插件、shpSnapshoter插件）。
>

