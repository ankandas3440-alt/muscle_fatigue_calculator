const RG = { U:'Upper Limb', S:'Shoulder & Upper Back', T:'Torso & Core', L:'Lower Limb', N:'Neck & Head' };

const D = `U|Biceps Brachii|85|M|High
U|Triceps (Lateral Head)|88|F|Very High
U|Triceps (Long Head)|82|M|High
U|Brachialis|75|S|Moderate
U|Brachioradialis|80|M|High
U|Flexor Carpi Radialis|74|M|Moderate
U|Extensor Digitorum|70|F|Moderate
U|Pronator Teres|65|M|Low
U|Flexor Digitorum Profundus|84|M|High
U|Flexor Digitorum Superficialis|81|M|High
U|Thenar Group (Thumb)|75|F|Moderate
U|Hypothenar Group (Pinky)|62|S|Low
S|Deltoid (Anterior)|78|M|Moderate
S|Deltoid (Lateral)|92|F|Very High
S|Deltoid (Posterior)|68|S|Low-Moderate
S|Supraspinatus|83|M|High
S|Infraspinatus|76|S|Moderate
S|Teres Major|77|M|Moderate
S|Rhomboid Major|76|S|Moderate
S|Trapezius (Upper)|86|M|High
S|Trapezius (Middle)|79|M|Moderate
S|Trapezius (Lower)|81|S|Moderate
T|Pectoralis Major (Upper)|83|M|High
T|Pectoralis Major (Middle)|89|F|Very High
T|Rectus Abdominis (Upper)|81|M|High
T|Rectus Abdominis (Lower)|85|M|High
T|External Obliques|82|M|High
T|Transversus Abdominis|78|S|Low-Moderate
T|Latissimus Dorsi|88|M|High
T|Erector Spinae (Iliocostalis)|91|S|High
T|Erector Spinae (Longissimus)|90|S|High
T|Quadratus Lumborum|93|S|High
T|Multifidus|89|S|Moderate
T|Serratus Anterior|78|F|Moderate
T|Diaphragm|95|S|High
T|Psoas Major|92|F|High
T|Iliacus|88|M|High
L|Rectus Femoris|94|F|Very High
L|Vastus Lateralis|95|F|Extreme
L|Vastus Medialis|88|M|High
L|Vastus Intermedius|82|S|Moderate
L|Biceps Femoris (Long Head)|89|F|High
L|Semitendinosus|84|M|High
L|Semimembranosus|86|M|High
L|Gastrocnemius (Medial)|90|F|Very High
L|Gastrocnemius (Lateral)|88|F|High
L|Soleus|81|S|Low-Moderate
L|Tibialis Anterior|87|M|High
L|Tibialis Posterior|83|S|Moderate
L|Peroneus Longus|80|F|High
L|Gluteus Maximus|86|M|High
L|Gluteus Medius|84|M|Moderate
L|Gluteus Minimus|79|S|Low-Moderate
L|Tensor Fasciae Latae|81|F|High
L|Adductor Magnus|85|M|High
L|Adductor Longus|82|F|High
L|Piriformis|80|S|Moderate
L|Sartorius|66|S|Low
L|Flexor Hallucis Longus|79|M|High
N|Levator Scapulae|82|S|Moderate
N|Sternocleidomastoid|80|M|Moderate
N|Splenius Capitis|75|S|Low-Moderate
N|Semispinalis Capitis|77|S|Low-Moderate
N|Scalenes|87|S|Moderate
N|Longus Colli|76|S|Low-Moderate
N|Suboccipitals (Rectus Capitis Post. Major)|82|S|Moderate
N|Masseter|84|M|High
N|Temporalis|81|M|Moderate
N|Frontalis|62|S|Low
N|Orbicularis Oculi|68|F|Low`.split('\n').map((line,i)=>{
  const [r,n,d,f,x] = line.split('|');
  return {i,r,n,d:+d,f,x};
});

const FT = { F:'Fast-twitch dominant', M:'Mixed fibres', S:'Slow-twitch dominant' };

