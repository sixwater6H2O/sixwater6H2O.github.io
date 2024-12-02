// 打开弹窗
function openModal() {
	game_end();
	// music.play()
	document.getElementById("setting").src = "src/set1.png";
    document.getElementById("modal").style.display = "flex";
}

// 关闭弹窗
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// 处理低、中、高的拖动条（只能选择0.5, 1.5, 2.5）
document.getElementById('slider1').addEventListener('input', function() {
    const value = this.value;
    let displayValue = 0;

    if (value == 0) {displayValue = 2.5; word='低级'}
    else if (value == 1) {displayValue = 1.5; word='中等'}
    else if (value == 2) {displayValue = 0.5; word='高级'}

    document.getElementById('value1').textContent = word;
});

// 处理低、中、高的拖动条（只能选择0.5, 1.5, 2.5）
document.getElementById('slider3').addEventListener('input', function() {
    const value = this.value;

    if (value == 0) {click_bgm = false; word='关'}
    else if (value == 1) {click_bgm = true; word='开'}

    document.getElementById('value3').textContent = word;
});

// 处理任意拖动的控制条（10到60）
document.getElementById('slider2').addEventListener('input', function() {
    const value = this.value;
    document.getElementById('value2').textContent = value;
});

// 应用设置（这里只是简单打印值）
function applySettings() {
    const slider1Value = document.getElementById('slider1').value;
    const slider2Value = document.getElementById('slider2').value;

    let finalValue1 = 0;
    if (slider1Value == 0) finalValue1 = 2.5;
    else if (slider1Value == 1) finalValue1 = 1.5;
    else if (slider1Value == 2) finalValue1 = 0.5;
	
	fre = finalValue1;
	set_second = slider2Value;
	// clearInterval(timer);
	clearInterval(shuaxin);
	shuaxin = setInterval("suijilaoshu()", fre * 1000);
	second = set_second;
	fenshu = 0;
	time.innerHTML = second;
	fen.innerHTML = fenshu;
	// timer = setInterval("daojishi()", 1000);
    // console.log(`应用设置: 控制条1的值 = ${finalValue1}, 控制条2的值 = ${slider2Value}`);
	document.getElementById("setting").src = "src/set2.png";
    closeModal();
	restart_game();
	// location.reload();

}
