function() {
    let obj = '2.3023e-320';
    for (let i = 0; i < 1; i++) {
        obj.x = 1;
        obj = +obj;
        obj.x = 1;
    }
}