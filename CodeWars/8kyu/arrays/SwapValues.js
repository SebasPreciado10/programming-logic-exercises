function swapValues() {

    const args = [...arguments];

    const temp = args[0];

    args[0] = args[1];

    args[1] = temp;

    console.log(args);
}

swapValues(10, 20);