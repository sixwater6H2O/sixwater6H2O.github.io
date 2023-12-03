

// 点击事件处理
document.getElementById("pet").onclick = function () {
	isClick = true;
	if (isCatchUp != true || isIdle != false){
		showMenu();
	}
};

function showMenu(){
	Menuon = true;
	SpecialFlag+=1;
	hideMessage();
	document.getElementById('pet_menu').style.display = 'block';
}

function hideMenu(){
	Menuon = false;
	document.getElementById('pet_menu').style.display = 'none';
	SpecialFlag-=1;
}

if (haveChasing){
	var playing = document.getElementById('chasing');
	playing.onclick = function(){
		SpecialSay(start_chasing);
		setTimeout("SpecialEnd();chasing();",before_chase * 1000);
		hideMenu();
	}
}




document.getElementById('close_menu').onclick = function (){
	hideMenu();
	petmove();
}

if (haveFall){
	document.getElementById('fall').onclick = function (){
		hideMenu();
		let fall = document.createElement('img');
		fall.src = fall_img
		fall.classList.add('fall');
		fall.class = 'fall';
		fall.style.width = (fallWidth + "px");
		fall.style.height = (fallHeight + "px");
		fall.id = 'fall' + fall_cnt;
		fall_cnt += 1;
		fall.style.bottom = boxHeight + "px";
		var xx = Math.ceil(Math.random()*boxWidth - fallWidth);
		if (xx<0) xx = 0
		fall.style.left = xx + "px";
		box.appendChild(fall);
		SpecialSay(fall_talking);
		setTimeout("SpecialEnd();",talk_long * 1000);
		fall.onclick = function (){
			fall_cnt -= 1;
			fall.style.display = 'none';
			box.removeChild(fall);
		}
		
		let gap = 1;
		const loop = setInterval(() => {
			if (parseInt(fall.style.bottom) <=0 ){
				clearInterval(loop);
				fall.style.left=xx+"px";
				fall.style.bottom = 0;
			}
			gap++;
			var target = parseInt(fall.style.bottom)-gap;
			//alert(fall.style.bottom)
			target = Math.max(0,target);
			fall.style.left=xx+"px";
			fall.style.bottom =target+"px";
			//fall.style.bottom = `${parseInt(fall.style.top)+50}px`;
		}, 20)
		
	}
}

if (haveInput){
	document.getElementById("to_input").onclick = function(){
		hideMenu();
		SpecialFlag += 1;
		Menuon = true;
		var pmt;
		var toinput =prompt(input_info,input_help);
		if (toinput!=null && toinput!="")
		{
		    pmt = before_input + toinput + after_input;
			SpecialSay(pmt);
			setTimeout(function (){
				SpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				petmove();
			},talk_long * 1000);
		}
		else{
			SpecialSay(no_input);
			setTimeout(function (){
				SpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				petmove();
			},talk_long * 1000);
			return ;
		}
	}
}