const AD = {
  U:{st:'Forearm flexor and extensor stretches, 30 s × 3 each; median-nerve glides; open-close hand drills.',ex:'Wrist curls and reverse curls 2 × 15 at light load; grip endurance holds at 30–40% effort.',er:'Keep wrists neutral, elbows near 90°, relax grip on tools and mouse, and take a 1–2 min break every 30 min.'},
  S:{st:'Cross-body shoulder stretch, doorway pec stretch, thread-the-needle, scapular squeezes, 30 s × 3.',ex:'Band external rotations, face pulls and prone Y-T-W raises, 2 × 12 with slow tempo.',er:'Raise screen to eye level, support forearms, keep elbows under shoulders and avoid prolonged overhead work.'},
  T:{st:'Cat-cow, child’s pose, 90/90 hip-flexor stretch and gentle lumbar rotations, 30–45 s each.',ex:'Dead bug, bird-dog and side plank, 3 × 20–30 s, building bracing endurance before strength.',er:'Use lumbar support, alternate sitting and standing every 30 min, hinge from the hips and breathe low into the ribs when lifting.'},
  L:{st:'Quad, hamstring, calf and hip-flexor stretches 30–45 s × 3; foam-roll slowly for 60 s per muscle.',ex:'Step-downs, hip bridges, calf raises and tibialis raises, 2 × 15 at low load.',er:'Check footwear, build mileage or load by no more than 10% a week, and avoid long locked-knee standing.'},
  N:{st:'Chin tucks, gentle ear-to-shoulder stretch, upper-trap release, jaw-relaxation (tongue on palate, teeth apart).',ex:'Deep neck flexor chin-tuck holds, 10 × 10 s; scapular setting to offload the neck.',er:'Screen top at eye level, phone at chest height, rest the jaw and limit clenching and gum chewing.'}
};

const FB = {
  F:{rest:'Fast-twitch fibres recover slowly after glycolytic effort. Allow 48–72 h before another max-effort session and 2–3 min between sets.',nu:'Eat 20–30 g protein plus carbohydrate within 2 h; creatine and tart cherry can help repeated high-intensity work.',tip:'Use contrast (warm then cool) therapy and light movement to clear lactate and H⁺.'},
  M:{rest:'Mixed muscles need both approaches: a 5–10 min active break now and 24–48 h before the next hard session.',nu:'Balanced protein and carbohydrate meal, with 500 ml water and electrolytes after long sessions.',tip:'Alternate heavy and light days; low-intensity cycling or walking speeds recovery.'},
  S:{rest:'Slow-twitch postural fibres tire from continuous load, not peak effort. Take micro-breaks every 20–30 min and 8–12 h of full relief overnight.',nu:'Keep glycogen and iron up (whole grains, legumes, greens) and magnesium-rich foods to reduce cramping.',tip:'Change posture often; gentle movement restores blood flow better than complete rest.'}
};

const $ = id => document.getElementById(id);
const mus = $('mus');

Object.keys(RG).forEach(k=>{
  const group = document.createElement('optgroup');
  group.label = RG[k];
  D.filter(m=>m.r===k).forEach(m=>group.append(new Option(m.n,m.i)));
  mus.append(group);
});
mus.value = D.findIndex(m=>m.n==='Biceps Brachii');

$('pain').oninput = e => $('pv').textContent = e.target.value;
$('demo').onclick = ()=>{
  $('act').value=35.93; $('mf').value=53; $('base').value=60; calc();
};

