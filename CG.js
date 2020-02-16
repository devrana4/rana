var numSelect=6 ;
var colors = colorarr(numSelect);
var colorDisplay=document.getElementById('colorpicked');
var squares=document.querySelectorAll(".square");
var tryDisplay=document.querySelector('#tryDisplay');
var h1=document.querySelector('h1');
var reset=document.querySelector('button');
var easybtn = document.querySelector('#easybtn');
var hardbtn= document.querySelector('#hardbtn');
var colorpicked = pickcolor();
colorDisplay.textContent=colorpicked;


easybtn.addEventListener('click',function(){
	colors=colorarr(3);
	colorpicked=pickcolor();
	numSelect=3;
    colorDisplay.textContent=colorpicked;
    easybtn.classList.add('btns');
    hardbtn.classList.remove('btns');
    for(var i=0; i<squares.length; i++){
    	if (colors[i]){
    		squares[i].style.background=colors[i];
    	}else {
    		squares[i].style.display='none';
    	}
    }
});
hardbtn.addEventListener('click',function(){
	colors=colorarr(6);
	colorpicked=pickcolor();
	numSelect=6;
    colorDisplay.textContent=colorpicked;
    hardbtn.classList.add('btns');
    easybtn.classList.remove('btns');
    for(var i=0; i<squares.length; i++){
    		squares[i].style.background=colors[i];
    		squares[i].style.display='block';
    	}
    }
);


reset.addEventListener('click',function(){
	colors= colorarr(6);
	this.textContent='New Colors';
	h1.style.background='steelblue';
	colorpicked =pickcolor();
	tryDisplay.textContent="";
	colorDisplay.textContent=colorpicked;
	h1.style.background='steelblue';
	for(var i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
	}
})
for (var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click',function(){
	var colorclicked = this.style.background;
	if (colorclicked===colorpicked) {
		reset.textContent='playAgain!'
		colorMatch(colorpicked)
		h1.style.background=colorpicked;
		tryDisplay.textContent ='right!' ;
	}else{ this.style.background='#323232';
		tryDisplay.textContent='try again';}
});
}
function colorMatch (color){
for (var i=0; i<squares.length; i++){
	squares[i].style.background=color ;
}
}
function pickcolor (){
	var random = Math.floor(Math.random()*colors.length);
	return (colors[random]); 
}
function colorarr (num){
	var arr= [];
	for(var i=0; i<num; i++){
	arr.push(randomcolor());}
	return arr ;
}
function randomcolor (){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g +", " + b + ")";
}