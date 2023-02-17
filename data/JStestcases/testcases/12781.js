function(str) { // decode utf-8 encoded string back into multi-byte characters
    str = str.replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
        function(c) {
            var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
            return String.fromCharCode(cc);
        }
    );
    str = str.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
        function(c) {
            var cc = (c.charCodeAt(0) & 0x0f) << 12 | (c.charCodeAt(1) & 0x3f << 6) | c.charCodeAt(2) & 0x3f;
            return String.fromCharCode(cc);
        }
    );
    return str;
}