// alert("hello");
function validate() {
    let x = document.getElementById("na").value;
    let nregx = /^[a-z A-Z]{2,15}$/;
    let em = document.getElementById("e").value;
    let eregx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let d = document.getElementById("da").value;
    let dregx = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let person = document.getElementById("num").value;
    let go = document.getElementById("tour").value;
    let pregx = /^0-9$/;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (!nregx.test(x)) {
        alert("enter a valid name");
        return false;
    } else if (em == "") {
        alert("Email mandatory");
        return false;
    } else if (!eregx.test(em)) {
        alert("enter a valid email");
        return false;
    } else if (d == "") {
        alert("Date mandatory");
        return false;
    } else if (!dregx.test(d)) {
        alert("enter a valid date");
        return false;
    } else if (go == "0") {
        alert("please select a valid tour package");
        return false;
    } else if (person == "") {
        alert("Fill the person number");
        return false;
    } else if (
        document.getElementById("board").checked == false &&
        document.getElementById("food").checked == false &&
        document.getElementById("sight").checked == false
    ) {
        alert("select any avail");
        return false;
    } else if (
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false
    ) {
        alert("select an option");
        return false;
    } else if (!pregx.test(p)) {
        alert("enter a valid number");
        return false;
    } else {
        return true;
    }
}
