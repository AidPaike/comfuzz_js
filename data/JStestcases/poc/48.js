function() {
    let arr = new Uint32Array(10);
    for (let i = 0; i < 0x100000; i++) {
        parseInt();
    }
    arr[8] = 1;
    arr[-0x12345678] = 2;
}