function calc(){
  const m=D[+mus.value];
  const act=+$('act').value||0, mf=+$('mf').value||0, base=+$('base').value||mf||1;
  const pain=+$('pain').value, dur=+$('dur').value||0, ld=$('load').value;
  const slp=+$('slp').value, low=$('hyd').value==='l', num=$('num').checked, rms=$('rms').value;
  const drop=Math.max(0,(base-mf)/base*100);
  let score=act*.25+Math.min(drop,40)*1.1+pain*3.5+Math.min(dur,60)/60*10+m.d*.12+(low?5:0)+(slp<6?6:0)+(ld==='s'?4:ld==='r'?3:0);
  score=Math.round(Math.min(100,score));

  const levels=score<30?['Normal','#268a67','Muscle is coping well.']:score<50?['Mild fatigue','#b68a28','Early fatigue — act before it builds.']:score<70?['Moderate fatigue','#c78120','Performance and form are at risk.']:score<85?['High fatigue','#d34f45','Stop the task and recover.']:['Critical','#9f2d28','Stop now and do not resume today.'];
  const rest=score<30?'2 min micro-break per hour':score<50?'5–10 min active break now':score<70?'15–20 min rest, then lighter work':score<85?'30–60 min rest; resume only at ≤50% effort':'Stop for the day; 24–72 h recovery';
  const fb=FB[m.f], a=AD[m.r];
  const notes=[];
  if(drop>15) notes.push(`Median frequency is down ${drop.toFixed(0)}% from baseline — a strong fatigue signal.`);
  if(act>70) notes.push('Activity above 70% MVC cannot be held for long; reduce load or share it with synergist muscles.');
  if(act>=95||act<=1) notes.push('Readings at the extremes (like the spike and zero in your trend) usually mean electrode movement or contact loss. Clean the skin and re-seat the electrodes.');
  if(rms) notes.push(`RMS ${rms} µV: a rising RMS with falling median frequency confirms fatigue; stable RMS with falling frequency suggests metabolite build-up.`);
  if(slp<6) notes.push('Under 6 h sleep slows repair — prioritise sleep tonight.');
  if(low) notes.push('Drink 400–600 ml water over the next hour.');

  $('out').innerHTML=`
    <div class="score-card" style="background:${levels[1]}">
      <span class="muscle-name">${m.n}</span>
      <h2>${levels[0]} · ${score}/100</h2>
      <p>${levels[2]}</p>
      <div class="score-track"><i style="width:${score}%"></i></div>
    </div>
    <div class="metrics">
      <div class="metric">Activity<b>${act}%</b></div>
      <div class="metric">Median freq.<b>${mf} Hz</b></div>
      <div class="metric">MF drop<b>${drop.toFixed(0)}%</b></div>
    </div>
    ${num||pain>=8?'<div class="warning-box"><b>See a clinician.</b> Numbness, tingling, swelling or sharp pain are warning signs. Stop activity and get assessed, especially if it persists beyond 48 h.</div>':''}
    <div class="result-list">
      <div class="result-section"><h3>Rest now</h3><p>${rest}. ${fb.rest}</p></div>
      <div class="result-section"><h3>Stretch & release</h3><p>${a.st}</p></div>
      <div class="result-section"><h3>Strengthen</h3><p>${a.ex}</p></div>
      <div class="result-section"><h3>Nutrition</h3><p>${fb.nu} ${fb.tip}</p></div>
      <div class="result-section"><h3>Ergonomic fix</h3><p>${a.er}</p></div>
      <div class="result-section"><h3>Muscle profile</h3><p>${FT[m.f]} · atlas discomfort ${m.d}% · lactate ${m.x} · ${RG[m.r]}</p></div>
      ${notes.length?'<div class="result-section"><h3>Reading notes</h3><ul>'+notes.map(x=>`<li>${x}</li>`).join('')+'</ul></div>':''}
    </div>`;
}
$('go').onclick=calc;

let filter='all';
const reg=$('reg');
reg.append(new Option('All regions',''));
Object.keys(RG).forEach(k=>reg.append(new Option(RG[k],k)));

const chips=[
  ['all','All'],['hi','High discomfort (>80%)'],['F','Fast-twitch'],['S','Endurance / postural']
];
chips.forEach(([value,label])=>{
  const button=document.createElement('button');
  button.type='button';
  button.className='chip'+(value==='all'?' active':'');
  button.textContent=label;
  button.onclick=()=>{
    filter=value;
    document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c===button));
    draw();
  };
  $('chips').append(button);
});

function draw(){
  const q=$('q').value.toLowerCase(), r=reg.value;
  const list=D.filter(m=>(!r||m.r===r)&&(filter==='all'||(filter==='hi'?m.d>80:m.f===filter))&&(m.n+' '+RG[m.r]).toLowerCase().includes(q));
  $('cnt').textContent=`${list.length} of ${D.length} muscles shown`;
  $('cards').innerHTML=list.length?list.map(m=>{
    const color=m.d>85?'#d34f45':m.d>75?'#c78120':'#268a67';
    return `<article class="card">
      <span class="card-region">${RG[m.r]}</span>
      <h3>${m.n}</h3>
      <div class="meter"><i style="width:${m.d}%;background:${color}"></i></div>
      <span class="card-meta">${m.d}% discomfort · ${FT[m.f]} · lactate ${m.x}</span>
      <button type="button" class="card-button" data-muscle="${m.i}">Get plan for this muscle</button>
    </article>`;
  }).join(''):'<p>No muscles match. Clear the search or choose another filter.</p>';
}

$('cards').onclick=e=>{
  const button=e.target.closest('[data-muscle]');
  if(!button) return;
  mus.value=button.dataset.muscle;
  calc();
  $('advisor').scrollIntoView();
};
$('q').oninput=draw;
reg.onchange=draw;
draw();
calc();
