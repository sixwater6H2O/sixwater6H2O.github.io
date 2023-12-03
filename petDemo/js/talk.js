

///----- 对话编辑 -----------
var rand_talk = [
		"随机对话1",
		"随机对话2",
		"随机对话3",
		"随机对话4",
	];
	


function updateTalk(){
	today = new Date();
	year = today.getFullYear();
	mon = today.getMonth() + 1;
	date = today.getDate();
	day = today.getDay();
	hour = today.getHours();
	min = today.getMinutes();
	fall_talking = "这是下落对话，目前有"+(fall_cnt+1)+"个掉落物<br>点击掉落物可清除";
	//时间对话
	if (hour>=5 && hour<=7){
		hour_talking = "这是早上5点-7点的对话";
	}
	else if (hour>7 && hour<=11){
		hour_talking = "这是上午8点-11点的对话";
	}
	else if (hour>11 && hour<=14){
		hour_talking = "这是中午12点-14点的对话";
	}
	else if (hour>14 && hour<=17){
		hour_talking = "这是下午15点-17点的对话";
	}
	else if (hour>17 && hour<=19){
		hour_talking = "这是傍晚18点-19点的对话";
	}
	else if (hour>19 && hour<=23){
		hour_talking = "这是晚上20点-23点的对话";
	}
	else {
		hour_talking = "这是深夜0点-4点的对话";
	}
	//日期对话
	if (mon==1&&date==2){
		date_talking = "这是特定日期的对话（1月2日）";
	}
	// 如果需要追加特殊日期在以下区域按格式追加
	//*******************************
	else if (mon==2&&date==2){
		date_talking = "这是特定日期的对话（2月2日）";
	}
	else if (mon==12&&date==21){
		date_talking = "这是特定日期的对话（12月21日）";
	}
	//*******************************
	else {
		date_talking = "现在是"+year+"年"+mon+"月"+date+"日"+"星期"+day+"，"+hour+"时"+min+""+"分，这是报时对话";
	}
}

// 追逐选项对话
var chasing_talk = "这是追逐中对话";
var playing_talk = "这是追逐到鼠标对话";
var start_chasing = "这是追逐开始对话，before_chase秒后<br/>开始追逐鼠标（可在conf.js中更改）";

// 输入框选项对话
var input_info = "这是输入提示语";
var input_help = "这是默认输入内容";
var before_input = "你输入的内容：";
var after_input = "，这是后续内容";
var no_input = "这是什么也没输入的对话";