const normalFortunes = [
  {
    name:'ごろごろ日和',
    image:'images/gorogoro.PNG'
  },
  {
    name:'お茶日和',
    image:'images/ochoa.PNG'
  },
  {
    name:'雨音日和',
    image:'images/amaoto.PNG'
  },
  {
    name:'読書日和',
    image:'images/dokusyo.PNG'
  },
  {
    name:'お散歩日和',
    image:'images/osano.PNG'
  },
  {
    name:'おやすみ日和',
    image:'images/oyasumi.PNG'
  },
  {
    name:'ひなたぼっこ日和',
    image:'images/hinatabokko.PNG'
  },
  {
    name:'おやつ日和',
    image:'images/oyatsu.PNG'
  },
  {
    name:'おたより日和',
    image:'images/oratorio.PNG'
  },
  {
    name:'おえかき日和',
    image:'images/oekaki.PNG'
  },
  {
    name:'深呼吸日和',
    image:'images/shinkokyu.PNG'
  },
  {
    name:'おかたづけ日和',
    image:'images/okataduke.PNG'
  },
  {
    name:'ROM専日和',
    image:'images/romusen.PNG'
  }
  ,
  {
    name:'窓辺日和',
    image:'images/madobe.PNG'
  },
  {
    name:'音楽日和',
    image:'images/ongaku.PNG'
  },
  {
    name:'思い出日和',
    image:'images/omoide.PNG'
  },
  {
    name:'おりょうり日和',
    image:'images/oryouri.PNG'
  },
  {
    name:'水やり日和',
    image:'images/mizuyari.PNG'
  },
  {
    name:'てづくり日和',
    image:'images/tedukuri.PNG'
  },
  {
    name:'星空日和',
    image:'images/hoshizora.PNG'
  },
  {
    name:'せんたく日和',
    image:'images/sentaku.PNG'
  },
  {
    name:'空想日和',
    image:'images/kuusou.PNG'
  },
  {
    name:'かいもの日和',
    image:'images/kaimono.PNG'
  }
  
];

const rareFortunes = [
  {
    name:'🌈虹の日和',
    image:'images/rare_niji.PNG'
  }
];
const superRareFortunes = [
  {
    name:'💎紫陽花の祝福',
    image:'images/sr_ajisai.PNG'
  }
];

const legendaryFortunes = [
  {
    name:'⭐ぽたもの特等席',
    image:'images/legend_potamo.PNG'
  }
];

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
    f = normalFortunes[
      Math.floor(Math.random() * normalFortunes.length)
    ];
  }
  document.getElementById('result').innerHTML = `
<div class="resultCard">
<div class="username">
☁️ ${n}さん ☁️
</div>
<div class="fortuneBadge">
${f.name}
</div>
<img
src="${f.image}"
class="fortuneImage"
alt="${f.name}"
onclick="window.open('${f.image}','_blank')"
>
</div>
  `;
}
function showImage(imageFile){
  window.open(imageFile,'_blank');
}
function saveResult(){
  const element = document.getElementById('captureArea');
  html2canvas(element).then(canvas => {
    const link = document.createElement('a');
    link.download = 'poncho-result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
