var frm = document.querySelector("#frm");
frm.addEventListener('submit',function(e){
    e.preventDefault();
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    let result = document.querySelector("#result");
    // convert feet into inches
    h = h * 12;
    // convert inces into meter
    h = h * 0.025;
    // BMI = weight/height ^2
    let bmi = Math.round(w/Math.pow(h,2));
    // Change tip based on BMI
    if(bmi >= 30) {
        document.getElementById("tip").style.transform = "rotate(75deg)";
        result.innerHTML = `Obese : <span>${bmi}</span>`;
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("tip").style.transform = "rotate(0deg)";
        result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
    else if (bmi <= 24.9 && bmi >= 18) {
        document.getElementById("tip").style.transform = "rotate(-80deg)";
        result.innerHTML = `Normal Weight : <span>${bmi}</span>`;
    }
    else if (bmi < 18) {
        document.getElementById("tip").style.transform = "rotate(-160deg)";
        result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    }
})