function colorize() {

    let rows = Array.from(document.getElementsByTagName("tr"));
    for (i = 1; i < rows.length; i += 2) {
        rows[i].style.background = "teal";
    }

}

