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
        document.getElementById("tip").style.transform = "rotate(90deg)";
        document.getElementById("tip").style.color = "#ff0000";
        result.innerHTML = `Obese : <span>${bmi}</span>`;
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("tip").style.transform = "rotate(45deg)";
        document.getElementById("tip").style.color = "orange";
        result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
    else if (bmi <= 24.9 && bmi >= 18) {
        document.getElementById("tip").style.transform = "rotate(-30deg)";
        document.getElementById("tip").style.color = "green";
        result.innerHTML = `Normal Weight : <span>${bmi}</span>`;
    }
    else if (bmi < 18) {
        document.getElementById("tip").style.transform = "rotate(-70deg)";
        document.getElementById("tip").style.color = "#ffcc00";
        result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    }
})

Highcharts.chart('containerHeight', {
    title: {
        text: 'BMI Tracker'
    },
    xAxis: {
        min: -0.5,
        max: 12
    },
    yAxis: {
        min: 0
    },
    series: [{
        type: 'line',
        name: 'BMI Goal',
        data: [[0, 25], [12, 25]],
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }, {
        type: 'scatter',
        name: 'Monthly BMI',
        data: [28, 27, 28, 28, 27, 25, 26.5],
        marker: {
            radius: 4
        }
    }]
});