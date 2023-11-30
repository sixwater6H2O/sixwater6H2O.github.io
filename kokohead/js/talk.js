var SpecialFlag = 0;///特殊对话标记
var shinigamiflag = 0;
var isDisplay = true;///是否显示看板
let mask_cnt = 0;
var today = new Date();///日期对话
var year = today.getFullYear();
var mon = today.getMonth() + 1;
var date = today.getDate();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes();
var hour_talking;
var date_talking;
var mask_talking;

///----- 对话编辑 -----------
var rand_talk = [
		["我只是个见习侦探啦……","嗯嗯，主人真的有够废物的！"],
		["卡纳依区最大的秘密会是什么呢？","咔咔咔，一定是让人能兴奋起来的大案吧！"],
		["这次一定要记得所长让我买的东西。","毕竟主人很容易被卷进麻烦里呢~"],
		["","谜题~谜题~杀人案~~在哪里~~"],
		["……哇！","哪里哪里？！有尸体？！……嘁，不是啊……"],
		["卡纳依真的一直在下雨啊。","很容易把血迹冲刷掉呢！"],
		["在哪里都能看到卡纳依塔啊……","主人……！还是离远一点吧！<br/>万一又碰到那个面具怪人就糟了！"],
		["那边好像有……保安部！","快跑啊主人！"],
		["说起来昨天在这里遇到诚了啊。","那个面具可疑怪人总感觉不怀好意！"],
		["好，接下来去调查一下这个吧。","话虽如此，主人只是一直在跑腿罢了~"],
		["","主人，接下来去那边看看吧~"],
		["说起来，<br/>小死神之前的主人都是什么样的人呢？","zZZZZZZZ……嗯？主人说什么没听到！"],
		["","杀爆你——☆"],
		["我记得维维亚先生要的书是……","那个阴暗死宅——净会使唤主人！"],
		["这个时间久留美在上课吧？","主人——不准想那个平胸女！"],
		["欠赫拉拉侦探的钱……<br/>到底要怎么还清……","咔咔咔，谁让主人是笨蛋呢！"],
		["啊……！迪思西可先生又在到处搭讪……！","那个色小鬼！"],
		["那是……吹雪小姐？","嘁，那个不谙世事的大小姐~"],
		["揭开真相就会夺走犯人的生命……","毕竟夺走他人生命的时候<br/>就该有反被夺走的觉悟了吧！"],
		["不知不觉在这里生活了这么久了啊。","嗯~卡纳依区最大的秘密却没有进展呢~"],
		["在我们来之前，所长都在接什么样的委托呢？","回去问问那个乱蓬头吧！"],
	];
	
// commission_talk
var commission_talking = ["好，请稍等！","主人可是跑腿的专家呢！"];
var vva_book_talking = ["久等了！<br/>（……这本书，维维亚先生也读过吧……<br/>这么火的吗？！）",
						"完全搞不懂！"];
var baozi_talking = ["久等了！<br/>（……卡纳依的大家还真是喜欢吃这个肉包啊……）",
						"咔咔咔，主人是不是又忘记了什么事呢？"];						
var secret_talking = ["诶……！诶？！",
						"主人！冲上去问个清楚！"];
var gift_talking = ["久等了！<br/>（也不知道礼物是送给什么人的啊……）",
						"咔咔咔，反正不是给主人的！"];
var murder_talking = ["什、什么？！",
						"咔咔咔，出发去谜迷宫了！"];
var murder_talking2 = ["呼……幸好不是什么大事……",
						"嘁~没劲~"];
var other_talking = ["久等了！<br/>这是你要的",
					"真是的，不要什么都找主人跑腿啊！<br/>杀爆你！"];
var other_hint = "需要幽玛帮忙带些什么？";
var other_example = "《无语迷宫》";

