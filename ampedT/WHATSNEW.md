# ampedT
>*InnerTool for [Getamped](http://bfo.sdo.com/)*
>
>[功能介绍](README.md)
## 更新历史
>　【[ampedT_20250304.html](ampedT_20250304.html)】
>* 从dmp提取ser系列资源时默认进行有效性验证，且不与ser_check插件重复验证。
>
---
>　【[ampedT_20250228.html](ampedT_20250228.html)】
>* 完善对是否加密texture的判断逻辑；
>* 修复myskinTranslator插件、myskinRestructurer插件、myskinFixer插件、headPreviewer插件对无加密SkinHead也进行解密的错误；
>* headPreviewer插件、facePreviewer插件、bodyPreviewer插件、myskinPreviewer插件修改模型数据架构，支持部件的分层数据。
>
---
>　【[ampedT_20250128.html](ampedT_20250128.html)】
>* 从dmp提取的ser系列资源不默认进行有效性验证，通过加载ser_check插件实现有效性验证功能；
>* facePreviewer插件、bodyPreviewer插件增加对资源缺失的容错处理；
>* headPreviewer插件、facePreviewer插件、bodyPreviewer插件、myskinPreviewer插件完善对透明度的支持；
>* myskinRewearer插件调整内部构成；
>* myskin文件转预览html时，当已加载myskinRewearer插件，对加密的texture能解密予以显示；
>* myskinFixer插件代码优化；
>* 新增configEditor插件，支持批量编辑setting/config文件的键值数据。
>
---
>　【[ampedT_20250108.html](ampedT_20250108.html)】
>* 修复inflate存在的问题；
>* face文件转预览html时，当存在face所需的fp、prm、tex资源，纹理图像上显示纹理线，可以点击图像切换显示；
>* body文件转预览html时，当存在body所需的body、shp、prm资源，纹理图像上显示纹理线，可以点击图像切换显示；
>* myskin文件转预览html时，当存在head所需的prm资源，skinHead的纹理图像上显示纹理线，可以点击图像切换显示；
>* myskin文件转预览html时，当存在face所需的fp、prm、tex资源，skinFace的纹理图像上显示纹理线，可以点击图像切换显示；
>* myskin文件转预览html时，当存在body所需的body、shp、prm资源，skinBody的纹理图像上显示纹理线，可以点击图像切换显示。
>
---
>　【[ampedT_20241230.html](ampedT_20241230.html)】
>* 从dmp提取的ser系列资源会逐一验证文件有效性，无效文件予以排除；
>* 新增ser_check插件，支持在识别ser文件无效时自动排除；
>* 文件格式转换支持插件选项；
>* 默认显示插件列表；
>* prm文件转预览html时，纹理图像上显示纹理线，可以点击图像切换显示；
>* 新增resource_structure插件，支持为转换模型预览html有关功能提供所需的srt资源（需先加载tab插件）；
>* 新增resource_head插件，支持为head有关功能提供所需的prm资源（需先加载tab插件）；
>* 新增resource_face插件，支持为face有关功能提供所需fp、prm、tex资源（需先加载tab插件）；
>* 新增resource_body插件，支持为body有关功能提供所需的body、shp、prm资源（需先加载tab插件）；
>* myskinFixer插件不再自带prm资源，通过resource_head插件引用所需资源；
>* 新增headPreviewer插件，支持批量转换prm文件为模型预览html，或批量转换myskin文件的head为模型预览html（需先加载tab插件、resource_structure插件、resource_head插件）；
>* 新增facePreviewer插件，支持批量转换face文件为模型预览html，或批量转换myskin文件的face为模型预览html（需先加载tab插件、resource_structure插件、resource_face插件）；
>* 新增bodyPreviewer插件，支持批量转换body文件为模型预览html，或批量转换myskin文件的body为模型预览html（需先加载tab插件、resource_structure插件、resource_body插件）；
>* 新增myskinPreviewer插件，支持批量转换myskin文件为模型预览html（需先加载tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）；
>* 新增skinPreviewer插件，支持批量转换skin、hskin、hhskin文件为模型预览html（需先加载myskinPreviewer插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）；
>* 新增myskinSnapshoter插件，支持批量转换myskin文件为自定义模型快照bmp、png、tex（需先加载myskinPreviewer插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）；
>* 新增skinSnapshoter插件，支持批量转换skin、hskin、hhskin文件为自定义模型快照bmp、png、tex（需先加载myskinPreviewer插件、myskinSnapshoter插件、tab插件、resource_structure插件、resource_head插件、headPreviewer插件、resource_face插件、facePreviewer插件、resource_body插件、bodyPreviewer插件）。
>
---
>　【[ampedT_20241111.html](ampedT_20241111.html)】
>* 修复inflate可能造成无限循环的问题；
>* myskinTranslator插件修复将userID错误置为空的问题；
>* myskinRestructurer插件修复节点未加密时识别错误的问题；
>* myskinFixer插件修复头部节点除错的问题；
>* myskinFixer插件支持以遍历猜测从true转为false，如果prm库不存在对应prm则猜测失败。
>
---
>　【[ampedT_20241102.html](ampedT_20241102.html)】
>* 主要显示区域调整为等宽字体；
>* 插件列表的插件工具提示增加显示插件说明；
>* 修复序列化Java的float时将NaN错误默认为0的问题；
>* html预览中显示头部、身体的节点时，浮点数固定为小数点后9位；
>* 优化插件选项值为bmp、png、tex数据base64时的工具提示；
>* 增加插件选项值为pts数据base64时显示工具提示；
>* 插件选项值的pts数据支持序列化文件的base64和纯文本；
>* myskinRedrawer插件、skinRedrawer插件更改选项名称；
>* myskinUsurper插件、myskinTranslator插件、myskinRedrawer插件、myskinRewearer插件、myskinFixer插件、myskinRehider插件增加是否修改的识别，优化修改效率；
>* myskinFixer插件已无需先加载myskinTranslator插件；
>* 新增myskinRestructurer插件，支持批量修改myskin文件的头部、身体节点；
>* 新增skinRestructurer插件，支持批量修改skin、hskin、hhskin文件的头部、身体节点（需先加载kar插件、myskinRestructurer插件）。
>
---
>　【[ampedT_20241030.html](ampedT_20241030.html)】
>* 修复插件选项排序不正确的问题；
>* myskinTranslator插件优化结构；
>* myskinRewearer插件修改头部支持prm类型；
>* myskinRewearer插件、myskinRehider插件完善对空head的判断；
>* 新增myskinFixer插件，支持批量修改myskin文件头部为prm（需先加载tab插件、myskinTranslator插件）；
>* 新增skinFixer插件，支持批量修改skin、hskin、hhskin文件头部为prm（需先加载kar插件、tab插件、myskinTranslator插件、skinTranslator插件）。
>
---
>　【[ampedT_20241027.html](ampedT_20241027.html)】
>* 从dmp提取资源不再提取class文件；
>* 修复分段读取dmp时提取资源不完全的问题。
>
---
>　【[ampedT_20241026.html](ampedT_20241026.html)】
>* 支持读取大容量dmp文件，并增加读取进度提示；
>* 调整生成包文件中的文件扩展名策略；
>* 新增myskinRehider插件，支持批量修改myskin文件脸部是否隐藏；
>* 新增skinRehider插件，支持批量修改skin、hskin、hhskin文件脸部是否隐藏（需先加载kar插件、myskinRehider插件）。
>
---
>　【[ampedT_20241025.html](ampedT_20241025.html)】
>* 增加inflate时数据无限循环错误的判断；
>* 增加myskin修改类插件的选项排序接口；
>* myskinUsurper插件、myskinTranslator插件、myskinRedrawer插件、myskinRewearer插件固定选项排序；
>* skinUsurper插件、skinTranslator插件、skinRedrawer插件、skinRewearer插件固定选项排序；
>* myskinRewearer插件增加对导入tex是否加密的判断逻辑。
>
---
>　【[ampedT_20241015.html](ampedT_20241015.html)】
>* 修复Java随机数计算部分情形下出错的问题；
>* 优化inflate时数据错误的判断；
>* 增加读取tex的容错机制；
>* myskinProtector插件最大程度减少反序列化次数，完善是否高清的识别逻辑；
>* 新增myskinRewearer插件，支持批量修改myskin文件头部的纹理版本；
>* 新增skinRewearer插件，支持批量修改skin、hskin、hhskin文件头部的纹理版本（需先加载kar插件、myskinRewearer插件）。
>
---
>　【[ampedT_20231115.html](ampedT_20231115.html)】
>* 鼠标移动到插件列表的项目中时，在左侧显示说明链接，在右侧显示下载链接；
>* 新增插件版本控制功能；
>* 所有插件增加版本控制功能；
>* myskin_check插件支持可选深度计算，默认为否；
>* 新增settingAnalyzer_quiz插件，支持从setting.kar解析并列出死亡问答题目及答案（需先加载kar插件）。
>
---
>　【[ampedT_20230826.html](ampedT_20230826.html)】
>* 修复解析dmp出错的问题；
>* 完善replay中result的读取；
>* 新增replayProtector插件，支持批量转换replay文件为repkar文件（需先加载kar插件）;
>* 新增repkarUnprotector插件，支持批量转换repkar文件为replay文件（需先加载kar插件）;
>* 新增replayTranslator插件，支持转换replay文件为其他服务器支持的数据（需先加载myskinTranslator插件）；
>* 新增repkarTranslator插件，支持转换repkar文件为其他服务器支持的数据（需先加载kar插件、replayTranslator插件、myskinTranslator插件）；
>* 默认读入同目录下的上述插件；
>* 新增replayExtractor插件，支持从replay文件提取myassc、tex、myskin等资源；
>* 新增repkarExtractor插件，支持从repkar文件提取myassc、tex、myskin等资源（需先加载kar插件、replayExtractor插件）；
>* 新增settingAnalyzer_island插件，支持从setting.kar解析无人岛不同钓竿工具单次用时、产出物品概率、兑换奖励概率并计算每小时平均兑换奖励列表及数量（需先加载kar插件）；
>* skinUnprotector插件支持批量转换skin、hskin、hhskin文件为html文件（需先加载kar插件）;
>* omdUnprotector插件支持批量转换omd文件为html文件（需先加载kar插件）;
>* ssoaUnprotector插件支持批量转换ssoa文件为html文件（需先加载kar插件）;
>* repkarUnprotector插件支持批量转换repkar文件为html文件（需先加载kar插件）。
>
---
>　【[ampedT_20230818.html](ampedT_20230818.html)】
>* 优化oa系列转html时数据识别出错的问题；
>* 完善shp文件的读取；
>* 完善replay文件的读取；
>* 增加支持agi文件的读取；
>* 变更文件列表选定文件和打包方式不再刷新文件列表；
>* 改进完善文件流读写核心，优化读写效率；
>* 从JRE的rt.jar、CyberStep的keel.dat、Getamped的amped.kar源码级移植Java的序列化和反序列化；
>* 主体和插件中与Java的反序列化相关代码全部重构，优化逻辑；
>* 预定义资源改为按需加载；
>* 插件列表中未加载插件优先排列；
>* 支持wav批量转sr；
>* 重构deflate代码，大幅提升效率，且结果与Java原生deflate结果一致；
>* 写出zip系列文件支持文件数超过65535；
>* zip架构优化，提升性能；
>* tab插件架构优化，提升性能，支持使用deflate方法的固实压缩，可指定压缩等级0至9或以-1指定默认压缩等级；
>* kar插件架构优化，提升性能，支持指定压缩等级0至9或以-1指定默认压缩等级；
>* kar_guess插件代码调整；
>* myskin_check插件架构优化，提升性能，更改为默认从同目录下读入；
>* myskinProtector插件代码调整；
>* skinUnprotector插件代码调整；
>* mymapProtector插件代码调整；
>* omdUnprotector插件代码调整；
>* omdUsurper插件代码调整；
>* mysoaProtector插件代码调整；
>* ssoaUnprotector插件代码调整；
>* ssoaUsurper插件代码调整；
>* myskinUsurper插件代码调整，变更为直接更改值后序列化生成，可联合关联插件高效修改指定值；
>* skinUsurper插件代码调整，可联合关联插件高效修改指定值；
>* myskinTranslator插件代码调整，变更为直接更改值后序列化生成，可联合关联插件高效修改指定值，lang值为null时可将文件保存为旧版本，或lang值不为null将文件保存为新版本；
>* skinTranslator插件代码调整，可联合关联插件高效修改指定值，lang值为null时可将文件保存为旧版本，或lang值不为null将文件保存为新版本；
>* myskinRedrawer插件代码调整，变更为直接更改值后序列化生成，可联合关联插件高效修改指定值；
>* skinRedrawer插件代码调整，可联合关联插件高效修改指定值；
>* settingPatcher插件代码调整，键不存在时也能添加值，支持批量修改多个文件；
>* settingExporter插件架构优化，提升性能，部分设定增加排序；
>* settingAnalyzer_mission插件架构优化，提升性能；
>* 新增resourceAnalyzer_oaResource插件，支持从resource.kar内含的oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源分析汇总字符串资源列表（需先加载kar插件）；
>* 新增resourceAnalyzer_scFunction插件，支持从resource.kar内含的sc文件和oa、aoa、ioa、poa文件及文件内嵌套包含的oa、aoa、ioa、poa资源中的sc数据分析汇总脚本方法列表（需先加载kar插件）。
>
---
>　【[ampedT_20230105.html](ampedT_20230105.html)】
>* 新增omdUsurper插件，支持批量修改omd文件的userID值（需先加载kar插件）;
>* 新增ssoaUsurper插件，支持批量修改ssoa文件的userID值（需先加载kar插件）;
>* 插件选项支持通过打开文件输入base64值；
>* 插件选项值文本框和打开文件按钮直接接受拖拽文件；
>* 插件选项值为图片base64时，工具提示显示图片显示的宽度和高度；
>* 新增myskinRedrawer插件，支持批量修改myskin文件的头部、脸部、身体纹理图片；
>* 新增skinRedrawer插件，支持批量修改skin、hskin、hhskin文件的头部、脸部、身体纹理图片（需先加载kar插件、myskinRedrawer插件）；
>* 默认读入同目录下的上述插件。
>
---
>　【[ampedT_20221231.html](ampedT_20221231.html)】
>* 新增mymapProtector插件，支持批量转换mymap文件为omd文件（需先加载kar插件）;
>* 新增omdUnprotector插件，支持批量转换omd文件为mymap文件（需先加载kar插件）;
>* 新增mysoaProtector插件，支持批量转换mysoa文件为ssoa文件（需先加载kar插件）;
>* 新增ssoaUnprotector插件，支持批量转换ssoa文件为mysoa文件（需先加载kar插件）;
>* 优化对转换文件失败的显示；
>* 增强对插件选项的支持，已修改值标记为红色边框，批量操作时跳过识别无值选项的修改识别；
>* 在批量转换的基础上新增批量修改功能，批量转换后应用批量修改；
>* 新增“视为从包”选项，将读入的文件视为从包中读取；
>* 新增myskinUsurper插件，支持批量修改myskin文件的userID值；
>* skinUsurper插件支持批量修改（需先加载kar插件、myskinUsurper插件）；
>* 新增myskinTranslator插件，支持批量修改myskin文件为其他服务器支持的数据；
>* skinTranslator插件支持批量修改（需先加载kar插件、myskinTranslator插件）；
>* settingPatcher插件支持批量修改；
>* 默认读入同目录下的上述插件。
>
---
>　【[ampedT_20221209.html](ampedT_20221209.html)】
>* 修复读取32位bmp不显示透明度的问题；
>* 支持bmp、png、tex间的批量相互转换；
>* 支持读入jar和导出jar；
>* 支持读取myaccs、mymap和mysoa呈现数据预览并保存为html；
>* kar插件优化代码匹配；
>* myskinProtector插件支持读取myskin文件的userID值更新到文件中；
>* skinUsurper插件支持同步修改myskin文件的userID值；
>* 新增myskin_check插件，支持在识别myskin文件数字验证错误后重新验证。
>
---
>　【[ampedT_20221126.html](ampedT_20221126.html)】
>* 支持批量转换bmp、png为tex；
>* 修复settingPatcher插件、skinUsurper插件、skinTranslator插件不适配新版本的问题；
>* skinUsurper插件、skinTranslator插件、settingPatcher插件支持计算生成文件用时；
>* settingAnalyzer_mission插件支持计算携带不同装备道具增加成功率全部探索任务的平均值；
>* 新增skinUnprotector插件，支持批量转换skin、hskin、hhskin文件为myskin文件（需先加载kar插件）；
>* 默认读入同目录下的skinUnprotector插件。
>
---
>　【[ampedT_20221115.html](ampedT_20221115.html)】
>* 改进分析无扩展名文件类型的性能问题；
>* 提升MD5、SHA1、CRC32、deflate、inflate的性能；
>* kar插件、kar_guess插件提升匹配密码速度；
>* settingExporter插件、settingAnalyzer_mission插件支持计算生成文件用时。
>
---
>　【[ampedT_20221110.html](ampedT_20221110.html)】
>* 读取dmp、cem提取UserData时验证有效性并识别UserID添加到文件名后缀；
>* 无扩展名文件自动分析其类型；
>* 优化对DatabaseResourceSource$DataPack的解包处理；
>* kar插件、tab插件、zip支持空文件；
>* 新增kar_guess插件，支持动态密码的cache系列kar文件的解包（需先加载kar插件）；
>* 新增settingAnalyzer_mission插件，支持从setting.kar解析不同探索任务携带不同装备道具增加的成功率并进行排序（需先加载kar插件）。
>
---
>　【[ampedT_20221104.html](ampedT_20221104.html)】
>* 重新构造流读取代码，提升性能；
>* 读取某些文件包改为按需读取；
>* 按下Alt键时切换url参数写入开关，默认为开；
>* 读取kar无法猜测密码时报错；
>* kar插件支持打包时的压缩等级和新时间戳选项，文件总大小大于0xFFFFFFFF时强制启用压缩；
>* kar插件增加密码，新增支持omd、ssoa扩展名。
>
---
>　【[ampedT_20220826.html](ampedT_20220826.html)】
>* 从包文件提取文件时均提取DatabaseResourceSource$DataPack中数据；
>* 修复拖拽结果读入文件出错的问题；
>* 插件选项生效后同步选项值。
>
---
>　【[ampedT_20220816.html](ampedT_20220816.html)】
>* 从dmp提取文件时提取DatabaseResourceSource$DataPack包中数据；
>* 可从插件列表快捷加载当前路径下的插件。
>
---
>　【[ampedT_20220813.html](ampedT_20220813.html)】
>* 重构pt2和mop数据读入；
>* myskin和replay的cc数据增加对应lang的工具提示；
>* myskin对头部、身体的节点数据进行解密；
>* 通过插件修改文件后立即同步文件信息；
>* 插件不支持当前文件相关功能时选项变为无效；
>* 新增skinTranslator插件，支持转换skin、hskin、hhskin文件为其他服务器支持的数据（需先加载kar插件）。
>
---
>　【[ampedT_20220806.html](ampedT_20220806.html)】
>* 可一次加载多个插件；
>* 加载插件后显示已加载插件列表；
>* 加载插件不影响当前操作。
>
---
>　【[ampedT_20220729.html](ampedT_20220729.html)】
>* Control键和Shift键的开关操作在使用组合键时不予相应；
>* unicode支持以文本域形式预览；
>* 文本域预览为只读；
>* 读入无扩展名文件尝试分析文件扩展名；
>* 支持插件自定义选项；
>* 新增myskinProtector插件，支持批量转换myskin文件为skin、hskin、hhskin文件（需先加载kar插件）；
>* 新增skinUsurper插件，支持修改skin、hskin、hhskin文件的编辑者ID（需先加载kar插件）；
>* 新增settingPatcher插件，支持修改setting.kar的键值数据（需先加载kar插件）；
>* 新增settingExporter插件，支持从setting.kar导出unicode文件（需先加载kar插件）；
>* 默认读入同目录下的skinProtector插件。
>
---
>　【[ampedT_20220619.html](ampedT_20220619.html)】
>* 修复写出wav标识错误的问题；
>* 修复文件筛选器重新读入文件后出错的问题；
>* 增加读入js插件后的信息标签；
>* 按下Control键时切换url参数文件流读入开关，默认为关；
>* 增加打开文件过大时的错误提示；
>* 导出全部文件支持zip包以外的类型；
>* 统一导出包的接口代码；
>* 新增tab插件，支持tab文件的解包、打包；
>* 新增kar插件，支持kar、dat、repkar、skin、hskin、hshkin文件的解包、打包；
>* 默认读入同目录下的tab和kar插件。
>
---
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
