function showMenu() {
    var y = document.getElementById("navBar");
    if (y.className === "navBar") {
        y.className = "navBar responsive";

    } else {
        y.className = "navBar";
    }

}