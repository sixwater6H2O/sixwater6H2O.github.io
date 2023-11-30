const box = document.getElementById('rainBox');
let boxHeight = box.clientHeight;
let boxWidth = box.clientWidth;
var rad=50;
var circlex=0;
var circley=0;
window.onresize = function() {
	boxHeight = box.clientHeight;
	boxWidth = box.clientWidth;
}

function onedrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)+gap}px`;
		drop.style.opacity = op;
	}, 40)
}
function twodrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)-gap}px`;
		drop.style.opacity = op;
	}, 40)
}
function threedrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)-3*gap}px`;
		drop.style.opacity = op;
	}, 40)
}
function fourdrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)+3*gap}px`;
		drop.style.opacity = op;
	}, 40)
}
function fivedrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)-5*gap}px`;
		drop.style.opacity = op;
	}, 40)
}
function sixdrop(drop){
	var op=1;
	var gap=1;
	const loop = setInterval(() => {
		if (op<=0) {
			clearInterval(loop);
			box.removeChild(drop);
			
		}
		gap++
		op-=0.1;
		drop.style.bottom = `${parseInt(drop.style.bottom)+gap}px`;
		drop.style.left = `${parseInt(drop.style.left)+5*gap}px`;
		drop.style.opacity = op;
	}, 40)
}


function rainDot() {
	let rain = document.createElement('div');
	rain.classList.add('rain');
	rain.style.top = 0;
	rain.style.left = `${Math.random() * boxWidth}px`;
	//rain.style.left = boxWidth/2+"px";
	rain.style.opacity = Math.random();
	box.appendChild(rain);
					
	let gap = 1;
	const loop = setInterval(() => {
		if (parseInt(rain.style.top) > boxHeight ){
			//rain.style.top = boxHeight-90+"px";
			rain.style.bottom = 0+"px";
			if(parseInt(rain.style.top) > boxHeight){
				rain.style.bottom = 0+"px";
			}
			//else {
				//alert("touch");
			//}
			clearInterval(loop);
			
			let drop1 = document.createElement('div');
			drop1.classList.add('raindrop');
			drop1.style.bottom = rain.style.bottom;
			drop1.style.left = rain.style.left;
			drop1.style.opacity = 1;
			box.appendChild(drop1);
			onedrop(drop1);
			let drop2 = document.createElement('div');
			drop2.classList.add('raindrop');
			drop2.style.bottom = rain.style.bottom;
			drop2.style.left = rain.style.left;
			drop2.style.opacity = 1;
			box.appendChild(drop2);
			twodrop(drop2);
			let drop3 = document.createElement('div');
			drop3.classList.add('raindrop');
			drop3.style.bottom = rain.style.bottom;
			drop3.style.left = rain.style.left;
			drop3.style.opacity = 1;
			box.appendChild(drop3);
			threedrop(drop3);
			let drop4 = document.createElement('div');
			drop4.classList.add('raindrop');
			drop4.style.bottom = rain.style.bottom;
			drop4.style.left = rain.style.left;
			drop4.style.opacity = 1;
			box.appendChild(drop4);
			fourdrop(drop4);
			let drop5 = document.createElement('div');
			drop5.classList.add('raindrop');
			drop5.style.bottom = rain.style.bottom;
			drop5.style.left = rain.style.left;
			drop5.style.opacity = 1;
			box.appendChild(drop5);
			fivedrop(drop5);
			let drop6 = document.createElement('div');
			drop6.classList.add('raindrop');
			drop6.style.bottom = rain.style.bottom;
			drop6.style.left = rain.style.left;
			drop6.style.opacity = 1;
			box.appendChild(drop6);
			sixdrop(drop6);
			
			
			box.removeChild(rain);
			
		}
		gap++
		rain.style.top = `${parseInt(rain.style.top)+gap}px`;
		//rain.style.bottom = `${parseInt(rain.style.top)+50}px`;
	}, 20)
}

//rainDot();
setInterval(() => {
	rainDot();
}, 20)