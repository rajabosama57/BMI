
document.getElementById("btn").addEventListener("click",function(){
    var l = document.getElementById("l").value
    var w = document.getElementById("w").value
    var mybmi= w/(l*l)
    var mybmiString = mybmi.toString();
    console.log('bmi:'+ mybmiString);
    // document.getElementById("result").innerText = mybmi
    switch(true){
        case(mybmi<18):
            document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n  نحيف ${'&#128517'}`
            break;
        case(mybmi>18 && mybmi<24.9):
        document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n وزن مثالي ${'&#128526'}`
            break;
        case(mybmi>25 && mybmi<29.9):
            document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n وزن زائد ${'&#128515'}`
            break;
        case(mybmi>30 && mybmi<34.9):
            document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n سمنة درجة اولى ${'&#128550'}`
            break;
        case(mybmi>35 && mybmi<39.9):
            document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n سمنة درجة ثانية ${'&#128552'}`
            break;
        case(mybmi>40):
            document.getElementById("result").innerHTML=`${mybmiString.substring(0, 4)} \n سمنة خطيرة ${'&#128549'}`
            break;

        
    }
})

