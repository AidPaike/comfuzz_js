function(parentObj) {
    parentObj.registerA ^= parentObj.registerD;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
}