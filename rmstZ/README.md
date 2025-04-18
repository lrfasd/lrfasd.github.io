# rmstZ
>*TransData for Music Games*
>
>[先行代码](EARLYCODE.md)
>
>[更新历史](WHATSNEW.md)
>
>[[N]测试资源](https://www.jianguoyun.com/p/DctV8o4Qitn5Bxi2x-AD)
>
>[[N]播放示例](https://www.jianguoyun.com/p/DYDEAR4Qitn5BxjwtYMD)
> 
> 类别|简介
> :-:|:-:
> 重要功能「音游转谱」|支持多种音游和模拟器的谱面读入与写出及资源提取或转换。<br>（可结合丰富的转换选项满足个性化需求）
> 核心功能「音波采谱」|分析音频波形进行谱面要素采集，结果以音键谱面形式体现。<br>（保存后需要谱师发挥才能进行创作加工）
> 精华功能「音键作谱」|根据插件型定制脚本所设定的规则，对音键进行自动化作谱。<br>（敬请期待）

## 功能介绍
>当前具备对谱面文件、曲谱文件、音频文件、图片文件、包文件、编码文件和其他文件进行相关操作的功能。
>
>* **谱面文件**
>
>　支持以下文件的读入☆，部分支持附选项的写出★：
>1. ☆**vos**（「Virtual Orchestra Studio」、「CanMusic」谱面，包括000、001、006、022版本）；
>2. ☆**1**（「Beatmania IIDX」谱面）；
>3. ★**bms**、**bme**、**bml**（「Beatmania」系列模拟谱面，包括bm98、bms、ddr4、ddr6、bme、bme3、bme5、bme7、2dx键位）；
>4. ★**pms**（「pop'n music」谱面，包括pms、pms3、pms5、pmse键位）；
>5. ★**dtx**（「DTXMania」谱面，包括6键、9键鼓和5键、7键吉他、贝斯键位）；
>6. ★**msd**（「Dance Dance Revolution」谱面）；
>7. ☆**ssq**（「Dance Dance Revolution 4th Mix」谱面）；
>8. ★**sm**、**sma**、**ssc**（「Step Mania」系列谱面）；
>9. ☆**sdf**（「Pocket DDR」谱面）；
>10. ★**dwi**（「Dance With Intensity」谱面）；
>11. ☆**pt**（「DJMax」谱面）；
>12. ★**ksf**（「Kick It Up」谱面）；
>13. ★**ucs**（「Pump It Up」谱面）；
>14. ★**dance**（「pydance」谱面）；
>15. ★**tja**（「太鼓次郎」谱面，包括taiko、jube模式）；
>16. ☆**ojn**（「[O2Jam](http://www.o2jam.com/)」谱面）；
>17. ★**osu**（「[osu!](https://osu.ppy.sh/)」谱面，包括osu、taiko、ctb、mania模式）；
>18. ★**xml**（「R2beat」谱面）；
>19. ★**xml**（「[乐动达人](http://yd2012.redatoms.com/)」谱面）；
>20. ★**xml**（「[乐动时代](http://www.ydsd.com/)」谱面）；
>21. ★**xml**（「[节奏大师](http://da.qq.com/)」谱面，星动模式）；
>22. ★**xml**（「[Dynamix](http://dynamix.c4-cat.com/)」谱面）；
>23. ★**xml**（「[QQ炫舞手游](https://x5m.qq.com/)」谱面，包括星动模式、弦月模式、弹珠模式、传统模式、泡泡模式）;
>24. ★**vox**（「SOUND VOLTEX」谱面）；
>25. ★**ksh**（「K-Shoot Mania」谱面）；
>26. ★**imd**（「[节奏大师](http://da.qq.com/)」谱面，经典模式）；
>27. ★**mde**（「[节奏大师](http://da.qq.com/)」谱面，星动模式）；
>28. ★**txt**（「Cytus」谱面，包含原版和Version2）；
>29. ★**txt**（「Cytus2」谱面）；
>30. ★**txt**（「Musync」谱面，包括明文和加密）；
>31. ★**txt**（「[BanG Dream!](https://bang-dream.com/)」谱面）；
>32. ★**txt**（「O2Jam - Music & Game」谱面）；
>33. ★**json**（「Deemo」谱面）；
>34. ★**json**（「节奏大师微信小程序」、「Project FX」、「不休的音符」谱面）；
>35. ★**mc**（「[Malody](http://m.mugzone.net/)」谱面，包括key、step、dj、catch、pad、taiko、ring、slide模式）；
>36. ★**aff**（「[Arcaea](https://arcaea.lowiro.com/)」谱面）；
>37. ★**drb**（「DanceRail」谱面）；
>38. ★**mmg**（「不休的音符」官方自制谱面工具谱面）。
>
>　支持以下风格的谱面绘制，含有音频可实现简易的谱面播放，包括背景音和按键音：
>1. **bms**（「Beat Mania」风格）；
>2. **tja**（「太鼓次郎」风格）；
>3. **osu**（「[osu!](https://osu.ppy.sh/)」风格）；
>4. **imd**（「[节奏大师](http://da.qq.com/)」风格）；
>5. **mc**（「[Malody](http://m.mugzone.net/)」风格）；
>6. **aff**（「[Arcaea](https://arcaea.lowiro.com/)」风格）；
>7. **txt**（「[BanG Dream!](https://bang-dream.com/)」风格）。
>
>* **曲谱文件**
>
>　支持以下文件的谱面转换：
>1. **mid**。
>
>* **音频文件**
>
>　支持以下文件的波形分析、曲谱采集、定制作谱：
>1. **wav**；
>2. **ogg**；
>3. **mp3**；
>4. **aac**；
>5. **m4a**；
>6. **m4r**。
>
>* **图片文件**
>
>　支持以下文件指定尺寸缩放：
>1. **bmp**（支持32位透明通道）；
>2. **jpg**；
>3. **gif**；
>4. **png**。
>
>* **包文件**
>
>　支持以下文件的资源提取：
>1. **zip**、**apk**、**ipa**、**osz**、**mcz**（Deflate压缩文件）；
>2. **dz**（Marmalade资源包）；
>3. **cpk**（Criware资源包）；
>4. **acb**（Criware Atom分轨库）；
>5. **acf**（Criware Atom配置包）；
>6. **awb**（Criware Atom波形库）；
>7. **adx**（Criware Atom音频）；
>8. **hca**（Criware Atom音频）；
>9. **wsb**（XACT声音库）；
>10. **xwb**（XACT波形库）；
>11. **2dx**（「BeatmaniaIIDX」资源包）；
>12. **s3p**（「Sound Voltex」音频包）；
>13. **s3v**（「Sound Voltex」音频）；
>14. **ojm**（「[O2Jam](http://www.o2jam.com/)」资源文件，包括OJM、OMC编码）；
>15. **pak**（「R2Beat」音频包）；
>16. **r2n**（「R2Beat」谱面包）；
>17. **bin**（「节奏大师微信小程序」配置文件集）。
>
>* **编码文件**
>
>　支持以下文件的编码转换：
>1. **hex**（十六进制文本文件）；
>2. **base64**（base64编码文件）。
>
>* **其他文件**
>
>　支持以下文件的数据转换：
>1. **bin**（「[节奏大师](http://da.qq.com/)」配置文件）；
>2. **bin**（「节奏大师微信小程序」配置文件）。
