const el = document.querySelector("#animar")
const text = "Profissional"
const intervalo = 300;

function showText(el, text, intervalo){
      const char = text.split("").reverse();
      
      const typer = setInterval(() => {

            if(char.length){
                  return clearInterval(typer);
            }


            const next = char.pop()
            
            el.innerHTML = next;


      }, intervalo);
}
showText(el, text, intervalo)