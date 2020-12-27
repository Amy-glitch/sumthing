let text = document.getElementById('t');
let inp = document.getElementById('inp');
let cons ='type h for help';
let curview;
let lost=false;


let settlement = new Settlement();
text.innerHTML =cons;

function f() {

   text.scrollTop = text.scrollHeight;
  }


function clk(e)
{
cons='';
curview='';
    switch(inp.value) {
        case 'h':
            cons +=' Command list: <br>res <br> map ';

          break;
        case 'res':
            cons += settlement.showRes();
           curview='res';
          break;

          case 'map':
            cons += settlement.showMap() +'<br>'+ settlement.showRes();
            curview = 'res';
          break;

        default:
          // code block
      }

if (inp.value.substring(0,5) == 'build'){
  let msg = settlement.build(inp.value);
  cons += settlement.showMap() +'<br>'+ settlement.showRes();
  curview='res';
  cons += '<br>' + msg;
}





  text.innerHTML =cons;
  f();
}





function loop()
{

//if (commlist ==true){}
settlement.updateTick();


switch(curview) 
{
    case 'res': cons =''; cons += settlement.showMap() +'<br>'+ settlement.showRes(); text.innerHTML =cons;
    break;
}

}
 

setInterval(loop,1000);