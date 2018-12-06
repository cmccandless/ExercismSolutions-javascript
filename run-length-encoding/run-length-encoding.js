export function encode(str) {
    var encoded = '';
    var last = null;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (last == ch) {
            count++;
        } else {
            if (last != null) {
                if (count > 1) {
                    encoded += count.toString();
                }
                encoded += last;
            }
            last = ch;
            count = 1;
        }
    }
    if (last != null) {
        if (count > 1) {
            encoded += count.toString();
        }
        encoded += last;
    }
    return encoded;
}

export function decode(str) {
    var decoded = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        var digit = parseInt(ch, 10);
        if (isNaN(digit)) {
            if (count < 1) count = 1;
            for (var j = 0; j < count; j++) {
                decoded += ch;
            }
            count = 0;
        } else {
            if (count < 0) count = digit;
            else count = count * 10 + digit;
        }
    }
    return decoded;
}