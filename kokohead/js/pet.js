let Menuon = false;
// 初始化时主动调用
let walk_frequency = 10;
// 记录当前移动次数
let count = 0;
// 宠物移动到鼠标位置，所需要的次数
let speed = 80;
 
// 是否处于追逐状态
let isCatchUp = false;
// 是否处于点击状态
let isClick = false;
 
// 是否处于待机状态
let isIdle = true;
 
// 攻击动画状态记录
let attack = {
    // 当前帧
    current: 0,
    // 持续时间
    max: 500,
}
// 点击动画状态记录
let click = {
    current: 0,
    max: 40
}
 
// 行走动画状态记录
let walk = {
    current: 0,
    max: 850
}
// 获取宠物元素
let pet = document.getElementById('pet');
let talk = document.getElementById('talk');
let shinigami_talk = document.getElementById("shinigami_talk");
let chasing_shinigami = document.getElementById('chasing_shinigami');
// 旋转角度
let deg = 0;
// 旋转角度Y
let deg_y = 0;
// 记录宠物距离鼠标需要移动的距离
let mousePosition = {
    x: 0,
    y: 0,
}
// 记录宠物位置
let position = {
    x: pet.getBoundingClientRect().left,
    y: pet.getBoundingClientRect().top,
}

// 鼠标移动事件处理
window.addEventListener('mousemove', function (event) {
 
    // 期望图片移动到的鼠标x轴位置 = 当前鼠标位置-距离浏览器左边的距离-宠物相对于浏览器页面宽度/2（宽的中心位置）
    mousePosition.x = event.x - chasing_shinigami.offsetLeft - chasing_shinigami.clientWidth / 2;
    mousePosition.y = event.y - chasing_shinigami.offsetTop - chasing_shinigami.clientHeight / 2;
    count = 0;
})
 
// 每过10毫秒，循环执行
setInterval(() => {
	move_talk();
    // 处于追逐鼠标状态
    if (isCatchUp == false && isIdle == false) {
		hideMessage();
		shinigami_hideMessage();
		ChasingSay(chasing_talk);
		setTimeout("ChasingEnd();",8000);
		pet.style.display = 'none';
		chasing_shinigami.left = position.x;
		chasing_shinigami.top = position.y;
		document.getElementById("chasing_shinigami").src = "kokohead/img/shinigami.png"
		chasing_shinigami.style.display = 'block';
        
        catchUpState();
    }
    // 处于攻击状态
    else if (isCatchUp == true && isIdle == false) {
		ChasingSay(playing_talk);
		setTimeout("ChasingEnd();",8000);
        attackState();
    }
    // 处于点击状态
    else if (isClick == true) {
        clickState();
    }
}
    , 10)
 
function catchUpState() {
    // 准备播放追逐状态动画
    if (walk.current == 0) {
        // 此时宠物为追逐状态，gif图切换为walk.gif
		hideMessage();
		shinigami_hideMessage();
		ChasingSay(chasing_talk);
		setTimeout("ChasingEnd();",8000);
		pet.style.display = 'none';
		// chasing_shinigami.left = position.x;
		// chasing_shinigami.top = position.y;
		document.getElementById("chasing_shinigami").src = "kokohead/img/shinigami.png"
		chasing_shinigami.style.display = 'block';
        // 因为不同的GIF图对应的宽高可能有差别，需要调整的可以在这里调整
        //pet.style.width = 50 + "px"
		
        // 当前动画帧+1
        walk.current++
    }
    // 开始播放追逐状态GIF
    else if (walk.current < walk.max) {
        // 调整宠物角度
        chasing_shinigami.style.transform = "rotateZ(" + deg + "deg) rotateY(" + deg_y + "deg)"
        // 如果没追到鼠标
        if (count < speed) {
            // position.x和y分别记录当前宠物的横纵坐标位置
            // 此时的横纵坐标位置，通过+=的方式移过去，speed越大，移动速度越慢
            // 相当于将两点之间的位置分为speed份，每一次刷新移动一份的距离
            position.x += mousePosition.x / speed
            position.y += mousePosition.y / speed
        }
        // 追到鼠标
        else {
            // 改变状态
            isCatchUp = true
            walk.current = 0
        }
        // 实际的画出当前的宠物位置
        chasing_shinigami.style.left = position.x + "px"
        chasing_shinigami.style.top = position.y + "px"
		move_talk();
        count++;
        walk.current++;
    }
    // 结束播放追逐状态GIF，同时开始重新播放追逐状态GIF图
    else if (walk.current >= walk.max) {
        walk.current = 0;
		document.getElementById("chasing_shinigami").src = "kokohead/img/shinigami.png"
    }
 
}
 
