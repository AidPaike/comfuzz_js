function(parentObj) {
    "use strict";
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registerA & 0x04) == 0);
}