function(parentObj) {
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) & 0x01) == 0);
}