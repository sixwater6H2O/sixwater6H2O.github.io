var little_pet = document.getElementById('little_pet');
function showMenu(){
	hideMessage();
	document.getElementById('pet_menu').style.display = 'block';
	SpecialFlag=1;
}

function hideMenu(){
	document.getElementById('pet_menu').style.display = 'none';
	SpecialFlag=0;
}

var playing = document.getElementById('playing');
playing.onclick = function(){
	isClick = false;
    isIdle = false;
	hideMenu();
}
document.getElementById('return_ori').onclick = function (){
	pet.style.cssText = "right: 0;bottom: 0;";
	move_talk();
	hideMenu();
}
document.getElementById('sth').onclick = function (){
	hideMenu();
	SpecialSay(sth_talking);
	setTimeout(function (){
		SpecialEnd();
	},8000);
}
document.getElementById('close_pet').onclick = function (){
	hideMenu();
	isDisplay = false;
	SpecialSay(close_talking);
	setTimeout(function (){
		pet.style.cssText = "right: 0;bottom: 0;display:none;";
		little_pet.style.cssText = "display:block;";
		SpecialEnd();
	},3000);
	
}
little_pet.onclick = function (){
	pet.style.cssText = "display:block;";
	little_pet.style.cssText = "display:none;";
	isDisplay = true;
	SpecialSay(open_talking);
	setTimeout(function (){
		SpecialEnd();
	},5000);
}
document.getElementById('close_menu').onclick = function (){
	hideMenu();
}