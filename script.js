// Pasangan/nama dari Excel stabling; jam R JAKK sesuai PDF pengguna. Tanpa layanan daring.
const SCHEDULE = {"revision":"jakk-r-pdf-2026-11-04-v1","file":"Rekap_JAKK_L_R_GAPEKA_2026 (1).pdf","arrivalPage":4,"departurePage":3,"arrivals":{"R53":19,"R25":61,"R127":93,"R71F":179,"R49":227,"R15":237,"R19":256,"R3":287,"R41":314,"R57":380,"R125":399,"R61":416,"R79F":575,"R51":587,"R17":683,"R133":848,"R75F":861,"R29":923,"R137":940,"R13":957,"R55":975,"R1":1000,"R59":1108,"R35":1145,"R45":1283,"R33":1342},"departures":{"R54":296,"R130":307,"R26":349,"R132":365,"R64F":385,"R32":400,"R20":413,"R138":425,"R2":444,"R16":473,"R56":501,"R46":521,"R126":552,"R60":613,"R18":967,"R76F":993,"R52":1007,"R58":1090,"R50":1127,"R4":1170,"R14":1208,"R42":1238,"R34":1293,"R62":1331,"R36":1382,"R80F":1415}};
const DATA = [{"id":"R53","arrNo":"R53","depNo":"R54","arrName":"Brawijaya","depName":"Brawijaya","arr":19,"dep":296,"poa":"8","rowIn":3,"rowOut":4,"sourceArrName":"Dinas Rangkaian Brawijaya","sourceDepName":"Dinas Rangkaian Brawijaya","gambirDep":8,"gambirArr":307,"excelArr":19,"excelDep":296},{"id":"R25","arrNo":"R25","depNo":"R26","arrName":"Muria","depName":"Muria","arr":61,"dep":349,"poa":"3","rowIn":5,"rowOut":6,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":50,"gambirArr":361,"excelArr":61,"excelDep":349},{"id":"R127","arrNo":"R127","depNo":"R130","arrName":"Pangandaran","depName":"Papandayan","arr":93,"dep":307,"poa":"6","rowIn":7,"rowOut":8,"sourceArrName":"Dinas Rangkaian Pangandaran","sourceDepName":"Dinas Rangakian Papandayan","gambirDep":82,"gambirArr":318,"excelArr":93,"excelDep":307},{"id":"R71F","arrNo":"R71F","depNo":"R64F","arrName":"Purwojaya","depName":"Purwojaya","arr":179,"dep":385,"poa":"4","rowIn":9,"rowOut":10,"sourceArrName":"Dinas Rangkaian Purwojaya","sourceDepName":"Dinas Rangkaian Purwojaya","gambirDep":168,"gambirArr":396,"excelArr":179,"excelDep":385},{"id":"R49","arrNo":"R49","depNo":"R132","arrName":"Gajayana","depName":"Parahyangan","arr":227,"dep":365,"poa":"7","rowIn":11,"rowOut":12,"sourceArrName":"Dinas Rangkaian Gajayana","sourceDepName":"Dinas Rangkaian Parahyangan","gambirDep":216,"gambirArr":377,"excelArr":227,"excelDep":365},{"id":"R15","arrNo":"R15","depNo":"R16","arrName":"A Dwipangga","depName":"A Dwipangga","arr":237,"dep":473,"poa":"1","rowIn":13,"rowOut":14,"sourceArrName":"Dinas Rangkaian A Dwipangga","sourceDepName":"Dinas Rangkaian A Dwipangga","gambirDep":226,"gambirArr":486,"excelArr":237,"excelDep":473},{"id":"R19","arrNo":"R19","depNo":"R20","arrName":"Muria","depName":"Muria","arr":256,"dep":413,"poa":"5","rowIn":15,"rowOut":16,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":245,"gambirArr":427,"excelArr":256,"excelDep":413},{"id":"R3","arrNo":"R3","depNo":"R2","arrName":"Anggrek","depName":"Anggrek","arr":287,"dep":444,"poa":"8","rowIn":17,"rowOut":18,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":276,"gambirArr":457,"excelArr":287,"excelDep":444},{"id":"R41","arrNo":"R41","depNo":"R138","arrName":"Pandalungan","depName":"Parahyangan","arr":314,"dep":425,"poa":"6","rowIn":19,"rowOut":20,"sourceArrName":"Dinas Rangkaian Pandalungan","sourceDepName":"Dinas Rangkaian Parahyangan","gambirDep":301,"gambirArr":439,"excelArr":314,"excelDep":425},{"id":"R57","arrNo":"R57","depNo":"R56","arrName":"Anggrek","depName":"Anggrek","arr":380,"dep":501,"poa":"10","rowIn":21,"rowOut":22,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":366,"gambirArr":513,"excelArr":381,"excelDep":501},{"id":"R125","arrNo":"R125","depNo":"R126","arrName":"Batavia","depName":"Batavia","arr":399,"dep":552,"poa":"3","rowIn":23,"rowOut":24,"sourceArrName":"Dinas Rangkaian Batavia","sourceDepName":"Dinas Rangkaian Batavia","gambirDep":388,"gambirArr":564,"excelArr":399,"excelDep":552},{"id":"R61","arrNo":"R61","depNo":"R60","arrName":"Manahan","depName":"Manahan","arr":416,"dep":613,"poa":"7","rowIn":27,"rowOut":28,"sourceArrName":"Dinas Rangkaian Manahan","sourceDepName":"Dinas Rangkaian Manahan","gambirDep":402,"gambirArr":624,"excelArr":416,"excelDep":613},{"id":"R79F","arrNo":"R79F","depNo":"R80F","arrName":"Gajayana Fakultatif","depName":"Gajayana Fakultatif","arr":575,"dep":1415,"poa":"1","rowIn":29,"rowOut":30,"sourceArrName":"Dinas Rangkaian Gajayana Fakultatif","sourceDepName":"Dinas Rangkaian Gajayana Fakultatif","gambirDep":562,"gambirArr":1427,"excelArr":575,"excelDep":1415},{"id":"R51","arrNo":"R51","depNo":"R52","arrName":"Brawijaya","depName":"Brawijaya","arr":587,"dep":1007,"poa":"8","rowIn":31,"rowOut":32,"sourceArrName":"Dinas Rangkaian Brawijaya","sourceDepName":"Dinas Rangkaian Brawijaya","gambirDep":573,"gambirArr":1019,"excelArr":587,"excelDep":1007},{"id":"R17","arrNo":"R17","depNo":"R18","arrName":"Muria","depName":"Muria","arr":683,"dep":967,"poa":"5","rowIn":33,"rowOut":34,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":671,"gambirArr":980,"excelArr":683,"excelDep":967},{"id":"R133","arrNo":"R133","depNo":"R50","arrName":"Parahyangan","depName":"Gajayana","arr":848,"dep":1127,"poa":"7","rowIn":35,"rowOut":36,"sourceArrName":"Dinas Rangkaian Parahyangan","sourceDepName":"Dinas Rangkaian Gajayana","gambirDep":833,"gambirArr":1140,"excelArr":848,"excelDep":1127},{"id":"R75F","arrNo":"R75F","depNo":"R76F","arrName":"Borobudur","depName":"Borobudur","arr":861,"dep":993,"poa":"2","rowIn":37,"rowOut":38,"sourceArrName":"Dinas Rangkaian Borobudur","sourceDepName":"Dinas Rangkaian Borobudur","gambirDep":849,"gambirArr":1008,"excelArr":861,"excelDep":993},{"id":"R29","arrNo":"R29","depNo":"R34","arrName":"Taksaka","depName":"Taksaka","arr":923,"dep":1293,"poa":"9","rowIn":39,"rowOut":40,"sourceArrName":"Dinas Rangkaian Taksaka","sourceDepName":"Dinas Rangkaian Taksaka","gambirDep":910,"gambirArr":1305,"excelArr":923,"excelDep":1293},{"id":"R137","arrNo":"R137","depNo":"R42","arrName":"Parahyangan","depName":"Pandalungan","arr":940,"dep":1238,"poa":"6","rowIn":41,"rowOut":42,"sourceArrName":"Dinas Rangkaian Parahyangan","sourceDepName":"Dinas Rangkaian Pandalungan","gambirDep":928,"gambirArr":1250,"excelArr":940,"excelDep":1238},{"id":"R13","arrNo":"R13","depNo":"R14","arrName":"A Lawu","depName":"A Lawu","arr":957,"dep":1208,"poa":"3","rowIn":43,"rowOut":44,"sourceArrName":"Dinas Rangkaian A Lawu","sourceDepName":"Dinas Rangkaian A Lawu","gambirDep":945,"gambirArr":1221,"excelArr":957,"excelDep":1208},{"id":"R55","arrNo":"R55","depNo":"R58","arrName":"Anggrek","depName":"Anggrek","arr":975,"dep":1090,"poa":"4","rowIn":45,"rowOut":46,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":962,"gambirArr":1103,"excelArr":975,"excelDep":1090},{"id":"R1","arrNo":"R1","depNo":"R4","arrName":"Anggrek","depName":"Anggrek","arr":1000,"dep":1170,"poa":"5","rowIn":47,"rowOut":48,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":987,"gambirArr":1184,"excelArr":1000,"excelDep":1170},{"id":"R59","arrNo":"R59","depNo":"R62","arrName":"Manahan","depName":"Manahan","arr":1108,"dep":1331,"poa":"8","rowIn":49,"rowOut":50,"sourceArrName":"Dinas Rangkaian Manahan","sourceDepName":"Dinas Rangkaian Manahan","gambirDep":1097,"gambirArr":1343,"excelArr":1108,"excelDep":1331},{"id":"R35","arrNo":"R35","depNo":"R36","arrName":"Anggrek","depName":"Anggrek","arr":1145,"dep":1382,"poa":"4","rowIn":51,"rowOut":52,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":1132,"gambirArr":1394,"excelArr":1145,"excelDep":1382},{"id":"R45","arrNo":"R45","depNo":"R46","arrName":"Pandalungan","depName":"Pandalungan","arr":1283,"dep":521,"poa":"2","rowIn":53,"rowOut":54,"sourceArrName":"Dinas Rangkaian Pandalungan","sourceDepName":"Dinas Rangkaian Pandalungan","gambirDep":1271,"gambirArr":534,"excelArr":1283,"excelDep":521},{"id":"R33","arrNo":"R33","depNo":"R32","arrName":"Taksaka","depName":"Taksaka","arr":1342,"dep":400,"poa":"9","rowIn":25,"rowOut":26,"sourceArrName":"Dinas Rangkaian Taksaka","sourceDepName":"Dinas Rangkaian Taksaka","gambirDep":1330,"gambirArr":412,"excelArr":1342,"excelDep":400}];
(function(root){
'use strict';
const DAY=1440, SHUNTER_LEAD=30, DAO_LEAD=25, TRACKS=['1','2','3','4','5','6','7','8','9','10','11','11A'];
const STABLING=TRACKS.slice(0,10), capacity=track=>track==='1'?2:STABLING.includes(track)?1:0;
const copy=x=>JSON.parse(JSON.stringify(x));
const overlap=(a,b)=>a.start<b.end&&b.start<a.end;
function time(n){const d=Math.floor(n/DAY),m=((Math.round(n)%DAY)+DAY)%DAY;return `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}${d?` (H${d>0?'+':''}${d})`:''}`;}
function parse(s){if(typeof s!=='string'||!/^\d{2}:\d{2}$/.test(s))return NaN;const[h,m]=s.split(':').map(Number);return h<24&&m<60?h*60+m:NaN;}
function defaultState(){return {version:1,name:'Susunan manual',clock:270,params:{inOffset:0,outOffset:0,buffer:0,locBuffer:0,moveDuration:5,maneuverDuration:10},assignments:{},activities:[],locos:[{id:'LS-1',name:'Lok langsir 1',kind:'langsir',from:0,to:1440},{id:'LD-1',name:'Lok dinas 1',kind:'dinas',from:0,to:1440},{id:'LD-2',name:'Lok dinas 2',kind:'dinas',from:0,to:1440}],routes:[],log:[]};}
function windowFor(t,s){const override=s.timeOverrides?.[t.id];if(override)return{start:override.start,end:override.end};let start=t.arr+s.params.inOffset,end=t.dep+(t.dep<=t.arr?DAY:0)-s.params.outOffset;const a=s.assignments[t.id];if(a&&a.enter!==null&&a.enter!==undefined)start=a.enter;if(a&&a.exit!==null&&a.exit!==undefined)end=a.exit;return {start,end};}
function shiftedOverlap(a,b){const base=Math.floor((a.start-b.start)/DAY)*DAY;for(const k of [base-DAY,base,base+DAY]){const bb={...b,start:b.start+k,end:b.end+k};if(overlap(a,bb))return bb;}return null;}
function shiftedWithin(a,from,to){if(to===from||(from===0&&to===DAY))return true;if(to<=from)to+=DAY;const base=Math.floor((a.start-from)/DAY)*DAY;for(const k of [base-DAY,base,base+DAY])if(a.start>=from+k&&a.end<=to+k)return true;return false;}
// LL otomatis hanya dipesan pada 30 menit terakhir sebelum keluar DAO.
// Waktu eksplisit dari skenario lama tetap dapat dibaca; LD mengikuti periode stabling.
function locoWindow(t,s,a){const w=windowFor(t,s),loco=s.locos.find(l=>l.id===a.locId),automatic=a.start==null&&a.end==null;return automatic&&loco?.kind==='langsir'?{start:Math.max(w.start,w.end-SHUNTER_LEAD),end:w.end}:{start:a.start??w.start,end:a.end??w.end};}
function build(s,data){
 const occupancy=[],jobs=[],issues=[];
 const get=id=>data.find(t=>t.id===id);
 for(const[tId,a]of Object.entries(s.assignments)){
  const t=get(tId);if(!t)continue;const w=windowFor(t,s);
  const moves=s.activities.filter(x=>x.trainId===tId&&x.type==='pindah').sort((x,y)=>x.start-y.start);
  let track=a.track,start=w.start;
  for(const m of moves){occupancy.push({resource:track,start,end:m.end+s.params.buffer,owner:tId,label:`${t.arrNo} → ${t.depNo}`,kind:'rangkaian'});track=m.to;start=m.start;}
  occupancy.push({resource:track,start,end:w.end+s.params.buffer,owner:tId,label:`${t.arrNo} → ${t.depNo}`,kind:'rangkaian'});
 }
 for(const a of s.activities){
  const t=get(a.trainId);const label=a.type==='parkir'?`Lok lepas ${a.locId}`:`${a.type} ${t?t.arrNo:a.trainId}`;
  jobs.push({...a,label,end:a.end+s.params.locBuffer,resource:a.locId,owner:a.id});
  if(a.type==='manuver'||a.type==='parkir')occupancy.push({resource:a.track,start:a.start,end:a.end+s.params.buffer,owner:a.id,label,kind:a.type});
  if(a.type==='masuk'&&t){const tr=s.assignments[t.id]?.track;if(tr)occupancy.push({resource:tr,start:a.start,end:a.end+s.params.buffer,owner:t.id,label,kind:'masuk'});}
 }
 return {occupancy,jobs,issues};
}
function validate(s,data){
 const errors=[],warnings=[];const err=(code,message,extra={})=>errors.push({code,message,...extra});
 if(!s||s.version!==1||!s.params||!s.assignments||!Array.isArray(s.activities)||!Array.isArray(s.locos)||!Array.isArray(s.routes))return {ok:false,errors:[{code:'format',message:'Format skenario tidak dikenali.'}],warnings:[]};
 if(s.locoAssignments!==undefined&&(!s.locoAssignments||typeof s.locoAssignments!=='object'||Array.isArray(s.locoAssignments)))return{ok:false,errors:[{code:'loco_assignment',message:'Format lok pada rangkaian tidak dikenali.'}],warnings:[]};
 if(s.timeOverrides!==undefined&&(!s.timeOverrides||typeof s.timeOverrides!=='object'||Array.isArray(s.timeOverrides)))return{ok:false,errors:[{code:'time_override',message:'Format jam stabling tidak dikenali.'}],warnings:[]};
 for(const k of ['inOffset','outOffset','buffer','locBuffer','moveDuration','maneuverDuration'])if(!Number.isFinite(s.params[k])||s.params[k]<0||s.params[k]>720)err('parameter',`Parameter ${k} harus 0–720 menit.`);
 if(errors.length)return{ok:false,errors,warnings};
 const ids=new Set();let shunters=0;
 for(const l of s.locos){if(!/^[A-Za-z0-9_-]{1,24}$/.test(l.id)||ids.has(l.id))err('lok_id','ID lok kosong, tidak sah, atau duplikat.');ids.add(l.id);if(!['langsir','dinas'].includes(l.kind))err('lok_kind','Jenis lok tidak dikenali.');if(l.kind==='langsir')shunters++;if(!Number.isInteger(l.from)||!Number.isInteger(l.to)||l.from<0||l.from>=DAY||l.to<=0||l.to>DAY)err('lok_availability',`Waktu ketersediaan ${l.id} tidak sah.`);}
 if(shunters!==1)err('shunter_count','Harus ada tepat satu lokomotif langsir.');
 const routeIds=new Set();for(const r of s.routes){if(!r.id||routeIds.has(r.id)||!Array.isArray(r.segments)||!r.segments.length||r.segments.some(x=>typeof x!=='string'||!x.trim()))err('route_config','Rute harus memiliki ID unik dan setidaknya satu ruas.');routeIds.add(r.id);}
 const get=id=>data.find(t=>t.id===id);
 for(const[id,w]of Object.entries(s.timeOverrides||{}))if(!get(id)||!w||!Number.isInteger(w.start)||!Number.isInteger(w.end)||w.start<0||w.start>=DAY||w.end<=w.start||w.end-w.start>=DAY)err('time_override',`${id}: jam stabling harus sah, dengan durasi lebih dari 0 dan kurang dari 24 jam.`);
 if(errors.length)return{ok:false,errors,warnings};
 for(const[id,a]of Object.entries(s.assignments)){
  const t=get(id);if(!t){err('train','Nomor rangkaian tidak dikenal.');continue;}
  if(!TRACKS.includes(a.track))err('track',`Jalur ${a.track} tidak dikenal.`);
  else if(!STABLING.includes(a.track))err('reserved_track',`Jalur ${a.track} adalah jalur cadangan dan tidak dapat diisi stabling rangkaian. Pilih jalur 1–10.`);
  const w=windowFor(t,s),dep=t.dep+(t.dep<=t.arr?DAY:0);
  if(!Number.isInteger(w.start)||!Number.isInteger(w.end)||(!s.timeOverrides?.[id]&&(w.start<t.arr||w.end>dep))||w.end<=w.start||w.end-w.start>=DAY)err('window',`${t.arrNo}: waktu DAO harus sah dan durasinya kurang dari 24 jam. Tanpa perubahan skenario, waktunya mengikuti batas datang/berangkat JAKK.`);
  if(w.end+s.params.buffer-w.start>DAY)err('cycle_overlap',`${t.arrNo}: waktu stabling dan jeda pengosongan melebihi satu siklus 24 jam.`);
 }
 const activityIds=new Set();
 for(const a of s.activities){
  if(!a.id||activityIds.has(a.id))err('activity_id','ID kegiatan kosong atau duplikat.');activityIds.add(a.id);
  if(!['manuver','pindah','masuk','keluar','parkir'].includes(a.type))err('activity','Jenis kegiatan tidak dikenali.');
  if(!Number.isInteger(a.start)||!Number.isInteger(a.end)||a.end<=a.start||a.end-a.start>=DAY||a.start<0||a.start>=2*DAY||a.end>3*DAY)err('duration','Kegiatan harus memiliki waktu sah dan durasi 1–1439 menit.');
  if(a.end+s.params.locBuffer-a.start>DAY||(['manuver','parkir'].includes(a.type)&&a.end+s.params.buffer-a.start>DAY))err('cycle_overlap','Kegiatan dan jeda tidak boleh bertumpuk dengan pengulangannya pada hari berikutnya.');
  const loco=s.locos.find(l=>l.id===a.locId);if(!loco)err('loco','Pilih lokomotif yang terdaftar.');else if(!shiftedWithin({start:a.start,end:a.end+s.params.locBuffer},loco.from,loco.to))err('availability',`${loco.id} belum tersedia sepanjang kegiatan dan jeda pelepasan.`);
  if(a.routeId&&!routeIds.has(a.routeId))err('route','Rute kegiatan tidak ditemukan.');
  if(a.type==='parkir'){if(!TRACKS.includes(a.track))err('track','Pilih jalur parkir lok.');continue;}
  const t=get(a.trainId),assign=s.assignments[a.trainId];
  if(!t||!assign){err('assignment','Tempatkan rangkaian sebelum membuat kegiatan.');continue;}
  const w=windowFor(t,s),sourceDep=t.dep+(t.dep<=t.arr?DAY:0);
  if(a.type==='masuk'){
   if(a.end!==w.start||(!s.timeOverrides?.[t.id]&&a.start<t.arr))err('entry',`Kegiatan masuk harus selesai ${time(w.start)} dan dimulai sesudah tiba JAKK. Atur jeda masuk DAO terlebih dahulu.`);
  }else if(a.type==='keluar'){
   if(a.end!==w.end||a.start<w.start||(!s.timeOverrides?.[t.id]&&a.end>sourceDep))err('exit',`Kegiatan keluar harus selesai ${time(w.end)} dalam jendela waktu DAO.`);
  }else if(a.start<w.start||a.end>w.end)err('job_window',`Kegiatan ${t.arrNo} harus berada dalam waktu DAO ${time(w.start)}–${time(w.end)}.`);
  if(a.type==='manuver'&&!TRACKS.includes(a.track))err('track','Pilih jalur kosong untuk manuver lok.');
  if(a.type==='pindah'&&!TRACKS.includes(a.to))err('track','Pilih jalur tujuan perpindahan.');
  else if(a.type==='pindah'&&!STABLING.includes(a.to))err('reserved_track',`Jalur ${a.to} adalah jalur cadangan; rangkaian hanya dapat dipindah ke jalur 1–10.`);
 }
 if(errors.length)return{ok:false,errors,warnings};
 const reservations=[];
 for(const[trainId,a]of Object.entries(s.locoAssignments||{})){
  const t=get(trainId),placement=s.assignments[trainId],loco=s.locos.find(l=>l.id===a?.locId);
  if(!t||!placement){err('loco_assignment',`Lok hanya dapat ditambahkan pada rangkaian yang sudah stabling: ${trainId}.`);continue;}
  if(!loco){err('loco_assignment',`Lok pada ${trainId} tidak ditemukan.`);continue;}
  const w=windowFor(t,s),r=locoWindow(t,s,a);
  if(!Number.isInteger(r.start)||!Number.isInteger(r.end)||r.end<=r.start||r.start<w.start||r.end>w.end){err('loco_window',`Periode lok ${loco.id} harus berada dalam stabling ${trainId}: ${time(w.start)}–${time(w.end)}.`);continue;}
  if(r.end+s.params.locBuffer-r.start>DAY)err('cycle_overlap','Periode lok dan jedanya melebihi satu siklus harian.');
  if(!shiftedWithin({start:r.start,end:r.end+s.params.locBuffer},loco.from,loco.to))err('availability',`${loco.id} belum tersedia sepanjang periode pada ${trainId}.`);
  reservations.push({...r,end:r.end+s.params.locBuffer,trainId,trainLabel:t.depNo,locId:loco.id,locoLabel:loco.kind==='langsir'?'LL':'LD'});
 }
 if(errors.length)return{ok:false,errors,warnings};
 for(let i=0;i<reservations.length;i++){
  const a=reservations[i];
  for(let j=i+1;j<reservations.length;j++){const c=reservations[j],hit=a.locId===c.locId&&shiftedOverlap(a,c);if(hit)err('loco_busy',`${a.locoLabel} sudah digunakan ${a.trainLabel} (${time(a.start)}–${time(a.end)}) dan berbenturan dengan ${c.trainLabel} (${time(hit.start)}–${time(hit.end)}). Lok tersedia kembali ${time(a.end)}.`);}
  for(const job of s.activities){if(a.locId===job.locId&&a.trainId!==job.trainId&&shiftedOverlap(a,{...job,end:job.end+s.params.locBuffer}))err('loco_busy',`${a.locId} pada ${a.trainId} berbenturan dengan kegiatan ${job.trainId||'parkir lok'} (${time(job.start)}–${time(job.end+s.params.locBuffer)}).`);}
 }
 const b=build(s,data);
 for(let i=0;i<b.occupancy.length;i++)for(let j=i+1;j<b.occupancy.length;j++){
  const a=b.occupancy[i],c=b.occupancy[j];if(a.resource!==c.resource||a.owner===c.owner)continue;const hit=shiftedOverlap(a,c);
  const trainKind=x=>['rangkaian','masuk'].includes(x.kind);
  if(hit&&!(a.resource==='1'&&trainKind(a)&&trainKind(c)))err('track_busy',`Jalur ${a.resource}: ${a.label} (${time(a.start)}–${time(a.end)}) berbenturan dengan ${c.label} (${time(hit.start)}–${time(hit.end)}).`,{track:a.resource,owners:[a.owner,c.owner]});
 }
 const intervals=b.occupancy.filter(x=>x.resource==='1'&&['rangkaian','masuk'].includes(x.kind)).flatMap(a=>[-2*DAY,-DAY,0,DAY].map(k=>({...a,start:Math.max(0,a.start+k),end:Math.min(DAY,a.end+k)}))).filter(a=>a.start<a.end);
 const points=[...new Set(intervals.flatMap(x=>[x.start,x.end]))].sort((a,b)=>a-b);
 for(let i=0;i<points.length-1;i++){
  const start=points[i],end=points[i+1],owners=[...new Set(intervals.filter(x=>x.start<end&&x.end>start).map(x=>x.owner))];
  if(owners.length>2){err('track_capacity',`Jalur 1 sudah mencapai kapasitas dua rangkaian. Pada ${time(start)}–${time(end)} terdapat ${owners.length} rangkaian: ${owners.join(', ')}.`,{track:'1',owners});break;}
 }
 for(let i=0;i<s.activities.length;i++)for(let j=i+1;j<s.activities.length;j++){
  const a=s.activities[i],c=s.activities[j];
  if(a.locId===c.locId&&shiftedOverlap({...a,end:a.end+s.params.locBuffer},{...c,end:c.end+s.params.locBuffer}))err('loco_busy',`${a.locId} dipakai dua kegiatan yang bertumpuk: ${time(a.start)}–${time(a.end+s.params.locBuffer)} dan ${time(c.start)}–${time(c.end+s.params.locBuffer)}.`);
  if(a.trainId&&a.trainId===c.trainId&&shiftedOverlap(a,c))err('train_busy',`${a.trainId} memiliki dua kegiatan pada waktu bersamaan.`);
  if(a.routeId&&c.routeId&&shiftedOverlap(a,c)){
   const ra=s.routes.find(r=>r.id===a.routeId),rc=s.routes.find(r=>r.id===c.routeId),shared=ra.segments.filter(x=>rc.segments.includes(x));
   if(shared.length)err('route_busy',`Rute berbenturan pada ruas ${shared.join(', ')} antara kegiatan ${a.id} dan ${c.id}.`);
  }
 }
 for(const[id,a]of Object.entries(s.assignments)){
  let track=a.track;
  for(const m of s.activities.filter(x=>x.trainId===id&&x.type==='pindah').sort((x,y)=>x.start-y.start)){
   if(m.to===track)err('same_track',`${id}: jalur tujuan perpindahan sama dengan jalur asal.`);track=m.to;
  }
 }
 if(!s.routes.length)warnings.push('Rute dan wesel belum dimodelkan. Pemeriksaan saat ini mencakup jadwal jalur dan lok.');
 const unverified=s.activities.filter(a=>a.type!=='parkir'&&!a.routeId).length;
 if(unverified)warnings.push(`${unverified} kegiatan belum memiliki rute terkonfigurasi.`);
 if(s.params.inOffset===0&&s.params.outOffset===0)warnings.push('Jeda JAKK–DAO masih 0 menit: waktu DAO sementara mengikuti jam R di JAKK.');
 warnings.push('Panjang rangkaian, kapasitas meter, geometri akses, dan aturan persinyalan belum dimodelkan.');
 return{ok:!errors.length,errors,warnings,occupancy:b.occupancy};
}
function at(s,data,minute){const p=((minute%DAY)+DAY)%DAY;return build(s,data).occupancy.filter(a=>[-2*DAY,-DAY,0,DAY].some(k=>a.start+k<=p&&p<a.end+k));}
function segments(s,data,track){return build(s,data).occupancy.filter(a=>a.resource===track).flatMap(a=>[-2*DAY,-DAY,0,DAY].map(k=>({...a,start:a.start+k,end:a.end+k}))).filter(a=>a.start<DAY&&a.end>0).map(a=>({...a,start:Math.max(0,a.start),end:Math.min(DAY,a.end)}));}
function available(s,data,id,enter,exit){return STABLING.filter(track=>{const next=copy(s);next.assignments[id]={track,enter:enter??null,exit:exit??null};return validate(next,data).ok;});}
function loadPOA(s,data){const n=copy(s);n.assignments={};n.activities=[];if(n.locoAssignments)n.locoAssignments={};const rejected=[];for(const t of data){const test=copy(n);test.assignments[t.id]={track:t.poa,enter:null,exit:null};const v=validate(test,data);if(v.ok)n.assignments=test.assignments;else rejected.push({id:t.id,errors:v.errors});}return {state:n,rejected};}
function importState(raw,data){const s=copy(raw);if(!s||s.version!==1)throw Error('Versi skenario tidak didukung.');if(!s.log)s.log=[];if(!Array.isArray(s.log)||typeof s.name!=='string'||s.name.length>120||!Number.isFinite(s.clock))throw Error('Nama, riwayat, atau jam skenario tidak sah.');s.clock=Math.max(0,Math.min(2879,s.clock));const v=validate(s,data);if(!v.ok)throw Error(v.errors.map(x=>x.message).join('\n'));return s;}
function placeFixed(s,data,id,track){const n=copy(s);if(!data.some(t=>t.id===id))return{ok:false,state:s,errors:[{code:'train',message:'Rangkaian tidak ditemukan.'}]};n.assignments[id]={track,enter:null,exit:null};const v=validate(n,data);return{...v,state:v.ok?n:s};}
function useSourceTimes(s,data,revision){const n=copy(s);n.timeOverrides={};n.params.inOffset=0;n.params.outOffset=n.timingVersion==='dao'?DAO_LEAD:0;for(const a of Object.values(n.assignments)){a.enter=null;a.exit=null;}n.scheduleRevision=revision;const v=validate(n,data);return{...v,state:v.ok?n:s};}
// Salin sekali saat versi dibuat. Beralih versi tidak pernah memotong jam lagi.
function createTimingVersion(s,data,version){if(!['jakk','dao'].includes(version))throw Error('Versi waktu tidak dikenal.');const n=copy(s),target=version==='dao'?DAO_LEAD:0,delta=target-(s.timingVersion==='dao'?DAO_LEAD:0);n.timingVersion=version;n.params.inOffset=0;n.params.outOffset=target;for(const w of Object.values(n.timeOverrides||{}))w.end-=delta;for(const a of Object.values(n.assignments)){if(a.exit!=null)a.exit-=delta;}const v=validate(n,data);return{...v,state:v.ok?n:s};}
function chooseLocoKind(s,data,trainId,kind){
 const error=message=>({ok:false,state:s,errors:[{code:'loco_assignment',message}]});
 if(!['langsir','dinas'].includes(kind)||!data.some(t=>t.id===trainId)||!s.assignments[trainId])return error('Pilih rangkaian yang sudah stabling.');
 const current=s.locoAssignments?.[trainId],unit=s.locos.find(l=>l.id===current?.locId),base=copy(s);base.locoAssignments=base.locoAssignments||{};
 if(unit?.kind===kind){delete base.locoAssignments[trainId];const v=validate(base,data);return{...v,state:v.ok?base:s,action:'detached'};}
 const period=kind==='langsir'?{start:null,end:null}:{start:current?.start??null,end:current?.end??null};let last;
 for(const loco of base.locos.filter(l=>l.kind===kind)){
  const n=copy(base);n.locoAssignments[trainId]={locId:loco.id,...period};const v=validate(n,data);if(v.ok)return{...v,state:n,action:'attached'};last=v;
 }
 if(kind==='dinas'){
  const n=copy(base);let i=1;while(n.locos.some(l=>l.id==='LD-'+i))i++;const locId='LD-'+i;n.locos.push({id:locId,name:'Lok dinas '+i,kind:'dinas',from:0,to:DAY});n.locoAssignments[trainId]={locId,...period};const v=validate(n,data);return{...v,state:v.ok?n:s,action:'attached'};
 }
 return last?{...last,state:s}:error('Lok langsir tidak tersedia.');
}
const api={DAY,SHUNTER_LEAD,DAO_LEAD,TRACKS,STABLING,capacity,copy,overlap,time,parse,defaultState,windowFor,locoWindow,build,validate,at,segments,available,loadPOA,importState,placeFixed,useSourceTimes,createTimingVersion,chooseLocoKind};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.DAOEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);

(()=>{'use strict';
const E=DAOEngine,$=s=>document.querySelector(s),KEY='dao-poa-structure-v2';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const id=()=>globalThis.crypto?.randomUUID?.()||'a'+Date.now()+Math.random().toString(36).slice(2),get=n=>DATA.find(t=>t.id===n);
const no=n=>n.replace(/^R/,''),pair=t=>`${no(t.arrNo)}/${no(t.depNo)}`,name=t=>t.arrName===t.depName?t.arrName:`${t.arrName} / ${t.depName}`;
const hh=n=>E.time(n).slice(0,5),isReserved=track=>['11','11A'].includes(track);
const locoInitial=l=>l.kind==='langsir'?'LL':'LD';
const palette={R15:['#a9bddb','#152332'],R79F:['#ffe6a3','#29200a'],R45:['#ef832e','#241706'],R75F:['#426c38','#fff'],R25:['#4776c8','#fff'],R125:['#8b8b8b','#fff'],R13:['#999999','#171717'],R71F:['#ffe000','#171717'],R55:['#234775','#fff'],R35:['#4975c4','#fff'],R19:['#fff000','#171717'],R17:['#3265e8','#fff'],R1:['#00df1b','#102509'],R127:['#7ca15b','#fff'],R41:['#efb67b','#2d2113'],R137:['#13a9d2','#101f26'],R49:['#ed5ae5','#25162a'],R61:['#ff352d','#fff'],R133:['#7837a5','#fff'],R53:['#ed5d9b','#24151d'],R3:['#21e81a','#152813'],R51:['#ee5c9b','#29121c'],R59:['#ff3931','#fff'],R33:['#66ecee','#213335'],R29:['#66ecee','#213335'],R57:['#203f70','#fff']};
let state,selected=null,dragging=null,history=[],future=[],message='',messageType='note',storageOK=true,previewContext=null,suppressClicksUntil=0,scheduleNotice=null;
let activeVersion='jakk',versions={},versionHistory={jakk:{history:[],future:[]},dao:{history:[],future:[]}};
const versionLabel=()=>activeVersion==='dao'?'Keluar DAO':'Jadwal JAKK';
const versionLead=version=>version==='dao'?E.DAO_LEAD:0;
const initial=(version='jakk')=>{const s=E.defaultState();s.name='Struktur stabling DAO';s.layout='poa-v2';s.timingVersion=version;s.params.outOffset=versionLead(version);s.scheduleRevision=SCHEDULE.revision;return E.loadPOA(s,DATA);};
try{
 const raw=localStorage.getItem(KEY);
 if(raw){
  const saved=JSON.parse(raw);
  if(saved.version===3&&saved.versions){versions.jakk=normalise(saved.versions.jakk,'jakk');versions.dao=normalise(saved.versions.dao,'dao');activeVersion=saved.activeVersion==='dao'?'dao':'jakk';message='Kedua versi dimuat. Versi aktif: '+versionLabel()+'.';}
  else{versions.jakk=normalise(saved.state,'jakk');const dao=E.createTimingVersion(versions.jakk,DATA,'dao');versions.dao=dao.ok?dao.state:initial('dao').state;message='Susunan lama dimuat sebagai versi JAKK. Versi DAO dibuat dengan jam akhir 25 menit lebih awal.'+(dao.ok?'':' Versi DAO memakai contoh POA karena susunan lama tidak cocok dengan pemangkasan waktu.');}
  messageType='ok';
 }else{versions.jakk=initial('jakk').state;versions.dao=initial('dao').state;message='Dua versi siap: JAKK sesuai PDF dan keluar DAO 25 menit lebih awal. R3 masih di daftar karena bertumpuk dengan R53/R54 pada contoh POA.';}
 state=versions[activeVersion];
}catch(e){versions={jakk:initial('jakk').state,dao:initial('dao').state};activeVersion='jakk';state=versions.jakk;message='Susunan tersimpan belum dapat dimuat: '+e.message;messageType='error';}
function normalise(raw,version){const s=E.copy(raw);scheduleNotice=null;if(!s||!s.params)throw Error('Format skenario tidak dikenali.');s.params.inOffset=0;s.params.outOffset=versionLead(version);s.timingVersion=version;s.layout='poa-v2';if(s.locoAssignments===undefined)s.locoAssignments={};if(s.timeOverrides===undefined)s.timeOverrides={};for(const a of Object.values(s.assignments||{})){a.enter=null;a.exit=null;}if(s.scheduleRevision!==SCHEDULE.revision){const r=E.useSourceTimes(s,DATA,SCHEDULE.revision);if(r.ok)return E.importState(r.state,DATA);}return E.importState(s,DATA);}
function renderVersion(){document.querySelectorAll('[data-version]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.version===activeVersion)));$('#app-subtitle').textContent='Versi '+versionLabel()+' · penempatan manual';$('#version-description').textContent=activeVersion==='dao'?'DAO: jam datang tetap; jam keluar = berangkat JAKK − 25 menit. Jam dan susunan versi ini bisa diedit sendiri.':'JAKK: jam datang R ganjil dan berangkat R genap sesuai PDF rekap JAKK. Jam dan susunan versi ini bisa diedit sendiri.';$('#sync-schedule').textContent=activeVersion==='dao'?'Samakan jam DAO':'Samakan jam JAKK';document.title='Stabling DAO · '+versionLabel();}
function switchVersion(version){if(version===activeVersion||!versions[version])return;versions[activeVersion]=state;versionHistory[activeVersion]={history,future};activeVersion=version;state=versions[version];({history,future}=versionHistory[version]);selected=null;dragging=null;previewContext=null;closeDialog();clearTargets();feedback('Versi '+versionLabel()+' aktif. Perubahan pada versi lainnya tersimpan terpisah.');save();render();}
document.querySelectorAll('[data-version]').forEach(b=>b.addEventListener('click',()=>switchVersion(b.dataset.version)));
function log(text,kind='ok'){state.log.unshift({text,kind,at:new Date().toLocaleString('id-ID')});state.log=state.log.slice(0,100);}
function save(){try{versions[activeVersion]=state;localStorage.setItem(KEY,JSON.stringify({version:3,activeVersion,versions}));storageOK=true;}catch{storageOK=false;}$('#storage-status').textContent=storageOK?'Kedua versi disimpan otomatis pada browser/perangkat ini.':'Penyimpanan perangkat tidak tersedia. Perubahan hanya bertahan selama halaman ini terbuka.';}
function feedback(text,type='ok'){message=text;messageType=type;$('#feedback').textContent=text;$('#feedback').className='feedback '+(type==='ok'?'':type);}
function fail(text){text=text.replace(/\b(?:LS|LL|LD)-[A-Za-z0-9_-]+\b/g,x=>{const l=state.locos.find(l=>l.id===x);return l?locoInitial(l):x;});feedback(text,'error');log(text,'error');save();if($('#dialog').open){const box=$('#dialog .error-box');box.textContent=text;box.hidden=false;}}
function commit(next,text){const v=E.validate(next,DATA);if(!v.ok){fail(v.errors.slice(0,4).map(x=>x.message).join('\n'));return false;}history.push(E.copy(state));if(history.length>50)history.shift();future=[];state=next;log(text);feedback(text);save();render();return true;}
function place(trainId,track){if(!get(trainId))return;const result=E.placeFixed(state,DATA,trainId,track);if(!result.ok){const available=E.available(state,DATA,trainId,null,null);fail(result.errors.slice(0,3).map(x=>x.message).join('\n')+(available.length?'\nJalur yang tersedia untuk jadwal ini: '+available.join(', ')+'.':''));renderSelection();return;}const prev=state.assignments[trainId]?.track,w=E.windowFor(get(trainId),result.state);selected=trainId;commit(result.state,`${pair(get(trainId))} ${name(get(trainId))} ${prev?'dipindahkan dari jalur '+prev:'dimasukkan'} ke jalur ${track}. Jam stabling ${E.time(w.start)}–${E.time(w.end)}.`);}
function remove(trainId){if(!state.assignments[trainId])return;const n=E.copy(state);delete n.assignments[trainId];if(n.locoAssignments)delete n.locoAssignments[trainId];const count=n.activities.filter(a=>a.trainId===trainId).length;n.activities=n.activities.filter(a=>a.trainId!==trainId);commit(n,`${pair(get(trainId))} dikeluarkan dari susunan dan kembali ke daftar.${count?' '+count+' kegiatan terkait ikut dilepas.':''}`);}
function render(){renderVersion();renderList();renderSelection();$('#chart').innerHTML=chartHTML();renderSources();$('#undo').disabled=!history.length;$('#redo').disabled=!future.length;$('#count').textContent=`${DATA.length-Object.keys(state.assignments).length} belum · ${Object.keys(state.assignments).length} terpasang`;feedback(message,messageType);}
function renderList(){
 const q=$('#search').value.toLowerCase(),remaining=DATA.filter(t=>!state.assignments[t.id]),visible=remaining.filter(t=>`${pair(t)} ${name(t)}`.toLowerCase().includes(q));
 $('#train-list').innerHTML=visible.map(t=>{const w=E.windowFor(t,state);return `<article class="train-card ${t.id===selected?'selected':''}" data-train="${t.id}" draggable="true" style="--color:${palette[t.id][0]}" title="${esc(pair(t)+' '+name(t))}; stabling ${E.time(w.start)}–${E.time(w.end)}"><button type="button" class="train-select" aria-label="Pilih ${esc(pair(t)+' '+name(t))}"><strong>${pair(t)}</strong><span>${esc(name(t))}</span></button><div class="card-times"><div>Jam stabling<strong>${hh(w.start)}–${hh(w.end)}${w.end>=1440?' +1':''}</strong></div><button type="button" data-action="edit-stabling" data-train-id="${t.id}">Ubah jam</button></div>${state.timeOverrides?.[t.id]?'<span class="time-edited">Jam skenario telah diubah</span>':''}</article>`;}).join('')||`<p class="empty">${remaining.length?'Tidak ada rangkaian yang sesuai pencarian.':'Semua rangkaian sudah masuk denah. Klik balok pada grafik untuk mengubahnya, atau keluarkan untuk mengembalikannya ke daftar.'}</p>`;
}
function renderSelection(){
 if(!selected){$('#selection').innerHTML='<p><strong>Pilih rangkaian untuk mulai.</strong><br>Masukkan/pindahkan dengan klik atau geser. Klik balok yang sudah stabling untuk menambahkan lok.</p>';return;}
 const t=get(selected),a=state.assignments[t.id],w=E.windowFor(t,state),attachment=state.locoAssignments?.[t.id],loco=state.locos.find(l=>l.id===attachment?.locId);
 const info=loco?`<span class="loco-description">${locoInitial(loco)} · ${loco.kind==='langsir'?'Lok Langsir':'Lok Dinas'} · ${E.time(E.locoWindow(t,state,attachment).start)}–${E.time(E.locoWindow(t,state,attachment).end)}</span>`:'';
 $('#selection').innerHTML=`<p><strong>${pair(t)} · ${esc(name(t))}</strong><br>${a?'Terpasang di jalur '+esc(a.track):'Belum ditempatkan'} · stabling ${E.time(w.start)}–${E.time(w.end)}${info}</p><div class="actions"><label for="target-track">Jalur</label><select id="target-track">${E.STABLING.map(track=>`<option value="${track}" ${a?.track===track?'selected':''}>${track}${track==='1'?' (muat 2)':''}</option>`).join('')}</select><button id="place-selected">${a?'Pindahkan':'Masukkan'}</button><button type="button" data-action="edit-stabling" data-train-id="${t.id}">Ubah jam</button>${a?`<button id="attach-selected">${loco?'Ubah lok':'Tambah lok'}</button>`:''}<button id="remove-selected" class="danger" ${a?'':'disabled'}>Keluarkan</button><button id="clear-selection" aria-label="Batalkan pilihan">✕</button></div>`;
}
function axis(bottom=false,forPrint=false){return `<div class="axis-row"><div class="axis-label">${bottom?'JAM':forPrint?'':'KAPASITAS'}</div><div class="axis ${bottom?'bottom':''}">${Array.from({length:25},(_,i)=>`<span class="tick ${i===0?'first':i===24?'last':''}" style="left:${i/24*100}%">${i}</span>`).join('')}</div></div>`;}
function piecesFor(track,scenario=state){const all=E.segments(scenario,DATA,track).filter(x=>x.kind==='rangkaian').sort((a,b)=>a.start-b.start||b.end-a.end),ends=[-1,-1];return all.map(x=>{let lane=0;if(track==='1'){lane=ends.findIndex(end=>end<=x.start);if(lane<0)lane=0;ends[lane]=x.end;}return{...x,lane};});}
function block(x,track){
 const t=get(x.owner),colors=palette[t.id],full=E.windowFor(t,state),overnight=full.end>=1440,startsBefore=overnight&&x.start===0,continues=overnight&&x.end===1440;
 const attachment=state.locoAssignments?.[t.id],loco=state.locos.find(l=>l.id===attachment?.locId);
 const locoText=loco?`${locoInitial(loco)} · ${loco.kind==='langsir'?'Lok Langsir':'Lok Dinas'}, ${E.time(E.locoWindow(t,state,attachment).start)}–${E.time(E.locoWindow(t,state,attachment).end)}`:'';
 return `<button data-lane="${x.lane}" class="bar ${selected===t.id?'selected':''} ${loco?'has-loco':''}" draggable="true" data-train="${t.id}" style="left:${x.start/14.4}%;width:${(x.end-x.start)/14.4}%;top:${track==='1'?(x.lane?69:20):22}px;--color:${colors[0]};--text:${colors[1]}" title="${esc(pair(t)+' '+name(t))} · ${E.time(full.start)}–${E.time(full.end)} · jalur ${track}.${loco?' '+esc(locoText)+'.':''} Klik untuk atur lok; geser untuk pindah jalur." aria-label="${esc(pair(t)+' '+name(t))} di jalur ${track}${startsBefore?' dari hari sebelumnya':continues?' berlanjut esok hari':''}${loco?' · '+locoInitial(loco):''}">${loco?`<span class="attached-loco ${loco.kind==='langsir'?'shunter':''}" title="${esc(locoText)}">${locoInitial(loco)}</span>`:''}<span class="minute start">${startsBefore?'←':String(Math.floor(x.start)%60).padStart(2,'0')}</span><span class="bar-label">${startsBefore?'← ':''}${pair(t)}${continues?' →':''}</span><span class="bar-name">${esc(name(t).toUpperCase())}</span><span class="minute end">${continues?'→':String(Math.floor(x.end)%60).padStart(2,'0')}</span></button>`;
}
function activityBlocks(track){return E.segments(state,DATA,track).filter(x=>['manuver','parkir'].includes(x.kind)).map(x=>`<button class="bar activity" style="left:${x.start/14.4}%;width:${(x.end-x.start)/14.4}%" data-activity="${esc(x.owner)}" title="${esc(x.label)} ${E.time(x.start)}–${E.time(x.end)}">${esc(x.label)}</button>`).join('');}
function chartHTML(forPrint=false){return `<div class="poa"><div class="chart-title">STABLING KERETA DAO · ${activeVersion==='dao'?'KELUAR DAO':'JADWAL JAKK'}</div><div class="chart-band"><span>JALUR</span><span>JAM</span></div>${axis(false,forPrint)}${E.TRACKS.map(track=>`<div class="poa-row ${track==='1'?'double':''} ${isReserved(track)?'reserved':''} ${selected&&state.assignments[selected]?.track===track?'selected-row':''}" data-drop="${track}"><div class="track-label">${track}${isReserved(track)?'<small>CADANGAN</small>':forPrint?'':`<small>${track==='1'?'2 RANGKAIAN':'1 RANGKAIAN'}</small>`}</div><div class="track-canvas" data-track="${track}">${isReserved(track)?'<span class="reserved-text">JALUR CADANGAN — TIDAK UNTUK STABLING</span>':piecesFor(track).map(x=>block(x,track)).join('')}${activityBlocks(track)}</div></div>`).join('')}${axis(true,forPrint)}</div>`;}
function renderSources(){$('#source-table').innerHTML=`<p class="small">Acuan jam: ${esc(SCHEDULE.file)}, halaman 4 (R ganjil datang JAKK) dan 3 (R genap berangkat JAKK), seluruh 52 perjalanan R. Nama dan pasangan mengikuti Excel pola stabling. R57 datang 06:20 sesuai PDF. Versi DAO mengurangi jam berangkat JAKK sebesar 25 menit; jam datang tetap.</p><table><thead><tr><th>Nomor datang</th><th>Nama datang</th><th>Datang JAKK</th><th>Nomor berangkat</th><th>Nama berangkat</th><th>Berangkat JAKK</th><th>Keluar DAO (−25 menit)</th></tr></thead><tbody>${DATA.map(t=>`<tr><td>${t.arrNo}</td><td>${esc(t.arrName)}</td><td>${hh(t.arr)}</td><td>${t.depNo}</td><td>${esc(t.depName)}</td><td>${hh(t.dep)}${t.dep<=t.arr?' H+1':''}</td><td>${E.time(t.dep+(t.dep<=t.arr?1440:0)-E.DAO_LEAD)}</td></tr>`).join('')}</tbody></table>`;$('#history-log').innerHTML=state.log.slice(0,30).map(x=>`<div class="log ${x.kind==='error'?'error':''}">${esc(x.at||'')} — ${esc(x.text)}</div>`).join('')||'<p class="small">Belum ada perubahan.</p>';}

function openDialog(title,desc,body){$('#dialog').innerHTML=`<div class="dialog-head"><div><h2>${esc(title)}</h2><p>${esc(desc)}</p></div><button data-action="close" aria-label="Tutup dialog">✕</button></div><div class="error-box" hidden role="alert"></div>${body}`;if(!$('#dialog').open)$('#dialog').showModal();}
function closeDialog(){$('#dialog').close();}
function foot(label='Simpan'){return `<div class="dialog-foot"><button type="button" data-action="close">Batal</button><button type="submit">${label}</button></div>`;}
function options(values,current){return values.map(x=>`<option value="${esc(x.value)}" ${x.value===current?'selected':''}>${esc(x.text)}</option>`).join('');}
function timeInput(label,key,n){return `<label>${label}<input type="time" name="${key}" value="${hh(n)}" required><select name="${key}Day" aria-label="Hari ${label}"><option value="0" ${n<1440?'selected':''}>Hari H</option><option value="1" ${n>=1440?'selected':''}>H+1</option></select></label>`;}
function openManeuver(activityId){const old=state.activities.find(a=>a.id===activityId),available=DATA.filter(t=>state.assignments[t.id]),tid=old?.trainId||selected&&state.assignments[selected]&&selected||available[0]?.id||'',w=tid?E.windowFor(get(tid),state):{start:0,end:1440},start=old?.start??w.start,end=old?.end??Math.min(w.start+10,w.end);openDialog(old?'Ubah kegiatan':'Manuver atau parkir lok','Jam pada form ini hanya untuk kegiatan lok. Jam stabling rangkaian diubah lewat Ubah jam.',`<form data-form="activity" data-id="${old?.id||''}"><div class="form-grid"><label>Jenis<select name="type">${options([{value:'manuver',text:'Manuver lok ke belakang'},{value:'parkir',text:'Parkir lok lepas'}],old?.type||'manuver')}</select></label><label>Rangkaian<select name="trainId"><option value="">— Pilih (tidak perlu untuk parkir) —</option>${options(available.map(t=>({value:t.id,text:pair(t)+' '+name(t)})),tid)}</select></label><label>Lokomotif<select name="locId">${options(state.locos.map(l=>({value:l.id,text:l.id+' · '+l.name})),old?.locId||'LS-1')}</select></label><label>Jalur kosong<select name="track">${options(E.TRACKS.map(t=>({value:t,text:'Jalur '+t+(isReserved(t)?' (cadangan)':'')})),old?.track||'11')}</select></label>${timeInput('Mulai','start',start)}${timeInput('Selesai','end',end)}<label class="wide-field">Rute<select name="routeId"><option value="">Belum dimodelkan</option>${options(state.routes.map(r=>({value:r.id,text:r.name})),old?.routeId||'')}</select></label></div><p class="hint">Jalur manuver/parkir harus kosong sepanjang kegiatan. Lok yang sama tidak boleh bertugas bersamaan. Jalur 11/11A tetap tidak menerima stabling rangkaian.</p>${foot('Simpan kegiatan')}</form>`);}
function openStablingTimes(trainId){
 const t=get(trainId);if(!t)return;selected=trainId;renderSelection();const w=E.windowFor(t,state);
 openDialog('Ubah jam stabling '+pair(t),versionLabel()+' · '+name(t)+(state.assignments[trainId]?' · Jalur '+state.assignments[trainId].track:' · Belum masuk denah'),`<form data-form="stabling-time" data-id="${trainId}"><div class="form-grid"><label>Mulai stabling<input type="time" name="start" required value="${hh(w.start)}"></label><label>Selesai stabling<input type="time" name="end" required value="${hh(w.end)}"></label></div><p id="stabling-time-summary" class="time-summary"></p><p class="hint">Jika jam selesai lebih awal dari jam mulai, jadwal diteruskan ke hari berikutnya. Perubahan diperiksa terhadap kapasitas jalur, lok, dan kegiatan terkait.<br>Acuan PDF R JAKK: ${hh(t.arr)}–${hh(t.dep)}${t.dep<=t.arr?' H+1':''}. ${activeVersion==='dao'?'Acuan keluar DAO: '+E.time(t.dep+(t.dep<=t.arr?1440:0)-E.DAO_LEAD)+'. ':''}Perubahan jam hanya berlaku pada versi ${versionLabel()}.</p><div class="dialog-foot">${state.timeOverrides?.[trainId]?`<button type="button" data-action="reset-stabling" data-train-id="${trainId}" style="margin-right:auto">Kembalikan jam acuan</button>`:''}<button type="button" data-action="close">Batal</button><button type="submit">Simpan jam stabling</button></div></form>`);updateTimeSummary();
}
function timeFormWindow(form){const d=new FormData(form),start=E.parse(d.get('start'));let end=E.parse(d.get('end'));if(end<=start)end+=1440;return{start,end};}
function updateTimeSummary(){const f=$('[data-form="stabling-time"]');if(!f)return;const w=timeFormWindow(f);$('#stabling-time-summary').textContent=Number.isFinite(w.start)&&Number.isFinite(w.end)?`Stabling ${E.time(w.start)}–${E.time(w.end)} · ${Math.floor((w.end-w.start)/60)} jam ${(w.end-w.start)%60} menit.`:'Isi kedua jam stabling.';}
document.addEventListener('input',e=>{if(e.target.closest('[data-form="stabling-time"]'))updateTimeSummary();});
document.addEventListener('submit',e=>{const f=e.target;if(f.dataset.form!=='stabling-time')return;e.preventDefault();const n=E.copy(state),w=timeFormWindow(f);n.timeOverrides=n.timeOverrides||{};n.timeOverrides[f.dataset.id]=w;if(commit(n,`Jam stabling ${pair(get(f.dataset.id))} diubah menjadi ${E.time(w.start)}–${E.time(w.end)}.`))closeDialog();});
function openAttachedLoco(trainId){
 const t=get(trainId);if(!t||!state.assignments[trainId])return;
 const current=state.locoAssignments?.[trainId],loco=state.locos.find(l=>l.id===current?.locId);
 const shunter=state.locos.find(l=>l.kind==='langsir'),ll=E.locoWindow(t,state,{locId:shunter.id,start:null,end:null});
 openDialog('Pilih lok',`${pair(t)} ${name(t)} · Jalur ${state.assignments[trainId].track}`,`<div class="loco-choices"><button type="button" class="loco-choice" data-action="choose-loco-kind" data-kind="langsir" data-train-id="${trainId}" aria-pressed="${loco?.kind==='langsir'}"><strong>LL</strong><span>Lok Langsir</span></button><button type="button" class="loco-choice" data-action="choose-loco-kind" data-kind="dinas" data-train-id="${trainId}" aria-pressed="${loco?.kind==='dinas'}"><strong>LD</strong><span>Lok Dinas</span></button></div><p class="hint">LL: ${E.time(ll.start)}–${E.time(ll.end)}, mulai ${E.SHUNTER_LEAD} menit sebelum jam akhir versi ${versionLabel()} (atau sejak masuk jika stabling lebih singkat).<br>Klik pilihan yang aktif untuk melepas lok.</p>`);
}

function syncFullscreen(){const on=!!document.fullscreenElement||document.body.classList.contains('fullscreen-fallback');$('#fullscreen').textContent=on?'Keluar layar penuh':'Layar penuh';$('#fullscreen').setAttribute('aria-pressed',String(on));}
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement){await document.exitFullscreen();}else if(document.body.classList.contains('fullscreen-fallback')){document.body.classList.remove('fullscreen-fallback');}else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();}else{document.body.classList.add('fullscreen-fallback');feedback('Mode fokus aktif. Gunakan F11 untuk menyembunyikan bilah browser bila diperlukan.');}}catch{document.body.classList.toggle('fullscreen-fallback');feedback('Mode fokus aktif. Gunakan F11 bila ingin menyembunyikan bilah browser.');}syncFullscreen();});
document.addEventListener('fullscreenchange',syncFullscreen);
$('#search').addEventListener('input',renderList);
document.addEventListener('click',e=>{
 if(performance.now()<suppressClicksUntil)return;
 const timeButton=e.target.closest('[data-action="edit-stabling"]');if(timeButton){openStablingTimes(timeButton.dataset.trainId);return;}
 const resetTime=e.target.closest('[data-action="reset-stabling"]');if(resetTime){const n=E.copy(state);if(n.timeOverrides)delete n.timeOverrides[resetTime.dataset.trainId];if(commit(n,'Jam stabling dikembalikan ke acuan versi aktif.'))closeDialog();return;}
 const train=e.target.closest('[data-train]');if(train){selected=train.dataset.train;renderSelection();renderList();document.querySelectorAll('.bar').forEach(b=>b.classList.toggle('selected',b.dataset.train===selected));if(train.classList.contains('bar')&&state.assignments[selected])openAttachedLoco(selected);return;}
 const a=e.target.closest('button'),action=a?.dataset.action;
 if(action==='close'){closeDialog();return;}
 if(action==='choose-loco-kind'){const trainId=a.dataset.trainId,result=E.chooseLocoKind(state,DATA,trainId,a.dataset.kind);if(!result.ok){fail(result.errors.slice(0,3).map(x=>x.message).join('\n'));return;}const label=a.dataset.kind==='langsir'?'LL':'LD',r=result.action==='attached'?E.locoWindow(get(trainId),result.state,result.state.locoAssignments[trainId]):null;if(commit(result.state,`${label} ${result.action==='detached'?'dilepas dari':'dipasang pada'} rangkaian ${pair(get(trainId))}${r?' · tugas '+E.time(r.start)+'–'+E.time(r.end):''}.`))closeDialog();return;}
 if(action==='detach-loco'){const n=E.copy(state);delete n.locoAssignments[a.dataset.trainId];if(commit(n,'Lok dilepas dari rangkaian '+pair(get(a.dataset.trainId))+'.'))closeDialog();return;}
 if(action==='add-loco'){const n=E.copy(state);let i=1;while(n.locos.some(l=>l.id==='LD-'+i))i++;n.locos.push({id:'LD-'+i,name:'Lok dinas '+i,kind:'dinas',from:0,to:1440});commit(n,`Lok dinas LD-${i} ditambahkan.`);return;}
 if(action==='new-maneuver'||action==='edit-maneuver'){openManeuver(a.dataset.id);return;}
 if(action==='remove-maneuver'){const n=E.copy(state);n.activities=n.activities.filter(x=>x.id!==a.dataset.id);commit(n,'Kegiatan dilepas dari susunan.');return;}
 if(action==='routes'){openDialog('Konfigurasi rute','Opsional; gunakan ruas rute yang sudah kamu tetapkan.',`<form data-form="routes"><label class="hint">Satu baris: ID ; nama rute ; ruas1, ruas2<textarea name="routes" rows="6" style="width:100%">${esc(state.routes.map(r=>`${r.id} ; ${r.name} ; ${r.segments.join(', ')}`).join('\n'))}</textarea></label><p class="hint">Ruas identik tidak dapat digunakan dua kegiatan bersamaan. Pemeriksaan ini belum membuktikan geometri atau posisi wesel.</p>${foot()}</form>`);return;}
 const lane=e.target.closest('.poa-row');if(lane&&selected&&!e.target.closest('.bar'))place(selected,lane.dataset.drop);
 const activity=e.target.closest('[data-activity]');if(activity)openManeuver(activity.dataset.activity);
 if(a?.id==='place-selected'&&selected)place(selected,$('#target-track').value);
 if(a?.id==='remove-selected'&&selected)remove(selected);
 if(a?.id==='attach-selected'&&selected)openAttachedLoco(selected);
 if(a?.id==='clear-selection'){selected=null;render();}
});
document.addEventListener('submit',e=>{const form=e.target;if(!form.dataset.form)return;e.preventDefault();const f=new FormData(form),n=E.copy(state);try{if(form.dataset.form==='activity'){const type=f.get('type'),a={id:form.dataset.id||id(),type,trainId:type==='parkir'?'':f.get('trainId'),locId:f.get('locId'),track:f.get('track'),start:E.parse(f.get('start'))+1440*Number(f.get('startDay')),end:E.parse(f.get('end'))+1440*Number(f.get('endDay')),routeId:f.get('routeId')||''};n.activities=n.activities.filter(x=>x.id!==a.id);n.activities.push(a);if(commit(n,'Kegiatan lok disimpan.'))closeDialog();}if(form.dataset.form==='routes'){n.routes=f.get('routes').split('\n').filter(x=>x.trim()).map(line=>{const p=line.split(';').map(x=>x.trim());if(p.length!==3||!p[0]||!p[1]||!p[2])throw Error('Format: ID ; nama rute ; ruas1, ruas2');return{id:p[0],name:p[1],segments:[...new Set(p[2].split(',').map(x=>x.trim()).filter(Boolean))]};});if(commit(n,'Konfigurasi rute disimpan.'))closeDialog();}}catch(err){fail(err.message);}});
$('#empty-plan').addEventListener('click',()=>{const n=E.copy(state);n.assignments={};n.activities=[];n.locoAssignments={};selected=null;commit(n,'Susunan dikosongkan. Semua rangkaian kembali ke daftar. Bisa diurungkan.');});
$('#load-poa').addEventListener('click',()=>{const r=E.loadPOA(state,DATA);if(commit(r.state,`Contoh POA dimuat: ${Object.keys(r.state.assignments).length}/26 rangkaian.`)&&r.rejected.length)feedback('Contoh POA: '+r.rejected.map(x=>x.errors.map(y=>y.message).join(' ')).join('\n')+'\nRangkaian yang ditolak tetap berada di daftar. Pilih jalur lain.','note');});
$('#sync-schedule').addEventListener('click',()=>{const r=E.useSourceTimes(state,DATA,SCHEDULE.revision);if(!r.ok){fail('Jam acuan belum diterapkan karena bentrok.\n'+r.errors.slice(0,4).map(x=>x.message).join('\n'));return;}commit(r.state,'Semua jam versi '+versionLabel()+' dikembalikan ke acuan'+(activeVersion==='dao'?' (keluar DAO 25 menit sebelum JAKK).':' PDF R JAKK.'));});
$('#undo').addEventListener('click',()=>{if(!history.length)return;future.push(E.copy(state));state=history.pop();feedback('Perubahan terakhir diurungkan.');save();render();});
$('#redo').addEventListener('click',()=>{if(!future.length)return;history.push(E.copy(state));state=future.pop();feedback('Perubahan diterapkan kembali.');save();render();});
function preparePrint(){$('#print-sheet').innerHTML=chartHTML(true)+`<p class="small">Versi ${versionLabel()} · ${activeVersion==='dao'?'Jam keluar DAO = berangkat JAKK − 25 menit':'Jam datang / berangkat JAKK sesuai PDF'}; jam skenario dapat diedit. ${Object.keys(state.assignments).length}/26 terpasang.</p>`;}
$('#print').addEventListener('click',()=>{preparePrint();window.print();});
window.addEventListener('beforeprint',preparePrint);

