function check() {
    var name = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name == "") {
        alert("name shouldn't be null");
        return false;
    } else if (phone == "") {

        alert("phone number shouldn't be null");
        return false;
    } else if (email == "") {
        alert("email shouldn't be null");
        return false;
    } else {
        alert("Submit successfully!");
    }
}