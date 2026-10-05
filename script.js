const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],A=$('#A');
const IMG={mango:'assets/mango.webp',classic:'assets/classic.webp',pomegranate:'assets/pomegranate.webp',berries:'assets/berries.webp',blood:'assets/blood.webp',pineapple:'assets/pineapple.webp'},HALAL='assets/halal.webp',AH='240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const gs=k=>{try{return localStorage.getItem(k)}catch(e){}},ss=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let lang=gs('ml')||'ru',th=gs('mt')||'dark';
const L=(o,k)=>lang=='en'&&o[k+'_en']?o[k+'_en']:o[k],loc=()=>lang=='en'?'en-US':'ru-RU';
const EN=Object.fromEntries(`Вкусы=Flavors
Розыгрыш=Giveaway
События=Events
Халяль=Halal
Где купить=Where to buy
Блог=Blog
О бренде=About
Меню=Menu
Тема=Theme
Язык=Language
© 2026 MILANO. Все права защищены.=© 2026 MILANO. All rights reserved.
Не рекомендуется=Not recommended for
детям до 18 лет=children under 18
Не рекомендуется детям до 18 лет=Not recommended for children under 18
Не рекомендуется детям до 18 лет.=Not recommended for children under 18.
ЗАРЯДИСЬ=POWER UP
НА СВОЙ=YOUR
РЕЖИМ.=MODE.
Энергия для игры. Скорости. Движения. Ночи.=Energy for gaming. Speed. Motion. Nights.
Найти свой вкус=Find your flavor
Участвовать в розыгрыше=Enter the giveaway
Участвовать=Enter
кофеина=caffeine
таурина=taurine
ккал=kcal
кофеин=caffeine
таурин=taurine
углеводы=carbs
Витамины группы B=B vitamins
ВЫБЕРИ СВОЙ MILANO=CHOOSE YOUR MILANO
ИГРАЙ. СОБИРАЙ. ЗАБИРАЙ.=PLAY. COLLECT. WIN.
Квартальный розыгрыш=Quarterly giveaway
дней=days
часов=hours
минут=minutes
секунд=seconds
ЛИЧНЫЙ КАБИНЕТ=MY ACCOUNT
Войдите, чтобы участвовать в розыгрышах.=Sign in to join giveaways.
Войти или зарегистрироваться=Sign in or register
MILANO В ДВИЖЕНИИ=MILANO IN MOTION
События. Фестивали. Турниры.=Events. Festivals. Tournaments.
MILANO × партнёр=MILANO × partner
Киберспорт. Турнир.=Esports. Tournament.
Событие=Event
Экстрим. Природа. Свобода.=Extreme. Nature. Freedom.
Музыка. Люди. Энергия.=Music. People. Energy.
СЕРТИФИКАТ ХАЛЯЛЬ=HALAL CERTIFICATE
Вся линейка MILANO сертифицирована Центром халяльного надзора России. Натуральный сахар и строгий контроль качества.=The entire MILANO line is certified by the Centre of Halal Supervision of Russia. Natural sugar and strict quality control.
Европа=Europe
НАЙДИ MILANO РЯДОМ=FIND MILANO NEARBY
Выбери город и ближайшую точку продаж.=Choose a city and the nearest store.
Яндекс Маркет=Yandex Market
Точек пока нет=No stores yet
Москва=Moscow
Казань=Kazan
Пятёрочка=Pyaterochka
Перекрёсток=Perekrestok
Магнит=Magnit
Ozon пункт выдачи=Ozon pickup point
Яндекс Маркет ПВЗ=Yandex Market pickup point
ул. Тверская, 12=12 Tverskaya St.
Ленинский пр-т, 40=40 Leninsky Ave.
ул. Арбат, 8=8 Arbat St.
ул. Баумана, 5=5 Bauman St.
пр. Победы, 20=20 Pobedy Ave.
Люди. События. Вдохновение.=People. Events. Inspiration.
Только избранные=Featured only
Все статьи=All articles
Читать=Read
Гейминг=Gaming
Экстрим=Extreme
Люди=People
О БРЕНДЕ=ABOUT THE BRAND
MILANO — энергетические напитки для активной жизни: игровых турниров, экстремального спорта, ночных фестивалей и долгих рабочих смен.=MILANO makes energy drinks for an active life: gaming tournaments, extreme sports, night festivals and long work shifts.
Наша миссия — давать энергию без компромиссов в качестве. Мы производим напитки по стандартам GMP, из европейского сырья и с натуральным сахаром.=Our mission is to give energy without compromising on quality. We make our drinks to GMP standards, with European ingredients and natural sugar.
Вся линейка сертифицирована Центром халяльного надзора России.=The entire line is certified by the Centre of Halal Supervision of Russia.
Сертификат Центра халяльного надзора=Certificate of the Centre of Halal Supervision
Натуральный сахар=Natural sugar
100% натуральный сахар в составе=100% natural sugar in the recipe
В ряде вкусов линейки=In some flavors of the line
Контроль качества производства=Production quality control
← На главную=← Home
На главную=Home
Статья не найдена=Article not found
Вход=Sign in
Регистрация=Register
Чтобы участвовать в розыгрыше, зарегистрируйтесь или войдите=Register or sign in to join the giveaway
С возвращением=Welcome back
Пароль=Password
Войти=Sign in
Создать аккаунт=Create account
Имя=Name
Телефон=Phone
Пароль (от 6 символов)=Password (min. 6 characters)
Мне есть 18 лет и я согласен с правилами=I am 18+ and agree to the rules
Зарегистрироваться=Register
Неверный email или пароль=Wrong email or password
Этот email уже зарегистрирован=This email is already registered
Добро пожаловать!=Welcome!
Администратор=Administrator
Админ-панель=Admin panel
Выйти=Sign out
Чек (фото или PDF)=Receipt (photo or PDF)
Согласен на обработку персональных данных=I agree to personal data processing
Отправить заявку=Submit entry
Файл больше 8 МБ=File is larger than 8 MB
Заявка принята ✓=Entry received ✓
Мы проверим чек. Итоги — после окончания таймера.=We will check your receipt. Results after the timer ends.
Отлично=Great
Доступ только для администратора=Admin access only
Войдите под учётной записью администратора.=Sign in with an administrator account.
Точки на карте=Map points
Розыгрыш и участники=Giveaway & entries
← На сайт=← To site
+ Новый вкус=+ New flavor
Новый вкус=New flavor
Название=Name
Подпись вкуса=Flavor label
Подпись вкуса (EN)=Flavor label (EN)
Ккал=Kcal
кДж=kJ
Кофеин, мг=Caffeine, mg
Таурин, мг=Taurine, mg
Углеводы, г=Carbs, g
Цвет=Color
Фото банки=Can photo
Показывать=Show
Удалить=Delete
Сохранено=Saved
Удалить вкус?=Delete this flavor?
Редактирование=Editing
Новая статья=New article
Заголовок=Title
Рубрика=Category
Заголовок (EN)=Title (EN)
Рубрика (EN)=Category (EN)
Короткое описание (на главной)=Short description (home page)
Короткое описание (EN)=Short description (EN)
Текст статьи (абзацы — через пустую строку)=Article text (separate paragraphs with a blank line)
Текст статьи (EN)=Article text (EN)
Обложка=Cover
Фото внутри статьи=Photos inside the article
Показывать на главной=Show on home page
Сохранить=Save
Опубликовать=Publish
Отмена=Cancel
Статьи=Articles
Изменить=Edit
Опубликовано=Published
Удалить статью?=Delete this article?
Заполните данные и кликните по карте, чтобы поставить метку.=Fill in the details and click the map to place a pin.
Город=City
Адрес=Address
Добавить точку=Add point
Метка не выбрана=No pin selected
Новая точка=New point
Кликните по карте, чтобы поставить метку=Click the map to place a pin
Точка добавлена=Point added
Окончание=Ends
🎲 Выбрать победителя=🎲 Pick a winner
Чек=Receipt
Участник=Participant
Контакты=Contacts
Дата=Date
Заявок пока нет=No entries yet
Нет заявок=No entries
Победитель 🎉=Winner 🎉`.split('\n').map(l=>l.split('=')));
const RX=[[/^(\d+) вкусов\. Одна энергия\.$/,'$1 flavors. One energy.'],[/^(.*): загрузи чек, участвуй и выигрывай призы MILANO\.$/,'$1: upload a receipt, join and win MILANO prizes.'],[/^(.*), у вас заявок: (\d+)$/,'$1, your entries: $2'],[/^(.*)\. Загрузите чек покупки MILANO\.$/,'$1. Upload your MILANO purchase receipt.'],[/^(≤?)([\d.]+) мг$/,'$1$2 mg'],[/^([\d.]+) г$/,'$1 g'],[/^(\d+) кДж$/,'$1 kJ'],[/^Метка: (\d+)%, (\d+)%$/,'Pin: $1%, $2%'],[/^Заявки \((\d+)\)$/,'Entries ($1)'],[/^(.*) · на главной$/,'$1 · on home page']];
function trs(s){const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/),c=m[2];if(!c)return s;let r=EN[c];if(r==null)for(const[x,t]of RX){const k=c.match(x);if(k){r=t.replace(/\$(\d)/g,(_,i)=>trs(k[i]));break}}return r==null?s:m[1]+r+m[3]}
const M=new WeakMap(),MA=new WeakMap(),AT=['placeholder','aria-label','alt','title'],SK=/^(SCRIPT|STYLE)$/;
function tx(n){let s=M.get(n),v=n.nodeValue;if(!s||v!==s.o&&v!==s.t)s={o:v};s.t=lang=='en'?trs(s.o):s.o;M.set(n,s);if(v!==s.t)n.nodeValue=s.t}
function walk(r){if(r.nodeType==3){if(!SK.test(r.parentNode?.tagName))tx(r);return}if(r.nodeType!=1||SK.test(r.tagName))return;for(const a of AT)if(r.hasAttribute(a)){const s=MA.get(r)||{},v=r.getAttribute(a),e=s[a];if(!e||v!==e.o&&v!==e.t)s[a]={o:v};s[a].t=lang=='en'?trs(s[a].o):s[a].o;MA.set(r,s);if(v!==s[a].t)r.setAttribute(a,s[a].t)}r.childNodes.forEach(walk)}
new MutationObserver(ms=>{if(lang!='en')return;ms.forEach(m=>m.type=='characterData'?tx(m.target):m.addedNodes.forEach(walk))}).observe(document.body,{childList:true,subtree:true,characterData:true});
const cf=s=>confirm(lang=='en'?trs(s):s);
const EM={mango:'🥭',classic:'⚡',pomegranate:'🍒',berries:'🫐',blood:'🍊',pineapple:'🍍'};
const pr=(code,name,taste,te,kj,kcal,caf,taur,carbs,color,vit,ph)=>({id:code,code,name,taste,taste_en:te,kj,kcal,caf,taur,carbs,color,vit,ph,on:true,img:null});
const DEF={products:[pr('mango','MILANO Mango','Вкус манго','Mango flavor',210,50,30,250,12.5,'#f2c230',1),pr('classic','MILANO Classic','Классический вкус','Classic flavor',220,52,30,250,13.1,'#c9ccd0',0),pr('pomegranate','MILANO Pomegranate','Вкус граната','Pomegranate flavor',190,45,30,250,11,'#ec2f6f',0),pr('berries','MILANO Berries','Вкус ягод','Berries flavor',233,56,16,20,13.5,'#f08fc0',1),pr('blood','MILANO Blood Orange','Вкус красного апельсина','Blood orange flavor',210,50,24,30,12.5,'#ff5b20',1),pr('pineapple','MILANO Pineapple','Вкус ананаса · Limited edition','Pineapple flavor · Limited edition',220,50,30,250,13,'#d6dc5a',0,1)],
posts:[{id:'p1',tag:'Гейминг',tag_en:'Gaming',title:'Как подготовиться к турниру: сон, ритм и энергия',title_en:'How to prepare for a tournament: sleep, rhythm and energy',excerpt:'Лайфхаки киберспортсменов: как держать фокус на длинных сессиях.',excerpt_en:'Esports pros share tips on staying focused through long sessions.',body:'Турнир — это марафон. Сон за три дня до игры важнее любой подготовки.\n\nРазминка для рук, вода и лёгкая еда помогают держать темп. Энергетик — это поддержка, а не замена отдыха.\n\nПейте банку за 30–40 минут до старта и не превышайте суточную норму кофеина.',body_en:'A tournament is a marathon. Sleep in the three days before the game matters more than any prep.\n\nHand warm-ups, water and light food help keep the pace. An energy drink is support, not a replacement for rest.\n\nHave a can 30–40 minutes before the start and do not exceed the daily caffeine limit.',img:null,imgs:[],home:true,ts:Date.now()-864e5*3},
{id:'p2',tag:'Экстрим',tag_en:'Extreme',title:'5 лайфхаков для большей выносливости',title_en:'5 tips for better endurance',excerpt:'Как тренироваться дольше и восстанавливаться быстрее.',excerpt_en:'How to train longer and recover faster.',body:'Выносливость строится постепенно: добавляйте нагрузку по 10% в неделю.\n\nСледите за водным балансом и питанием, а перед стартом держите под рукой банку любимого вкуса.',body_en:'Endurance is built gradually: add 10% load per week.\n\nWatch your hydration and nutrition, and keep a can of your favorite flavor at hand before the start.',img:null,imgs:[],home:true,ts:Date.now()-864e5*6},
{id:'p3',tag:'Люди',tag_en:'People',title:'Интервью с амбассадором MILANO',title_en:'Interview with a MILANO ambassador',excerpt:'О режиме, победах и том, что заряжает по-настоящему.',excerpt_en:'About routine, wins and what really energizes.',body:'Мы поговорили об утренних ритуалах, подготовке к соревнованиям и о том, как не выгорать.\n\nПолное интервью скоро — следите за обновлениями.',body_en:'We talked about morning rituals, competition prep and how to avoid burnout.\n\nThe full interview is coming soon — stay tuned.',img:null,imgs:[],home:true,ts:Date.now()-864e5*9}],
points:[{id:'a',name:'Пятёрочка',city:'Москва',addr:'ул. Тверская, 12',x:30,y:38},{id:'b',name:'Перекрёсток',city:'Москва',addr:'Ленинский пр-т, 40',x:52,y:62},{id:'c',name:'Ozon пункт выдачи',city:'Москва',addr:'ул. Арбат, 8',x:68,y:30},{id:'d',name:'Магнит',city:'Казань',addr:'ул. Баумана, 5',x:44,y:48},{id:'e',name:'Яндекс Маркет ПВЗ',city:'Казань',addr:'пр. Победы, 20',x:70,y:66}],
users:[{id:'u0',name:'Администратор',email:'admin@milano.ru',phone:'',hash:'240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',role:'admin'}],entries:[],session:null,promo:{title:'Квартальный розыгрыш',end:Date.now()+((2*24+14)*60+37)*60000}};
const LS='milano_v2';let D;try{D=JSON.parse(localStorage.getItem(LS))}catch(e){}D=D||DEF;
const save=()=>{try{localStorage.setItem(LS,JSON.stringify(D));return 1}catch(e){toast('Память браузера заполнена — уменьшите фото')}};
const me=()=>D.users.find(u=>u.id===D.session);
const toast=m=>{const t=document.createElement('div');t.className='ts';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)};
const img=p=>p.img||IMG[p.code]||IMG.classic;
const shrink=(f,max=900,q=.82)=>new Promise(r=>{if(!f.type.startsWith('image/'))return r(null);const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);r(c.toDataURL(f.type=='image/png'?'image/webp':'image/jpeg',q))};i.onerror=()=>r(null);i.src=URL.createObjectURL(f)});
function modal(h){const o=document.createElement('div');o.className='ov';o.innerHTML=`<div class="md">${h}</div>`;o.onclick=e=>{if(e.target===o)o.remove()};document.body.append(o);return o}
/* auth */
function authBox(tab='in',after,note=''){const o=modal(`<div class="tb"><button data-t="in">Вход</button><button data-t="reg">Регистрация</button></div><p style="margin-top:14px;color:var(--g2);font-size:13px">${esc(note)}</p><div id="af"></div>`);
const draw=t=>{$$('.tb button',o).forEach(b=>b.classList.toggle('on',b.dataset.t==t));$('#af',o).innerHTML=t=='in'?`<h3 style="margin-top:14px">С возвращением</h3><form><label>Email<input name=email type=email required autocomplete=email></label><label>Пароль<input name=pass type=password required autocomplete=current-password></label><div class=er></div><button class="btn pr">Войти</button></form>`:`<h3 style="margin-top:14px">Создать аккаунт</h3><form><label>Имя<input name=name required></label><label>Email<input name=email type=email required></label><label>Телефон<input name=phone type=tel required placeholder="+7 900 000-00-00"></label><label>Пароль (от 6 символов)<input name=pass type=password minlength=6 required></label><label class=ck><input type=checkbox name=age required> Мне есть 18 лет и я согласен с правилами</label><div class=er></div><button class="btn pr">Зарегистрироваться</button></form>`;
$('#af form',o).onsubmit=async e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),er=$('.er',o),em=f.email.trim().toLowerCase(),h=await sha(f.pass);
if(t=='in'){const u=D.users.find(u=>u.email==em&&u.hash==h);if(!u)return er.textContent='Неверный email или пароль';D.session=u.id}
else{if(D.users.some(u=>u.email==em))return er.textContent='Этот email уже зарегистрирован';const u={id:'u'+Date.now(),name:f.name.trim(),email:em,phone:f.phone.trim(),hash:h,role:'user'};D.users.push(u);D.session=u.id}
save();o.remove();userUI();toast('Добро пожаловать!');after&&after()}};
$$('.tb button',o).forEach(b=>b.onclick=()=>draw(b.dataset.t));draw(tab)}
function userUI(){const u=me();$('#us').innerHTML=u?`<button class="btn sm" id="um">${esc(u.name.split(' ')[0])}</button>`:`<button class="btn sm" id="li">Войти</button>`;
(u?$('#um'):$('#li')).onclick=()=>{if(!u)return authBox();const o=modal(`<h3>${esc(u.name)}</h3><p style="color:var(--m)">${esc(u.email)}</p><div style="display:grid;gap:10px;margin-top:18px">${u.role=='admin'?'<a class="btn pr" href="#/admin">Админ-панель</a>':''}<button class="btn" id="lo">Выйти</button></div>`);$('#lo',o).onclick=()=>{D.session=null;save();o.remove();userUI();route()};$('a',o)&&($('a',o).onclick=()=>o.remove())}}
/* raffle */
function raffle(){if(!me())return authBox('reg',raffle,'Чтобы участвовать в розыгрыше, зарегистрируйтесь или войдите');const u=me();
const o=modal(`<h3>Участвовать в розыгрыше</h3><p style="color:var(--m);font-size:13px">${esc(D.promo.title)}. Загрузите чек покупки MILANO.</p><form><label>Телефон<input name=phone type=tel required value="${esc(u.phone)}"></label><label>Email<input name=email type=email required value="${esc(u.email)}"></label><label>Чек (фото или PDF)<input name=f type=file accept="image/*,.pdf" required></label><label class=ck><input type=checkbox required> Согласен на обработку персональных данных</label><div class=er></div><button class="btn pr">Отправить заявку</button></form>`);
$('form',o).onsubmit=async e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),file=f.f;if(file.size>8e6)return $('.er',o).textContent='Файл больше 8 МБ';
D.entries.push({id:'e'+Date.now(),uid:u.id,name:u.name,phone:f.phone,email:f.email,file:file.name,thumb:await shrink(file,500,.7),ts:Date.now(),status:'pending'});if(save()){$('.md',o).innerHTML='<h3>Заявка принята ✓</h3><p style="margin:12px 0 20px;color:var(--m)">Мы проверим чек. Итоги — после окончания таймера.</p><button class="btn pr" onclick="this.closest(\'.ov\').remove()">Отлично</button>'}}}
/* map */
const roads=()=>{let r=11,s=()=>(r=r*16807%2147483647)/2147483647,o='';for(let i=0;i<14;i++){const y=15+i*33+s()*14;o+=`<path d="M-10 ${y}C200 ${y+s()*60-30} 500 ${y+s()*60-30} 810 ${y+s()*40-20}"/>`}for(let i=0;i<20;i++){const x=10+i*41+s()*16;o+=`<path d="M${x} -10C${x+s()*50-25} 150 ${x+s()*50-25} 300 ${x+s()*30-15} 470"/>`}return o+'<path class="wt" d="M-10 90C180 140 300 40 520 110S760 190 810 160"/><path class="mj" d="M-10 380C250 300 450 330 810 120"/><path class="mj" d="M120 -10C220 150 380 250 330 470"/>'};
function mapView(el,pts,o={}){el.innerHTML=`<svg viewBox="0 0 800 460" preserveAspectRatio="none">${roads()}</svg>`+pts.map(p=>`<button class="pin${o.sel==p.id?' on':''}${p.x<25?' l':p.x>75?' r':''}${p.y<22?' t':''}" data-id="${p.id}" style="left:${p.x}%;top:${p.y}%" aria-label="${esc(p.name)}"><span class="tip">${esc(p.name)}<br><small style="color:var(--m)">${esc(p.addr)}</small></span></button>`).join('');
$$('.pin',el).forEach(b=>b.onclick=e=>{e.stopPropagation();o.on&&o.on(b.dataset.id)});if(o.pick)el.style.cursor='crosshair',el.onclick=e=>{const r=el.getBoundingClientRect();o.pick(Math.round((e.clientX-r.left)/r.width*100),Math.round((e.clientY-r.top)/r.height*100))}}
/* home */
function home(){const P=D.products.filter(p=>p.on!==false),f=P[0]||D.products[0],cities=[...new Set(D.points.map(p=>p.city))];let city=cities[0],sel=null,all=0;
const posts=()=>D.posts.filter(p=>all||p.home).sort((a,b)=>b.ts-a.ts);
A.innerHTML=`<section class="sec hero" id="top"><div class="w hg"><div><span style="color:var(--g2);font-size:11px;font-weight:800;letter-spacing:.14em">ENERGY FOR YOUR MODE</span><h1 class="gl">ЗАРЯДИСЬ<br>НА СВОЙ <em id="hn">РЕЖИМ.</em></h1><p>Энергия для игры. Скорости. Движения. Ночи.</p><div class="ha"><a class="btn pr" href="#flavors">Найти свой вкус</a><button class="btn" id="jr">Участвовать в розыгрыше</button></div></div><div class="hc"><i class="ring"></i><img id="hi" src="${img(f)}" alt="${esc(f.name)}"></div><div class="spec"><div><b id="hk">${f.caf} мг</b><span>кофеина</span></div><div><b id="ht">${f.taur} мг</b><span>таурина</span></div><div><span class="b18" style="width:36px;height:36px;font-size:12px;display:inline-grid">18+</span> <span>Не рекомендуется детям до 18 лет</span></div></div></div><div class="dots">${P.map((p,i)=>`<button data-i="${i}" style="--c:${p.color}"><i></i>${esc(p.name.replace('MILANO ',''))}</button>`).join('')}</div></section>
<section class="sec" id="flavors"><div class="w"><div class="sh rv"><div><h2>ВЫБЕРИ СВОЙ MILANO</h2><p>${P.length} вкусов. Одна энергия.</p></div></div><div class="fg">${P.map(p=>`<article class="fc rv" style="--c:${p.color}"><span class="age">18+</span><div class="stg"><span class="em e1">${EM[p.code]||'⚡'}</span><span class="em e2">${EM[p.code]||'⚡'}</span><span class="em e3">${EM[p.code]||'⚡'}</span><img class="${p.ph?'ph':''}" src="${img(p)}" alt="${esc(p.name)}" loading="lazy"></div><h3>${esc(p.name)}</h3><div class="tl">${esc(L(p,'taste'))}</div><ul class="st"><li><b>${p.kcal}</b>ккал<br>${p.kj} кДж</li><li><b>≤${p.caf} мг</b>кофеин</li><li><b>${p.taur} мг</b>таурин</li><li><b>${p.carbs} г</b>углеводы</li></ul>${p.vit?'<p class="wr" style="color:var(--g2)">Витамины группы B</p>':''}<p class="wr">Не рекомендуется детям до 18 лет</p></article>`).join('')}</div></div></section>
<section class="sec" id="promo"><div class="w pr2"><div class="card rv"><h2>ИГРАЙ. СОБИРАЙ. ЗАБИРАЙ.</h2><p style="color:var(--m);margin-top:12px">${esc(D.promo.title)}: загрузи чек, участвуй и выигрывай призы MILANO.</p><div class="cd" id="cd"><div><b>00</b><span>дней</span></div><div><b>00</b><span>часов</span></div><div><b>00</b><span>минут</span></div><div><b>00</b><span>секунд</span></div></div><button class="btn pr" id="jr2">Участвовать</button></div><div class="card rv"><h3 style="font-size:18px">ЛИЧНЫЙ КАБИНЕТ</h3><p style="color:var(--m);margin:12px 0 20px" id="pu"></p><div id="pb"></div></div></div></section>
<section class="sec" id="events"><div class="w"><div class="sh rv"><div><h2>MILANO В ДВИЖЕНИИ</h2><p>События. Фестивали. Турниры.</p></div></div><div class="ev"><div class="evc e-a rv"><small>24.10.2026</small><h3>MILANO × партнёр</h3><span>Киберспорт. Турнир.</span></div><div class="evc e-b rv"><small>Событие</small><h3>Mountain Fest 2026</h3><span>Экстрим. Природа. Свобода.</span></div><div class="evc e-c rv"><small>Событие</small><h3>Sunrise Festival</h3><span>Музыка. Люди. Энергия.</span></div></div></div></section>
<section class="sec" id="quality"><div class="w q"><img src="${HALAL}" alt="Халяль"><div class="rv"><h2 style="color:#58c36d">СЕРТИФИКАТ ХАЛЯЛЬ</h2><p style="color:var(--m);margin-top:14px;max-width:600px">Вся линейка MILANO сертифицирована Центром халяльного надзора России. Натуральный сахар и строгий контроль качества.</p><div class="tg"><span>Европа</span><span>Халяль</span><span>GMP</span></div></div></div></section>
<section class="sec" id="where"><div class="w"><div class="sh rv"><div><h2>НАЙДИ MILANO РЯДОМ</h2><p>Выбери город и ближайшую точку продаж.</p></div><div style="display:flex;gap:8px;flex-wrap:wrap"><span class="btn sm">Ozon</span><span class="btn sm">Wildberries</span><span class="btn sm">Яндекс Маркет</span></div></div><div class="chips" id="ch"></div><div class="mp"><div class="ml" id="ml"></div><div class="map" id="mp"></div></div></div></section>
<section class="sec" id="blog"><div class="w"><div class="sh rv"><div><h2>MILANO / STORIES</h2><p>Люди. События. Вдохновение.</p></div><button class="btn sm" id="all"></button></div><div class="bl" id="bl"></div></div></section>
<section class="sec" id="about"><div class="w ab"><div class="rv"><h2>О БРЕНДЕ</h2><p>MILANO — энергетические напитки для активной жизни: игровых турниров, экстремального спорта, ночных фестивалей и долгих рабочих смен.</p><p>Наша миссия — давать энергию без компромиссов в качестве. Мы производим напитки по стандартам GMP, из европейского сырья и с натуральным сахаром.</p><p>Вся линейка сертифицирована Центром халяльного надзора России.</p></div><div class="fa rv"><div><b>Халяль</b><span>Сертификат Центра халяльного надзора</span></div><div><b>Натуральный сахар</b><span>100% натуральный сахар в составе</span></div><div><b>Витамины группы B</b><span>В ряде вкусов линейки</span></div><div><b>GMP</b><span>Контроль качества производства</span></div></div></div></section>`;
/* hero switch */
const hs=i=>{const p=P[i];$('.hero').style.setProperty('--c',p.color);$('#hi').src=img(p);$('#hi').className=p.ph?'ph':'';$('#hk').textContent=p.caf+' мг';$('#ht').textContent=p.taur+' мг';$('#hn').textContent=p.name.replace('MILANO ','').toUpperCase()+'.';$$('.dots button').forEach((b,j)=>b.classList.toggle('on',i==j));$('#hi').animate([{opacity:.2,scale:.9},{opacity:1,scale:1}],{duration:450,easing:'ease-out'})};
$$('.dots button').forEach(b=>b.onclick=()=>hs(+b.dataset.i));hs(0);
/* tilt */
$$('.fc').forEach(c=>{const im=$('.stg img',c);c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;im.style.transform=`rotateY(${x*28}deg) rotateX(${-y*18}deg) scale(1.08)`};c.onpointerleave=()=>im.style.transform=''});
$('.hero').onpointermove=e=>{const r=e.currentTarget.getBoundingClientRect();$('#hi').style.transform=`rotate(${8+((e.clientX-r.left)/r.width-.5)*10}deg)`};
/* promo */
$('#jr').onclick=$('#jr2').onclick=raffle;
const pu=()=>{const u=me();$('#pu').textContent=u?`${u.name}, у вас заявок: ${D.entries.filter(e=>e.uid==u.id).length}`:'Войдите, чтобы участвовать в розыгрышах.';$('#pb').innerHTML=u?'':'<button class="btn pr full" id="pl">Войти или зарегистрироваться</button>';$('#pl')&&($('#pl').onclick=()=>authBox('in',pu))};pu();
const tk=()=>{const el=$('#cd');if(!el)return;const s=Math.max(0,Math.floor((D.promo.end-Date.now())/1e3)),v=[s/86400,s%86400/3600,s%3600/60,s%60];$$('b',el).forEach((n,i)=>n.textContent=String(Math.floor(v[i])).padStart(2,'0'))};tk();clearInterval(window.cdt);window.cdt=setInterval(tk,1e3);
/* map */
const dm=()=>{const L=D.points.filter(p=>p.city==city);$('#ch').innerHTML=cities.map(c=>`<button class="${c==city?'on':''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');$('#ml').innerHTML=L.map(p=>`<button class="${sel==p.id?'on':''}" data-id="${p.id}"><b>${esc(p.name)}</b><small>${esc(p.addr)}</small></button>`).join('')||'<p style="color:var(--m)">Точек пока нет</p>';mapView($('#mp'),L,{sel,on:id=>{sel=id;dm()}});$$('#ch button').forEach(b=>b.onclick=()=>{city=b.dataset.c;sel=null;dm()});$$('#ml button').forEach(b=>b.onclick=()=>{sel=b.dataset.id;dm()})};dm();
/* blog */
const db=()=>{$('#all').textContent=all?'Только избранные':'Все статьи';$('#bl').innerHTML=posts().map(p=>`<article class="bc"><div class="cv" style="${p.img?`background-image:url(${p.img})`:''}">${p.img?'':'⚡'}</div><div class="bb"><small>${esc(L(p,'tag'))}</small><h3>${esc(L(p,'title'))}</h3><p>${esc(L(p,'excerpt'))}</p><a class="btn sm" href="#/post/${p.id}" target="_blank" rel="noopener">Читать</a></div></article>`).join('')};db();$('#all').onclick=()=>{all=!all;db()};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});$$('.rv').forEach((e,i)=>{e.style.transitionDelay=i%5*70+'ms';io.observe(e)})}
/* post */
function post(id){const p=D.posts.find(x=>x.id==id);if(!p)return A.innerHTML='<div class="post"><h1>Статья не найдена</h1><a class="btn" href="#/">На главную</a></div>';document.title=L(p,'title')+' — MILANO';
A.innerHTML=`<article class="post"><a href="#/" style="color:var(--m)">← На главную</a><br><br><small>${esc(L(p,'tag'))} · ${new Date(p.ts).toLocaleDateString(loc())}</small><h1>${esc(L(p,'title'))}</h1>${p.img?`<img src="${p.img}" alt="">`:''}${L(p,'body').split(/\n\s*\n/).map(t=>`<p>${esc(t).replace(/\n/g,'<br>')}</p>`).join('')}${(p.imgs||[]).map(s=>`<img src="${s}" alt="">`).join('')}<p style="font-size:12px;color:var(--m)">Не рекомендуется детям до 18 лет.</p></article>`;scrollTo(0,0)}
/* admin */
let tab='fl',ed=null,pick=null;
function admin(){const u=me();if(!u||u.role!='admin'){A.innerHTML='<div class="post"><h1>Доступ только для администратора</h1><p>Войдите под учётной записью администратора.</p><button class="btn pr" id="x">Войти</button></div>';return $('#x').onclick=()=>authBox('in',route)}
const T={fl:'Вкусы',bl:'Блог',mp:'Точки на карте',en:'Розыгрыш и участники'};
A.innerHTML=`<div class="w ad"><div class="side">${Object.entries(T).map(([k,v])=>`<button data-k="${k}" class="${k==tab?'on':''}">${v}</button>`).join('')}<a class="btn" href="#/" style="margin-top:10px">← На сайт</a></div><div id="ap"></div></div>`;
$$('.side button').forEach(b=>b.onclick=()=>{tab=b.dataset.k;ed=null;admin()});const P=$('#ap'),R={fl:aFl,bl:aBl,mp:aMp,en:aEn};R[tab](P)}
function aFl(P){P.innerHTML=`<div class="sh"><h2 style="font-size:26px">Вкусы</h2><button class="btn pr sm" id="add">+ Новый вкус</button></div>`+D.products.map(p=>`<form class="it" data-id="${p.id}"><img class="th" src="${img(p)}" alt=""><div class="row"><label>Название<input name=name value="${esc(p.name)}"></label><label>Подпись вкуса<input name=taste value="${esc(p.taste)}"></label><label>Подпись вкуса (EN)<input name=taste_en value="${esc(p.taste_en||'')}"></label><label>Ккал<input name=kcal type=number value="${p.kcal}"></label><label>кДж<input name=kj type=number value="${p.kj||''}"></label><label>Кофеин, мг<input name=caf type=number value="${p.caf}"></label><label>Таурин, мг<input name=taur type=number value="${p.taur}"></label><label>Углеводы, г<input name=carbs type=number step=.1 value="${p.carbs}"></label><label>Цвет<input name=color type=color value="${p.color}"></label><label>Фото банки<input name=img type=file accept="image/*"></label></div><div style="display:flex;gap:10px;margin-top:12px;align-items:center"><label class=ck><input type=checkbox name=on ${p.on!==false?'checked':''}> Показывать</label><label class=ck><input type=checkbox name=vit ${p.vit?'checked':''}> Витамины группы B</label><button type=button class="btn rd sm" data-del>Удалить</button></div></form>`).join('');
$$('form.it',P).forEach(f=>{const p=D.products.find(x=>x.id==f.dataset.id);f.onchange=async e=>{const n=e.target.name;if(n=='img'){const s=await shrink(e.target.files[0],900,.85);if(!s)return;p.img=s;$('.th',f).src=s}else p[n]=e.target.type=='checkbox'?e.target.checked:e.target.type=='number'?+e.target.value:e.target.value;if(save())toast('Сохранено')};f.onsubmit=e=>e.preventDefault();$('[data-del]',f).onclick=()=>{if(cf('Удалить вкус?')){D.products=D.products.filter(x=>x!=p);save();admin()}}});
$('#add').onclick=()=>{D.products.push({...pr('n'+Date.now(),'MILANO New','Новый вкус','New flavor',210,50,30,250,12,'#38c9ff',0,0),code:'classic'});save();admin()}}
function aBl(P){const p=ed||{title:'',tag:'',excerpt:'',body:'',home:true,imgs:[]};
P.innerHTML=`<div class="sh"><h2 style="font-size:26px">${ed?'Редактирование':'Новая статья'}</h2></div><form class="it" id="pf"><div class="row" style="grid-template-columns:1fr 1fr"><label>Заголовок<input name=title required value="${esc(p.title)}"></label><label>Рубрика<input name=tag value="${esc(p.tag)}" placeholder="Гейминг"></label></div><label style="margin-top:10px">Короткое описание (на главной)<input name=excerpt value="${esc(p.excerpt)}"></label><label style="margin-top:10px">Текст статьи (абзацы — через пустую строку)<textarea name=body rows=8 required>${esc(p.body)}</textarea></label><div class="row" style="grid-template-columns:1fr 1fr;margin-top:10px"><label>Заголовок (EN)<input name=title_en value="${esc(p.title_en||'')}"></label><label>Рубрика (EN)<input name=tag_en value="${esc(p.tag_en||'')}"></label></div><label style="margin-top:10px">Короткое описание (EN)<input name=excerpt_en value="${esc(p.excerpt_en||'')}"></label><label style="margin-top:10px">Текст статьи (EN)<textarea name=body_en rows=6>${esc(p.body_en||'')}</textarea></label><div class="row" style="margin-top:10px"><label>Обложка<input name=cover type=file accept="image/*"></label><label>Фото внутри статьи<input name=imgs type=file accept="image/*" multiple></label></div><label class=ck style="margin-top:10px"><input type=checkbox name=home ${p.home?'checked':''}> Показывать на главной</label><div style="display:flex;gap:10px;margin-top:14px"><button class="btn pr sm">${ed?'Сохранить':'Опубликовать'}</button>${ed?'<button type=button class="btn sm" id="cn">Отмена</button>':''}</div></form><h3 style="margin:24px 0 12px">Статьи</h3>`+D.posts.map(x=>`<div class="it" style="display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap"><span><b>${esc(x.title)}</b><br><small style="color:var(--m)">${esc(x.tag)} ${x.home?'· на главной':''}</small></span><span style="display:flex;gap:8px"><button class="btn sm" data-e="${x.id}">Изменить</button><button class="btn rd sm" data-d="${x.id}">Удалить</button></span></div>`).join('');
$('#pf').onsubmit=async e=>{e.preventDefault();const f=e.target,o=ed||{id:'p'+Date.now(),ts:Date.now(),imgs:[],img:null};o.title=f.title.value.trim();o.tag=f.tag.value.trim()||'MILANO';o.excerpt=f.excerpt.value.trim();o.body=f.body.value;o.home=f.home.checked;o.title_en=f.title_en.value.trim();o.tag_en=f.tag_en.value.trim();o.excerpt_en=f.excerpt_en.value.trim();o.body_en=f.body_en.value;
if(f.cover.files[0])o.img=await shrink(f.cover.files[0],1200,.8);for(const fl of f.imgs.files)o.imgs.push(await shrink(fl,1200,.8));if(!ed)D.posts.push(o);if(save()){toast('Опубликовано');ed=null;admin()}};
$('#cn')&&($('#cn').onclick=()=>{ed=null;admin()});$$('[data-e]',P).forEach(b=>b.onclick=()=>{ed=D.posts.find(x=>x.id==b.dataset.e);admin();scrollTo(0,0)});$$('[data-d]',P).forEach(b=>b.onclick=()=>{if(cf('Удалить статью?')){D.posts=D.posts.filter(x=>x.id!=b.dataset.d);save();admin()}})}
function aMp(P){const cs=[...new Set(D.points.map(p=>p.city))];P.innerHTML=`<div class="sh"><h2 style="font-size:26px">Точки на карте</h2><p>Заполните данные и кликните по карте, чтобы поставить метку.</p></div><form class="it" id="mf"><div class="row"><label>Название<input name=name required placeholder="Магнит"></label><label>Город<input name=city required list=cl placeholder="Москва"></label><label>Адрес<input name=addr required></label></div><datalist id=cl>${cs.map(c=>`<option value="${esc(c)}">`).join('')}</datalist><div class="map" id="am" style="margin:14px 0"></div><button class="btn pr sm" id="sv">Добавить точку</button> <span id="pp" style="color:var(--m);font-size:12px">Метка не выбрана</span></form><div id="pl"></div>`;
const dr=()=>{mapView($('#am'),pick?[{id:'t',name:'Новая точка',addr:'',x:pick.x,y:pick.y}]:[],{sel:'t',pick:(x,y)=>{pick={x,y};$('#pp').textContent=`Метка: ${x}%, ${y}%`;dr()}})};dr();
$('#mf').onsubmit=e=>{e.preventDefault();if(!pick)return toast('Кликните по карте, чтобы поставить метку');const f=e.target;D.points.push({id:'x'+Date.now(),name:f.name.value.trim(),city:f.city.value.trim(),addr:f.addr.value.trim(),x:pick.x,y:pick.y});pick=null;if(save()){toast('Точка добавлена');admin()}};
$('#pl').innerHTML=D.points.map(p=>`<div class="it" style="display:flex;justify-content:space-between;align-items:center"><span><b>${esc(p.name)}</b> · ${esc(p.city)}<br><small style="color:var(--m)">${esc(p.addr)}</small></span><button class="btn rd sm" data-d="${p.id}">Удалить</button></div>`).join('');$$('[data-d]',P).forEach(b=>b.onclick=()=>{D.points=D.points.filter(x=>x.id!=b.dataset.d);save();admin()})}
function aEn(P){const d=new Date(D.promo.end-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16);P.innerHTML=`<div class="sh"><h2 style="font-size:26px">Розыгрыш</h2></div><form class="it" id="rf"><div class="row"><label>Название<input name=t value="${esc(D.promo.title)}"></label><label>Окончание<input name=e type=datetime-local value="${d}"></label><button class="btn pr sm">Сохранить</button></div></form><div class="sh"><h3>Заявки (${D.entries.length})</h3><button class="btn sm" id="wn">🎲 Выбрать победителя</button></div><div class="it" style="overflow:auto"><table><tr><th>Чек<th>Участник<th>Контакты<th>Дата<th></tr>${D.entries.map(e=>`<tr><td>${e.thumb?`<img src="${e.thumb}" alt="">`:esc(e.file)}<td>${esc(e.name)}<td>${esc(e.phone)}<br>${esc(e.email)}<td>${new Date(e.ts).toLocaleDateString(loc())}<td><button class="btn rd sm" data-d="${e.id}">✕</button></tr>`).join('')||'<tr><td colspan=5 style="color:var(--m)">Заявок пока нет</tr>'}</table></div>`;
$('#rf').onsubmit=e=>{e.preventDefault();D.promo={title:e.target.t.value,end:new Date(e.target.e.value).getTime()};save();toast('Сохранено')};
$('#wn').onclick=()=>{if(!D.entries.length)return toast('Нет заявок');const r=crypto.getRandomValues(new Uint32Array(1))[0]%D.entries.length,w=D.entries[r];modal(`<h3>Победитель 🎉</h3><p style="margin-top:12px"><b>${esc(w.name)}</b><br>${esc(w.phone)}<br>${esc(w.email)}</p>`)};
$$('[data-d]',P).forEach(b=>b.onclick=()=>{D.entries=D.entries.filter(x=>x.id!=b.dataset.d);save();admin()})}
/* router */
function route(){const h=location.hash;document.title='MILANO Energy Drink';$('#nv').classList.remove('o');
if(h.startsWith('#/post/'))post(h.slice(7));else if(h.startsWith('#/admin'))admin();else{if(!$('#flavors')||A.dataset.v!='h'){home();A.dataset.v='h'}const id=h.slice(1);if(id&&!id.startsWith('/'))setTimeout(()=>$('#'+id)?.scrollIntoView(),30);else if(!id||id=='/')scrollTo(0,0);return}A.dataset.v=''}
$('#bg').onclick=()=>$('#nv').classList.toggle('o');$$('#nv a').forEach(a=>a.onclick=()=>$('#nv').classList.remove('o'));
const aT=()=>{document.documentElement.dataset.theme=th;$('#th').textContent=th=='dark'?'☀':'🌙'},aL=()=>{document.documentElement.lang=lang;$('#lg').textContent=lang=='en'?'RU':'EN'};
$('#th').onclick=()=>{th=th=='dark'?'light':'dark';ss('mt',th);aT()};
$('#lg').onclick=()=>{lang=lang=='en'?'ru':'en';ss('ml',lang);aL();walk(document.body);A.dataset.v='';userUI();route()};
addEventListener('hashchange',route);aT();aL();userUI();walk(document.body);route();