const music = document.getElementById("music")
const click_music = document.getElementById("click_music")
var bgm = false;
var click_bgm = false;

const lyricsContainer = document.getElementById('lyrics-container');
const currentLyric = document.getElementById('current-lyric');
lyricsContainer.classList.add('hidden');
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
    const lrcText = `[00:01.77](もしもし)
[00:04.39](もしもし)
[00:06.75](なにこれ)
[00:16.88]三更半夜 寂しい的我
[00:25.28]只听见 おじさん 骑着单车卖着馒头
[00:33.60]四時半です 你究竟在哪里
[00:41.45]难道你又是在 クラブ 唱着 なかし 哟
[00:49.76]Oh 不知道你还爱不爱我
[00:56.79]我哪里做错 请你快告诉我
[01:04.90]我打不还手 我骂不还口
[01:13.32]只要你说一声「愛してる」
[01:16.43]别说 さよなら
[01:22.45](ばか)
[01:26.92]一人で 孤苦伶仃的我
[01:34.75]苦等着 あなた 两年三个月没有消息
[01:43.12]快要发疯 我听到门铃声
[01:51.22]すみません 宅急便说他要找的在隔壁
[01:58.57](ばかやろ)
[01:59.62]Oh 我怀疑你 已经不爱我
[02:06.65]想要离开我 我求你不要走
[02:14.50]我为你减肥 我为你喝醉
[02:23.15]请不要说你已不爱我
[02:26.27]亲爱的 あなた
[02:34.40](あなた あなた)
[02:36.46](Oh please don't go, no no……)
[02:57.07]我要你知道 我永远爱你
[03:04.43]如果失去你 我就活不下去
[03:12.48]我们最 マッチ 我不会怪你
[03:20.58]因为有一天你会看见我爬出电视机`;

    lyrics = parseLrcText(lrcText);  // 解析歌词文本
}