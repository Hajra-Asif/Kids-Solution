var user_input = prompt("Welcome to Kids Maths Solution, what do you want ? \n Forward Counting \n Backward Counting \n Table")


// -------------- Forward counting ------------------


if (user_input === "forward counting") {


    var startNum = +prompt("enter start number");
    var endNum = +prompt("enter end number");


    for (var i = startNum; i <= endNum; i += 10) {
        

        for (var j = i; j <= i + 10; j++) {
            document.write("  " + j + "  ")

        }
        document.write("</br>")
    }
}


// -------------- Backward counting ------------------


if (user_input === "backward counting") {
    var startNum = +prompt("enter start number");
    var endNum = +prompt("enter end number");

    for (var i = startNum; i >= endNum; i -= 10) {

        for (var j = i; j > i - 10 && j >= endNum; j--) {
            document.write(" " + j + " ");

        }
        document.write("</br>")
    }

}

// -------------- Table ------------------

if (user_input === "table") {
    var table = +prompt("what table you want")
    var startNum = +prompt("enter start number");
    var endNum = +prompt("enter end number");

    for (var i = startNum; i <= endNum; i++) {
        document.write(`${table} X ${i} = ${i * table} </br>`)
    }

}
