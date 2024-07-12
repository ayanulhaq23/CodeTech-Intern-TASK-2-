//Declaration
const number=document.forms["unit-form"]["temperature"];
const current_unit=document.forms["unit-form"]["unit"];
const convert_unit=document.forms["unit-form"]["convert-unit"];
const convert_btn=document.querySelector(".button");
const word=document.querySelector(".output-content");


//inserting function
function word_insert(num,unit){
    word.innerHTML=`
    <div class="output-content">
            The Temperature is <span>${num} ${unit}</span>
    </div>`
    

}
function formula(type,x,unit){
    
    switch(type){
        case 1:
            {
                console.log("c->f");
                y=x*(9/5)+32;
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
        case 2:
            {
                console.log("f->c");
                y=(x-32)*(5/9);
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
        case 3:
            {
                console.log("c->k");
                y=x+273.15;
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
        case 4:
            {
                console.log("k->c");
                y=x-273.15;
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
        case 5:
            {
                console.log("f->k");
                y=(x-32)*(5/9)+273.15;
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
        case 6:
            {
                console.log("k->f");
                y=(x-273.15)*(9/5)+32;
                z=y.toFixed(2)
                console.log(z);
                word_insert(z,unit)
                break;
            }
    }
}

//condition
function condition(x){
    if(current_unit.value===convert_unit.value){
        word_insert(number.value,convert_unit.value);
        alert("you entered the same unit")
        
    }
    else if(current_unit.value=="Celsius" && convert_unit.value=="Fahrenheit"){
        formula(1,x,'F')
        
    }
    else if(current_unit.value=="Fahrenheit" && convert_unit.value=="Celsius"){
        formula(2,x,' C')
    }
    else if(current_unit.value=="Celsius" && convert_unit.value=="Kelvin"){
        formula(3,x,' K')
    }
    else if(current_unit.value=="Kelvin" && convert_unit.value=="Celsius"){
        formula(4,x,' C')
    }
    else if(current_unit.value=="Fahrenheit" && convert_unit.value=="Kelvin"){
        formula(5,x,' K')
    }
    else if(current_unit.value=="Kelvin" && convert_unit.value=="Fahrenheit"){
        formula(6,x,' F')
    }
}

//event
convert_btn.addEventListener("click",()=>{
    event.preventDefault();
    
    word.style.visibility="visible"
    condition(number.value);
    
})


//Celsius,Fahrenheit,Kelvin
