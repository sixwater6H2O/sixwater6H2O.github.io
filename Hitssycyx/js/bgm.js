const music = document.getElementById("music")
const click_music = document.getElementById("click_music")
var bgm = false;
var click_bgm = false;

const lyricsContainer = document.getElementById('lyrics-container');
const currentLyric = document.getElementById('current-lyric');
//lyricsContainer.classList.add('hidden');
// 存储歌词
// 解析歌词
let lyrics = []

// 获取歌词文件并解析


function bgm_control(){
	if (bgm==false){
		document.getElementById("bgm").src = "src/bgmon.png";
		bgm=true;
		music.currentTime = 0;
		music.play();
		lyricsContainer.style.display = "block";
		showLyrics(music.currentTime);
	}
	else{
		document.getElementById("bgm").src = "src/bgmoff.png";
		bgm=false;
		music.pause();
		lyricsContainer.style.display = "none";
	}
}


// 解析歌词文本
function parseLrcText(data) {
    const lines = data.split('\n');
    const lyricsArray = [];

    lines.forEach(line => {
        const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
        if (match) {
            const minutes = parseInt(match[1], 10); // 分钟
            const seconds = parseInt(match[2], 10); // 秒
            const milliseconds = parseInt(match[3], 10); // 毫秒
            const text = match[4]; // 歌词文本

            // 将时间转换为秒
            const timeInSeconds = minutes * 60 + seconds + milliseconds / 100;
            lyricsArray.push({ time: timeInSeconds, text: text });
        }
    });

    return lyricsArray;
}

// 显示歌词
function showLyrics(time) {
    const lyric = getLyricForTime(time);
    if (lyric) {
        
        currentLyric.textContent = lyric.text;
    }
}

// 根据当前时间获取对应歌词
function getLyricForTime(time) {
    for (let i = 0; i < lyrics.length; i++) {
        if (lyrics[i].time > time) {
            return lyrics[i - 1] || null;
        }
    }
    return lyrics[lyrics.length - 1]; // 如果没有匹配的歌词，返回最后一行
}

// 监听音频播放进度
music.addEventListener('timeupdate', () => {
    const currentTime = music.currentTime;
    showLyrics(currentTime);
});

// 当音频暂停时隐藏歌词
music.addEventListener('pause', () => {
    lyricsContainer.classList.add('hidden');
});

// 当音频播放时显示歌词
music.addEventListener('play', () => {
    lyricsContainer.classList.remove('hidden');
    parseLyrics();  // 解析歌词文件
    showLyrics(music.currentTime);
});

// 解析歌词
function parseLyrics() {
    const lrcText = `[00:00.00]🍌大香蕉 - 龙智祥/吴非华🍌
[00:03.47]🍌词：龙勇🍌
[00:06.95]🍌曲：龙勇🍌
[00:10.43]🍌混音：杜凌云🍌
[00:13.91]🍌音乐总监：龙智祥🍌
[00:17.39]🍌我想要种一棵香蕉树🍌
[00:20.64]🍌上面挂满我的所有祝福🍌
[00:24.96]🍌如果你感觉生活苦🍌
[00:28.30]🍌带你去海边看日出🍌
[00:32.69]🍌没有什么会放不下🍌
[00:36.50]🍌心打开天不会黑🍌
[00:40.32]🍌如果你感觉快乐了🍌
[00:44.17]🍌把阴霾全部给我擦擦擦🍌
[00:48.23]🍌大香蕉一条大香蕉🍌
[00:51.89]🍌你的感觉真的很奇妙🍌
[00:55.72]🍌飘呀飘摇呀摇🍌
[00:59.55]🍌你的感觉神魂颠倒🍌
[01:03.37]🍌大香蕉一条大香蕉🍌
[01:07.22]🍌你的感觉真的很奇妙🍌
[01:11.05]🍌飘呀飘摇呀摇🍌
[01:14.92]🍌你的感觉神魂颠倒🍌
[01:18.79]🍌我想要种一棵香蕉树🍌
[01:22.24]🍌上面挂满我的所有祝福🍌
[01:26.44]🍌如果你感觉生活苦🍌
[01:29.75]🍌带你去海边看日出🍌
[01:34.12]🍌没有什么会放不下🍌
[01:37.91]🍌心打开天不会黑🍌
[01:41.80]🍌如果你感觉快乐了🍌
[01:45.64]🍌把阴霾全部给我擦擦擦🍌
[01:49.46]🍌大香蕉一条大香蕉🍌
[01:53.35]🍌你的感觉真的很奇妙🍌
[01:57.15]🍌飘呀飘摇呀摇🍌
[02:00.98]🍌你的感觉神魂颠倒🍌
[02:04.82]🍌大香蕉一条大香蕉🍌
[02:08.67]🍌你的感觉真的很奇妙🍌
[02:12.50]🍌飘呀飘摇呀摇🍌
[02:16.35]🍌你的感觉神魂颠倒🍌
[02:35.58]🍌大香蕉一条大香蕉🍌
[02:39.40]🍌你的感觉真的很奇妙🍌
[02:43.22]🍌飘呀飘摇呀摇🍌
[02:47.06]🍌你的感觉神魂颠倒🍌
[02:50.91]🍌大香蕉一条大香蕉🍌
[02:54.74]🍌你的感觉真的很奇妙🍌
[02:58.59]🍌飘呀飘摇呀摇🍌
[03:02.44]🍌你的感觉神魂颠倒🍌
[03:06.28]🍌大香蕉一条大香蕉🍌
[03:10.08]🍌你的感觉真的很奇妙🍌
[03:13.92]🍌飘呀飘摇呀摇🍌
[03:17.76]🍌你的感觉神魂颠倒🍌
[03:21.60]🍌大香蕉一条大香蕉🍌
[03:25.44]🍌你的感觉真的很奇妙🍌
[03:29.29]🍌飘呀飘摇呀摇🍌
[03:33.14]🍌你的感觉神魂颠倒🍌`;

    lyrics = parseLrcText(lrcText);  // 解析歌词文本
}