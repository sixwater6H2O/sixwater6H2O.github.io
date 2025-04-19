var fre=1.5;
var set_second = 30;
var out = document.getElementById("out");
document.body.style.backgroundImage = "src/back.png";
out.style.width = document.body.clientWidth*0.95 + "px";
out.style.height = "auto";
if (document.body.clientWidth < document.body.clientHeight){
	document.body.style.transform = "rotate(90deg)";
	document.body.style.backgroundImage = "url(src/back2.png)";
	out.style.width = document.body.clientHeight*0.95 + "px";
	out.style.height = "auto";
}
//获取渲染地鼠的方块
var clock = document.getElementById("clock");
var fen = document.getElementById("fen_shu");
		
var time = document.getElementById("time");
var second=set_second;       
var shuaxin;
var timer;
		
        //加载时执行此方法，渲染地图
var fall_cnt = 0;
onload = function () {
	for(var i = 0; i < 10; i++){
		var fall = document.createElement("img");
		fall.className = "fall";
		fall.classList.add('fall');
		fall.class = 'fall';
		fall.style.width = (20 + "%");
		fall.style.height = "auto";
		fall.style.bottom = "0";
		fall.id = 'fall';
		fall_cnt += 1;
		fall.src = "src/banana.GIF";
		out.appendChild(fall);
    }
	alert("三笙ycyx又在水群不开播了，快抓住他！\n");
}
var count = 0;
var fenshu = 0;
var ps = document.getElementsByClassName("fall");
var index = 0;
		


//随机刷新老鼠的位置
function suijilaoshu(){
	if (click_bgm==true){
		click_music.pause();
	}
	index = Math.floor(Math.random()*ps.length);
	for(var i = 0; i < ps.length; i++){
		ps[i].src = "src/banana.GIF";
		ps[i].id = 'fall';
					
	}
	ps[index].src = "src/ssycyx.GIF";
	count = index;
	ps[index].id = "ssycyx";
}

function daojishi(){
    if(second != 0){
        second--;
        time.innerHTML = second.toString(10).padStart(2, '0');
    } else {
		alert("打中次数:" + fenshu + "！\n该开播了主播！");
        game_end();
        }
    }
        //定时调用
function start_game(){
	
    shuaxin = setInterval("suijilaoshu()", fre * 1000);
    timer = setInterval("daojishi()", 1000);
        //点中老鼠后，切换图片为老鼠被击中
	
}

function restart_game(){
	game_end();
	alert("三笙ycyx又在水群不开播了，快抓住他！\n");
}

function game_end(){
	clearTimeout(shuaxin);
	clearTimeout(timer);
	count = 0;
	fenshu = 0;
	index = 0;
	second = set_second;
	time.innerHTML = second.toString(10).padStart(2, '0');
	fen.innerHTML = fenshu.toString(10).padStart(2, '0');
	for(var i = 0; i < ps.length; i++){
		ps[i].src = "src/banana.GIF";
		ps[i].id = 'fall';
					
	}
}


onclick = function (event){
        var obj = event.target;
        if(obj.id == "ssycyx"){
			if (click_bgm==true){
				click_music.play();
			}
			ps[index].src = "src/hit.png";
			ps[index].id = "fall";
			ps[index].style.width = ps[0].clientWidth;
			ps[index].style.height = ps[0].clientHeight;
			ps[index].style.position = "center";
			fenshu+=1;
			fen.innerHTML = fenshu.toString(10).padStart(2, '0');;
        }
    }