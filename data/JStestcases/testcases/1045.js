function(program, inputs = []) {
    let result = "";
    let args = [];
    for (;;) {
        let next = program.next(...args);
        args = [];
        if (next.done)
            break;
        if (next.value.kind == "output") {
            result += next.value.string + "\n";
            continue;
        }
        if (next.value.kind == "input") {
            args = inputs.splice(0, next.value.numItems);
            continue;
        }
    }
    return result;
}