function updateTalk(){
	today = new Date();
	year = today.getFullYear();
	mon = today.getMonth() + 1;
	date = today.getDate();
	day = today.getDay();
	hour = today.getHours();
	min = today.getMinutes();
	mask_talking = ["呜哇……！这是……？诚的面、面具？！",
					"已经是第"+(mask_cnt)+"个了！主人？！那家伙不会就在附近吧？！"];
	//时间对话
	if (hour>=5 && hour<=7){
		hour_talking = ["早安，今天也去调查一下卡纳依区最大的秘密吧。",
						"诶——一日之计在于晨，比起那个更应该先出现两具尸体吧！"];
	}
	else if (hour>7 && hour<=11){
		hour_talking = ["上午好，赫拉拉侦探他们去哪了呢……",
						"本小爷也不知道~！"];
	}
	else if (hour>11 && hour<=14){
		hour_talking = ["中午好！……呜哇！所长的早饭……忘记了！",
						"咔咔咔，回去的时候会看到那个乱蓬头的尸体吗？"];
	}
	else if (hour>14 && hour<=17){
		hour_talking = ["已经到下午了啊……",
						"本小爷要午睡了！zZZZZ"];
	}
	else if (hour>17 && hour<=19){
		hour_talking = ["已经是傍晚了啊，感觉一天又要过去了。",
						"咔咔咔，主人又虚度了无关紧要的人生中无关紧要的一天呢！"];
	}
	else if (hour>19 && hour<=23){
		hour_talking = ["已经是晚上了，大概该回事务所了……",
						"好无聊！今天也没有发生谜案！"];
	}
	else {
		hour_talking = ["哈欠——好晚……",
						"咔咔咔，正是抛尸的好时机哦主人！"];
	}
	//日期对话
	if (mon==1&&date==1){
		date_talking = ["新的一年到了啊……",
						"新年新气象，新的杀人案快出现——"];
	}
	else {
		date_talking = ["现在是"+year+"年"+mon+"月"+date+"日"+"星期"+day+"，"+hour+"时"+min+""+"分……",
						"好无聊——下一秒发生点杀人案件吧！"];
	}
}

var makoto_talking1 = "呀幽玛，好久不见——！<br/>你也在散步吗？<br/>嗯嗯，我懂的！雨中的卡纳依果然很棒吧？<br/>对了，接下来要不要一起？";
var makoto_ans = ["哈、哈哈……抱、抱歉，我之后还有点事……！",
					"（主人——！果然还是找机会开溜吧！）"];
var makoto_talking2 = "是吗？真遗憾……<br/>那幽玛，下次在卡纳依街头闲逛的时候<br/>也叫上我吧？<br/>我们关系都那么好了。";

var chasing_talk = "杀爆你——☆";
var playing_talk = "咔咔咔，尸体发现~♪";
var start_chasing = ["哇……哇！小死神？！等一下！",
					"哦~很有勇气嘛！本小爷让你三秒钟！"];
var copy_talking = ["嗯？刚刚复制了什么？",
					"偷窥狂~"];
var cook_talking = ["那我试试吧！",
					"嗯？嗯~咔咔咔！"];
var sth_talking = ["好伤人！有那么夸张吗？！",
					"咔咔咔，主人搞不好很有做死神的天赋哦！"];
var intro_talking = ["我是幽玛，幽玛=可可赫多……<br/>啊，我确实是侦探没错，但不是超侦探。",
					"本小爷就是又温柔、又调皮、<br/>又可爱又难伺候的小死神是也——！"];

var f12_talking = ["要看看控制台吗？",
					"咔咔咔，要干什么坏事——？"];
var print_talking = ["要打印下来吗？",
					"平面的本小爷！"];
var save_talking = ["要保存下来吗？",
					"哼哼，这样也不会出现解钥哦！"];
var a_talking = ["全选中了？！",
					"呀~！本小爷也被！"];


var content="";
var shinigami_content = "";

///----------------


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
function shinigami_showMessage(){
	move_talk();
	document.getElementById('shinigami_talk').style.display = 'block';
	move_talk();
}
function shinigami_hideMessage(){
	//document.getElementById('talk').style.opacity = 0;  //  修改div的透明度
	move_talk();
	document.getElementById('shinigami_talk').style.display = 'none';
	move_talk();
	}
	

function say(content){
	talk.innerHTML = content;
	showMessage();
	setTimeout("hideMessage();",8000);
	//clearTimeout(t1);
}

