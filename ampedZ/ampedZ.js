"use strict";
var Name = "";
var Buffer = new Uint8Array();
var Data = {};
function HideOperate() {
	document.getElementById("divTable").innerHTML = "";
}
function SetInfo(e) {
	if (isString(e)) {
		var s = e.split("/r/n");
		var d = document.createElement("div");
		for (var i = 0; i < s.length; i++) {
			var span = document.createElement("span");
			span.innerText = s[i];
			var div = document.createElement("div");
			div.appendChild(span);
			d.appendChild(div);
		}
		e = d;
	}
	var div = document.getElementById("divInfo");
	div.innerHTML = "";
	div.appendChild(e);
	div.style.display = "block";
}
function SetList(list) {
	document.getElementById("selectList").onchange = null;
  document.getElementById("selectList").innerHTML = "";
  var o = [];
  for (var i = 0; i < list.length; i++) {
    o[i] = document.createElement("option");
    o[i].value = list[i]["name"];
    o[i].innerHTML = list[i]["name"] + "（" + list[i]["count"] + "）";
    o[i].title = list[i]["name"];
    document.getElementById("selectList").appendChild(o[i]);
  }
	document.getElementById("selectList").onchange = ListChanged;
	document.getElementById("divList").style.display = "block";
}
function SetResult(v) {
	if (v) {
		var t = document.getElementById("divTable");
    t.appendChild(v);
	}
}
function ReadZar() {
	if (!Data.IsValid) {
		return;
	}
  var m = getSelected("selectList");
  SetResult(Data.GetTable(m));
}
function ReadBuffer() {
	if (Name.startsWith("ampedZ") && Name.endsWith(".zar")) {
		Data = new Zar(Buffer);
		if (Data.IsValid) {
      SetList(Data.GetList());
		}
	}
}
function ReadData() {
	HideOperate();
	ReadZar();
}
function ReadInput(n, b) {
	document.getElementById("divFile").style.display = "none";
	document.getElementById("divInfo").style.display = "none";
	Name = n;
	Buffer = b;
	ReadBuffer();
	ReadData();
}
function ReadBlob(n, b) {
	if (!SupportAPI("File")) {
		alert("当前浏览器内核不支持File API。");
		return;
	}
	var r = new FileReader();
	r.onload = function() {
    ReadInput(n, new Uint8Array(this.result));
	};
	r.readAsArrayBuffer(b);
}
function ReadFile(e) {
  if (e.target.files.length) {
    ReadBlob(e.target.files[0].name, e.target.files[0]);
  }
}
function LoadFile(e) {
	SetInfo("loading");
	var n = e.target.name;
	var r = new XMLHttpRequest();
	var t = new Date();
	var l = 0;
	var s = 0;
	var onProgress = function(e) {
		if (e.lengthComputable && e.total) {
			var n = new Date();
			var v = (e.loaded - l) / (n - t);
			console.log((e.total - e.loaded) / v)
			SetInfo(e.loaded.toByteLength() + " / " + e.total.toByteLength() + " - " + (e.loaded / e.total * 100).toFixed(2) + " %" + "/r/n" + (v * 1000).toByteLength() + "/s" + "　　　" + new Date((e.total - e.loaded) / v - 8 * 3600 * 1000).format("time"));
			t = n;
			l = e.loaded;
		}
	};
	r.addEventListener("progress", onProgress);
	r.onload = function() {
		r.removeEventListener("progress", onProgress);
		ReadBlob(n, r.response);
	};
	r.onreadystatechange = function() {
		switch(r.readyState) {
		case 4:
			if (r.readyState - s > 1) {
				SetInfo("failed");
			}
			break;
		default:
			s = r.readyState;
			break;
		}
	};
	r.open("GET", n, true);
	r.responseType = "blob";
	r.send();
}
function LoadFileInfo() {
	var script = document.createElement("script");
	script.src = "info.js";
	script.type = "text/javascript";
	script.async = false;
	script.onload = function() {
		if (Info) {
			var t = document.createElement("table");
			t.style.margin = "auto";
			var th = t.createTHead();
			var header = th.insertRow();
			for (var n in Info) {
				var h = document.createElement("th");
				h.innerHTML = n;
				header.appendChild(h);
			}
			var tb = t.createTBody();
			for (var i = 0; i < Info[n].length; i++) {
				var row = tb.insertRow();
				for (var n in Info) {
					var c = row.insertCell();
					if (n == "operate") {
						if (!IncludeAgent("Chrome") || (location.protocol != "file:")) {
							var aa = document.createElement("a");
							aa.innerText = "自动加载";
							aa.href = "javascript:void(0)";
							aa.name = Info["file"][i];
							aa.onclick = LoadFile;
							var da = document.createElement("div");
							da.appendChild(aa);
							c.appendChild(da);
						}
						var am = document.createElement("a");
						am.innerText = "手动下载";
						am.href = Info["file"][i];
						am.type = "application/zip";
						var dm = document.createElement("div");
						dm.appendChild(am);
						c.appendChild(dm);
					}
					else {
						c.align = (i == 1 ? "right" : "left");
						c.innerHTML = Info[n][i];
					}
				}
			}
			var tf = t.createTFoot();
			SetInfo(t);
		}
	};
	script.onerror = function(e) {
		SetInfo(e.type);
	};
	document.getElementsByTagName("head")[0].appendChild(script);
}
function ListChanged(e) {
  ReadData();
}
function Initialize() {
  var LoadConfigParameter = (function() {
    var loadLink = function(id, url) {
      var a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.innerHTML = document.getElementById(id).innerHTML;
      a.style.textDecoration = "none";
      a.style.color = "black";
      document.getElementById(id).innerHTML = "";
      document.getElementById(id).appendChild(a);
    };
    loadLink("divTitle", "http://shang.qq.com/wpa/qunwpa?idkey=11334256789a3e86e679f77ae86fb5f26d9e3baaff07f166f653df49a745a0f1");
    loadLink("divCopyright", "http://wpa.qq.com/msgrd?v=3&uin=308973930&site=ampedZ_" + Version + ".html&menu=yes");
    var loadAccept = function(id, m) {
      var v = [];
      for (var i = 0; i < m.length; i++) {
        v.push("★" + m[i].join(","));
      }
      v = v.join("\r\n");
      document.getElementById(id).title = v;
      document.getElementById(id).accept = (IncludeAgent("QQ") ? "" : v.replace(/★/g, "").replace(/\r\n/g, ","));
    };
    loadAccept("inputFile", [[".zar"]]);
	})();
  var LoadUrlParameter = (function() {
    var s = location.search.slice(1).split("&");
    for (var i = 0; i < s.length; i++) {
      var a = s[i].split("=");
      if (a.length == 2) {
        switch (a[0].toLowerCase()) {
        case "help":
          var m = (function() {
            var r = "";
            var helphelp = "\r\n<help>\r\n　[bgcolor]　Help of bgcolor\r\n　[show]　Help of show\r\n　[check]　Help of check\r\n　[default]　Help of default\r\n　[input]　Help of input\r\n　[all]　Help above all\r\n";
            var helpbgcolor = "\r\n<bgcolor>\r\n　[#rrggbbaa]　RGBA Hex\r\n";
            var helpshow = "\r\n<show>\r\n　[version]　Version\r\n　[bgcolor]　BackgroundColor\r\n";
            var helpcheck = "\r\n<check>\r\n　[le]　LittleEndian\r\n　[api]　SupportAPI\r\n　[agent]　UserAgent\r\n";
            var helpinput = "\r\n<input>\r\n　[filename.ext|filebufferbase64string]　Input File Info\r\n";
            var helpkey = "\r\n<key>\r\n　[module|key]　Module Key Info\r\n";
            var v = a[1].split(",");
            for (var j = 0; j < v.length; j++) {
              switch (v[j].toLowerCase()) {
              case "help":
                r += helphelp;
                break;
              case "bgcolor":
                r += helpbgcolor;
                break;
              case "show":
                r += helpshow;
                break;
              case "check":
                r += helpcheck;
                break;
              case "input":
                r += helpinput;
                break;
              case "key":
                r += helpkey;
                break;
              case "all":
                return helphelp + helpbgcolor + helpshow + helpcheck + helpinput + helpkey;
                break;
              }
            }
            return r;
          })();
          document.write(("【" + a[0] + "】\r\n\r\nexpurl/ampedZ.html?key1=value1&key2=value2,value3|value4&key3=name1:value5,value6;name2:value7|value8\r\n\r\n<key>　{name}　[value]　explain\r\n" + m).toHtml().replace(/\r\n/g, "</br>"))
          break;
        case "bgcolor":
          var v = a[1].split(",");
          var c = v[v.length - 1].slice(0, 8).padEnd(8, "0").splitEvery(2);
          if (c.isHex()) {
            var a = parseInt(c[0], 16) / 256;
            var r = parseInt(c[1], 16);
            var g = parseInt(c[2], 16);
            var b = parseInt(c[3], 16);
            document.body.style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
          }
          break;
        case "show":
          var m = (function() {
            var r = "";
            var showversion = "\r\nVersion：" + Version + "\r\n";
            var showbgcolor = "\r\nBgColor：" + (document.body.style.backgroundColor == "" ? "rgb(255, 255, 255)" : document.body.style.backgroundColor) + "\r\n";
            var v = a[1].split(",");
            for (var j = 0; j < v.length; j++) {
              switch (v[j].toLowerCase()) {
              case "version":
                r += showversion;
                break;
              case "bgcolor":
                r += showbgcolor;
                break;
              case "all":
                return showversion + showbgcolor;
                break;
              }
            }
            return r;
          })();
          alert("【" + a[0] + "】\r\n" + m);
          break;
        case "check":
          var m = (function() {
            var r = "";
            var checkle = "\r\nLittleEndian：" + LittleEndian + "\r\n";
            var checkapi = (function() {
              var n = ["File", "TypedArrays"];
              var m = [];
              for (var k = 0; k < n.length; k++) {
                m.push("\r\nSupport" + n[k] + "API：" + SupportAPI(n[k]));
              }
              return m.join("") + "\r\n";
            })();
            var checkagent = (function() {
              var n = ["MSIE", "Mozilla", "Chrome", "AppleWebKit", "Safari", "Mobile Safari", "UCBrowser", "QQ", "MicroMessenger"];
              var m = [];
              for (var k = 0; k < n.length; k++) {
                m.push("\r\nInclude" + n[k].replace(/\ /g, "") + "Agent：" + IncludeAgent(n[k]));
              }
              return m.join("") + "\r\n";
            })();
            var v = a[1].split(",");
            for (var j = 0; j < v.length; j++) {
              switch (v[j].toLowerCase()) {
              case "le":
                r += checkle;
                break;
              case "api":
                r += checkapi;
                break;
              case "agent":
                r += checkagent;
                break;
              case "all":
                return checkle + checkapi + checkagent;
                break;
              }
            }
            return r;
          })();
          alert("【" + a[0] + "】\r\n" + m);
          break;
        case "default":
          var v = a[1].split(";");
          for (var j = 0; j < v.length; j++) {
            var c = v[j].split(":");
            if (c.length == 2) {
              switch(c[0].toLowerCase()) {
              case "mode":
                var m = {"mode": "selectMode"};
                if (typeof m[c[0]] !== "undefined") {
                  var l = c[1].split("|");
                  for (var k = 0; k < l.length; k++) {
                    setSelected(m[c[0]], l[k]);
                  }
                }
                break;
              case "autoapply":
                var m = {"autoapply": "inputAutoApply"};
                if (typeof m[c[0]] !== "undefined") {
                  var l = c[1].split("|");
                  for (var k = 0; k < l.length; k++) {
                    if (l[k] == "true") {
                      setChecked(m[c[0]], true);
                      break;
                    }
                    else if (l[k] == "false") {
                      setChecked(m[c[0]], false);
                      break;
                    }
                  }
                }
                break;
              }
            }
          }
          break;
        case "input":
          var v = a[1].split(",");
          for (var j = 0; j < v.length; j++) {
            var f = v[j].split("|");
            if ((f.length == 2) && (j == 0)) {
              ReadInput(f[0], new Uint8Array().fromBase64(f[1]));
            }
          }
          break;
        case "key":
          var v = a[1].split(",");
          for (var j = 0; j < v.length; j++) {
            var c = v[j].split(":");
            if (c.length == 2) {
              var module = c[0].toLowerCase();
              switch(module) {
              case "data":
                Module.set(module, c[1]);
                break;
              }
            }
          }
          break;
        }
      }
    }
	})();
	var LoadControl = (function() {
		var a = document.createElement("a");
		a.innerText = "获取数据";
		a.href = "javascript:void(0)";
		a.onclick = LoadFileInfo;
		SetInfo(a);
	})();
	var addEvent = (function() {
		document.getElementById("inputFile").onchange = ReadFile;
		document.getElementById("selectList").onchange = ListChanged;
	})();
}
window.onload = Initialize;
