document.getElementById("plus");
document.getElementById("minus");
var c=0;

plus.onclick=function(){
	
   newDiv=document.createElement('div');
	newDiv.className='tovar';
	newDiv.id='tov'+c;
	newDiv.style.background="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
	
	//newDiv.style.backgroundImage="url(img/"+c+".jpg)";
	newDiv.style.position="absolute";
	newDiv.style.top=0;
	
	mag.appendChild(newDiv);
	
	c++;
	
	if(c>1){mag.removeChild(mag.firstChild);}
	//if(c>5){c=0;mag.removeChild(mag.firstChild);}
}
	

minus.onclick=function(){
	mag.removeChild(mag.lastChild);
	c=0
}

function Random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

