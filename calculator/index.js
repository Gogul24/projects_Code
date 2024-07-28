let display = document.getElementById("display");

function appendTodisplay(input){
    display.value += input;
}
function clearDisplay() {
    display.value = ""
}
function calculate(){
    try{
        const a = setTimeout(()=>{
            display.value = eval(display.value)},10)
    }
    catch(error){
        display.value ="Error :("
        const a = setTimeout(()=>{display.value=''},3000)    
    }
}