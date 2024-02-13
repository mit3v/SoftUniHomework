function colorize() {

    // let rows = Array.from(document.getElementsByTagName("tr"));
    // for (i = 1; i < rows.length; i += 2) {
    //     rows[i].style.background = "teal";
    // }

    const rows = document.querySelectorAll('tr:nth-child(even)');
    for (let row of rows) {
        row.style.background = 'teal';
    }

}


// ако вкарам това към HTML-a то директно ще оцвети каквото трябва; но няма да е на клик;
// <!-- <style>
// tr:nth-child(even) {
//     background-color: teal;
// } 
// </style> -->