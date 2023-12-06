// 不懂的话以下部分请不要修改
var content="";

///----------------
function petmove(){
	pet.style.bottom = 0;
	pet.style.left = position.x + "px"
	dirct = Math.ceil(Math.random()*10) - 5;//大于0向右，小于0向左
	step = Math.floor(Math.random()*boxWidth/4)
	if (dirct>=0){
		document.getElementById("pet").src = right_img;
	}
	else{
		document.getElementById("pet").src = left_img;
	}
	let now_step = 0;
	let iswalk = false;
	const loop = setInterval(() => {
		
		if (Menuon==true || 
		(iswalk==true && (parseInt(pet.style.left)+pet_width>= boxWidth || parseInt(pet.style.left))<= 0 || now_step>=step )){
			
			if (parseInt(pet.style.left) + pet_width > boxWidth){
				pet.style.cssText = "left: "+boxWidth-pet_width+"px";
			}
			if (parseInt(pet.style.left)<= 0 ){
				pet.style.cssText = "left: 0;";
			}
			iswalk = false;
			pet.src = pose0_img
			move_talk();
			clearInterval(loop);
		}
		else{
			iswalk = true;
			if (parseInt(pet.style.left) + pet_width  >= boxWidth || parseInt(pet.style.right)<=0){
				dirct = -1;
				document.getElementById("pet").src = left_img;
			}
			if (parseInt(pet.style.left)<= 0 ){
				dirct = 1;
				document.getElementById("pet").src = right_img;
			}
			if (dirct>=0){
				position.x += 1
			}
			else{
				position.x -= 1
			}
			
			move_talk();
			pet.style.left = position.x + "px"
			now_step+=1
		}
	}, 20)
}

function chasing(){
	isClick = false;
    isIdle = false;
}

function move_talk(){
	var talkx=pet.offsetLeft+pet.offsetWidth/2- talk.offsetWidth/2 + xoffset;
	var talky=pet.offsetTop + topoffset;
	if (talkx<0) talkx=0;
	document.getElementById("talk").style.left = talkx + "px"
	document.getElementById("talk").style.top = talky + "px"
	
	var menux=pet.offsetLeft;
	var menuy=pet.offsetTop;
	document.getElementById("pet_menu").style.left = menux + "px"
	document.getElementById("pet_menu").style.top = menuy + "px"
	
}


function showMessage(){
	move_talk();
	document.getElementById('talk').style.display = 'block';
	move_talk();
}
function hideMessage(){
	//document.getElementById('talk').style.opacity = 0;  //  修改div的透明度
	move_talk();
	document.getElementById('talk').style.display = 'none';
	move_talk();
	}


function say(content){
	talk.innerHTML = content;
	showMessage();
	setTimeout(function(){
		if (SpecialFlag<=0) hideMessage();
		
	},talk_long * 1000);
	//clearTimeout(t1);
}





function SpecialSay(content){
	SpecialFlag += 1;
	talk.innerHTML = content;
	showMessage();

}
function SpecialEnd(){
	SpecialFlag -= 1;
	if (SpecialFlag<=0)  hideMessage();
}



//move_talk();

function rand_t(){
	var ind = Math.floor(Math.random()*(rand_talk.length + 2));
	content="";
	var dateORhour = ind - rand_talk.length;
	if (dateORhour == 0){
		content = date_talking;
	}
	else if (dateORhour == 1){
		content = hour_talking;
	}
	else {
		content = rand_talk[ind];
	}
	if (content != "") say(content);
}



function addTalk(obj){
	hideMenu();
	var aid = obj.getAttribute("id").split("it")[1];
	var id = parseInt(aid);
	SpecialSay(menuList[id][1]);
	setTimeout("SpecialEnd();",talk_long * 1000);
}