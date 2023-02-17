function(parentObj) {
    "use strict";
    var dirtySum = parentObj.registerA - (parentObj.registersHL >> 8);
    parentObj.FHalfCarry = ((dirtySum & 0xF) > (parentObj.registerA & 0xF));
    parentObj.FCarry = (dirtySum < 0);
    parentObj.FZero = (dirtySum == 0);
    parentObj.FSubtract = true;
}