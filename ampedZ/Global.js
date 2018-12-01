"use strict";
var Version = "";
window.isObject = function(t) {
  return typeof t === "object";
};
window.isNull = function(t) {
  return !t && (typeof t !== "undefined") && (t != 0);
};
window.isUndefined = function(t) {
  return typeof t === "undefined";
};
window.isInteger = function(t) {
  return Math.round(t) == t;
};
window.lsLocal = function(t) {
	var img = new Image();
	img.src = "";
	return img.src.startWith("file");
};
Number.prototype.toSigned = function(l) {
	var b = (1 << l * 8) - 1;
	return (this > b >> 1 ? this | ~b : this);
}
Number.prototype.toUnsigned = function(l) {
	var b = (1 << l * 8) - 1;
	return (this < 0 ? this & b : this);
}
Number.prototype.toAbbreviated = function(l) {
  return Math.round(this * Math.pow(10, l)) / Math.pow(10, l);
};
Number.prototype.toByteLength = function() {
	var l = (arguments.length > 0 ? arguments[0] : 0);
  var v = this;
  var m = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "DB", "NB"];
  var n = 0;
  while (n < m.length - 1) {
    if (v > 1024) {
      n += 1;
      v /= 1024;
    }
    else {
      break;
    }
  }
  return (n == 0 ? v : v.toFixed(l)) + m[n];
};
String.prototype.startWith = function(c) {
	if (c.length > this.length) {
		return false;
	}
	for (var i = 0; i < c.length; i++) {
		if (c[i] != this[i]) {
			return false;
		}
	}
	return true;
};
String.prototype.endWith = function(c) {
	if (c.length > this.length) {
		return false;
	}
	for (var i = 0; i < c.length; i++) {
		if (c[c.length - 1 - i] != this[this.length - 1 - i]) {
			return false;
		}
	}
	return true;
};
String.prototype.fill = function(l) {
	var c = (arguments.length > 1 ? arguments[1] : "0");
	var b = (arguments.length > 2 ? arguments[2] : true);
	if (l <= this.length) {
		return this;
	}
	if (c.length == 0) {
		c = "0";
	}
	if (c.length > 1) {
		c = c.substring(0, 1);
	}
	var r = [];
	for (var i = 0; i < l - this.length; i++) {
		r.push(c);
	}
	if (b) {
		return r.join("") + this;
	}
	 else {
		return this + r.join("");
	}
};
String.prototype.splitEvery = function(n) {
	var r = [];
	for (var i = 0; i < this.length; i++) {
		r.push(this.substr(i, n));
		i += n - 1;
	}
	return r;
};
String.prototype.insertEvery = function(n, c) {
	return this.splitEvery(n).join(c);
};
Array.prototype.copy = function() {
  return this.slice(0);
};
Array.prototype.indexOf = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : 0);
	for (var i = s; i < this.length; i++) {
		if (this[i] == t) {
      return i;
		}
	}
	return -1;
};
Array.prototype.writes = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : this.length);
	if (isUndefined(t.length) || !isObject(t)) {
		t = [t];
	}
	if (t.length == 0) {
    return this;
	}
	if (s < 0) {
		s = 0;
	}
	for (var i = 0; i < t.length; i++) {
		this[s + i] = t[i];
	}
	return this;
};
Array.prototype.write = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : this.length);
  this.writes([t], s);
	return this;
};
Array.prototype.inserts = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : this.length);
	if (isUndefined(t) || !isObject(t)) {
		t = [t];
	}
	if (t.length == 0) {
    return this;
	}
	if (s < 0) {
		s = 0;
	}
	var a = [];
	for (var i = s; i < this.length; i++) {
		a.push(this[i]);
	}
	this.splice(s);
	this.writes(t);
	this.writes(a);
	return this;
};
Array.prototype.insert = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : this.length);
  this.inserts([t], s);
	return this;
};
Uint8Array.prototype.fromHex = function(t) {
	var format = (function() {
		t = t.replace(/[^A-Fa-f0-9]/g, "").replace(/(\s|\r|\n)/g, "").toUpperCase();
		if (t == "") {
			return new Uint8Array(0);
		}
		if (t.length % 2 != 0) {
			t += "0";
		}
	})();
	var r = new Uint8Array(t.length / 2);
	for (var i = 0; i < r.length; i++) {
		r[i] = parseInt(t.substr(i * 2, 2), 16);
	}
	return r;
};
Uint8Array.prototype.setInt32 = function(t) {
	var s = (arguments.length > 1 ? arguments[1] : 0);
	var e = (arguments.length > 2 ? arguments[2] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
    return this;
	}
	new DataView(this.buffer, s, 4).setInt32(0, t, e);
	return this;
};
Uint8Array.prototype.getInt8 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 1).getInt8(0);
};
Uint8Array.prototype.getInt16 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 2).getInt16(0, e);
};
Uint8Array.prototype.getInt32 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 4).getInt32(0, e);
};
Uint8Array.prototype.getInt = function(l) {
	var s = (arguments.length > 1 ? arguments[1] : 0);
	var e = (arguments.length > 2 ? arguments[2] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	switch (l) {
	case 1:
		return this.getInt8(s);
		break;
	case 2:
		return this.getInt16(s, e);
		break;
	case 3:
		if (e) {
			return this.getInt16(s, e) + this.getInt8(s + 2) * 0x10000;
		}
		 else {
			return this.getInt8(s) * 0x10000 + this.getInt16(s + 1, e);
		}
		break;
	case 4:
		return this.getInt32(s, e);
		break;
	case 8:
		if (e) {
			return this.getInt32(s, e) + this.getInt32(s + 4, e) * 0x100000000;
		}
		 else {
			return this.getInt32(s, e) * 0x100000000 + this.getInt32(s + 4, e);
		}
		break;
	}
};
Uint8Array.prototype.getUint8 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 1).getUint8(0);
};
Uint8Array.prototype.getUint16 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 2).getUint16(0, e);
};
Uint8Array.prototype.getUint32 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 4).getUint32(0, e);
};
Uint8Array.prototype.getUint = function(l) {
	var s = (arguments.length > 1 ? arguments[1] : 0);
	var e = (arguments.length > 2 ? arguments[2] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	switch (l) {
	case 1:
		return this.getUint8(s);
		break;
	case 2:
		return this.getUint16(s, e);
		break;
	case 3:
		if (e) {
			return this.getUint16(s, e) + this.getUint8(s + 2) * 0x10000;
		}
		 else {
			return this.getUint8(s) * 0x10000 + this.getUint16(s + 1, e);
		}
		break;
	case 4:
		return this.getUint32(s, e);
		break;
	case 8:
		if (e) {
			return this.getUint32(s, e) + this.getUint32(s + 4, e) * 0x100000000;
		}
		 else {
			return this.getUint32(s, e) * 0x100000000 + this.getUint32(s + 4, e);
		}
	}
};
Uint8Array.prototype.getFloat32 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 4).getFloat32(0, e);
};
Uint8Array.prototype.getFloat64 = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	return new DataView(this.buffer, s, 8).getFloat64(0, e);
};
Uint8Array.prototype.getFloat = function(l) {
	var s = (arguments.length > 1 ? arguments[1] : 0);
	var e = (arguments.length > 2 ? arguments[2] : LittleEndian);
	if ((s < 0) || (s > this.length - 1)) {
		return 0;
	}
	switch (l) {
	case 4:
		return this.getFloat32(s, e);
		break;
	case 8:
		return this.getFloat64(s, e);
		break;
	}
};
Uint8Array.prototype.getBit = function(n) {
	var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
	return (this[n >> 3] || 0) >> (e ? n % 8 : 7 - n % 8) & 1;
};
Uint8Array.prototype.getHex = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var l = (arguments.length > 1 ? arguments[1] : this.length - s);
	var c = (arguments.length > 2 ? arguments[2] : "");
	var b = (arguments.length > 3 ? arguments[3] : true);
	if ((s < 0) || (s > this.length - 1)) {
		return "";
	}
	l = Math.min(l, this.length - s);
	var r = [];
	var e = s + l;
	for (var i = s; i < e; i++) {
		r.push((this.buffer[i] || this[i]).toString(16).fill(2, "0", true));
	}
	r = r.join(c);
	if (b) {
		r = r.toUpperCase();
	}
	return r;
};
Uint8Array.prototype.getText = function() {
	var s = (arguments.length > 0 ? arguments[0] : 0);
	var l = (arguments.length > 1 ? arguments[1] : this.length - s);
	if ((s < 0) || (s > this.length - 1)) {
		return "";
	}
	l = Math.min(l, this.length - s);
	if (l == 0) {
		return "";
	}
	return decodeURIComponent("%" + this.getHex(s, l).insertEvery(2, "%"));
};
Uint8Array.prototype.inflate = function() {
	if (!this.length) {
		return new Uint8Array();
	}
  var buffer = this;
  var r = [];
  var w = 0;
  var p = 0;
  var mO = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var mL = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  var mD = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  var getTree = function(t) {
    var v = [];
    var d = [];
    for (var i = 0; i < t.length; i++) {
      d[t[i]] = d[t[i]] || [];
      d[t[i]].push(i);
    }
    var c = 0;
    for (var i = 1; i < d.length; i++) {
      c <<= 1;
      if (d[i]) {
        for (var j = 0; j < d[i].length; j++) {
          v.push([i, c, d[i][j]]);
          c += 1;
        }
      }
    }
    return v;
  };
  var readInt = function(n) {
		var e = (arguments.length > 1 ? arguments[1] : LittleEndian);
		var v = 0;
		if (e) {
			for (var i = 0; i < n; i++) {
				v += buffer.getBit(p + i, true) * Math.pow(2, i);
			}
		}
		else {
			for (var i = n; i > 0; i--) {
				v += buffer.getBit(p + i - 1, true) * Math.pow(2, n - i);
			}
		}
		p += n;
		return v;
  };
  var readCode = function(t) {
    for (var i = 0; i < t.length; i++) {
      if (readInt(t[i][0], false) == t[i][1]) {
        return t[i][2];
      }
      else {
        p -= t[i][0];
      }
    }
  };
  var readC = function(l) {
    var v = [];
    var c = 0;
    while(v.length < l) {
      var s = readCode(tB);
      switch(s){
      case 16:
        var n = readInt(2, true) + 3;
        for (var i = 0; i < n; i++) {
          v.push(c);
        }
        break;
      case 17:
        var n = readInt(3, true) + 3;
        for (var i = 0; i < n; i++) {
          v.push(0);
        }
        break;
      case 18:
        var n = readInt(7, true) + 11;
        for (var i = 0; i < n; i++) {
          v.push(0);
        }
        break;
      default:
        c = s;
        v.push(c);
        break;
      }
    }
    return v;
  };
  var readL = function(n) {
    var c = Math.floor(n / 4 - 1);
    c = (c < 0 ? 0 : c);
    c = (c > 5 ? 0 : c);
    return mL[n] + readInt(c, true);
  };
  var readD = function(n) {
    var c = Math.floor(n / 2 - 1);
    c = (c < 0 ? 0 : c);
    return mD[n] + readInt(c, true);
  };
  var readData = function() {
		var e = buffer.length * 8;
    while(p < e) {
      var s = readCode(tL);
      if (s < 256) {
        r[w++] = s;
      }
      else if (s > 256) {
        var l = readL(s - 256 - 1);
        var d = readD(readCode(tD));
        for (var i = 0; i < l; i++) {
          r[w++] = r[w - 1 - d];
        }
      }
      else if (s == 256) {
        break;
      }
    }
  };
  while(true) {
    var h = readInt(1);
    var m = readInt(2, true);
    switch(m) {
    case 0:
      p += 8 - (p % 8 || 8);
      var l = readInt(16, true);
      var nl = readInt(16, true);
      var a = buffer.slice(p / 8, p / 8 + l);
      for (var i = 0; i < a.length; i++) {
        r[w++] = a[i];
      }
      p += l * 8;
      break;
    case 1:
      var tL = (function() {
        var v = [];
        for (var i = 0; i < 286; i++) {
					switch(true) {
					case (i < 144):
						v.push([8, i + 48, i]);
						break;
					case (i < 256):
						v.push([9, i + 256, i]);
						break;
					case (i < 280):
						v.push([7, i - 256, i]);
						break;
					case (i < 286):
						v.push([8, i - 88, i]);
						break;
					}
        }
        return v;
      })();
      var tD = (function() {
        var v = [];
        for (var i = 0; i < 30; i++) {
          v.push([5, i, i]);
        }
        return v;
      })();
      readData();
      break;
    case 2:
      var lL = readInt(5, true) + 256 + 1;
      var lD = readInt(5, true) + 1;
      var lB = readInt(4, true) + 4;
      var cB = (function() {
        var v = [];
        var d = [];
        for (var i = 0; i < lB; i++) {
          d.push(readInt(3, true));
        }
        for (var i = lB; i < 19; i++) {
          d.push(0);
        }
        for (var i = 0; i < mO.length; i++) {
          v[mO[i]] = d[i];
        }
        return v;
      })();
      var tB = getTree(cB);
      var cL = readC(lL);
      var tL = getTree(cL);
      var cD = readC(lD);
      var tD = getTree(cD);
      readData();
      break;
    }
    if (h) {
      break;
    }
  }
  return new Uint8Array(r);
};
Uint8Array.prototype.unserializeJava = function() {
  var buffer = this;
	var table = [];
	var p = 0;
  var BV = {
		"STREAM_MAGIC": 0xACED,
		"STREAM_VERSION": 0x0005,
		"baseWireHandle": 0x7E0000
  };
	var TS = {
		"BYTE": 0x42,
		"CHAR": 0x43,
		"DOUBLE": 0x44,
		"FLOAT": 0x46,
		"INTEGER": 0x49,
		"LONG": 0x4A,
		"SHORT": 0x53,
		"BOOLEAN": 0x5A,
		"ARRAY": 0x5B,
		"OBJECT": 0x4C
	};
	var TC = {
		"NULL": 0x70,
		"REFERENCE": 0x71,
		"CLASSDESC": 0x72,
		"OBJECT": 0x73,
		"STRING": 0x74,
		"ARRAY": 0x75,
		"CLASS": 0x76,
		"BLOCKDATA": 0x77,
		"ENDBLOCKDATA": 0x78,
		"RESET": 0x79,
		"BLOCKDATALONG": 0x7A,
		"EXCEPTION": 0x7B,
		"LONGSTRING": 0x7C,
		"PROXYCLASSDESC": 0x7D,
		"ENUM": 0x7E
	};
	var SC = {
		"WRITE_METHOD": 0x01,
		"SERIALIZABLE": 0x02,
		"EXTERNALIZABLE": 0x04,
		"BLOCK_DATA": 0x08,
		"ENUM": 0x10
	};
  var readUint = function(n) {
    var r = buffer.getUint(n, p, false);
    p += n;
    return r;
  };
  var readInt = function(n) {
    var r = buffer.getInt(n, p, false);
    p += n;
    return r;
  };
  var readFloat = function(n) {
    var r = buffer.getFloat(n, p, false).toAbbreviated(4);
    p += n;
    return r;
  };
	var readUtf = function(n) {
    var r = buffer.getText(p, n);
    p += n;
    return r;
  };
	var readNull = function() {
		return {"type": TC.NULL, "value": null};
	};
	var readHandle = function() {
		return table[readInteger() - BV.baseWireHandle];
  };
  var readByte = function() {
		return readUint(1);
  };
  var readChar = function() {
		return String.fromCharCode(readShort());
  };
  var readDouble = function() {
		return readFloat(8);
  };
  var readSingle = function() {
		return readFloat(4);
  };
  var readInteger = function() {
		return readInt(4);
  };
  var readLong = function() {
		return readInt(4) * 0x100000000 + readInt(4);
  };
  var readShort = function() {
		return readInt(2);
  };
  var readBoolean = function() {
		return (readUint(1) != 0 ? true : false);
  };
  var readBuffer = function(n) {
		var r = new Uint8Array(buffer.slice(p, p + n));
		p += n;
		return r;
  };
	var readText = function() {
    return readUtf(readShort());
  };
	var readClassDesc = function() {
		var r = {"type": TC.CLASSDESC, "value": {}};
		r["value"]["class"] = readText();
		r["value"]["suid"] = readLong();
		addHandle(r);
		r["value"]["flag"] = readByte();
		var size = readShort();
		r["value"]["field"] = (function() {
			var v = [];
			while (buffer[p] != TC.ENDBLOCKDATA) {
				var f = {};
				f["type"] = readByte();
        f["key"] = readText();
        f["class"] = (function() {
          switch(f["type"]) {
          case TS.ARRAY:
          case TS.OBJECT:
            return getString();
            break;
          }
				})();
				v.push(f);
			}
			if (buffer[p] == TC.ENDBLOCKDATA) {
				p += 1;
			}
			return v;
		})();
		return r;
  };
	var readObject = function() {
		var r = {"type": TC.OBJECT, "value": {}};
		r["value"]["desc"] = getClassDesc();
		addHandle(r);
		r["value"]["data"] = (function() {
			var v = {};
			for (var i = 0; i < r["value"]["desc"]["value"]["fields"].length; i++) {
				v[r["value"]["desc"]["value"]["fields"][i]["key"]] = getValue(r["value"]["desc"]["value"]["fields"][i]["type"]);
			}
			return v;
		})();
		r["value"]["content"] = (function() {
			var v = [];
			if (r["value"]["desc"]["value"]["flag"] % 2 == SC.WRITE_METHOD) {
				switch(r["value"]["desc"]["value"]["class"]) {
				case "java.util.Hashtable":
				case "java.util.HashMap":
					var block = getBlockData();
					while (buffer[p] != TC.ENDBLOCKDATA) {
						var key = getObject();
						var value = getObject();
						v.push({"key": key, "value": value});
					}
					break;
				case "java.util.ArrayList":
					var block = getBlockData();
					var size = r["value"]["data"]["size"];
					while (buffer[p] != TC.ENDBLOCKDATA) {
						v.push(getObject());
					}
					break;
				case "java.util.Vector":
					break;
				}
				if (buffer[p] == TC.ENDBLOCKDATA) {
					p += 1;
				}
			}
			return v;
		})();
		return r;
  };
	var readString = function() {
		var size = readShort();
		var v = {"type": TC.STRING, "value": readUtf(size)};
		addHandle(v);
		return v;
  };
	var readArray = function() {
		var r = {"type": TC.ARRAY, "value": {}};
		r["value"]["desc"] = getClassDesc();
		addHandle(r);
		var size = readInteger();
		r["value"]["data"] = (function() {
      var v = [];
      var type = r["value"]["desc"]["value"]["class"].charCodeAt(1);
			for (var i = 0; i < size; i++) {
        var value = getValue(type);
        v.push(value);
			}
      return v;
		})();
		return r;
  };
	var readClass = function() {
		var r = {"type": TC.CLASS, "value": {}};
		r["value"]["desc"] = getClassDesc();
		addHandle(r);
		return r;
  };
	var readBlockData = function() {
		return {"type": TC.BLOCKDATA, "value": readBuffer(readByte())};
  };
	var readBlockDataLong = function() {
		return {"type": TC.BLOCKDATALONG, "value": readBuffer(readInt(4))};
  };
	var readException = function() {
    return {"type": TC.EXCEPTION};
  };
	var readLongString = function() {
		var size = readLong();
		var v = {"type": TC.LONGSTRING, "value": readUtf(size)};
		addHandle(v);
		return v;
  };
	var readProxyClassDesc = function() {
		var r = {"type": TC.PROXYCLASSDESC, "value": {}};
		addHandle(r);
		var size = readInteger();
		r["value"]["interface"] = (function() {
			var v = [];
			for (var i = 0; i < size; i++) {
				var name = readText();
				v.push(name);
			}
			return v;
		})();
		return r;
  };
	var readEnum = function() {
		var r = {"type": TC.ENUM, "value": {}};
		r["value"]["desc"] = getClassDesc();
		addHandle(r);
		r["value"]["name"] = getString();
		return r;
  };
  var addHandle = function(object) {
    object["handle"] = table.length;
    table.push(object);
  };
	var toSimple = function(data) {
    var d = (arguments.length > 1 ? arguments[1] : data);
		if (data["value"]["data"] && data["value"]["data"]["id"] && data["value"]["data"]["id"]["value"]) {
			return data["value"]["data"]["id"];
		}
		else if (data["value"]["data"] && data["value"]["data"]["name"] && data["value"]["data"]["name"]["value"]) {
			return data["value"]["data"]["name"];
		}
		else {
			return d;
		}
	};
	var getValue = function(type) {
    switch(type) {
    case TS.BYTE:
      return readByte();
      break;
    case TS.CHAR:
      return readChar();
      break;
    case TS.DOUBLE:
      return readDouble();
      break;
    case TS.FLOAT:
      return readSingle();
      break;
    case TS.INTEGER:
      return readInteger();
      break;
    case TS.LONG:
      return readLong();
      break;
    case TS.SHORT:
      return readShort();
      break;
    case TS.BOOLEAN:
      return readBoolean();
      break;
    case TS.ARRAY:
    case TS.OBJECT:
      return getObject();
      break;
    }
	};
	var getString = function() {
		var code = readByte();
		switch(code) {
		case TC.NULL:
			return readNull();
      break;
		case TC.REFERENCE:
			return readHandle();
      break;
		case TC.STRING:
			return readString();
      break;
		case TC.LONGSTRING:
			return readLongString();
      break;
    default:
      p -= 1;
      break;
		}
	};
	var getBlockData = function() {
		var code = readByte();
		switch(code) {
		case TC.NULL:
			return readNull();
      break;
		case TC.REFERENCE:
			return readHandle();
      break;
		case TC.BLOCKDATA:
			return readBlockData();
      break;
		case TC.BLOCKDATALONG:
			return readBlockDataLong();
      break;
    default:
      p -= 1;
      break;
		}
	};
	var getClassDesc = function() {
    var v = [];
    var fillFields = function() {
      for (var i = v.length - 1; i > -1; i--) {
				if (!v[i]["value"]["fields"]) {
					v[i]["value"]["fields"] = [];
					if (i + 1 < v.length) {
						v[i]["value"]["fields"].writes(v[i + 1]["value"]["fields"]);
					}
					v[i]["value"]["fields"].writes(v[i]["value"]["field"]);
				}
      }
      for (var i = v.length - 2; i > -1; i--) {
        v[i]["value"]["desc"] = v[i + 1];
      }
      return v[0];
    };
		while(true) {
      var code = readByte();
      switch(code) {
      case TC.NULL:
        return fillFields();
        break;
      case TC.REFERENCE:
        v.push(readHandle());
        return fillFields();
        break;
      case TC.CLASSDESC:
        v.push(readClassDesc());
        break;
      case TC.PROXYCLASSDESC:
        return readProxyClassDesc();
        break;
      default:
        p -= 1;
        return;
        break;
      }
    }
	};
	var getObject = function() {
		var r = {};
		var code = readByte();
		switch(code) {
		case TC.NULL:
			r = readNull();
			break;
		case TC.REFERENCE:
			r = readHandle();
			switch (r["type"]) {
			case TC.OBJECT:
				r = toSimple(r);
				break;
			}
			break;
		case TC.CLASSDESC:
			r = readClassDesc();
			break;
		case TC.OBJECT:
			r = readObject();
			break;
		case TC.STRING:
			r = readString();
			break;
		case TC.ARRAY:
			r = readArray();
			break;
		case TC.CLASS:
			r = readClass();
			break;
		case TC.BLOCKDATA:
			r = readBlockData();
			break;
		case TC.RESET:
			table = [];
			break;
		case TC.BLOCKDATALONG:
			r = readBlockDataLong();
			break;
		case TC.EXCEPTION:
			r = readException();
			table = [];
			break;
		case TC.LONGSTRING:
			r = readLongString();
			break;
		case TC.PROXYCLASSDESC:
			r = readProxyClassDesc();
			break;
		case TC.ENUM:
			r = readEnum();
			break;
		}
		return r;
	};
	var getSet = function() {
		var r = [];
		if (readUint(2) != BV.STREAM_MAGIC) {
			return;
		}
		if (readUint(2) != BV.STREAM_VERSION) {
			return;
		}
		while(p < buffer.length) {
      r.push(getObject());
		}
		return r;
	};
	var transObject = function(object) {
    var handles = (arguments.length > 1 ? arguments[1] : []);
		var r = {};
    switch(object["desc"]["value"]["class"]) {
		case "java.util.Hashtable":
		case "java.util.HashMap":
			for (var i = 0; i < object["content"].length; i++) {
        var key = transData(object["content"][i]["key"], handles.copy());
        var value = transData(object["content"][i]["value"], handles.copy());
        if (!isUndefined(key) && !isNull(key) && (key != "")) {
					if (!isUndefined(key["value"])) {
						key = key["value"];
					}
					if (key != "this$0") {
						r[key] = value;
					}
        }
      }
      break;
		case "java.util.ArrayList":
      return transArray(object["content"], handles.copy());
      break;
    default:
      for (var key in object["data"]) {
        var data = transData(object["data"][key], handles.copy());
				if (key != "this$0") {
					r[key] = data;
				}
      }
    break;
    }
    return r;
	};
	var transBlockData = function(blockData) {
		if (!isUndefined(blockData) && !isUndefined(blockData["value"])) {
			return blockData["value"];
		}
		return new Uint8Array();
	};
	var transString = function(string) {
		if (!isUndefined(string) && !isUndefined(string["value"])) {
			return string["value"];
		}
		return "";
	};
	var transArray = function(array) {
    var handles = (arguments.length > 1 ? arguments[1] : []);
    var r = [];
    for (var i = 0; i < array.length; i++) {
      var data = transData(array[i], handles.copy());
      r.push(data);
    }
    return r;
	};
	var transData = function(data) {
    var handles = (arguments.length > 1 ? arguments[1] : []);
    var r = (function() {
    	if (!isUndefined(data["handle"])) {
				var h = handles.indexOf(data["handle"]);
				if (h != -1) {
					switch(table[handles[h]]["type"]) {
					case TC.OBJECT:
						return transString(toSimple(data, undefined));
						break;
					}
				}
				handles.push(data["handle"]);
			}
			if (isUndefined(data["type"])) {
				return data;
			}
			switch(data["type"]) {
			case TC.NULL:
				return null;
				break;
			case TC.REFERENCE:
			case TC.CLASSDESC:
			case TC.CLASS:
			case TC.RESET:
			case TC.EXCEPTION:
			case TC.PROXYCLASSDESC:
			case TC.ENUM:
				return undefined;
				break;
			case TC.BLOCKDATA:
			case TC.BLOCKDATALONG:
				return transBlockData(data);
				break;
			case TC.OBJECT:
				return transObject(data["value"], handles.copy());
				break;
			case TC.STRING:
			case TC.LONGSTRING:
				return transString(data);
				break;
			case TC.ARRAY:
				return transArray(data["value"]["data"], handles.copy());
				break;
			}
    })();
		if (isNull(r)) {
			r = "";
		}
		if (isObject(r) && !Object.getOwnPropertyNames(r).length) {
			r = "";
		}
		return r;
	};
	var transSet = function(set) {
		var r = [];
		for (var i = 0; i < set.length; i++) {
      var data = transData(set[i]);
			if (!isUndefined(data)) {
        r.push(data);
			}
		}
		return r;
	};
	return transSet(getSet());
};
Uint8Array.prototype.extractFlieList = function() {
  var buffer = this;
	var pl = [];
	var fl = [];
	var p = 0;
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
	var readBuffer = function(n) {
		var r = buffer.slice(p, p + n);
		p += n;
		return r;
	};
	var lp = readInt(1);
	for (var i = 0; i < lp; i++) {
		pl.push({"n": readText(readInt(1)), "l": readInt(1)});
	}
	while(p < buffer.length) {
		var v = {};
		for (var i = 0; i < pl.length; i++) {
			var lv = readInt(pl[i]["l"]);
			switch(pl[i]["n"]) {
			case "name":
				v[pl[i]["n"]] = readText(lv);
				break;
			default:
				v[pl[i]["n"]] = readBuffer(lv);
				break;
			}
		}
		fl.push(v);
	}
	return fl;
};
Date.prototype.fromDos = function(dos) {
	this.setTime(new Date(((dos >> 25) & 0x7F) + 1980, ((dos >> 21) & 0x0F) - 1, (dos >> 16) & 0x1F, (dos >> 11) & 0x1F, (dos >> 5) & 0x3F, (dos & 0x1F) * 2, 0).getTime());
	return this;
};
var LittleEndian = (function() {
	var b = new ArrayBuffer(2);
	new DataView(b).setInt16(0, 1, true);
	return new Int16Array(b)[0] === 1;
})();
var Runtime = (function() {
	var img = new Image();
	img.src = "";
	return img.src.split(":")[0];
})();
var SupportAPI = function(n) {
	switch (n) {
	case "File":
    return !isUndefined(window.Blob && window.File && window.FileList && window.FileReader && window.URL);
		break;
	case "TypedArrays":
    return !isUndefined(window.ArrayBuffer && window.Int8Array && window.Int16Array && window.Int32Array && window.Uint8Array && window.Uint8ClampedArray && window.Uint16Array && window.Uint32Array && window.Float32Array && window.Float64Array && window.DataView);
		break;
	}
};
var IncludeAgent = function(n) {
	switch (n) {
	case "MSIE":
	case "Mozilla":
	case "Chrome":
	case "AppleWebKit":
	case "Safari":
	case "Mobile Safari":
	case "UCBrowser":
	case "MQQBrowser":
	case "QQ":
	case "MicroMessenger":
    return ((" " + navigator.userAgent).indexOf(" " + n + "/") != -1);
		break;
	}
};
function getSelected(id) {
	var s = document.getElementById(id);
  if (s && s.options && s.options[s.selectedIndex]) {
    return s.options[s.selectedIndex].value;
  }
}