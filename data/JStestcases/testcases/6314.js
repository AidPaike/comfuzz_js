function(parentObj) {
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registerB & 0x40) == 0);
}