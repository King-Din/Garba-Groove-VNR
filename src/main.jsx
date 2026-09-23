import React,{useEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,useScroll,useTransform,AnimatePresence} from 'framer-motion';
import {ArrowDown,ArrowUpRight,MapPin,Ticket,Heart,ChevronRight,Music2,Sparkles,Clock,CalendarDays,ExternalLink} from 'lucide-react';
import './styles.css';
import Footer from './Footer';

const PAYMENT_URL='https://rzp.io/rzp/QuJ5l2Gm';
const MAP_URL='https://maps.app.goo.gl/NgHCTi7uvJF5pygU9';
// Replace these three values when Street Cause confirms the event details.
const EVENT={date:'EVENT DATE',time:'EVENT TIME',venue:'VENUE NAME',year:'2026'};
const initiatives=[
 {title:'Community Initiative',text:'A short story about a previous Street Cause social activity goes here. Replace this with verified event information.',tag:'PAST IMPACT'},
 {title:'Giving Back',text:'Use this space for a concise, verified description of a donation or community activity performed by Street Cause.',tag:'SOCIAL ACTION'},
 {title:'Purpose in Motion',text:'Add a verified impact statistic or beneficiary story here when the organizers provide it.',tag:'REAL IMPACT'}
];

function App(){
 const {scrollYProgress}=useScroll();
 const rotate=useTransform(scrollYProgress,[0,.35],[0,180]);
 const [count,setCount]=useState({d:'—',h:'—',m:'—',s:'—'});
 useEffect(()=>{const target=new Date('2026-10-31T18:00:00+05:30'); const tick=()=>{let diff=target-Date.now(); if(diff<0)diff=0; setCount({d:String(Math.floor(diff/864e5)).padStart(2,'0'),h:String(Math.floor(diff%864e5/36e5)).padStart(2,'0'),m:String(Math.floor(diff%36e5/6e4)).padStart(2,'0'),s:String(Math.floor(diff%6e4/1e3)).padStart(2,'0')})};tick();const id=setInterval(tick,1000);return()=>clearInterval(id)},[]);
 const particles=useMemo(()=>Array.from({length:34},(_,i)=>({left:`${(i*37)%100}%`,top:`${(i*61)%100}%`,delay:(i%9)*.4,dur:5+(i%6)})),[]);
 return <div className="app">
  <div className="noise"/>
  <div className="ambient ambient-a"/><div className="ambient ambient-b"/>
  <div className="particles" aria-hidden="true">{particles.map((p,i)=><span key={i} style={{left:p.left,top:p.top,animationDelay:`${p.delay}s`,animationDuration:`${p.dur}s`}}/>)}</div>
  <motion.div className="mandala" style={{rotate}} aria-hidden="true"><div className="mandala-core"/><div className="petals"/></motion.div>
  <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">✦</span><span>GARBA<br/><b>GROOVE</b></span></a><a className="mini-ticket" href={PAYMENT_URL} target="_blank" rel="noreferrer">GET PASS <ArrowUpRight size={15}/></a></header>
  <main id="top">
   <section className="hero section"><div className="hero-copy"><motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="eyebrow"><Sparkles size={14}/> STREET CAUSE PRESENTS</motion.p><motion.h1 initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}}><span>GARBA</span><em>GROOVE</em></motion.h1><motion.p className="hero-sub" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.35}}>Dance loud. Celebrate together. <strong>Give back.</strong></motion.p><motion.a className="hero-cta" href="#journey" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.5}}>ENTER THE GROOVE <ArrowDown size={17}/></motion.a></div><div className="hero-sticks" aria-hidden="true"><span/><span/><span/></div><div className="scroll-hint"><span>SCROLL TO ENTER</span><ArrowDown size={15}/></div></section>
   <section id="journey" className="section reveal-section"><div className="section-kicker">01 / THE NIGHT</div><h2>A celebration<br/><span>with a purpose.</span></h2><p className="lead">Garba Groove brings the energy of Garba and Dandiya into one unforgettable night — while keeping the spirit of community at the heart of the celebration.</p><div className="event-grid"><Info icon={<CalendarDays/>} label="DATE" value={EVENT.date}/><Info icon={<Clock/>} label="TIME" value={EVENT.time}/><Info icon={<MapPin/>} label="VENUE" value={EVENT.venue}/></div><div className="action-row"><a href={MAP_URL} target="_blank" rel="noreferrer" className="outline-btn"><MapPin size={17}/> GET DIRECTIONS <ArrowUpRight size={15}/></a><a href={PAYMENT_URL} target="_blank" rel="noreferrer" className="solid-btn"><Ticket size={17}/> GET YOUR PASS</a></div></section>
   <section className="countdown-section section"><div className="section-kicker">02 / COUNTDOWN</div><div className="countdown-title"><span>THE CLOCK</span><strong>IS TICKING.</strong></div><div className="countdown">{Object.entries(count).map(([k,v])=><div className="time" key={k}><b>{v}</b><small>{k==='d'?'DAYS':k==='h'?'HOURS':k==='m'?'MIN':'SEC'}</small></div>)}</div><p className="muted">The exact event date will be plugged in once confirmed by Street Cause.</p></section>
   <section id="energy" className="experience section"><div className="section-kicker">03 / THE ENERGY</div><div className="orbit-card"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><Music2 size={30}/><span>GARBA</span><span>DANDIYA</span><span>MUSIC</span><span>COMMUNITY</span></div><h2>Come for the<br/><span>energy.</span></h2><p className="lead">A single-scroll journey through music, movement, colour and community. The exact program details can be added as soon as the organizers confirm them.</p><div className="word-ribbon"><span>MOVE</span><span>CELEBRATE</span><span>CONNECT</span><span>GIVE</span></div></section>
   <section id="gallery" className="gallery section"><div className="section-kicker">04 / LAST YEAR</div><h2>Remember<br/><span>the feeling?</span></h2><p className="lead">Real photographs from last year's event should replace these visual placeholders.</p><div className="gallery-track"><GalleryCard n="01"/><GalleryCard n="02"/><GalleryCard n="03"/></div></section>
   <section id="impact" className="impact section"><div className="impact-glow"/><div className="section-kicker">05 / THE WHY</div><div className="impact-statement"><span>YOUR PASS</span><strong>IS MORE<br/>THAN A PASS.</strong></div><p className="lead">According to the event plan, pass proceeds are intended to support charitable work. Replace this copy with Street Cause's verified information about beneficiaries, activities and impact.</p><div className="impact-line"><Heart fill="currentColor"/><span>CELEBRATION → PURPOSE → IMPACT</span></div></section>
   <section className="initiatives section"><div className="section-kicker">06 / REAL IMPACT</div><h2>Good times.<br/><span>Good work.</span></h2><div className="initiative-track">{initiatives.map((x,i)=><article className="initiative" key={x.title}><div className="fake-photo"><span>{String(i+1).padStart(2,'0')}</span><small>PHOTO PLACEHOLDER</small></div><div className="initiative-body"><small>{x.tag}</small><h3>{x.title}</h3><p>{x.text}</p><button>VIEW STORY <ChevronRight size={15}/></button></div></article>)}</div></section>
   <section className="pass section"><div className="pass-rays"/><div className="section-kicker">07 / YOUR INVITE</div><p className="pass-overline">READY?</p><h2>THE NIGHT<br/><em>IS WAITING.</em></h2><div className="pass-tags"><span>GARBA</span><span>DANDIYA</span><span>MUSIC</span><span>PURPOSE</span></div><a className="big-pass" href={PAYMENT_URL} target="_blank" rel="noreferrer"><span>GET YOUR PASS</span><ArrowUpRight size={25}/></a><p className="tiny">You will be redirected to the official payment page.</p></section>
    <Footer />
  </main>
 </div>
}
function Info({icon,label,value}){return <div className="info"><div className="info-icon">{icon}</div><small>{label}</small><strong>{value}</strong></div>}
function GalleryCard({n}){return <div className="gallery-card"><div className="photo-placeholder"><span>GARBA<br/>GROOVE</span><small>ADD REAL EVENT PHOTO</small></div><div className="photo-meta"><b>{n}</b><span>LAST YEAR'S ENERGY</span></div></div>}
createRoot(document.getElementById('root')).render(<App/>);
