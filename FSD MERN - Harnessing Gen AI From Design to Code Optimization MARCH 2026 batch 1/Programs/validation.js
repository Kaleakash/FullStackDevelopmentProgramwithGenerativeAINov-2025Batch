function validateInput() {
    let input = document.getElementById("input").value;
    if (input === "") {
        document.getElementById("output").innerText = "Input cannot be empty";
        return false;
    }
    document.getElementById("output").innerText = "Input is valid";
    return true;
}