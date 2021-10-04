

organizer = (ferrari) => {
    // let fasewant = "fase" + arg_O;
    let arrFases = ["1", "2", "3", "4"];
    arrFases = arrFases.filter(val => !ferrari.includes(val));
    document.getElementById(ferrari).style.display = "block";
    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
        console.log();
    }
}