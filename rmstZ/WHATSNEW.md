# 更新历史
>　【[rmstZ_20170513.html](rmstZ_20170513.html)】
>* 修正读取osu!mania谱面按键异常的问题；
>* 修复读取osu长条产生错误的问题；
>* 修复转aff时可能产生叠键的问题；
>* 增加等级（数量参考）和难度（密度参考）的计算并在谱面预览图上显示；
>* 支持2dx（「BeatMania IIDX」音频）文件包的读取；
>* 支持ipa、apk、osz、mcz等zip（Deflate）文件包的读取；
>* 生成于“保存”标签的文件内容支持直接拖拽到文件选择器；
>* “保存”标签的工具提示显示文件相关信息；
>* 其他细节调整。
---
>　【[rmstZ_20170416.html](rmstZ_20170416.html)】
>* 增强“无叉键”功能，支持去除滑键的交叉；
>* 增强“无叠键”功能，支持去除重叠的斜键；
>* 重构长键、长滑的判定点判断，强化对变速段的精准计算；
>* 修复转bms长键异常的问题；
>* 修复“无叠键”无法去除部分重叠单键的问题；
>* 调整“无叉键”功能，仅去除相叉的键位，保留相交的键位；
>* 调整转aff时长滑条连接处的弧度；
>* 调整转aff时长斜键转换错误的问题；
>* 增加支持vox（「Sound Voltex」谱面）的读取；
>* 增加支持ksh（「K-Shoot Mania」谱面）的读取；
>* 选项布局调整。
---
>　【[rmstZ_20170404.html](rmstZ_20170404.html)】
>* 去除“蓝转绿”、“绿转蓝”功能；
>* 去除“全单键”功能;
>* 增加“无长键”功能，控制去除谱面内长键并转为单键；
>* 增加“无单键”功能，控制去除谱面内单键；
>* 增强“自优化”功能的对音功能；
>* 调整键位转换的轨道计算；
>* 修复节拍计算造成无限循环的问题；
>* 修复0长度长条造成判定点计算错误的问题；
>* 修复部分情况转换谱面造成混乱的问题；
>* 重构谱面排序功能；
>* 重构谱面去重功能；
>* 重新优化节拍数据和动作数据的管理；
>* 修复斜键判定点横坐标计算错误的问题；
>* 增加“无叉键”功能，控制去除包括斜键的长滑交叉；
>* 改进“无叠键”功能，控制除交叉之外的键位重叠；
>* 功能选项位置调整；
>* 增加支持aff（「Arcara」谱面）的互转。
---
>　【[rmstZ_20170325.html](rmstZ_20170325.html)】
>* 修复变速时不改变BPM的问题；
>* 修复“自修复”功能的一处bug；
>* 增加“自优化”选项，控制BPM修正、时间戳粘合等操作；
>* 增加“连单键”选项，将符合条件的单键连为长滑键；
>* 增加“连长键”选项，将符合条件的长键连为长滑键；
>* 增加“乱音”选项，一定程度打乱键位的轨道放置；
>* 修正导出谱面音源信息后缀重复的问题；
>* 提升转bms的note精度；
>* 修正导出bms的文件末端；
>* 导出bms支持至14K；
>* 对bms、osu部分元数据进行调整；
>* 使用“严格模式”规范代码，减少运行错误，提高运行效率；
>* 键位转换支持1K至18K；
>* 数据结构重造，支持多谱面文件；
>* 对imd部分非关键数据不作修正；
>* 扩展url参数，支持功能检测、配置更改、数据输入、数值显示、默认值变更等，详情请参阅?help=all；
>* 增加作品与作者的跳转链接；
>* 「节奏大师」官方谱面批量下载功能优化，可独立下载音乐资源；
>* 　（注：TableCom.zip当前最新链接为<http://game.ds.qq.com/Com_TableCom_Android_Bin/TableComBin.zip>）
>* 增加支持tja（「太鼓次郎」谱面）taiko模式、jube模式的互转；
>* 　（注：双人谱面分为两个谱面，谱面分歧只取最高难度）
>* 增加支持mc（「Malody」谱面）key模式、step模式、dj模式的互转；
>* 增加支持mc（「Malody」谱面）taiko模式的互转；
>* 增加支持mc（「Malody」谱面）catch模式的互转；
>* 增加支持mc（「Malody」谱面）pad模式的互转；
>* 部分导出格式文件名标记模式；
>* 取消已过时的bms键位置换功能；
>* 新增支持bme的互转；
>* 　（注：支持3、5、14K的键位）
>* 新增支持pms（「Pop'n Music」谱面）的互转；
>* 　（注：支持3、5、9、18K的键位）
>* 完善xml（「乐动时代」谱面）的互转；
>* 修复部分谱面转mde产生坐标错误的问题；
>* 谱面绘图去除边框颜色叠加；
>* png、html预览图支持多谱面合并；
>* 页面初始尺寸针对手机版本进行适配；
>* 导出的html预览图初始尺寸针对手机版本进行适配；
>* 增加“蓝转绿”选项，将单键转为单轨滑键；
>* 增加“绿转蓝”选项，将单轨滑键转为单键；
>* 增加“连滑键”选项，将符合条件的单键与长键、长滑键相连；
>* 增加“转斜键”选项，将符合条件的长滑键转为斜键；
>* 增加“无斜键”选项，将斜键转为长滑键；
>* 增加“无叠键”选项，按相应规则删去重叠的按键；
>* 优化谱面绘图长滑键节点的绘制；
>* 优化谱面绘图斜键的绘制；
>* 优化imd长滑键判定点的计算；
>* 重构谱面bug优化功能；
>* 图片裁剪缩放功能新增_cover_hd.png（210X98）；
>* 图片裁剪缩放功能智能变更保存文件名；
>* 增加支持osu（「osu!」谱面）taiko模式的互转；
>* 增加支持osu（「osu!」谱面）ctb模式的互转；
>* 增加支持osu（「osu!」谱面）osu模式的互转；
>* 完善osu（「osu!」谱面）mania模式的互转。
---
>　【[rmstZ_20161119.html](rmstZ_20161119.html)】
>* 修复图片相关功能失效的问题；
>* 修正乐动达人谱面长条持续时间错误；
>* 优化保存文件名的后缀；
>* 谱面绘图增强识别全音符节拍线；
>* 修复谱面绘图长度不足的问题；
>* 修正谱面绘图的相关参数
>* “自修复”功能改进谱面的长键、长滑键粘合；
>* “自修复”功能增强修复谱面的长滑键丢失；
>* “自修复”功能增加对长键、长滑键末端的时间戳粘合；
>* 优化时间戳粘合的判定准确度；
>* 修复bin文件的十六进制错误读取的问题；
>* 更改imd、bin的十六进制文件扩展名为hex；
>* 修复读取元数据为空值的bug；
>* 完善bms的元数据；
>* 导出bms中的WAV标签默认mp3后缀；
>* 修改mde转落谱时键数默认为6K；
>* 增强读取mde的容错处理；
>* 优化mde长滑键与下落式谱面长滑键的转化；
>* 支持将谱面转为mde；
>* 键位支持转换3K至18K。
---
>　【[rmstZ_20160915.html](rmstZ_20160915.html)】
>* 修复读取txt失败的问题；
>* 修复imd长条排序错误的问题；
>* 完善“自修复”功能，经转换或修改的谱面自动自修复；
>* “自修复”功能增加时间戳粘合节拍线；
>* 支持谱面键位镜像翻转；
>* 支持谱面2、3倍变速；
>* 支持键位的简单扩增和收缩（3K至7K）。
---
>　【[rmstZ_20160624.html](rmstZ_20160624.html)】
>* 支持osu全模式转下落式；
>* 转谱osu时AudioFilename标签默认为.mp3的扩展名，如有其他需要再自行更改；
>* 修复长键相关计算引起的无限循环bug；
>* 支持节奏大师星动模式转下落式，可选3至8K。
---
>　【[rmstZ_20160408.html](rmstZ_20160408.html)】
>* 增加对osu的Mode不为3（mania模式）的提示；
>* 增加对osu的TimingPoints数据去重处理；
>* 优化对osu的元数据读取；
>* 优化对bms的版本识别；
>* 修正格式列表的显示逻辑；
>* 对滑键的轨道重合适当兼容（有滑键轨道重合时转谱有损耗）；
>* 优化滑键的相关连击判定顺序。
---
>　【[rmstZ_20151028.html](rmstZ_20151028.html)】
>* 完善字节序的兼容性；
>* 优化一处二进制文件转Hex文本的性能问题；
>* 优化文件名重命名功能，并对谱面相关文件的文件名增加键位及难度后缀；
>* 更改bms的BPM精度；
>* 修正osu字段的默认值；
>* 转谱尽可能保留元信息；
>* 提升ANSI文本读取的兼容性，扩充ANSI编码表至11299；
>* 格式转换的性能优化；
>* bin→list补充增加mrock_song_client；
>* 优化mde转换流程；
>* 优化bin转换流程；
>* bin文件可以保存为Hex文本txt并导回；
>* Hex文本txt的文件名增加类型标识，并对读取做相关识别处理；
>* 内容界面显示base64时自动换行；
>* 修改并增加URL参数；
>* 底层函数代码大面积优化；
>* 选项布局调整；
>* 调整绘制谱面的最小宽度；
>* 选项“去除Bug”更名“自修复”，增加对重合单、长键的去除，增加对滑、长键衔接的修复；
>* 键位限制的选项改为自定义选择谱面键位（使用该功能应同时勾选“自修复”选项）。
---
>　【[rmstZ_20150716.html](rmstZ_20150716.html)】
>* 修复转bms的BPM大于255时的标记错误；
>* 改善xml（「乐动时代」）转谱的性能；
>* 通过局部变速对齐xml谱面的时间戳；
>* 读取错误或不支持的谱面时重置界面；
>* 负数时间戳时长部分计入谱面总时长；
>* 优化“去除bug”的BPM自动更正功能；
>* 读取imd节拍部分进行节拍补全；
>* 增加osu（「osu!」〈mania模式〉谱面）互转；
>* 　（注：osu!mania下落速度的改变采用BPM变速）
>* 通过变速和时间戳偏移取消负数时间戳；
>* 修复转bms的键位比例判定bug。
---
>　【[rmstZ_20150707.html](rmstZ_20150707.html)】
>* ImdToImg：
>* 　修复时长错误导致图片绘制失败的Bug；
>* 　取消自动对时间戳粘合节拍线；
>* 选项“去除Bug”增加：时长根据Beat和Action进行修正、根据时长等量增加Beat；
>* 修复Base64解码的Bug；
>* 增强读取txt的容错性；
>* 生成bms的信息修改（略去空信息，增加#TIME记录总时长信息）；
>* bms系列支持扩展名.bms,.bme,.bml,.pms；
>* 读取xml文件增加对文件头的兼容处理；
>* 选项流程优化；
>* 增加选项“限制3键”、“限制4键”，并与“限制6键”一起，对相应Action进行转换（无衔接长滑键转为长键）；
>* 增加xml（「乐动达人」谱面）互转。
>* 增加xml（「乐动时代」谱面）互转。
>* 增加额外小功能以迂回实现「节奏大师」官方谱面批量下载：
>* 　①自行下载最新的TableCom.zip并解压获得mrock_song_client_android和mrock_papasong_client，然后自行建立RM文件夹；
>* 　②使用rmstZ分别打开mrock_song_client_android和mrock_papasong_client并保存对应的.list文件和.bat文件到RM文件夹内；
>* 　③运行★res_all.bat后，将生成的★res_new.txt全部链接复制到IDM等下载工具并下载到RM文件夹；
>* 　④批量下载到RM文件夹完毕后执行谱面移动，移动结束后步骤完成，全部谱面文件位于res/song/文件夹内。
>* 　注：上述步骤请操作于Windows操作系统，TableCom.zip当前最新链接为<http://game.ds.qq.com/Com_TableCom_Android/TableCom.zip>。
---
>　【[rmstZ_20150619.html](rmstZ_20150619.html)】
>* ImdToImg：
>* 　时间戳根据节拍线进行粘合；
>* 　改进combo判定；
>* 增加支持url参数；
>* 选项逻辑变更，性能优化；
>* 增加选项“去除Bug”（时间戳去除0ms，单键去除方向，节拍和动作去重、排序、重新计数，节拍BPM重计算）；
>* 增加选项“无滑键”（滑键与长滑键在Cobmo不变的情况下更改为对应的单键与长键）；
>* 增加选项“全单键”（所有按键在Action不变的情况下更改为对应的单键）；
>* 优化bms节拍数的读取；
>* 增加bms根据节拍十六分对时间戳粘合优化；
>* 修复bms类型识别错误导致按键不能正常读取的bug；
>* 读取bms去除note由时间戳小于2400ms改为小于600ms；
>* 增加imd转bms；
>* 对于bms的1000节拍限制，使用节拍变换的方式予以优化，理论上支持无限长的时间。
>* 从节拍、轨道、按键上减小bms互转的损耗：
>* （互转bms轨道变更：
>* |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
>* |7K|　|0|1|2|3|4|5|6|
>* 　4K　X 0 1 X 2 3 X
>* 　5K　X 0 1 2 3 4 X
>* 　6K　0 1 2 X 3 4 5
>*  互转bms按键变更：
>*     imd  bms
>*      00  A8     单
>*      01  A8±05 单
>*      02  A8     长
>*      61         单
>*      62  B8     长
>*      21         单
>*  (61)22  C8±05 长
>*  (21)22  D8±05 长
>*      A1  E8±05 单
>*  (61)A2  E8±05 长
>*  (21)A2  F8±05 长
>* 　符合上述条件则使用减损转换）。
---
>* 【[rmstZ_20150602.html](rmstZ_20150602.html)】
>* 代码重构，优化性能；
>* 增加bms转imd：
>* 　bms转imd兼容BM98、PMS、BMS1.2、BMS1.3+等标准，imd转bms依照BMS1.3+的标准，http://fileformats.wikia.com/wiki/Be-Music_Script；
>* 　将bms的最初的WAV标签时间点作为imd的起始时间戳；
>* 　去除起始时间戳小于2400ms的note；
>* 　格式互转为有损转换，转换结果仅做研究交流测试用。
>* ImdToImg：
>* 　增加对读取imd排序、去重、计数的兼容（自动除bug）；
>* 　增强对负数时间戳的支持；
>* 　优化长键判定；
>* 其他细节改进。
---
>　【[rmstZ_20150511.html](rmstZ_20150511.html)】
>* 细节优化；
>* 实现图片的居中裁剪缩放（未实现官方png编码）
>* ★bmp、jpg、gif、png
>* 　→.png（480×320）
>* 　→_title_ipad.png（140×60）
>* 　→_ipad.png（1024×768）
>* 　→_title_140_90.png（140×90）
---
>　【[rmstZ_20150505.html](rmstZ_20150505.html)】
>* 修复txt转imd的扩展名错误；
>* 修复长滑键（中继）连击数顺序标记错误；
>* 节拍线改为虚线区分；
>* 新增xml(mde)转mde；
>* 转变关系整合：
>* ★bin
>* 　→xml(bin)
>* 　→html(table)
>* ★xml(bin)
>* 　→bin
>* 　→html(table)
>* ★mde
>* 　→xml(mde)
>* ★xml(mde)
>* 　→mde
>* ★imd
>* 　→png
>* 　→html(img)
>* 　→txt(imd)
>* ★txt(imd)
>* 　→png
>* 　→html(img)
>* 　→imd
---
>　【[rmstZ_20150415.html](rmstZ_20150415.html)】
>* 代码优化；
>* 标准化时间显示格式；
>* imd转img增加满分与速率两项；
>* 增加imd转html，可选4档宽度与4档速率（请注意考虑你设备的处理能力）；
>* 轻微bug修复。
---
>　【[rmstZ_20150407.html](rmstZ_20150407.html)】
>* 修复导出表格html的中文乱码；
>* 修复键位判断的漏洞；
>* 去除谱面键位最高为6的限制；
>* 轨道线颜色加深；
>* imd转出的txt可以导回为imd。
---
>　【[rmstZ_20150331.html](rmstZ_20150331.html)】
>* 优化代码；
>* 改进错误提示；
>* .xml与.bin文件可以转化并保存为html表格。
---
>　【[rmstZ_20150329.html](rmstZ_20150329.html)】
>* 修复mrock_song_client_android.bin的读取错误；
>* 修复mrock_match_client.bin的读取错误；
>* 修复mrock.scorebuy_client.xml的写入错误；
>* 增加支持读取mrock_song_client.bin；
>* 增加支持读取mrock_scoreexchange_client.bin；
>* 增加支持读取mrock_songlevel_client.bin；
>* 增加功能xml转bin，实现计数校验和Hsah校验（改bin如果严格按照格式可以任意增加条数了），支持以下文件：
>* 　errno_main_client.xml
>* 　mrock.active_client.xml
>* 　mrock.character_client.xml
>* 　mrock.characterproperty_client.xml
>* 　mrock.floornode_client.xml
>* 　mrock.floorreward_client.xml
>* 　mrock.innerpublicnotify_client.xml
>* 　mrock.innerrace_client.xml
>* 　mrock.marketact_client.xml
>* 　mrock.mission_client.xml
>* 　mrock.scorebuy_client.xml
>* 　mrock.scoreexchange_client.xml
>* 　mrock.surviveact_client.xml
>* 　mrock.timelimitcharacter_client.xml
>* 　mrock_buynew_client.xml
>* 　mrock_match_client.xml
>* 　mrock_match_division_client.xml
>* 　mrock_papasong_client.xml
>* 　mrock_questconfig_client.xml
>* 　mrock_room_client.xml
>* 　mrock_scoreexchange_client.xml
>* 　mrock_song_client.xml
>* 　mrock_song_client_android.xml
>* 　mrock_songlevel_client.xml
>* 　mrock_SongPkg_client.xml
>* 　mrock_SysParam_client.xml
>* 　mrock_txt_client.xml
>* bin转xml与xml转bin改进类型识别
---
>　【[rmstZ_20150328.html](rmstZ_20150328.html)】
>* 文件的打开增加类型限定；
>* 文件的保存改为使用File API，支持大文件的保存；
>* 优化API支持的提示；
>* 修复mde的Bug；
>* 针对UC浏览器取消其不支持的保存功能；
>* 安卓系统推荐使用火狐浏览器
---
>　【[rmstZ_20150326.html](rmstZ_20150326.html)】
>* 实现内存的优化与速度的提升；
>* 兼容文本文件的打开（虽然没什么用）；
---
>　【[rmstZ_20150325.html](rmstZ_20150325.html)】
>* 初始版本
---
>　【[BinToXml_20150324.html](BinToXml_20150324.html)】
>* 代码聚合；
>* 支持的格式增加；
>* 暂不支持的格式进行提示
---
>　【[MdeToXml_20150322.html](MdeToXml_20150322.html)】
>* 代码改进
---
>　【[BinToXml_20150322.html](BinToXml_20150322.html)】
>* 新增支持：
>* 　mrock.character_client.bin
>* 　mrock.characterproperty_client.bin
>* 　mrock.floornode_client.bin
>* 　mrock.floorreward_client.bin
>* 　mrock.innerpublicnotify_client.bin
>* 　mrock.innerrace_client.bin
>* 　mrock.marketact_client.bin
>* 　mrock.mission_client.bin
>* 　mrock.scorebuy_client.bin
>* 　mrock.scoreexchange_client.bin
>* 　mrock.surviveact_client.bin
---
>　【[ImdToImg_20150320.html](ImdToImg_20150320.html)】
>* 多项功能更新；
>* 对非标准imd的适当容错；
>* 注：当图片过大过于复杂时，使用“保存”会使页面崩溃，这时要保存图片请自行“右键——复制图片”
---
>　【[BinToXml_20150318.html](BinToXml_20150318.html)】
>* 函数的优化和改进；
>* 新增支持
>* 　errno_main_client.bin
>* 　mrock.active_client.bin
---
>　【[MdeToXml_20150317.html](MdeToXml_20150317.html)】
>* 初始版本
---
>　【[BinToXml_20150315.html](BinToXml_20150315.html)】
>* 初始版本
---
>　【[ImdToImg_20150307.html](ImdToImg_20150307.html)】
>* 初始版本
