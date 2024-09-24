let body=document.querySelector("body");
let convertBtn=document.querySelector("button");
let resultPara=document.querySelector("#result");

convertBtn.addEventListener("click",() => {
    // getting value from user
    getScale=document.querySelector("#from").value;
    setScale=document.querySelector("#to").value;
    tempValue=parseFloat(document.querySelector("#value").value);

    // check getvalue
    if(getScale == "Celcius"){
        calcTemp(tempValue,getScale,setScale);
    }else if(getScale == "Fahrenheit"){
        calcTemp(tempValue,getScale,setScale);
    }else if(getScale == "Kelvin"){
        calcTemp(tempValue,getScale,setScale);
    }else{
        resultPara.innerHTML="error..."
    }

    // calculating temperature
    function calcTemp(temp,get,set){
        if(setScale == "Celcius"){
            let calc;
            if(get == set){
                resultPara.innerHTML=temp;
            }else if(get == "Fahrenheit"){
                calc=(temp-32)*5/9;
                resultPara.innerHTML=calc;
            }else{
                calc=temp-273.15;
                resultPara.innerHTML=calc;
            }
        }else if(setScale == "Fahrenheit"){
            let calc;
            if(get == set){
                resultPara.innerHTML=temp;
            }else if(get == "Celcius"){
                calc=temp*(9/5)+32;
                resultPara.innerHTML=calc;
            }else{
                calc=(temp-273.15)*(9/5)+32;
                resultPara.innerHTML=calc;
            }
        }else if(setScale == "Kelvin"){
            let calc=0;
            if(get == set){
                resultPara.innerHTML=temp;
            }else if(get == "Celcius"){
                calc=temp+273.15;
                resultPara.innerHTML=calc;
            }else{
                calc=(temp-32)*(5/9)+273.15;
                resultPara.innerHTML=calc;
            }
        }else{
            resultPara.innerHTML="error..."
        }
    }
});

// reset result
let input = document.querySelector("input");
input.addEventListener("click", () => {
    resultPara.innerHTML="0";
})

