//Result is the Average Blood Sugar Level
//All values here are being considered "Float"

function avg_bsl() {
    var first_number = parseFloat(document.getElementById("Text1").value).toFixed(2);
    var second_number = parseFloat(document.getElementById("Text2").value).toFixed(2);
    var third_number = parseFloat(document.getElementById("Text3").value).toFixed(2);
    var avg_result = (check_mbsl(result) + check_absl(result) + check_nbsl(result));

    document.getElementById("txtresult").value = avg_result;
}
//User Enters Morning Blood Sugar Reading
function check_mbsl (){
    var first_number = parseFloat(document.getElementById("Text1").value).toFixed(2);
    var result = (document.getElementById("Text1").value);

    result
//Normal range between 4.0 - 7.8
    {
        if (first_number >= 4.0 && first_number <= 7.8) {
            document.getElementById("morningbsl").style.backgroundColor = "green";
        }
//Too Low any reading less then 3.0
        else if (first_number < 3.0) {
            document.getElementById("morningbsl").style.backgroundColor = "red";
        }
//Just Low any reading between 3.0 - 3.9
        else if (first_number >= 3.0 && first_number <= 3.9) {
            document.getElementById("morningbsl").style.backgroundColor = "yellow";
        }
//Just High any reading between 7.9 - 8.9
        else if (first_number >= 7.9 && first_number <= 8.9) {
            document.getElementById("morningbsl").style.backgroundColor = "yellow";
        }
//Too High any reading higher than 8.9
        else if (first_number > 8.9) {
            document.getElementById("morningbsl").style.backgroundColor = "red";
        }
    }
    document.getElementById("morningbsl").value = result;
}
//User Enters Afternoon Blood Sugar Reading
function check_absl (){
    var second_number = parseFloat(document.getElementById("Text2").value).toFixed(2);
    var result = (document.getElementById("Text2").value);

    result
//Normal range between 4.0 - 7.8
    {
        if (second_number >= 4.0 && second_number <= 7.8) {
            document.getElementById("afternoonbsl").style.backgroundColor = "green";
        }
//Too Low any reading less then 3.0
        else if (second_number < 3.0) {
            document.getElementById("afternoonbsl").style.backgroundColor = "red";
        }
//Just Low any reading between 3.0 - 3.9
        else if (second_number >= 3.0 && second_number <= 3.9) {
            document.getElementById("afternoonbsl").style.backgroundColor = "yellow";
        }
//Just High any reading between 7.9 - 8.9
        else if (second_number >= 7.9 && second_number <= 8.9) {
            document.getElementById("afternoonbsl").style.backgroundColor = "yellow";
        }
//Too High any reading higher than 8.9
        else if (second_number > 8.9) {
            document.getElementById("afternoonbsl").style.backgroundColor = "red";
        }
    }
    document.getElementById("afternoonbsl").value = result;
}
//User Enters Night Blood Sugar Reading
function check_nbsl (){
    var third_number = parseFloat(document.getElementById("Text3").value);
    var result = (document.getElementById("Text3").value);

    result
//Normal range between 4.0 - 7.8
    {
        if (third_number >= 4.0 && third_number <= 7.8) {
            document.getElementById("nightbsl").style.backgroundColor = "green";
        }
//Too Low any reading less then 3.0
        else if (third_number < 3.0) {
            document.getElementById("nightbsl").style.backgroundColor = "red";
        }
//Just Low any reading between 3.0 - 3.9
        else if (third_number >= 3.0 && third_number <= 3.9) {
            document.getElementById("nightbsl").style.backgroundColor = "yellow";
        }
//Just High any reading between 7.9 - 8.9
        else if (third_number >= 7.9 && third_number <= 8.9) {
            document.getElementById("nightbsl").style.backgroundColor = "yellow";
        }
//Too High any reading higher than 8.9
        else if (third_number > 8.9) {
            document.getElementById("nightbsl").style.backgroundColor = "red";
        }
    }
    document.getElementById("nightbsl").value = result;
}