
function xTurn() {
    var a = 0
    document.getElementById("value").value = a
}
function oTurn() {
    var a = 1
    document.getElementById("value").value = a
}
function ans() {
    document.getElementById("f").innerHTML = c
}

function turn1() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("1").innerHTML = "X"
        chk[0] = 1
    }
    else if (b == 1) {
        document.getElementById("1").innerHTML = "O"
        chk[0] = 2
    }
}
document.getElementById("f").innerHTML = chk[0]

function turn2() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("2").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("2").innerHTML = "O"
    }
}
function turn3() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("3").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("3").innerHTML = "O"
    }
}
function turn4() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("4").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("4").innerHTML = "O"
    }
}

function turn5() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("5").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("5").innerHTML = "O"
    }
}
function turn6() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("6").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("6").innerHTML = "O"
    }
}
function turn7() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("7").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("7").innerHTML = "O"
    }
}
function turn8() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("8").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("8").innerHTML = "O"
    }
}
function turn9() {
    var b = document.getElementById("value").value

    if (b == 0) {
        document.getElementById("9").innerHTML = "X"
    }
    if (b == 1) {
        document.getElementById("9").innerHTML = "O"
    }
}


