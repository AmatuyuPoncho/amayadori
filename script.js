const fortunes=[
{name:'ごろごろ日和',text:'今日は何もしない時間も\n大切な日。',comment:'のんびりするのも\n予定のうち〜☁️'},
{name:'お茶日和',text:'温かい飲み物を片手に\nひと息ついてみよう。',comment:'ゆっくりで大丈夫〜☁️'}
];

function drawFortune(){
 const n=document.getElementById('name').value.trim();
 if(!n){alert('お名前を入力してください☁️');return;}
 const f=fortunes[Math.floor(Math.random()*fortunes.length)];
 document.getElementById('result').innerHTML=`
 <h2>☁️ ${n}さん ☁️</h2>
 <h3>${f.name}</h3>
 <p>${f.text.replace(/\n/g,'<br>')}</p>
 <p><strong>ぽたもより</strong><br>${f.comment.replace(/\n/g,'<br>')}</p>
 <hr>
 <p>☁️ 甘梅雨ぽんちょ ☁️<br>ふらっと寄れる、雨の居場所。<br>@AmatuyuPoncho_V</p>`;
}
