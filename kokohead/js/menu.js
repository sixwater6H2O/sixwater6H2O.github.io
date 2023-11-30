let real_cnt = 0;

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
	shinigami_hideMessage();
	shinigami_hideMessage()
	document.getElementById('pet_menu').style.display = 'block';
}

function hideMenu(){
	Menuon = false;
	document.getElementById('pet_menu').style.display = 'none';
	SpecialFlag-=1;
}

var playing = document.getElementById('playing');
playing.onclick = function(){
	shinigami_say(start_chasing[1]);
	setTimeout("say(start_chasing[0]);",1000);
	setTimeout("chasing();",3000);
	hideMenu();
}

document.getElementById('commission').onclick = function (){
	hideMenu();
	isClick = true;
	if (isCatchUp != true || isIdle != false){
		showCommissionMenu();
	}
}

document.getElementById('intro').onclick = function (){
	hideMenu();
	hideMessage();
	SpecialSay(intro_talking[0]);
	document.getElementById("help").style.display = "block";
	setTimeout(function (){
		SpecialEnd();
	},10000);
	setTimeout(function (){
		shinigamiSpecialSay(intro_talking[1]);
		setTimeout(function (){
			document.getElementById("help").style.display = "none";
			shinigamiSpecialEnd();
		},10000);
	},1000);
	
}

document.getElementById('sth').onclick = function (){
	hideMenu();
	hideMessage();
	shinigami_hideMessage();
	SpecialSay(cook_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},8000);
	setTimeout(function (){
		shinigamiSpecialSay(cook_talking[1]);
	},1000);
	setTimeout(function (){
		shinigamiSpecialEnd();
	},9000);
	SpecialFlag += 1;
	setTimeout(function (){
		SpecialFlag-=1;
		var r = confirm("吃了有毒的东西死掉了！是否复活？");
		if (r==true){
			SpecialSay(sth_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
			shinigamiSpecialSay(sth_talking[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
		}
		else{
			SpecialSay(sth_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
			shinigamiSpecialSay(sth_talking[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
		}
	},3000);
}


document.getElementById('close_menu').onclick = function (){
	hideMenu();
	kokomove();
}

document.getElementById('mask').onclick = function (){
	hideMenu();
	
	
	let mask = document.createElement('img');
	mask.src = "./kokohead/img/mask.png"
	mask.classList.add('mask');
	mask.class = 'mask';
	mask.id = 'mask' + mask_cnt;
	mask_cnt += 1;real_cnt +=1;
	mask.style.bottom = boxHeight + "px";
	var rand = Math.ceil(Math.random()*50) - 25;
	var xx = position.x + rand;
	if (xx + 50 >=boxWidth) xx= boxWidth - 50;
	if (xx < 0) xx = 0;
	mask.style.left = xx + "px";
	
	//mask.style.left = boxWidth/2+"px";
	box.appendChild(mask);
	
	if (mask_cnt<7){
		
		SpecialSay(mask_talking[0]);
		setTimeout(function (){
			SpecialEnd();
		},8000);
		setTimeout(function (){
			shinigamiSpecialSay(mask_talking[1]);	
		},1000);
		setTimeout(function (){
			shinigamiSpecialEnd();
		},9000);
		}
	
	let gap = 1;
	const loop = setInterval(() => {
		if (parseInt(mask.style.bottom) <=0 ){
			clearInterval(loop);
			mask.style.cssText="left:"+xx+"px;bottom:" + 0 +"px";
			mask.style.bottom = 0;
		}
		gap++;
		var target = parseInt(mask.style.bottom)-gap;
		//alert(mask.style.bottom)
		target = Math.max(0,target);
		mask.style.cssText="left:"+xx+"px;bottom:"+target+"px";
		//mask.style.bottom = `${parseInt(mask.style.top)+50}px`;
	}, 20)
	
	///集齐七个召唤面具男！
	if (mask_cnt == 7){
		Menuon = true;
		SpecialFlag += 1;
		
		
		for (var i=0;i<real_cnt;i++){
			box.removeChild(document.getElementById('mask'+i));
		}
		mask_cnt = 0;real_cnt=0;
		
		let makoto = document.createElement('img');
		makoto.src = "./kokohead/img/makoto_mask.png"
		makoto.classList.add('pet');
		makoto.class = 'pet';
		makoto.id = 'makoto';
		makoto.style.bottom = boxHeight + "px";
		
		var xx;
		if (position.x < boxWidth/2){
			xx = position.x + 200 + 50;
			xx = Math.min(xx,boxWidth - 200);
		}
		else{
			xx = position.x - 200 - 50;
			xx = Math.max(xx,0);
		}
		
		makoto.style.left = xx + "px";
		//makoto.style.left = boxWidth/2+"px";
		
		let makoto_talk = document.createElement('div');
		makoto_talk.classList.add('talk');
		makoto_talk.class = 'talk';
		makoto_talk.id = 'makoto_talk';
		box.appendChild(makoto_talk);
		box.appendChild(makoto);
		
		
		let gap1 = 1;
		const loop1 = setInterval(() => {
			if (parseInt(makoto.style.bottom) <=0 ){
				clearInterval(loop1);
				
				makoto.style.cssText="left:"+xx+"px;bottom:" + 0 +"px";
				makoto.style.bottom = 0;
				makoto_talk.innerHTML = makoto_talking1;
				var makoto_talkx=makoto.offsetLeft-makoto.offsetWidth/4+ makoto_talk.offsetWidth/2 ;
				var makoto_talky=makoto.offsetTop- 10;
				if (makoto_talkx<0) makoto_talkx=0;
				makoto_talk.style.left = makoto_talkx + "px"
				makoto_talk.style.top = makoto_talky + "px"
				makoto_talk.style.display = 'block';
				shinigami_hideMessage();
				setTimeout("makoto_talk.style.display = 'none';",4000);
				setTimeout(function(){
					shinigamiSpecialSay(makoto_ans[1]);
				},4000);
				setTimeout("shinigamiSpecialEnd()",9000);
				setTimeout("SpecialSay(makoto_ans[0]);",5000);
				setTimeout("SpecialEnd()",10000);
				
				setTimeout(function (){
					makoto_talk.innerHTML = makoto_talking2;
					makoto_talk.style.display = 'block';
				},8000);
				setTimeout(function (){
					makoto_talk.style.display = 'none';
					SpecialFlag -= 1;
					Menuon =false;
					box.removeChild(makoto);
					box.removeChild(makoto_talk);
					kokomove();
				},13000);
				
				
				
			}
			gap++;
			var target = parseInt(makoto.style.bottom)-gap;
			//alert(makoto.style.bottom)
			target = Math.max(0,target);
			makoto.style.cssText="left:"+xx+"px;bottom:"+target+"px";
			//makoto.style.bottom = `${parseInt(makoto.style.top)+50}px`;
	}, 20)
	}
	
}