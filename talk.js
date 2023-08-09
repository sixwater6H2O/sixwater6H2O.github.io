var SpecialFlag = 0;///特殊对话标记

var rand_talk = [
	"或许我能成为妈妈……！",
	"对不起，只有我是庸才。",
	"爸爸净给人添麻烦……",
	"我想让妈妈再次看到我们七人一起弹钢琴！",
	"拉奇。虽然很像狗，但这是我的名字。",
	"好开心……！"
];
var chasing_talk = "等、等一下？！为什么要跑？！";
var playing_talk = "那我来弹一首《小星星变奏曲》吧。";


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
	setTimeout("hideMessage();",5000);
	//clearTimeout(t1);
}

function SpecialSay(content){
	//hideMessage();
	SpecialFlag = 1;
	talk.innerHTML = content;
	showMessage();

}
function SpecialEnd(){
	hideMessage();
	SpecialFlag = 0;
}
//move_talk();

function rand_t(){
	var content = rand_talk[Math.floor(Math.random()*rand_talk.length)];
	say(content);
}

say("啊，欢迎回来！");
///随机对话
setInterval(function () {
	if (SpecialFlag==0){///有特殊对话时不进行随机对话
		rand_t();
	}
}, 10000);