function shinigami_say(content){
	
	shinigami_talk.innerHTML = content;
	shinigami_showMessage();
	setTimeout(
		function(){
			
			shinigami_hideMessage();
	},7000);
	//clearTimeout(t1);
}

function ChasingSay(content){
	//hideMessage();
	SpecialFlag += 1;
	document.getElementById('chase_talk').innerHTML = content;
	move_talk();
	document.getElementById('chase_talk').style.display = 'block';
	move_talk();

}
function ChasingEnd(){
	move_talk();
	document.getElementById('chase_talk').style.display = 'none';
	move_talk();
	SpecialFlag -= 1;
}

function SpecialSay(content){
	//hideMessage();
	//shinigami_hideMessage();
	SpecialFlag += 1;
	talk.innerHTML = content;
	showMessage();

}
function SpecialEnd(){
	hideMessage();
	SpecialFlag -= 1;
}

function shinigamiSpecialSay(content){
	//hideMessage();
	//shinigami_hideMessage();
	shinigamiflag += 1;
	shinigami_talk.innerHTML = content;
	shinigami_showMessage();

}
function shinigamiSpecialEnd(){
	shinigami_hideMessage();
	shinigamiflag -= 1;
}

//move_talk();

function rand_t(){
	var ind = Math.floor(Math.random()*(rand_talk.length + 2));
	content="";
	shinigami_content = "";
	var dateORhour = ind - rand_talk.length;
	if (dateORhour == 0){
		content = date_talking[0];
		shinigami_content = date_talking[1];
	}
	else if (dateORhour == 1){
		content = hour_talking[0];
		shinigami_content = hour_talking[1];
	}
	else {
		content = rand_talk[ind][0];
		shinigami_content = rand_talk[ind][1];
	}
	if (content != "") say(content);
	if (shinigami_content != "") setTimeout("shinigami_say(shinigami_content);",1000);
}


document.addEventListener('copy',function(e){
		// clipboardData 对象是为通过编辑菜单、快捷菜单和快捷键执行的编辑操作所保留的，也就是你复制或者剪切内容
		let clipboardData = e.clipboardData || window.clipboardData;
		// 如果 未复制或者未剪切，直接 return 
		if(!clipboardData) return ;
		// Selection 对象 表示用户选择的文本范围或光标的当前位置。
		// 声明一个变量接收 -- 用户输入的剪切或者复制的文本转化为字符串
		let text = window.getSelection().toString();
		if(text){
			// 如果文本存在，首先取消默认行为
			e.preventDefault();
			// 通过调用 clipboardData 对象的 setData(format,data) 方法，设置相关文本 
			// format 一个 DOMString 类型 表示要添加到 drag object 的拖动数据的类型
			// data 一个 DOMString 表示要添加到 drag object 的数据
			SpecialSay(copy_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout("shinigamiSpecialSay(copy_talking[1])",1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
			clipboardData.setData('text/plain', text + '\r\n\r\n————————————————\r\n原文作者：六点儿水\r\n原文链接：'+ document.URL)
		}
	})

document.onkeydown = function() {
        var oEvent = window.event;
 
        if (oEvent.keyCode == 123) {
            SpecialSay(f12_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout("shinigamiSpecialSay(f12_talking[1])",1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
        }
        if (oEvent.keyCode == 80 && oEvent.ctrlKey) {
            SpecialSay(print_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout("shinigamiSpecialSay(print_talking[1])",1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
        }
		if (oEvent.keyCode == 65 && oEvent.ctrlKey) {
            SpecialSay(a_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout("shinigamiSpecialSay(a_talking[1])",1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
        }
 
        if (oEvent.keyCode == 83 && oEvent.ctrlKey) {
            SpecialSay(save_talking[0]);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			setTimeout("shinigamiSpecialSay(save_talking[1])",1000);
			setTimeout(function (){
				shinigamiSpecialEnd();
			},9000);
        }
    }


updateTalk();
//say(hour_talking);
//say_welcome();
setInterval(function () {
	updateTalk();
}, 1000);
///随机对话
// say("test");
// setTimeout("shinigami_say(shinigami_content);",300);
setInterval(function () {
if (SpecialFlag<=0&&isDisplay==true){///有特殊对话时不进行随机对话
		rand_t();
	}
}, 10000);