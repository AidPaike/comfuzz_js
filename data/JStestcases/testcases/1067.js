function(stdlib, foreign, buffer) {
    "use asm";
    var m1 = stdlib.Math.fround;
    var m2 = stdlib.Math.abs;

    function f1() {
        var y = m1(1.5);
        var a1 = m1(2.5);
        var a2 = m1(3.5);
        var a3 = 4;
        var x = 1.5;
        y = m1(m2(a1));
        return m1(y)
    }
    return f1;
}