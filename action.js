//window.onload = init;
function init(){
   alert("Welcome to the typing game!!");
}


var btn1 = document.getElementById('easy');
var btn2 = document.getElementById('hard');

if (btn1 == document.getElementById('easy'))
{
   btn1.addEventListener('click', easyFunc());
}
else if (btn2 == document.getElementById('hard'))
{
   btn2.addEventListener('click', hardFunc());
}

function easyFunc(){
   var easyArray = ['cat', 'mat', 'fat', 'gun', 'fun', 'sun', 'son', 'fan', 'egg'];
   var randomEle1 = easyArray[Math.floor(Math.random()*easyArray.length)];
   //alert(randomEle1);
   addEventListener('click', function(evt){
      this.document.querySelector('span').innerHTML = randomEle1;
});
   
}

function hardFunc(){
   var hardArray = ['fence', 'cricket', 'museum', 'shoukie', 'hajar', 'fancy', 'doctor', 'palestine', 'duck'];
   var randomEle2 = hardArray[Math.floor(Math.random()*hardArray.length)];
   //alert(randomEle2);
   addEventListener('click', function(evt){
      this.document.querySelector('span').innerHTML = randomEle2;
});
}

