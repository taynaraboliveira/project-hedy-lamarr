const el= document.querySelector("#title");
const text= 'Hedy Lamarr, conhecida também como "mãe do wi-fi"  foi uma atriz e inventora austruca naturalizada americana.';
const interval= 90;

function showText(el, text, interval){

    const char= text.split("").reverse();

    const typer= setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }         
    
     const next = char.pop();
    
     el.innerHTML+= next;

    }, interval);

}

showText(el, text, interval);