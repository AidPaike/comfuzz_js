function() {
    var counter = 0;
    var a = [];
    a[10000000 - 1] = 0;
    for (var i = 0; i < a.length; i++)
        counter++;
    return counter;
}