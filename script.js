const normalFortunes = [
  {name:'ごろごろ日和', image:'images/gorogoro.PNG'},
  {name:'お茶日和', image:'images/ochoa.PNG'},
  {name:'雨音日和', image:'images/amaoto.PNG'},
  {name:'読書日和', image:'images/dokusyo.PNG'},
  {name:'お散歩日和', image:'images/osanpo.PNG'},
  {name:'おやすみ日和', image:'images/oyasumi.PNG'},
  {name:'ひなたぼっこ日和', image:'images/hinatabokko.PNG'},
  {name:'おやつ日和', image:'images/oyatsu.PNG'},
  {name:'おたより日和', image:'images/otayori.PNG'},
  {name:'おえかき日和', image:'images/oekaki.PNG'},
  {name:'深呼吸日和', image:'images/shinkokyu.PNG'},
  {name:'おかたづけ日和', image:'images/okataduke.PNG'},
  {name:'ROM専日和', image:'images/romusen.PNG'},
  {name:'窓辺日和', image:'images/madobe.PNG'},
  {name:'音楽日和', image:'images/ongaku.PNG'},
  {name:'思い出日和', image:'images/omoide.PNG'},
  {name:'おりょうり日和', image:'images/oryouri.PNG'},
  {name:'水やり日和', image:'images/mizuyari.PNG'},
  {name:'てづくり日和', image:'images/tedukuri.PNG'},
  {name:'星空日和', image:'images/hoshizora.PNG'},
  {name:'せんたく日和', image:'images/sentaku.PNG'},
  {name:'空想日和', image:'images/kuusou.PNG'},
  {name:'かいもの日和', image:'images/kaimono.PNG'}
];

const rareFortunes = [{name:'🌈虹の日和', image:'images/rare_niji.PNG'}];
const superRareFortunes = [{name:'💎紫陽花の祝福', image:'images/sr_ajisai.PNG'}];
const legendaryFortunes = [{name:'⭐ぽたもの特等席', image:'images/legend_potamo.PNG'}];
const comments = {
  'ごろごろ日和':'のんびりするのも予定のうち☁️🛋️',
  'お茶日和':'あたたかい一杯でほっとひと息☁️☕',
  '雨音日和':'雨音と一緒にゆっくり過ごそう☁️🌧️',
  '読書日和':'本の世界へ雨宿り☁️📚',
  'お散歩日和':'小さな発見を探しに行こう☁️🚶',
  'おやすみ日和':'無理せずゆっくり休もう☁️🌙',
  'ひなたぼっこ日和':'あたたかい光を感じてみよう☁️☀️',
  'おやつ日和':'甘い時間も大切☁️🍪',
  'おたより日和':'誰かに気持ちを届けてみよう☁️💌',
  'おえかき日和':'思いつくままに描いてみよう☁️🎨',
  '深呼吸日和':'ひと息ついて、肩の力を抜こう☁️🍃',
  'おかたづけ日和':'少し整えると気持ちもすっきり☁️🧹',
  'ROM専日和':'見守るだけの日があってもいい☁️👀',
  '窓辺日和':'窓の外を眺めながら雨宿り☁️🪟',
  '音楽日和':'好きな音に耳を傾けてみよう☁️🎵',
  '思い出日和':'懐かしい時間に会いに行こう☁️📷',
  'おりょうり日和':'できたての幸せをどうぞ☁️🍳',
  '水やり日和':'小さな成長を見守ろう☁️🌱',
  'てづくり日和':'ひとつずつ形にしていこう☁️🧶',
  '星空日和':'夜空を見上げてみよう☁️⭐',
  'せんたく日和':'お気に入りも気分もさっぱり☁️🧺',
  '空想日和':'今日は少し想像の旅へ☁️💭',
  'かいもの日和':'欲しかったものに出会えるかも☁️🛍️',

  '🌈虹の日和':'ちょっと良いことがありそう☁️🌈',
  '💎紫陽花の祝福':'ぽたもも応援しているよ☁️💎',
  '⭐ぽたもの特等席':'今日はぽたもの隣で雨宿り☁️🌟'
};

function drawFortune(){
  const n = document.getElementById('name').value.trim();
  if(!n){
    alert('お名前を入力してください☁️');
    return;
  }

  const roll = Math.random();
  let f;
  if(roll < 0.05){
    f = legendaryFortunes[0];
  }else if(roll < 0.10){
    f = superRareFortunes[0];
  }else if(roll < 0.20){
    f = rareFortunes[0];
  }else{
    f = normalFortunes[Math.floor(Math.random() * normalFortunes.length)];
  }

  document.getElementById('result').innerHTML = `
<div class="resultCard">
  <div class="username">☁️ ${n}さん ☁️</div>
  <div class="fortuneBadge">${f.name}</div>
  <img src="${f.image}" class="fortuneImage" alt="${f.name}" onclick="window.open('${f.image}','_blank')">
  <div class="buttons">
    <button class="shareButton" onclick="shareOnX('${f.name}')">
      ☁️ Xでシェア
    </button>
  </div>
</div>
  `;
}

function shareOnX(fortuneName){
  const username =
    document.getElementById('name').value.trim();
  const comment =
    comments[fortuneName] || '';
  const text =
`☁️ ${username}さんの今日の雨宿り ☁️

【${fortuneName}】
${comment}

https://amatuyuponcho.github.io/amayadori/
☔️みんなも今日の日和を受け取ってね

#ぽんちょの雨宿り　#甘梅雨ぽんちょ`;
  const url =
`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');

}
