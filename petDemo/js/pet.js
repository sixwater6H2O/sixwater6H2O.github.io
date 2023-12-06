

const box = document.getElementById('Box');
let boxHeight = box.clientHeight;
let boxWidth = box.clientWidth;
var rad=50;
var circlex=0;
var circley=0;
window.onresize = function() {
	boxHeight = box.clientHeight;
	boxWidth = box.clientWidth;
}

let Menuon = false;
// 初始化时主动调用

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
    max: 300,
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
    mousePosition.x = event.x - pet.offsetLeft - pet.clientWidth / 2;
    mousePosition.y = event.y - pet.offsetTop - pet.clientHeight / 2;
    count = 0;
})
 
// 每过10毫秒，循环执行
setInterval(() => {
	move_talk();
    // 处于追逐鼠标状态
    if (isCatchUp == false && isIdle == false) {
		SpecialSay(chasing_talk);
		setTimeout("SpecialEnd();",talk_long * 1000 );
		pet.left = position.x;
		pet.top = position.y;
		
        catchUpState();
    }
    // 处于攻击状态
    else if (isCatchUp == true && isIdle == false) {
		SpecialSay(playing_talk);
		setTimeout("SpecialEnd();",talk_long * 1000 );
        attackState();
    }
    // 处于点击状态
    else if (isClick == true) {
        clickState();
    }
	else {
		pet.style.bottom = 0;
	}
}
    , 10)
 
function catchUpState() {
    // 准备播放追逐状态动画
    if (walk.current == 0) {
        // 此时宠物为追逐状态，gif图切换为walk.gif
		hideMessage();
		SpecialSay(chasing_talk);
		setTimeout("SpecialEnd();",talk_long * 1000 );
		pet.left = position.x;
		pet.top = position.y;
		pet.src = chasing_img
        walk.current++
    }
    // 开始播放追逐状态GIF
    else if (walk.current < walk.max) {
        // 调整宠物角度
        pet.style.transform = "rotateZ(" + deg + "deg) rotateY(" + deg_y + "deg)"
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
        pet.style.left = position.x + "px"
        pet.style.top = position.y + "px"
		move_talk();
        count++;
        walk.current++;
    }
    // 结束播放追逐状态GIF，同时开始重新播放追逐状态GIF图
    else if (walk.current >= walk.max) {
        walk.current = 0;
		pet.src = chasing_img
    }
 
}
 
function attackState() {
    // 准备播放攻击状态动画
    if (attack.current == 0) {
        // 调整播放的动画
		//SpecialEnd();
		SpecialSay(playing_talk);
		setTimeout("SpecialEnd();",talk_long * 1000 );
        pet.src = attack_img
		
        //pet.style.width = 100 + "px"
        attack.current++
    }
    // 开始播放攻击状态动画，这里可以拓展在某些帧（current计数）的时候设置攻击范围和攻击处理函数之类的
    else if (attack.current < attack.max) {
		SpecialSay(playing_talk);
		setTimeout("SpecialEnd();",talk_long * 1000 );
        attack.current++;
    }
    // 结束播放攻击动画，改变对应状态，播放待机动画。
    else if (attack.current >= attack.max) {
        // 将动画设置复原
        isCatchUp = false;
        isIdle = true;
		Menuon==false;
        attack.current = 0;
		pet.style.bottom = 0;
		pet.style.top = boxHeight - pet_height + "px";
		//document.getElementById('talk').style = ""
		petmove();
		
    }
 
}
 
function clickState() {
    // 准备播放受击动画
    if (click.current == 0) {
        document.getElementById("pet").src = click_img
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
        document.getElementById("pet").src = pose0_img
        isClick = false;
        //isIdle = false;
    }
 
 
}

petmove();
setInterval(() => {
	if(isIdle==true&&Menuon==false) petmove();
}, walk_frequency * 1000);