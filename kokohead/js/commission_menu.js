

// 点击事件处理
let commission_menu = document.getElementById('commission_menu');
let other_menu = document.getElementById('commission_other');

function showCommissionMenu(){
	Menuon = true;
	SpecialFlag+=1;
	hideMessage();
	shinigami_hideMessage();
	commission_menu.style.display = 'block';
}

function hideCommissionMenu(){
	Menuon = false;
	commission_menu.style.display = 'none';
	SpecialFlag-=1;
}




document.getElementById('close_commission_menu').onclick = function (){
	hideCommissionMenu();
	kokomove();
}

function doing(){
	pet.style.display = 'none';
	setTimeout(function (){
		pet.style.display = 'block';
	},3000);
}

document.getElementById('vva_book').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	SpecialSay(commission_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},3000);
	setTimeout(function (){
		shinigamiSpecialSay(commission_talking[1]);
	},1000);
	setTimeout(function (){
		shinigamiSpecialEnd();
		doing();
		setTimeout(function (){
			SpecialSay(vva_book_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
				shinigamiSpecialSay(vva_book_talking[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				kokomove();
			},9000);
		},3000);
	},3000);
}

document.getElementById('baozi').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	SpecialSay(commission_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},3000);
	setTimeout(function (){
		shinigamiSpecialSay(commission_talking[1]);
	},1000);
	setTimeout(function (){
		shinigamiSpecialEnd();
		doing();
		setTimeout(function (){
			SpecialSay(baozi_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
				shinigamiSpecialSay(baozi_talking[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				kokomove();
			},9000);
		},3000);
	},3000);
}

document.getElementById('gift').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	SpecialSay(commission_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},3000);
	setTimeout(function (){
		shinigamiSpecialSay(commission_talking[1]);
	},1000);
	setTimeout(function (){
		shinigamiSpecialEnd();
		doing();
		setTimeout(function (){
			SpecialSay(gift_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
				shinigamiSpecialSay(gift_talking[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				kokomove();
			},9000);
		},3000);
	},3000);
}

document.getElementById('secret').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	SpecialSay(secret_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},5000);
	setTimeout(function (){
		shinigamiSpecialSay(secret_talking[1]);
		setTimeout(function (){
			shinigamiSpecialEnd();
			SpecialFlag -= 1;
			Menuon = false;
			kokomove();
		},5000);
	},1000);
}

document.getElementById('murder').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	SpecialSay(murder_talking[0]);
	setTimeout(function (){
		SpecialEnd();
	},3000);
	setTimeout(function (){
		shinigamiSpecialSay(murder_talking[1]);
	},1000);
	setTimeout(function (){
		shinigamiSpecialEnd();
		doing();
		setTimeout(function (){
			SpecialSay(murder_talking2[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout(function (){
				shinigamiSpecialSay(murder_talking2[1]);
			},1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
				SpecialFlag -= 1;
				Menuon = false;
				kokomove();
			},9000);
		},3000);
	},3000);
}


document.getElementById('other').onclick = function (){
	hideCommissionMenu();
	SpecialFlag += 1;
	Menuon = true;
	var pmt;
	var othercommission =prompt(other_hint,other_example);
	if (othercommission!=null && othercommission!="")
	{
	    pmt = other_talking[0] + othercommission;
		SpecialSay(commission_talking[0]);
		setTimeout(function (){
			SpecialEnd();
		},3000);
		setTimeout(function (){
			shinigamiSpecialSay(commission_talking[1]);
		},1000);
		setTimeout(function (){
			shinigamiSpecialEnd();
			doing();
			setTimeout(function (){
				SpecialSay(pmt);
				setTimeout(function (){
					SpecialEnd();
				},8000);
				setTimeout(function (){
					shinigamiSpecialSay(other_talking[1]);
				},1000);
				setTimeout(function (){
					shinigamiSpecialEnd();
					SpecialFlag -= 1;
					Menuon = false;
					kokomove();
				},9000);
			},3000);
		},3000);
	}
	else{
		SpecialFlag -= 1;
		Menuon = false;
		kokomove();
		return ;
	}
	
	
}