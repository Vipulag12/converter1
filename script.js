"use strict";

//* Access the values of the elements

const v1 = document.getElementById('unit1');                    //! for selecting --> from option
const v2 = document.getElementById('unit2');                    //! for selecting --> to option
const enterValue = document.getElementById('setVal');               //! for selecting --> Enter value
const outputValue = document.getElementById('getVal');              //! for selecting --> Output value
const convert = document.getElementById('clickToConvert');          //! for selecting --> Convert Button
const swap = document.getElementById('swapbtn');                    //! for selecting --> swap button
const reset = document.getElementById('resetbtn');                     //! for selecting --> reset button
outputValue.disabled =true;

//?--------------------------------------------------------------------------------------------------------->

//Todo Add event on convert button

//Todo 1. for converting from Binary to Decimal format

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 2 && val2 == 10){
        var text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            var convert = (parseInt(text, 2));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 2. for converting from Binary to Octal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 2 && val2 == 8){
        var text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            var convert = (parseInt(text, 2)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 3. for converting from Binary to Hexadecimal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 2 && val2 == 16){
        var text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            var convert = (parseInt(text, 2)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 4. for converting from Hexadecimal to Binary

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 2){
        var text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            var convert = (parseInt(text, 16)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 5. for converting from Hexadecimal to Decimal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 10){
        var text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            var convert = (parseInt(text, 16));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 6. for converting from Hexadecimal to Octal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 16 && val2 == 8){
        var text = enterValue.value;
        if(!(Number.isNaN('0x'+text))){
            var convert = (parseInt(text, 16)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 7. for converting from Decimal to Binary

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 2){
        var text = enterValue.value;
        if(!isNaN(text)){
            var convert = (parseInt(text, 10)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 8. for converting from Decimal to Octal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 8){
        var text = enterValue.value;
        if(!isNaN(text)){
            var convert = (parseInt(text, 10)).toString(8);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 9. for converting from Decimal to Hexadecimal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 10 && val2 == 16){
        var text = enterValue.value;
        if(!isNaN(text)){
            var convert = (parseInt(text, 10)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 10. for converting from Octal to Binary

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 2){
        var text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            var convert = (parseInt(text, 8)).toString(2);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 11. for converting from Octal to Decimal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 10){
        var text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            var convert = (parseInt(text, 8));
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});

//Todo 12.for converting from Octal to Hexadecimal

convert.addEventListener('click', ()=>{
    var val1 = +v1.value;
    var val2 = +v2.value;
    console.log("text");

    if(val1 == 8 && val2 == 16){
        var text = enterValue.value;
        if(!(Number.isNaN('0O'+text))){
            var convert = (parseInt(text, 8)).toString(16);
            outputValue.value = convert;
        }else{
            outputValue.value = "Enter Valid Digit";
        }
    }
});


//?------------------------------------------------------------------------------------->

//Todo Add Event on Swap Button

swapbtn.addEventListener('click', ()=>{
    let changeTo = v2.value;
    let changeFrom = v1.value;
    v1.value = changeTo;
    v2.value = changeFrom;

    let inputFrom = enterValue.value;
    let inputTo = outputValue.value;
    outputValue.value = inputFrom;
    enterValue.value = inputTo;
});

//?------------------------------------------------------------------------------------->

//Todo Add Event on Reset Button

reset.addEventListener("click", ()=>{
    outputValue.value = "";
    enterValue.value = "";
  });