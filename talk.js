var SpecialFlag = 0;///特殊对话标记
var isDisplay = true;///是否显示看板

var today = new Date();///日期对话
var year = today.getFullYear();
var mon = today.getMonth() + 1;
var date = today.getDate();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes();
var hour_talking;
var date_talking;

///----- 对话编辑 -----------
var rand_talk = [
		"或许我能成为妈妈……！",
		"对不起，只有我是庸才。",
		"爸爸净给人添麻烦……",
		"我想让妈妈再次看到我们七人一起弹钢琴！",
		"拉奇。虽然很像狗，但这是我的名字。",
		"好开心……！",
		"……我感觉就在刚才自己成为了人类",
		"我将之前的自己杀死了。",
		"奇迹般的时光到此为止了。",
		"哪怕事到如今，我也依然喜欢弹钢琴。",
		"冬……真希望他能稍微多关心下大家，至少叫对大家的名字吧。",
		"礼二郎总是怕寂寞……希望他每天都能睡好觉。",
		"米明之后要走的路一定充满艰辛，我会支持她，永远永远支持她的选择。",
		"范塔满脑子都是自己……不过，如果不是我害得爸爸妈妈离婚的话……",
		"空近……完全不知道他在想什么……",
		"西卡托从小就只喜欢爸爸。有时候还会玩危险的东西，要小心他伤到自己或别人。",
		"米明好像很喜欢梅洛利前辈。梅洛利前辈似乎也挺喜欢米明的。",
		"礼二郎他们不太喜欢运模仿自己的幻想。不过，还是要谢谢运一直以来的帮助。",
		"古须同学能找到新的方向真是太好了。不过，范塔最近是不是走太近了……",
		"孩子不可以打父亲！",
		"我没有幻想。我只是庸才。"
	];

function updateTalk(){
	today = new Date();
	year = today.getFullYear();
	mon = today.getMonth() + 1;
	date = today.getDate();
	day = today.getDay();
	hour = today.getHours();
	min = today.getMinutes();
	//时间对话
	if (hour>=5 && hour<=7){
		hour_talking = "早上好！话说回来，起得好早啊……";
	}
	else if (hour>7 && hour<=11){
		hour_talking = "上午好！工作进行得怎么样？不要忘记起身活动一下哦。";
	}
	else if (hour>11 && hour<=14){
		hour_talking = "中午好！米明他们有时候会忘记吃午饭……无论如何，还是要好好吃饭。";
	}
	else if (hour>14 && hour<=17){
		hour_talking = "下午好！困了的话，要不要休息一下？";
	}
	else if (hour>17 && hour<=19){
		hour_talking = "已经到了傍晚了啊……这样的夕阳总会让我想起礼二郎。";
	}
	else if (hour>19 && hour<=23){
		hour_talking = "晚上好！今天辛苦啦，现在就好好休息吧。";
	}
	else {
		hour_talking = "呜哇！好晚？！是失眠了吗？有什么我能帮忙的吗？";
	}
	//日期对话
	if (mon==12&&date==21){
		date_talking = "啊……今天已经是12月21日了……虽然不能和手足们团聚，但果然还是祝大家生日快乐。";
	}
	else if (mon==8&&date==7){
		date_talking = "今天是8月7日……等下、今天似乎是运的生日？！";
	}
	else if (mon==1&&date==1){
		date_talking = "新的一年到了啊……今年也请多多指教！";
	}
	else {
		date_talking = "现在是"+year+"年"+mon+"月"+date+"日"+"星期"+day+"，"+hour+"时"+min+""+"分。今天的天气怎么样？";
	}
}

var chasing_talk = "等、等一下？！为什么要跑？！";
var playing_talk = "那我来弹一首《小星星变奏曲》吧。";
var home_talking = "啊，欢迎回来！这里是六水的个站，详情可见主页置顶。";
var tag_talking = "这里是文章标签云……等下？这么多？！";
var cate_talking = "这里是文章分类。";
var arch_talking = "这里是归档，可以按时间线查看文章。";
var post_talking = "正在查看"+document.title+"，谢谢喜欢！";
var copy_talking = "咦？刚刚复制了什么……？";
var sth_talking = "呜哇——！请、请不要这么做！";
var intro_talking = "你好，我的名字是园田拉奇，目前在四分谷音高就读。正在DADA老师门下学习钢琴。";
var author_talking = "总之，似乎就是这样的人。";
var f12_talking = "要看看控制台吗？";
var print_talking = "要打印下来吗？";
var save_talking = "要保存下来吗？";
var a_talking = "全、全选中了？";
var close_talking = "那我先走啦，有什么事再叫我。";
var open_talking = "我回来了……有什么事吗？";

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
	

function say(content){
	talk.innerHTML = content;
	showMessage();
	setTimeout("hideMessage();",8000);
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
	var ind = Math.floor(Math.random()*(rand_talk.length + 2));
	var content;
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
	say(content);
}

function say_welcome(){
	var title = document.title;
	if (title.includes("标签 |")){
		say(tag_talking);
	}
	else if (title.includes("分类 |")){
		say(cate_talking);
	}
	else if (title.includes("Archives |")){
		say(arch_talking);
	}
	else if (title==="厌城"){
		say(home_talking);
		//say(date_talking);
	}
	else if (title.includes("关于看板 |")){
		say(intro_talking);
	}
	else if (title.includes("食用说明 |")){
		say(author_talking);
	}
	else{
		say(post_talking);
	}
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
			SpecialSay(copy_talking);
			setTimeout(function (){
				SpecialEnd();
			},8000);
			clipboardData.setData('text/plain', text + '\r\n\r\n————————————————\r\n原文作者：六点儿水\r\n原文链接：'+ document.URL)
		}
	})

document.onkeydown = function() {
        var oEvent = window.event;
 
        if (oEvent.keyCode == 123) {
            SpecialSay(f12_talking);
			setTimeout(function (){
				SpecialEnd();
			},8000);
        }
        if (oEvent.keyCode == 80 && oEvent.ctrlKey) {
            SpecialSay(print_talking);
			setTimeout(function (){
				SpecialEnd();
			},8000);
        }
		if (oEvent.keyCode == 65 && oEvent.ctrlKey) {
            SpecialSay(a_talking);
			setTimeout(function (){
				SpecialEnd();
			},8000);
        }
 
        if (oEvent.keyCode == 83 && oEvent.ctrlKey) {
            SpecialSay(save_talking);
			setTimeout(function (){
				SpecialEnd();
			},8000);
        }
    }


updateTalk();
//say(hour_talking);
say_welcome();
setInterval(function () {
	updateTalk();
}, 1000);
///随机对话
setInterval(function () {
	if (SpecialFlag==0&&isDisplay==true){///有特殊对话时不进行随机对话
		rand_t();
	}
}, 12000);