function(n) {
    n = Number(n);
    var sign = (n < 0) ? -1 : 1;
    if (Math.abs(n) == 0 || Math.abs(n) == Number.POSITIVE_INFINITY) {
        return 0;
    }
    n = (sign * Math.floor(Math.abs(n))) % Math.pow(2, 32);
    n = (n >= Math.pow(2, 31)) ? n - Math.pow(2, 32) : n;
    return (n);
}