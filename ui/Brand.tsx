/** BaseHub identity: a hub node linking outward. */
export function Mark(){
 return <svg className="brand-mark" viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
  <g stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" fill="none">
   <path d="M20 20 L20 8.5"/><path d="M20 20 L9.8 28.2"/><path d="M20 20 L30.2 28.2"/>
  </g>
  <circle cx="20" cy="20" r="4.4" fill="var(--accent)"/>
  <circle cx="20" cy="7" r="3.1" fill="currentColor"/>
  <circle cx="8.4" cy="29.6" r="3.1" fill="currentColor"/>
  <circle cx="31.6" cy="29.6" r="3.1" fill="currentColor"/>
 </svg>;
}

export function Brand(){
 return <div className="wordmark"><Mark/><span>Base<span className="accent-part">Hub</span></span></div>;
}

/** Large abstract network for the sign-in panel: one hub, many connections. */
export function HubArtwork(){
 const c=[210,210],r1=95,r2=160;
 const inner:[[number,number],[number,number],[number,number],[number,number]]=[[210,115],[305,210],[210,305],[115,210]];
 const outer:[[number,number],[number,number],[number,number],[number,number]]=[[323,97],[323,323],[97,323],[97,97]];
 const links=inner.flatMap((p,i)=>[outer[i]!,outer[(i+3)%4]!].map(q=>({p,q})));
 return <div className="botanical-art" aria-hidden="true">
  <svg className="hub-art" viewBox="0 0 420 420" width="420" height="420" role="img">
   <circle cx={c[0]} cy={c[1]} r={r1} fill="none" stroke="var(--art-rule)" strokeWidth="1.4" strokeDasharray="3 7"/>
   <circle cx={c[0]} cy={c[1]} r={r2} fill="none" stroke="var(--art-rule)" strokeWidth="1" strokeDasharray="2 8"/>
   {inner.map((p,i)=><line key={'i'+i} x1={c[0]} y1={c[1]} x2={p[0]} y2={p[1]} stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" opacity="0.85"/>)}
   {links.map((l,i)=><line key={'o'+i} x1={l.p[0]} y1={l.p[1]} x2={l.q[0]} y2={l.q[1]} stroke="var(--art-foot)" strokeWidth="1.1" opacity="0.7"/>)}
   {outer.map((p,i)=><circle key={'oc'+i} cx={p[0]} cy={p[1]} r="7" fill="var(--art-body)" opacity="0.85"/>)}
   {inner.map((p,i)=><circle key={'ic'+i} cx={p[0]} cy={p[1]} r="12" fill="var(--art-heading)" stroke="var(--art-1)" strokeWidth="3"/>)}
   <circle cx={c[0]} cy={c[1]} r="24" fill="var(--accent)" stroke="var(--art-1)" strokeWidth="4"/>
   <circle cx={c[0]} cy={c[1]} r="9" fill="var(--accent-fg)" opacity="0.85"/>
  </svg>
 </div>;
}