function clearTargets(){document.querySelectorAll('.target-ok,.target-no,.pool-target').forEach(x=>x.classList.remove('target-ok','target-no','pool-target'));document.querySelectorAll('.drop-preview').forEach(x=>x.remove());$('#drag-preview-info').hidden=true;}
function previewAt(target){
 const destination=target.dataset.drop,key=dragging+'|'+destination;
 if(previewContext?.key===key)return previewContext.result;
 clearTargets();
 const result=destination==='pool'?{ok:true}:E.placeFixed(state,DATA,dragging,destination),t=get(dragging),w=E.windowFor(t,state),caption=$('#drag-preview-info');
 previewContext={key,result};target.classList.add(destination==='pool'?'pool-target':result.ok?'target-ok':'target-no');
 caption.textContent=destination==='pool'?`${pair(t)} ${name(t)} → keluarkan dari susunan`:`${result.ok?'Pratinjau':'Tidak bisa ditempatkan'} · ${pair(t)} ${name(t)} · Jalur ${destination}\nJam stabling ${E.time(w.start)}–${E.time(w.end)}${result.ok?'': ' · '+result.errors[0].message}`;
 caption.classList.toggle('invalid',!result.ok);caption.hidden=false;
 if(destination!=='pool'){
  const candidate=result.ok?result.state:E.copy(state);if(!result.ok)candidate.assignments[dragging]={track:destination,enter:null,exit:null};
  const canvas=target.querySelector('.track-canvas');
  for(const piece of piecesFor(destination,candidate).filter(x=>x.owner===dragging)){
   const ghost=document.createElement('div');ghost.className='drop-preview'+(result.ok?'':' invalid');
   ghost.style.left=piece.start/14.4+'%';ghost.style.width=(piece.end-piece.start)/14.4+'%';ghost.style.top=(destination==='1'?(piece.lane?69:20):isReserved(destination)?8:22)+'px';ghost.style.height=(isReserved(destination)?30:34)+'px';
   ghost.setAttribute('aria-label',`Bayangan ${pair(t)} jalur ${destination}, jam ${E.time(piece.start)}–${E.time(piece.end)}`);
   const label=document.createElement('span');label.className='preview-text';label.textContent=pair(t)+' · '+hh(piece.start)+'–'+(piece.end===1440?'24:00':hh(piece.end));ghost.append(label);canvas.append(ghost);
  }
 }
 return result;
}
function finishDrag(){dragging=null;previewContext=null;clearTargets();document.querySelectorAll('.drag-source').forEach(x=>x.classList.remove('drag-source'));suppressClicksUntil=performance.now()+180;renderSelection();}
 document.addEventListener('dragstart',e=>{const t=e.target.closest('[data-train]');if(!t)return;dragging=t.dataset.train;selected=dragging;previewContext=null;t.classList.add('drag-source');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',dragging);});
 document.addEventListener('dragover',e=>{const target=e.target.closest('[data-drop]');if(!target||!dragging){if(dragging){clearTargets();previewContext=null;}return;}e.preventDefault();const result=previewAt(target);e.dataTransfer.dropEffect=result.ok?'move':'none';});
 document.addEventListener('dragleave',e=>{const target=e.target.closest('[data-drop]');if(target&&!target.contains(e.relatedTarget)){clearTargets();previewContext=null;}});
 document.addEventListener('drop',e=>{const target=e.target.closest('[data-drop]');if(!target)return;e.preventDefault();const trainId=e.dataTransfer.getData('text/plain')||dragging;clearTargets();if(get(trainId)){if(target.dataset.drop==='pool')remove(trainId);else place(trainId,target.dataset.drop);}finishDrag();});
 document.addEventListener('dragend',()=>{if(previewContext&&!previewContext.result.ok)feedback(previewContext.result.errors[0].message,'error');finishDrag();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('fullscreen-fallback')){document.body.classList.remove('fullscreen-fallback');syncFullscreen();}if(e.target.closest('input,select,textarea,dialog'))return;if(e.key==='Delete'&&selected){e.preventDefault();remove(selected);}if(e.key==='Escape'){selected=null;render();}});
render();save();
})();
