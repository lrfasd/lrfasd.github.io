"use strict";
function Zar(buffer) {
	var isValid = false;
	var Catagory = ["Style", "Accessory", "SubAccessory", "Item", "Head", "Body", "Coupon", "CustomizeCard", "CustomizeEffect", "Furniture", "Emblem", "Emotion", "Emoticon"];
	var File = {};
	var Data = {};
  var Icon = {};
  var Table = {};
	var reset = function() {
    isValid = false;
		File = {};
		Data = {};
		Icon = {};
		Table = {};
	};
	var fromBuffer = function() {
		File = (function() {
			var r = {};
			var p = 0;
			var t = 0;
			var f;
			var setFile = function() {
				if (f) {
					var b = (function() {
						switch (f["method"]) {
						case 0:
							return f["compressedBuffer"];
							break;
						case 8:
							return f["compressedBuffer"].inflate();
							break;
						}
					})();
					r[f["path"]] = b;
					f = undefined;
				}
			};
			var readInt = function(n) {
				var r = buffer.getInt(n, p, true);
				p += n;
				return r;
			};
			var readText = function(n) {
				var r = buffer.getText(p, n);
				p += n;
				return r;
			};
			var readHeader = function() {
				while (p + 3 < buffer.length) {
					if ((buffer[p] == 0x50) && (buffer[p + 1] == 0x4B)) {
						var v = readInt(4);
						switch (v) {
						case 0x04034B50:
						case 0x08074B50:
							return v;
							break;
						}
						p -= 2;
					}
					else {
						p += 1;
					}
				}
				return 0;
			};
			var readDateTime = function() {
				var dos = readInt(4);
				if (dos) {
					return new Date().fromDos(dos);
				}
			};
			var readCRC32 = function() {
				return new Uint8Array(4).setInt32(readInt(4), 0, false).getHex();
			};
			var readExtra = function(n) {
				var r = [];
				var e = p + n;
				while (p < e) {
					var m = readInt(2);
					switch(m) {
					case 0x7075:
						var size = readInt(2);
						var version = readInt(1);
						var crc32 = readInt(4);
						var path = readText(size - 5);
						r["path"] = path;
						break;
					case 0x6375:
						var size = readInt(2);
						var version = readInt(1);
						var crc32 = readInt(4);
						var comment = readText(size - 5);
						r["comment"] = comment;
						break;
					default:
						p = e;
						break;
					}
				}
				return r;
			};
			while(true) {
				var header = readHeader();
				switch(header) {
				case 0x04034B50:
					var eVersion = readInt(2);
					var flag = readInt(2);
					var method = readInt(2);
					var datetime = readDateTime();
					var crc32 = readCRC32();
					var cSize = readInt(4);
					var uSize = readInt(4);
					var nLength = readInt(2);
					var eLength = readInt(2);
					var path = readText(nLength);
					var extra = readExtra(eLength);
					if (flag >> 3 & 1) {
						t = p;
					}
					setFile();
					f = {"path": path, "compressedBuffer": buffer.slice(p, p + cSize), "datetime": datetime, "crc32": crc32, "method": method};
					p += cSize;
					break;
				case 0x08074B50:
					var crc32 = readCRC32();
					var cSize = readInt(4);
					var uSize = readInt(4);
					if (t) {
						f = f || {};
						f["compressedBuffer"] = buffer.slice(t, t + cSize);
						f["crc32"] = crc32;
						t = 0;
					}
					break;
				}
				if (header == 0) {
					setFile();
					break;
				}
			}
			return r;
		})();
		Data = (function() {
			var r = {};
			if (File["setting.ser"]) {
				var ser = File["setting.ser"].unserializeJava()[3];
				var s = function(a, b) {
					return a["setidx"] - b["setidx"];
				};
				var br = function(a) {
					return (a || []).join("<br/>");
				};
				r["Style"] = (function() {
					var d = [];
					var k = "styles";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							var index = parseInt(n);
							if (v["id"]) {
								d.push({"id": v["id"], "group": v["group"], "name": v["name"], "initial": v["initial"], "icon": v["path"] + "/icon.tex", "desc": v["desc"], "STR": v["STR"], "TEC": v["TEC"], "SPD": v["SPD"], "JMP": v["JMP"], "DEF": v["DEF"], "size": v["size"], "sex": v["sex"], "race": v["race"], "advanced": v["advanced"], "anger": v["anger"], "grudge": v["grudge"], "strongitems": "", "useableaccessories": "", "useableheads": "", "useablebodies": ""});
							}
						}
					}
					return d;
				})();
				r["Accessory"] = (function() {
					var d = [];
					var k = "accs";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"setidx": v["setidx"], "id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "sex": v["sex"], "multiaccs": v["multiaccs"], "editable": v["editable"], "pcvan": v["pcvan"], "useablestyles": ""});
							}
						}
						d = d.sort(s);
					}
					return d;
				})();
				r["SubAccessory"] = (function() {
					var d = [];
					var k = "subaccs";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"setidx": v["setidx"], "id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "sex": v["sex"], "multiaccs": v["multiaccs"], "editable": v["editable"], "pcvan": v["pcvan"]});
							}
						}
						d = d.sort(s);
					}
					return d;
				})();
				r["Item"] = (function() {
					var d = [];
					var k = "items";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "sex": v["sex"], "class": v["cls"].join("")});
							}
						}
					}
					return d;
				})();
				r["Head"] = (function() {
					var d = [];
					var k = "heads";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "sex": v["sex"], "init": v["init"]});
							}
						}
					}
					return d;
				})();
				r["Body"] = (function() {
					var d = [];
					var k = "bodies";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "init": v["init"]});
							}
						}
					}
					return d;
				})();
				r["Coupon"] = (function() {
					var d = [];
					var k = "coupons";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "category": v["category"], "type": v["type"], "value": v["value"], "present": v["present"], "period": v["period"], "periodstr": v["periodstr"]});
							}
						}
					}
					return d;
				})();
				r["CustomizeCard"] = (function() {
					var d = [];
					var k = "customizecard";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "elements": br(v["elements"].map(function(a){return a["effectid"];})), "priceGrade": v["priceGrade"]});
							}
						}
					}
					return d;
				})();
				r["CustomizeEffect"] = (function() {
					var d = [];
					var k = "customizeeffect";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "HP": v["amount2"][0].toSigned(), "MP": v["amount2"][1].toSigned(), "STR": v["amount"][0].toSigned(), "TEC": v["amount"][1].toSigned(), "SPD": v["amount"][2].toSigned(), "JMP": v["amount"][3].toSigned(), "DEF": v["amount"][4].toSigned(), "size": v["scale"], "CA": v["amount2"][6].toSigned(), "FA": v["amount2"][7].toSigned(), "IA": v["amount2"][8].toSigned(), "EA": v["amount2"][9].toSigned(), "CR": v["amount2"][2].toSigned(), "FR": v["amount2"][3].toSigned(), "IR": v["amount2"][4].toSigned(), "ER": v["amount2"][5].toSigned(), "rank": v["rank"] || "", "needs": v["needs"] || "", "ratio": br(v["ratio"]), "result": br(v["result"]), "strongitems": v["strongitems"]});
							}
						}
					}
					return d;
				})();
				r["Furniture"] = (function() {
					var d = [];
					var k = "furnitures";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "type": v["type"]});
							}
						}
					}
					return d;
				})();
				r["Emblem"] = (function() {
					var d = [];
					var k = "emblems";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								var getOdds = function(c) {
									for (var i = 0; i < v["elements"].length; i++) {
										if (v["elements"][i]["effectid"] == c) {
											return v["elements"][i]["odds"];
										}
									}
									return 1;
								};
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "msg": v["msg"], "pts": getOdds("pts"), "gm": getOdds("gm"), "sex": v["sex"], "iconmax": v["iconmax"], "conditions": br(v["conditions"]), "get_type": br(v["get_type"])});
							}
						}
					}
					return d;
				})();
				r["Emotion"] = (function() {
					var d = [];
					var k = "emotions";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "grade": v["grade"]});
							}
						}
					}
					return d;
				})();
				r["Emoticon"] = (function() {
					var d = [];
					var k = "emoticons";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "grade": v["grade"], "time": v["time"], "loop": v["loop"]});
							}
						}
					}
					return d;
				})();
				console.log(ser)
			}
			return r;
		})();
		Icon = (function() {
			var r = {};
			if (File["resource.tab"]) {
				var tab = File["resource.tab"].extractFlieList();
				for (var i = 0; i < tab.length; i++) {
					if (tab[i]["name"] && tab[i]["buffer"]) {
						r[tab[i]["name"].replace(/-/g, "/").replace(/(.*).bmp/, '$1.tex')] = URL.createObjectURL(new Blob([tab[i]["buffer"]], {"type": "image/bmp"}));
					}
				}
			}
			return r;
		})();
		isValid = true;
	};
	var getTable = function(c) {
		if (Catagory.indexOf(c) != -1) {
			var t = Data[c];
			var r = document.createElement("table");
			r.name = c;
			var th = r.createTHead();
			if (t.length) {
				var header = th.insertRow();
				for (var n in t[0]) {
					var h = document.createElement("th");
					h.innerHTML = n;
					header.appendChild(h);
				}
			}
			var tb = r.createTBody();
			for (var i = 0; i < t.length; i++) {
				var row = tb.insertRow();
				for (var n in t[i]) {
					switch(n) {
					case "icon":
						if (Icon[t[i][n]]){
							var img = new Image();
							img.src = Icon[t[i][n]];
							row.insertCell().appendChild(img);
						}
						else {
							row.insertCell().innerHTML = t[i][n];
						}
						break;
					default:
						row.insertCell().innerHTML = t[i][n];
						break;
					}
				}
			}
			var tf = r.createTFoot();
			return r;
		}
	};
	this.GetList = function() {
		var r = [];
		for (var i = 0; i < Catagory.length; i++) {
			if (Data[Catagory[i]] && Data[Catagory[i]].length) {
				r.push({"name": Catagory[i], "count": Data[Catagory[i]].length});
			}
		}
		return r;
	};
	this.GetTable = function(c) {
		Table[c] = Table[c] || getTable(c);
		return Table[c];
	};
	this.GetFilter = function(c, s) {
		var r = {};
		var match = function(d, s) {
			return false;
		};
		Table[c] = Table[c] || getTable(c);
		if (Table[c]) {
			for (var n in Table[c]) {
				r[n] = match(Table[c][n], s);
			}
		}
		return r;
	};
  Object.defineProperty(this, "IsValid", {
    "get": function () {
      return isValid;
    }
  });
  (function() {
		if (buffer.length == 0) {
			return;
		}
		reset();
		fromBuffer();
  })();
}