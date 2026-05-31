const normalFortunes = [
{
name:'ごろごろ日和',
image:'images/gorogoro.PNG'
},
{
name:'お茶日和',
image:'images/ocha.PNG'
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
image:'images/osanpo.PNG'
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
image:'images/otayori.PNG'
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
let rarityClass;

if(roll < 0.05){
f = legendaryFortunes[0];
rarityClass = "legendary";

}else if(roll < 0.15){
f = superRareFortunes[0];
rarityClass = "superRare";

}else if(roll < 0.40){
f = rareFortunes[0];
rarityClass = "rare";

}else{
f = normalFortunes[Math.floor(Math.random() * normalFortunes.length)];
rarityClass = "normal";
}

document.getElementById('result').innerHTML = `

<div id="captureArea" class="resultCard ${rarityClass}">

<div class="username">
☁️ ${n}さん ☁️
</div>

<div class="fortuneBadge">
${f.name}
</div>

<div class="text">
${f.text}
</div>

<div class="comment">
ぽたもより<br>
${f.comment}
</div>

<button class="saveButton" onclick="saveResult()">
💾 結果を保存
</button>

</div>
`;
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
