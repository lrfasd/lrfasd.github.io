"use strict";
function Zar(buffer) {
	var isValid = false;
	var Catagory = ["Style", "Accessory", "SubAccessory", "Item", "Head", "Face", "Body", "Emblem", "Furniture", "Coupon", "CustomizeCard", "CustomizeEffect", "Combine", "TreasureBox", "Emoticon", "CollectionBook", "Race", "StyleGroup", "StyleUsable", "NPC", "Prize", "ETC", "ValueSet", "Emotion", "Quest", "DailyQuest", "NewQuest", "BattleQuest", "Rule", "Stage", "Ranking", "Tournament", "SurvivalTournament", "SurvivalPrize", "RandomEntry"];
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
				var sp = function(s) {
					return (s || "").split(",");
				};
				var mp = function(o) {
					o = o || {};
					var v = [];
					for (var n in o) {
						v.push(n + "," + o[n]);
					}
					return v;
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
								d.push({"id": v["id"], "group": v["group"], "name": v["name"], "initial": v["initial"], "icon": v["path"] + "/icon.tex", "path": v["path"], "desc": v["desc"], "STR": v["STR"], "TEC": v["TEC"], "SPD": v["SPD"], "JMP": v["JMP"], "DEF": v["DEF"], "size": v["size"], "sex": v["sex"], "race": v["race"], "advanced": v["advanced"], "anger": v["anger"], "grudge": v["grudge"], "strongitems": v["strongitems"], "useableaccessories": v["useableaccessories"], "useablebodies": v["useablebodies"], "useableheads": v["useableheads"]});
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
								d.push({"setidx": v["setidx"], "id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "desc": v["desc"], "sex": v["sex"], "multiaccs": v["multiaccs"], "editable": v["editable"], "pcvan": v["pcvan"]});
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
								d.push({"setidx": v["setidx"], "id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "desc": v["desc"], "sex": v["sex"], "multiaccs": v["multiaccs"], "editable": v["editable"], "pcvan": v["pcvan"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "desc": v["desc"], "sex": v["sex"], "cls": v["cls"].join(""), "option": v["option"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "sex": v["sex"], "init": v["init"]});
							}
						}
					}
					return d;
				})();
				r["Face"] = (function() {
					var d = [];
					var k = "races";
					if (ser[k]) {
						var m = ["eyes", "noses", "mouths"];
						for (var c = 0; c < m.length; c++) {
							for (var n in ser[k]) {
								for (var j = 0; j < ser[k][n][m[c]].length; j++) {
									var v = ser[k][n][m[c]][j];
									if (v["id"]) {
										d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "race": v["race"], "init": v["init"]});
									}
								}
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "init": v["init"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "bigIcon": v["bigIcon"], "iconmax": v["iconmax"], "icons": br(v["icons"]), "animtime": br(v["animtime"]), "desc": v["desc"], "msg": v["msg"], "pts": getOdds("pts"), "gm": getOdds("gm"), "sex": v["sex"], "conditions": br(v["conditions"]), "get_type": br(v["get_type"])});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": v["path"], "desc": v["desc"], "type": v["type"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "category": v["category"], "type": v["type"], "value": v["value"], "present": v["present"], "period": v["period"], "periodstr": v["periodstr"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "bigIcon": v["bigIcon"], "desc": v["desc"], "elements": br(v["elements"].map(function(a){return a["effectid"];})), "priceGrade": v["priceGrade"]});
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
								d.push({"id": v["id"], "HP": v["amount2"][0].toSigned(), "MP": v["amount2"][1].toSigned(), "STR": v["amount"][0].toSigned(), "TEC": v["amount"][1].toSigned(), "SPD": v["amount"][2].toSigned(), "JMP": v["amount"][3].toSigned(), "DEF": v["amount"][4].toSigned(), "size": v["scale"], "CA": v["amount2"][6].toSigned(), "FA": v["amount2"][7].toSigned(), "IA": v["amount2"][8].toSigned(), "EA": v["amount2"][9].toSigned(), "CR": v["amount2"][2].toSigned(), "FR": v["amount2"][3].toSigned(), "IR": v["amount2"][4].toSigned(), "ER": v["amount2"][5].toSigned(), "rank": v["rank"] || "", "needs": br(sp(v["needs"])), "result": br(v["result"]), "ratio": br(v["ratio"]), "strongitems": v["strongitems"]});
							}
						}
					}
					return d;
				})();
				r["Combine"] = (function() {
					var d = [];
					var k = "newcombines";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "icon": ser[k][i]["icon"], "desc": ser[k][i]["desc"], "category": ser[k][i]["category"], "materials": br(ser[k][i]["materials"]), "prizes": br(ser[k][i]["prizes"]), "announce": br(ser[k][i]["mission"]), "dupindex": br(ser[k][i]["dupindex"]), "keepcustom": ser[k][i]["keepcustom"], "showpreview": ser[k][i]["showpreview"], "nowrank": ser[k][i]["nowrank"], "ranknum": ser[k][i]["ranknum"], "rankmaterials": br((ser[k][i]["rankmaterials"] || []).map(function(a){return a.join(",");})), "svindex": br(ser[k][i]["svindex"]), "svmate": br(ser[k][i]["svmate"])});
						}
					}
					return d;
				})();
				r["TreasureBox"] = (function() {
					var d = [];
					var k = "treasureboxes";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "iconc": v["iconc"], "icono": v["icono"], "desc": v["desc"], "type": v["type"], "exp": v["exp"], "prize": br(v["prize"]), "ratio": br(v["ratio"]), "announce": br(v["announce"]), "dupindex": br(v["dupindex"]), "style": v["style"], "secret": v["secret"], "accessory": v["accessory"], "tournament": v["tournament"]});
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
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "path": br(v["path"]), "grade": v["grade"], "time": v["time"], "loop": v["loop"]});
							}
						}
					}
					return d;
				})();
				r["CollectionBook"] = (function() {
					var d = [];
					var k = "collectionbooks";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "desc": v["desc"], "level": v["level"], "bonusPoint": v["bonusPoint"], "point": v["point"], "list": br(sp(v["list"])), "condition": br(v["condition"]), "prize": br(sp(v["prize"])), "duplicate": br(sp(v["duplicate"]))});
							}
						}
					}
					return d;
				})();
				r["Race"] = (function() {
					var d = [];
					var k = "races";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "basetex": v["basetex"], "sex": v["sex"], "facetype": v["facetype"], "eyes": br(v["eyes"].map(function(a){return a["id"];})), "noses": br(v["noses"].map(function(a){return a["id"];})), "mouths": br(v["mouths"].map(function(a){return a["id"];}))});
							}
						}
					}
					return d;
				})();
				r["StyleGroup"] = (function() {
					var d = [];
					var k = "stylegroups";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"]});
						}
					}
					return d;
				})();
				r["StyleUsable"] = (function() {
					var d = [];
					var k = "styleusable";
					if (ser[k]) {
						for (var n in ser[k]["usablemap"]) {
							d.push({"key": n, "value" : br(ser[k]["usablemap"][n])});
						}
					}
					return d;
				})();
				r["NPC"] = (function() {
					var d = [];
					var k = "npcs";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "HP": v["HP"], "MP": v["MP"], "STR": v["STR"], "TEC": v["TEC"], "SPD": v["SPD"], "JMP": v["JMP"], "DEF": v["DEF"], "size": v["size"], "guts": v["guts"], "seriousness": v["seriousness"], "savagery": v["savagery"], "guile": v["guile"], "responsibility": v["responsibility"], "urgency": v["urgency"], "playerdata": v["playerdata"], "stylename": v["stylename"], "accsname": v["accsname"], "headname": v["headname"], "facename": v["facename"], "bodyname": v["bodyname"], "userSkin": v["userSkin"], "accessory": v["accessory"], "subAccessory": v["subAccessory"], "equipment": v["equipment"], "equiprate": v["equiprate"], "strongitems": br(sp(v["strongitems"])), "dropitem": v["dropitem"], "taste": br(mp(v["taste"])), "serif": br(mp(v["serif"])), "uid": v["uid"], "guildID": v["guildID"], "isEvent": v["isEvent"], "isError": v["isError"]});
							}
						}
					}
					return d;
				})();
				r["Prize"] = (function() {
					var d = [];
					var k = "prizes";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "score": v["score"], "color": v["color"].join(","), "classname": v["classname"]});
							}
						}
					}
					return d;
				})();
				r["ETC"] = (function() {
					var d = [];
					var k = "etcs";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "bigIcon": v["bigIcon"], "desc": v["desc"], "sex": v["sex"], "type": v["type"], "arg": v["arg"]});
							}
						}
					}
					return d;
				})();
				r["ValueSet"] = (function() {
					var d = [];
					var k = "valuesets";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "icon": v["icon"], "bigIcon": v["bigIcon"], "desc": v["desc"], "sex": v["sex"]});
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
								d.push({"id": v["id"], "name": v["name"], "path": v["path"], "grade": v["grade"]});
							}
						}
					}
					return d;
				})();
				r["Quest"] = (function() {
					var d = [];
					var k = "quests";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "desc": ser[k][i]["desc"], "mission": ser[k][i]["mission"], "prize": ser[k][i]["prize"], "classname": ser[k][i]["classname"]});
						}
					}
					return d;
				})();
				r["DailyQuest"] = (function() {
					var d = [];
					var k = "dailyquests";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "desc": ser[k][i]["desc"], "mission": ser[k][i]["mission"], "prize": ser[k][i]["prize"], "classname": ser[k][i]["classname"]});
						}
					}
					return d;
				})();
				r["NewQuest"] = (function() {
					var d = [];
					var k = "newQuests";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "icon": ser[k][i]["icon"], "desc": ser[k][i]["desc"], "level": ser[k][i]["level"], "condition": br(sp(ser[k][i]["condition"])), "prize": br(sp(ser[k][i]["prize"])), "repeat": ser[k][i]["repeat"]});
						}
					}
					return d;
				})();
				r["BattleQuest"] = (function() {
					var d = [];
					var k = "battleQuest";
					if (ser[k]) {
						for (var i = 0; i < ser[k]["list"].length; i++) {
							d.push({"cond": ser[k]["list"][i]["cond"], "name": ser[k]["list"][i]["name"], "desc": ser[k]["list"][i]["desc"], "prizes": br(ser[k]["list"][i]["prizes"]), "ratios": br(ser[k]["list"][i]["ratios"]), "value": ser[k]["list"][i]["value"], "ratio": ser[k]["ratio"][ser[k]["table"].indexOf(ser[k]["list"][i]["cond"])]});
						}
					}
					return d;
				})();
				r["Rule"] = (function() {
					var d = [];
					var k = "rules";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "path": v["path"], "singledesc": v["singledesc"], "team1desc": v["team1desc"], "team2desc": v["team2desc"]});
							}
						}
					}
					return d;
				})();
				r["Stage"] = (function() {
					var d = [];
					var k = "stages";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n] || {};
							d.push({"id": n, "name": v["name"] || "", "name4room": v["name4room"] || "", "mapdata": br((v["mapdata"] || []).map(function(a){return mp(a).join(";");})), "path": v["path"] || "", "optionTable": v["optionTable"] || "", "rule": br(mp(v["rule"])), "rulepath": v["rulepath"] || "", "time": (isUndefined(v["time"]) ? "" : v["time"]), "zoomoutmax": (isUndefined(v["zoomoutmax"]) ? "" : v["zoomoutmax"]), "fixedCameraZoomOut": (isUndefined(v["fixedCameraZoomOut"]) ? "" : v["fixedCameraZoomOut"]), "fixedCameraLayer": (isUndefined(v["fixedCameraLayer"]) ? "" : v["fixedCameraLayer"]), "fixedCameraCenter": v["fixedCameraCenter"] || ""});
						}
					}
					return d;
				})();
				r["Ranking"] = (function() {
					var d = [];
					var k = "rankings";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "point": ser[k][i]["point"], "unit": ser[k][i]["unit"], "where": ser[k][i]["where"], "order": ser[k][i]["order"], "limit": ser[k][i]["limit"], "type": ser[k][i]["type"]});
						}
					}
					return d;
				})();
				r["Tournament"] = (function() {
					var d = [];
					var k = "tours";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "initial": ser[k][i]["initial"], "path": ser[k][i]["path"], "desc": ser[k][i]["desc"], "type": ser[k][i]["type"], "conditions": br(ser[k][i]["conditions"]), "people": br(ser[k][i]["people"]), "prizes": br(ser[k][i]["prizes"]), "turbo": ser[k][i]["turbo"], "options": br(sp(ser[k][i]["options"])), "itemenabled": ser[k][i]["itemenabled"], "npcenabled": ser[k][i]["npcenabled"], "accslimitenabled": ser[k][i]["accslimitenabled"], "angerenabled": ser[k][i]["angerenabled"], "editable": ser[k][i]["editable"], "stagenum": ser[k][i]["stagenum"], "stages": br(ser[k][i]["stages"].map(function(a){return a["stages"].join(",");})), "clearIndex": ser[k][i]["clearIndex"], "rankingorder": ser[k][i]["rankingorder"], "rankingtype": ser[k][i]["rankingtype"]});
						}
					}
					return d;
				})();
				r["SurvivalTournament"] = (function() {
					var d = [];
					var k = "svtours";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "path": v["path"], "stagetypes": br(v["stagetypes"]), "isTeam": v["isTeam"], "offsets": br(v["offsets"]), "defratio": br(v["defratio"])});
							}
						}
					}
					return d;
				})();
				r["SurvivalPrize"] = (function() {
					var d = [];
					var k = "svprizes";
					if (ser[k]) {
						for (var n in ser[k]) {
							var v = ser[k][n];
							if (v["id"]) {
								d.push({"id": v["id"], "name": v["name"], "desc": v["desc"], "prize": v["prize"]});
							}
						}
					}
					return d;
				})();
				r["RandomEntry"] = (function() {
					var d = [];
					var k = "randomEntrys";
					if (ser[k]) {
						for (var i = 0; i < ser[k].length; i++) {
							d.push({"id": ser[k][i]["id"], "name": ser[k][i]["name"], "desc": ser[k][i]["desc"], "idAmped": ser[k][i]["idAmped"], "idTeam": ser[k][i]["idTeam"]});
						}
					}
					return d;
				})();
			}
			return r;
		})();
		Icon = (function() {
			var r = {};
			if (File["resource.tab"]) {
				var tab = File["resource.tab"].extractFileList();
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
					case "bigIcon":
					case "iconc":
					case "icono":
						if (Icon[t[i][n]]){
							var img = new Image();
							img.src = Icon[t[i][n]];
							row.insertCell().appendChild(img);
						}
						else {
							row.insertCell().innerHTML = t[i][n];
						}
						break;
					case "useableaccessories":
					case "useablebodies":
					case "useableheads":
						var span = document.createElement("span");
						span.innerText = t[i][n]["elementData"].length;
						span.title = t[i][n]["elementData"].join(",");
						row.insertCell().appendChild(span);
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