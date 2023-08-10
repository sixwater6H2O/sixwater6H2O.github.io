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
var home_talking = "啊，欢迎回来！这里是六水的个站，详情可见主页置顶。";
var tag_talking = "这里是文章标签云……等下？这么多？！";
var cate_talking = "这里是文章分类。";
var arch_talking = "这里是归档，可以按时间线查看文章。";
var post_talking = "正在查看"+document.title+"，谢谢喜欢！";
var copy_talking = "咦？刚刚复制了什么……？";
var sth_talking = "呜哇——！请、请不要这么做！";
var intro_talking = "啊，我的名字是园田拉奇，目前在四分谷音高就读。正在DADA老师门下学习钢琴。";


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
	}
	else if (title.includes("关于看板 |")){
		say(intro_talking);
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
			},5000);
			clipboardData.setData('text/plain', text + '\r\n\r\n————————————————\r\n原文作者：六点儿水\r\n原文链接：'+ document.URL)
		}
	})


say_welcome();
///随机对话
setInterval(function () {
	if (SpecialFlag==0){///有特殊对话时不进行随机对话
		rand_t();
	}
}, 10000);