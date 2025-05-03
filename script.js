document.getElementById("btn").addEventListener("click", function() {
    var l = document.getElementById("l").value;
    var w = document.getElementById("w").value;
    
    if (!l || !w || isNaN(l) || isNaN(w)) {
        alert("الرجاء إدخال قيم صحيحة للطول والوزن");
        return;
    }
    
    var mybmi = w / (l * l);
    var mybmiString = mybmi.toFixed(2);
    console.log('bmi:' + mybmiString);
    
    switch(true) {
        case (mybmi < 18):
            document.getElementById("result").innerHTML = `${mybmiString} - نحيف &#128517;`;
            break;
        case (mybmi >= 18 && mybmi < 25):
            document.getElementById("result").innerHTML = `${mybmiString} - وزن مثالي &#128526;`;
            break;
        case (mybmi >= 25 && mybmi < 30):
            document.getElementById("result").innerHTML = `${mybmiString} - وزن زائد &#128515;`;
            break;
        case (mybmi >= 30 && mybmi < 35):
            document.getElementById("result").innerHTML = `${mybmiString} - سمنة درجة أولى &#128550;`;
            break;
        case (mybmi >= 35 && mybmi < 40):
            document.getElementById("result").innerHTML = `${mybmiString} - سمنة درجة ثانية &#128552;`;
            break;
        case (mybmi >= 40):
            document.getElementById("result").innerHTML = `${mybmiString} - سمنة خطيرة &#128549;`;
            break;
        default:
            document.getElementById("result").innerHTML = "حدث خطأ في الحساب";
    }
});