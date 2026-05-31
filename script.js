const normalFortunes = [
{name:'ごろごろ日和',text:'今日は何もしない時間も大切な日。',comment:'のんびりするのも予定のうち〜☁️'},
{name:'お茶日和',text:'温かい飲み物を片手にひと息つこう。',comment:'ゆっくりで大丈夫〜☁️'},
{name:'雨音日和',text:'雨音を聞きながら過ごそう。',comment:'静かな時間もいいね〜☁️'},
{name:'読書日和',text:'好きな本や漫画との出会いがあるかも。',comment:'雨宿りのお供にどうぞ☁️'},
{name:'まったり日和',text:'今日は肩の力を抜いていこう。',comment:'のんびりが一番〜☁️'}
];

const rareFortunes = [
{name:'🌈虹の日和',text:'雨上がりの空に小さな虹が見えるかも。',comment:'ちょっと良いことがありそう☁️'}
];

const superRareFortunes = [
{name:'💎紫陽花の祝福',text:'優しい雨があなたを見守っている日。',comment:'ぽたもも応援しているよ☁️'}
];

const legendaryFortunes = [
{name:'⭐ぽたもの特等席',text:'今日はぽたもの隣席。',comment:'ゆっくり雨宿りしていってね☁️'}
];

function drawFortune(){

const n=document.getElementById('name').value.trim();

if(!n){
alert('お名前を入力してください☁️');
return;
}

const roll = Math.random();

let f;

if(roll < 0.05){
f = legendaryFortunes[0];      // 5%
}else if(roll < 0.15){
f = superRareFortunes[0];      // 10%
}else if(roll < 0.40){
f = rareFortunes[0];           // 25%
}else{
f = normalFortunes[Math.floor(Math.random()*normalFortunes.length)];
}

document.getElementById('result').innerHTML = `

 <div class="resultCard">
   <div class="username">☁️ ${n}さん ☁️</div>
   <div class="fortuneBadge">${f.name}</div>
   <div class="text">${f.text}</div>
   <div class="comment">ぽたもより<br>${f.comment}</div>
 </div>`;
}