function attackState() {
    // 准备播放攻击状态动画
    if (attack.current == 0) {
        // 调整播放的动画
		//SpecialEnd();
		ChasingSay(playing_talk);
		setTimeout("ChasingEnd();",8000);
        document.getElementById("chasing_shinigami").src = "kokohead/img/shinigami.gif"
		
        //pet.style.width = 100 + "px"
        attack.current++
    }
    // 开始播放攻击状态动画，这里可以拓展在某些帧（current计数）的时候设置攻击范围和攻击处理函数之类的
    else if (attack.current < attack.max) {
		ChasingSay(playing_talk);
		setTimeout("ChasingEnd();",8000);
        attack.current++;
    }
    // 结束播放攻击动画，改变对应状态，播放待机动画。
    else if (attack.current >= attack.max) {
        // 将动画设置复原
        isCatchUp = false;
        isIdle = true;
		Menuon==false;
        attack.current = 0;
		//document.getElementById('talk').style = ""
        chasing_shinigami.style.display = 'none';
		pet.style.display = 'block';
		kokomove();
        //pet.style.width = 50 + "px"
		
    }
 
}
 
function clickState() {
    // 准备播放受击动画
    if (click.current == 0) {
        document.getElementById("pet").src = "kokohead/img/pose0.png"
        //pet.style.width = 60 + "px"
        click.current++
    }
    // 开始播放受击动画，可以在这里面处理对应受击动作函数
    else if (click.current < click.max) {
        click.current++;
    }
    // 结束播放受击动画，改变状态，播放行走动画
    else if (click.current >= click.max) {
        click.current = 0;
        document.getElementById("pet").src = "kokohead/img/pose0.png"
        //pet.style.width = 50 + "px"
        isClick = false;
        //isIdle = false;
    }
 
 
}


function kokomove(){
	pet.style.left = position.x + "px"
	dirct = Math.ceil(Math.random()*10) - 5;//大于0向右，小于0向左
	step = Math.floor(Math.random()*500)
	
	let now_step = 0;
	let iswalk = false;
	const loop = setInterval(() => {
		
		if (Menuon==true || 
		(iswalk==true && (parseInt(pet.style.left)+200 >= boxWidth || parseInt(pet.style.left))<= 0 || now_step>=step )){
			
			if (parseInt(pet.style.left) + 200 > boxWidth){
				pet.style.cssText = "left: "+boxWidth-200+"px";
			}
			if (parseInt(pet.style.left)<= 0 ){
				pet.style.cssText = "left: 0;";
			}
			iswalk = false;
			document.getElementById("pet").src = 'kokohead/img/pose0.png'
			move_talk();
			clearInterval(loop);
		}
		else{
			iswalk = true;
			if (parseInt(pet.style.left) + 201 >= boxWidth || parseInt(pet.style.right)<=0){
				dirct = -1;
			}
			if (parseInt(pet.style.left)<= 0 ){
				dirct = 1;
			}
			if (dirct>=0){
				document.getElementById("pet").src = 'kokohead/img/right.png'
				position.x += 1
				var shinigami_talkx=pet.offsetLeft- shinigami_talk.offsetWidth/2 - 2*pet.offsetWidth;
				if (shinigami_talkx +  shinigami_talk.offsetWidth > boxWidth){
					shinigami_talkx =  shinigami_talkx - pet.offsetWidth
				}
				document.getElementById("shinigami_talk").style.left = shinigami_talkx + "px"
			}
			else{
				document.getElementById("pet").src = 'kokohead/img/left.png'
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
	var talkx=pet.offsetLeft+pet.offsetWidth/2- talk.offsetWidth/2 - pet.offsetWidth/8;
	var talky=pet.offsetTop- 10;
	if (talkx<0) talkx=0;
	document.getElementById("talk").style.left = talkx + "px"
	document.getElementById("talk").style.top = talky + "px"
	
	var shinigami_talkx=pet.offsetLeft+pet.offsetWidth- shinigami_talk.offsetWidth/2;
	if (shinigami_talkx +  shinigami_talk.offsetWidth + 20 > boxWidth){
		shinigami_talkx =  shinigami_talkx - shinigami_talk.offsetWidth -20
	}
	if (shinigami_talkx<0) shinigami_talkx = 0;
	var shinigami_talky=pet.offsetTop + 10 + pet.offsetHeight/2;
	document.getElementById("shinigami_talk").style.left = shinigami_talkx + "px"
	document.getElementById("shinigami_talk").style.top = shinigami_talky + "px"
	
	var menux=pet.offsetLeft;
	var menuy=pet.offsetTop;
	document.getElementById("pet_menu").style.left = menux + "px"
	document.getElementById("pet_menu").style.top = menuy + "px"
	document.getElementById("commission_menu").style.left = menux + "px"
	document.getElementById("commission_menu").style.top = menuy + "px"
	
	chase_talk = document.getElementById("chase_talk");
	var chase_talkx=chasing_shinigami.offsetLeft+chasing_shinigami.offsetWidth/2- chase_talk.offsetWidth/2;
	if (chase_talkx +  chase_talk.offsetWidth > boxWidth){
		chase_talkx =  chase_talkx - chase_talk.offsetWidth
	}
	var chase_talky=chasing_shinigami.offsetTop - 10;
	document.getElementById("chase_talk").style.left = chase_talkx + "px"
	document.getElementById("chase_talk").style.top = chase_talky + "px"
}

kokomove();
setInterval(() => {
	if(isIdle==true&&Menuon==false) kokomove();
}, 10000)