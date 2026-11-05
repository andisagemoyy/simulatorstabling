// Pasangan/nama dari Excel stabling; jam R JAKK sesuai PDF pengguna. Tanpa layanan daring.
const SCHEDULE = {"revision":"jakk-r-pdf-2026-11-04-v1","file":"Rekap_JAKK_L_R_GAPEKA_2026 (1).pdf","arrivalPage":4,"departurePage":3,"arrivals":{"R53":19,"R25":61,"R127":93,"R71F":179,"R49":227,"R15":237,"R19":256,"R3":287,"R41":314,"R57":380,"R125":399,"R61":416,"R79F":575,"R51":587,"R17":683,"R133":848,"R75F":861,"R29":923,"R137":940,"R13":957,"R55":975,"R1":1000,"R59":1108,"R35":1145,"R45":1283,"R33":1342},"departures":{"R54":296,"R130":307,"R26":349,"R132":365,"R64F":385,"R32":400,"R20":413,"R138":425,"R2":444,"R16":473,"R56":501,"R46":521,"R126":552,"R60":613,"R18":967,"R76F":993,"R52":1007,"R58":1090,"R50":1127,"R4":1170,"R14":1208,"R42":1238,"R34":1293,"R62":1331,"R36":1382,"R80F":1415},"locoArrivalPage":2,"locoArrivals":[{"number":"L54-1","name":"Brawijaya","arrival":239},{"number":"L130-1","name":"Papandayan","arrival":254},{"number":"L26-1","name":"Muria","arrival":299},{"number":"L132-1","name":"Parahyangan","arrival":309},{"number":"L64F-1","name":"Purwojaya","arrival":324},{"number":"L32-1","name":"Taksaka","arrival":329},{"number":"L20-1","name":"Muria","arrival":348},{"number":"L138-1","name":"Parahyangan","arrival":365},{"number":"L16-1","name":"Manahan","arrival":400},{"number":"L2-1","name":"Anggrek","arrival":400},{"number":"L56-1","name":"Anggrek","arrival":424},{"number":"L46-1","name":"Pandalungan","arrival":465},{"number":"L126-1","name":"Batavia","arrival":488},{"number":"L60-1","name":"Manahan","arrival":548},{"number":"L18-1","name":"Muria","arrival":914},{"number":"L52-1","name":"Brawijaya","arrival":944},{"number":"L76F-1","name":"Borobudur","arrival":944},{"number":"L58-1","name":"Anggrek","arrival":1016},{"number":"L50-1","name":"Gajayana","arrival":1070},{"number":"L4-1","name":"Anggrek","arrival":1098},{"number":"L14-1","name":"Manahan","arrival":1137},{"number":"L42-1","name":"Pandalungan","arrival":1179},{"number":"L34-1","name":"Taksaka","arrival":1219},{"number":"L62-1","name":"Manahan","arrival":1278},{"number":"L36-1","name":"Anggrek","arrival":1331},{"number":"L80F-1","name":"Gajayana Fakultatif","arrival":1361}]};
const DATA = [{"id":"R53","arrNo":"R53","depNo":"R54","arrName":"Brawijaya","depName":"Brawijaya","arr":19,"dep":296,"poa":"8","rowIn":3,"rowOut":4,"sourceArrName":"Dinas Rangkaian Brawijaya","sourceDepName":"Dinas Rangkaian Brawijaya","gambirDep":8,"gambirArr":307,"excelArr":19,"excelDep":296},{"id":"R25","arrNo":"R25","depNo":"R26","arrName":"Muria","depName":"Muria","arr":61,"dep":349,"poa":"3","rowIn":5,"rowOut":6,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":50,"gambirArr":361,"excelArr":61,"excelDep":349},{"id":"R127","arrNo":"R127","depNo":"R130","arrName":"Pangandaran","depName":"Papandayan","arr":93,"dep":307,"poa":"6","rowIn":7,"rowOut":8,"sourceArrName":"Dinas Rangkaian Pangandaran","sourceDepName":"Dinas Rangakian Papandayan","gambirDep":82,"gambirArr":318,"excelArr":93,"excelDep":307},{"id":"R71F","arrNo":"R71F","depNo":"R64F","arrName":"Purwojaya","depName":"Purwojaya","arr":179,"dep":385,"poa":"4","rowIn":9,"rowOut":10,"sourceArrName":"Dinas Rangkaian Purwojaya","sourceDepName":"Dinas Rangkaian Purwojaya","gambirDep":168,"gambirArr":396,"excelArr":179,"excelDep":385},{"id":"R49","arrNo":"R49","depNo":"R132","arrName":"Gajayana","depName":"Parahyangan","arr":227,"dep":365,"poa":"7","rowIn":11,"rowOut":12,"sourceArrName":"Dinas Rangkaian Gajayana","sourceDepName":"Dinas Rangkaian Parahyangan","gambirDep":216,"gambirArr":377,"excelArr":227,"excelDep":365},{"id":"R15","arrNo":"R15","depNo":"R16","arrName":"A Dwipangga","depName":"A Dwipangga","arr":237,"dep":473,"poa":"1","rowIn":13,"rowOut":14,"sourceArrName":"Dinas Rangkaian A Dwipangga","sourceDepName":"Dinas Rangkaian A Dwipangga","gambirDep":226,"gambirArr":486,"excelArr":237,"excelDep":473},{"id":"R19","arrNo":"R19","depNo":"R20","arrName":"Muria","depName":"Muria","arr":256,"dep":413,"poa":"5","rowIn":15,"rowOut":16,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":245,"gambirArr":427,"excelArr":256,"excelDep":413},{"id":"R3","arrNo":"R3","depNo":"R2","arrName":"Anggrek","depName":"Anggrek","arr":287,"dep":444,"poa":"8","rowIn":17,"rowOut":18,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":276,"gambirArr":457,"excelArr":287,"excelDep":444},{"id":"R41","arrNo":"R41","depNo":"R138","arrName":"Pandalungan","depName":"Parahyangan","arr":314,"dep":425,"poa":"6","rowIn":19,"rowOut":20,"sourceArrName":"Dinas Rangkaian Pandalungan","sourceDepName":"Dinas Rangkaian Parahyangan","gambirDep":301,"gambirArr":439,"excelArr":314,"excelDep":425},{"id":"R57","arrNo":"R57","depNo":"R56","arrName":"Anggrek","depName":"Anggrek","arr":380,"dep":501,"poa":"10","rowIn":21,"rowOut":22,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":366,"gambirArr":513,"excelArr":381,"excelDep":501},{"id":"R125","arrNo":"R125","depNo":"R126","arrName":"Batavia","depName":"Batavia","arr":399,"dep":552,"poa":"3","rowIn":23,"rowOut":24,"sourceArrName":"Dinas Rangkaian Batavia","sourceDepName":"Dinas Rangkaian Batavia","gambirDep":388,"gambirArr":564,"excelArr":399,"excelDep":552},{"id":"R61","arrNo":"R61","depNo":"R60","arrName":"Manahan","depName":"Manahan","arr":416,"dep":613,"poa":"7","rowIn":27,"rowOut":28,"sourceArrName":"Dinas Rangkaian Manahan","sourceDepName":"Dinas Rangkaian Manahan","gambirDep":402,"gambirArr":624,"excelArr":416,"excelDep":613},{"id":"R79F","arrNo":"R79F","depNo":"R80F","arrName":"Gajayana Fakultatif","depName":"Gajayana Fakultatif","arr":575,"dep":1415,"poa":"1","rowIn":29,"rowOut":30,"sourceArrName":"Dinas Rangkaian Gajayana Fakultatif","sourceDepName":"Dinas Rangkaian Gajayana Fakultatif","gambirDep":562,"gambirArr":1427,"excelArr":575,"excelDep":1415},{"id":"R51","arrNo":"R51","depNo":"R52","arrName":"Brawijaya","depName":"Brawijaya","arr":587,"dep":1007,"poa":"8","rowIn":31,"rowOut":32,"sourceArrName":"Dinas Rangkaian Brawijaya","sourceDepName":"Dinas Rangkaian Brawijaya","gambirDep":573,"gambirArr":1019,"excelArr":587,"excelDep":1007},{"id":"R17","arrNo":"R17","depNo":"R18","arrName":"Muria","depName":"Muria","arr":683,"dep":967,"poa":"5","rowIn":33,"rowOut":34,"sourceArrName":"Dinas Rangkaian Muria","sourceDepName":"Dinas Rangkaian Muria","gambirDep":671,"gambirArr":980,"excelArr":683,"excelDep":967},{"id":"R133","arrNo":"R133","depNo":"R50","arrName":"Parahyangan","depName":"Gajayana","arr":848,"dep":1127,"poa":"7","rowIn":35,"rowOut":36,"sourceArrName":"Dinas Rangkaian Parahyangan","sourceDepName":"Dinas Rangkaian Gajayana","gambirDep":833,"gambirArr":1140,"excelArr":848,"excelDep":1127},{"id":"R75F","arrNo":"R75F","depNo":"R76F","arrName":"Borobudur","depName":"Borobudur","arr":861,"dep":993,"poa":"2","rowIn":37,"rowOut":38,"sourceArrName":"Dinas Rangkaian Borobudur","sourceDepName":"Dinas Rangkaian Borobudur","gambirDep":849,"gambirArr":1008,"excelArr":861,"excelDep":993},{"id":"R29","arrNo":"R29","depNo":"R34","arrName":"Taksaka","depName":"Taksaka","arr":923,"dep":1293,"poa":"9","rowIn":39,"rowOut":40,"sourceArrName":"Dinas Rangkaian Taksaka","sourceDepName":"Dinas Rangkaian Taksaka","gambirDep":910,"gambirArr":1305,"excelArr":923,"excelDep":1293},{"id":"R137","arrNo":"R137","depNo":"R42","arrName":"Parahyangan","depName":"Pandalungan","arr":940,"dep":1238,"poa":"6","rowIn":41,"rowOut":42,"sourceArrName":"Dinas Rangkaian Parahyangan","sourceDepName":"Dinas Rangkaian Pandalungan","gambirDep":928,"gambirArr":1250,"excelArr":940,"excelDep":1238},{"id":"R13","arrNo":"R13","depNo":"R14","arrName":"A Lawu","depName":"A Lawu","arr":957,"dep":1208,"poa":"3","rowIn":43,"rowOut":44,"sourceArrName":"Dinas Rangkaian A Lawu","sourceDepName":"Dinas Rangkaian A Lawu","gambirDep":945,"gambirArr":1221,"excelArr":957,"excelDep":1208},{"id":"R55","arrNo":"R55","depNo":"R58","arrName":"Anggrek","depName":"Anggrek","arr":975,"dep":1090,"poa":"4","rowIn":45,"rowOut":46,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":962,"gambirArr":1103,"excelArr":975,"excelDep":1090},{"id":"R1","arrNo":"R1","depNo":"R4","arrName":"Anggrek","depName":"Anggrek","arr":1000,"dep":1170,"poa":"5","rowIn":47,"rowOut":48,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":987,"gambirArr":1184,"excelArr":1000,"excelDep":1170},{"id":"R59","arrNo":"R59","depNo":"R62","arrName":"Manahan","depName":"Manahan","arr":1108,"dep":1331,"poa":"8","rowIn":49,"rowOut":50,"sourceArrName":"Dinas Rangkaian Manahan","sourceDepName":"Dinas Rangkaian Manahan","gambirDep":1097,"gambirArr":1343,"excelArr":1108,"excelDep":1331},{"id":"R35","arrNo":"R35","depNo":"R36","arrName":"Anggrek","depName":"Anggrek","arr":1145,"dep":1382,"poa":"4","rowIn":51,"rowOut":52,"sourceArrName":"Dinas Rangkaian Anggrek","sourceDepName":"Dinas Rangkaian Anggrek","gambirDep":1132,"gambirArr":1394,"excelArr":1145,"excelDep":1382},{"id":"R45","arrNo":"R45","depNo":"R46","arrName":"Pandalungan","depName":"Pandalungan","arr":1283,"dep":521,"poa":"2","rowIn":53,"rowOut":54,"sourceArrName":"Dinas Rangkaian Pandalungan","sourceDepName":"Dinas Rangkaian Pandalungan","gambirDep":1271,"gambirArr":534,"excelArr":1283,"excelDep":521},{"id":"R33","arrNo":"R33","depNo":"R32","arrName":"Taksaka","depName":"Taksaka","arr":1342,"dep":400,"poa":"9","rowIn":25,"rowOut":26,"sourceArrName":"Dinas Rangkaian Taksaka","sourceDepName":"Dinas Rangkaian Taksaka","gambirDep":1330,"gambirArr":412,"excelArr":1342,"excelDep":400}];
(function(root){
'use strict';
const DAY=1440, SHUNTER_LEAD=30, DAO_LEAD=25, DAO_ARRIVAL=10, TRACKS=['1','2','3','4','5','6','7','8','9','10','11','11A'];
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
 const occupancy=[],jobs=[],issues=[],get=id=>data.find(t=>t.id===id);
 for(const[tId,a]of Object.entries(s.assignments)){
  const t=get(tId);if(!t)continue;const w=windowFor(t,s);
  const moves=s.activities.filter(x=>x.trainId===tId&&x.type==='pindah').sort((x,y)=>x.start-y.start);
  let track=a.track,start=w.start,drawStart=w.start,inbound=null;
  for(const m of moves){
   occupancy.push({resource:track,start,end:m.end+s.params.buffer,drawStart,drawEnd:m.end,owner:tId,label:`${t.arrNo} → ${t.depNo}`,kind:'rangkaian',inboundId:inbound?.id||'',outboundId:m.id,stackBehind:inbound?.stackBehind||''});
   track=m.to;start=m.start;drawStart=m.end;inbound=m;
  }
  occupancy.push({resource:track,start,end:w.end+s.params.buffer,drawStart,drawEnd:w.end,owner:tId,label:`${t.arrNo} → ${t.depNo}`,kind:'rangkaian',inboundId:inbound?.id||'',outboundId:'',stackBehind:inbound?.stackBehind||''});
 }
 for(const a of s.activities){
  const t=get(a.trainId),label=a.type==='parkir'?`Lok lepas ${a.locId}`:`${a.type} ${t?t.arrNo:a.trainId}`;
  jobs.push({...a,label,end:a.end+s.params.locBuffer,resource:a.locId,owner:a.id});
  if(a.type==='manuver'||a.type==='parkir')occupancy.push({resource:a.track,start:a.start,end:a.end+s.params.buffer,owner:a.id,label,kind:a.type});
  if(a.type==='masuk'&&t){const tr=s.assignments[t.id]?.track;if(tr)occupancy.push({resource:tr,start:a.start,end:a.end+s.params.buffer,owner:t.id,label,kind:'masuk'});}
 }
 return {occupancy,jobs,issues};
}
// Jalur asal ditentukan dari urutan skema, bukan posisi balok terakhir.
function transferTrack(s,trainId,at,excludeId=''){
 let track=s.assignments[trainId]?.track;
 for(const m of s.activities.filter(a=>a.type==='pindah'&&a.trainId===trainId&&a.id!==excludeId).sort((a,b)=>a.start-b.start))if(m.end<=at)track=m.to;
 return track;
}
function transferHosts(s,data,trainId,to,start,end){
 const rows=build(s,data).occupancy.filter(a=>a.kind==='rangkaian'&&a.resource===to&&a.owner!==trainId);
 return data.filter(t=>rows.some(a=>{
  if(a.owner!==t.id)return false;
  const r={start:a.drawStart??a.start,end:a.drawEnd??a.end},shift=shiftedOverlap({start,end},r);
  return shift&&shift.start<=start&&shift.end>=end;
 }));
}
function planTransfer(s,data,move){
 const existing=s.activities.find(a=>a.id===move.id);if(existing&&(existing.type!=='pindah'||existing.trainId!==move.trainId))return{ok:false,state:s,errors:[{code:'activity_id',message:'ID skema sudah digunakan kegiatan lain.'}]};
 const n=copy(s),a={id:move.id,type:'pindah',trainId:move.trainId,to:move.to,start:move.start,end:move.end,locId:move.locId,routeId:move.routeId||'',stackBehind:move.stackBehind||''};
 n.activities=n.activities.filter(x=>x.id!==a.id);n.activities.push(a);
 const v=validate(n,data);return{...v,state:v.ok?n:s,candidate:n};
}
function removeTransfer(s,data,activityId){const n=copy(s);n.activities=n.activities.filter(a=>a.id!==activityId||a.type!=='pindah');const v=validate(n,data);return{...v,state:v.ok?n:s};}
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
 for(const[id,w]of Object.entries(s.timeOverrides||{}))if(!get(id)||!w||!Number.isInteger(w.start)||!Number.isInteger(w.end)||w.start<0||w.start>=2*DAY||w.end<=w.start||w.end-w.start>=DAY)err('time_override',`${id}: jam stabling harus sah, dengan durasi lebih dari 0 dan kurang dari 24 jam.`);
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
  if(a.type==='pindah'){
   if(a.end>=w.end)err('move_window',`${t.arrNo}: langsir pindah jalur harus selesai sebelum jam keluar ${time(w.end)}.`);
   if(a.stackBehind&&(typeof a.stackBehind!=='string'||a.stackBehind===a.trainId||!get(a.stackBehind)||!s.assignments[a.stackBehind]))err('stack_host','Pilih rangkaian lain yang sudah berada di jalur tujuan untuk skema menumpang di belakang.');
  }
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
 for(const m of s.activities.filter(a=>a.type==='pindah'&&a.stackBehind))if(!transferHosts(s,data,m.trainId,m.to,m.start,m.end).some(t=>t.id===m.stackBehind))err('stack_host',`${m.trainId}: rangkaian di depan ${m.stackBehind} tidak berada di jalur ${m.to} sepanjang langsir ${time(m.start)}–${time(m.end)}.`);
 for(let i=0;i<b.occupancy.length;i++)for(let j=i+1;j<b.occupancy.length;j++){
  const a=b.occupancy[i],c=b.occupancy[j];if(a.resource!==c.resource||a.owner===c.owner)continue;const hit=shiftedOverlap(a,c);
  const trainKind=x=>['rangkaian','masuk'].includes(x.kind);
  const sharedPair=trainKind(a)&&trainKind(c)&&(a.resource==='1'||a.stackBehind===c.owner||c.stackBehind===a.owner);
  if(hit&&!sharedPair)err('track_busy',`Jalur ${a.resource}: ${a.label} (${time(a.start)}–${time(a.end)}) berbenturan dengan ${c.label} (${time(hit.start)}–${time(hit.end)}).`,{track:a.resource,owners:[a.owner,c.owner]});
 }
 // Pengecualian menumpang hanya untuk pasangan yang disebutkan, maksimal 2.
 for(const track of STABLING){
  if(track!=='1'&&!s.activities.some(a=>a.type==='pindah'&&a.to===track&&a.stackBehind))continue;
  const limit=2;
  const intervals=b.occupancy.filter(x=>x.resource===track&&['rangkaian','masuk'].includes(x.kind)).flatMap(a=>[-2*DAY,-DAY,0,DAY].map(k=>({...a,start:Math.max(0,a.start+k),end:Math.min(DAY,a.end+k)}))).filter(a=>a.start<a.end);
  const points=[...new Set(intervals.flatMap(x=>[x.start,x.end]))].sort((a,b)=>a-b);
  for(let i=0;i<points.length-1;i++){
   const start=points[i],end=points[i+1],owners=[...new Set(intervals.filter(x=>x.start<end&&x.end>start).map(x=>x.owner))];
   if(owners.length>limit){err('track_capacity',`Jalur ${track}: pada ${time(start)}–${time(end)} ada ${owners.length} rangkaian (${owners.join(', ')}), melebihi batas skema ${limit} rangkaian.`,{track,owners});break;}
  }
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
function segments(s,data,track){return build(s,data).occupancy.filter(a=>a.resource===track).flatMap(a=>[-2*DAY,-DAY,0,DAY].map(k=>({...a,start:a.start+k,end:a.end+k,drawStart:(a.drawStart??a.start)+k,drawEnd:(a.drawEnd??a.end)+k}))).filter(a=>a.start<DAY&&a.end>0).map(a=>({...a,start:Math.max(0,a.start),end:Math.min(DAY,a.end)}));}
function available(s,data,id,enter,exit){return STABLING.filter(track=>{const next=copy(s);next.assignments[id]={track,enter:enter??null,exit:exit??null};return validate(next,data).ok;});}
function loadPOA(s,data){const n=copy(s);n.assignments={};n.activities=[];if(n.locoAssignments)n.locoAssignments={};const rejected=[];for(const t of data){const test=copy(n);test.assignments[t.id]={track:t.poa,enter:null,exit:null};const v=validate(test,data);if(v.ok)n.assignments=test.assignments;else rejected.push({id:t.id,errors:v.errors});}return {state:n,rejected};}
function importState(raw,data){const s=copy(raw);if(!s||s.version!==1)throw Error('Versi skenario tidak didukung.');if(!s.log)s.log=[];if(!Array.isArray(s.log)||typeof s.name!=='string'||s.name.length>120||!Number.isFinite(s.clock))throw Error('Nama, riwayat, atau jam skenario tidak sah.');s.clock=Math.max(0,Math.min(2879,s.clock));const v=validate(s,data);if(!v.ok)throw Error(v.errors.map(x=>x.message).join('\n'));return s;}
function placeFixed(s,data,id,track){const n=copy(s);if(!data.some(t=>t.id===id))return{ok:false,state:s,errors:[{code:'train',message:'Rangkaian tidak ditemukan.'}]};n.assignments[id]={track,enter:null,exit:null};const v=validate(n,data);return{...v,state:v.ok?n:s};}
function useSourceTimes(s,data,revision){const n=copy(s);n.timeOverrides={};n.params.inOffset=n.timingVersion==='dao'?(n.params.inOffset??DAO_ARRIVAL):0;n.params.outOffset=n.timingVersion==='dao'?(n.params.outOffset??DAO_LEAD):0;for(const a of Object.values(n.assignments)){a.enter=null;a.exit=null;}n.scheduleRevision=revision;const v=validate(n,data);return{...v,state:v.ok?n:s};}
// Perubahan parameter diterapkan atomik, termasuk jam skenario yang diedit.
function setDaoOffsets(s,data,arrival,departure){
 const reject=message=>({ok:false,errors:[{code:'dao_offsets',message}],warnings:[],state:s});
 if(s.timingVersion!=='dao')return reject('Pilih versi DAO untuk mengubah waktu langsir.');
 if(!Number.isInteger(arrival)||!Number.isInteger(departure)||arrival<0||departure<0||arrival>720||departure>720)return reject('Waktu langsir datang dan berangkat harus berupa angka bulat 0–720 menit.');
 const n=copy(s),di=arrival-(s.params.inOffset??0),doff=departure-(s.params.outOffset??0);n.params.inOffset=arrival;n.params.outOffset=departure;n.daoTimingRevision=1;
 for(const w of Object.values(n.timeOverrides||{})){w.start+=di;w.end-=doff;}
 for(const a of Object.values(n.assignments)){if(a.enter!=null)a.enter+=di;if(a.exit!=null)a.exit-=doff;}
 for(const t of data){const w=windowFor(t,n);if(!Number.isInteger(w.start)||!Number.isInteger(w.end)||w.end<=w.start||w.end-w.start>=DAY)return reject(`${t.arrNo}: waktu langsir membuat jam masuk DAO ${time(w.start)} melewati atau sama dengan jam keluar ${time(w.end)}. Kurangi waktu langsir atau ubah jam rangkaian terlebih dahulu.`);}
 const v=validate(n,data);return{...v,state:v.ok?n:s};
}
function setDaoLead(s,data,minutes){return setDaoOffsets(s,data,s.params.inOffset??0,minutes);}
function createTimingVersion(s,data,version){
 if(!['jakk','dao'].includes(version))throw Error('Versi waktu tidak dikenal.');
 const n=copy(s),isDao=s.timingVersion==='dao',oldIn=isDao?(s.params.inOffset??0):0,oldOut=isDao?(s.params.outOffset??0):0;
 const targetIn=version==='dao'?(isDao?oldIn:DAO_ARRIVAL):0,targetOut=version==='dao'?(isDao?oldOut:DAO_LEAD):0;
 n.timingVersion=version;n.params.inOffset=targetIn;n.params.outOffset=targetOut;
 for(const w of Object.values(n.timeOverrides||{})){w.start+=targetIn-oldIn;w.end-=targetOut-oldOut;}
 for(const a of Object.values(n.assignments)){if(a.enter!=null)a.enter+=targetIn-oldIn;if(a.exit!=null)a.exit-=targetOut-oldOut;}
 if(version==='dao')n.daoTimingRevision=1;
 const v=validate(n,data);return{...v,state:v.ok?n:s};
}
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
const api={DAY,SHUNTER_LEAD,DAO_LEAD,DAO_ARRIVAL,TRACKS,STABLING,capacity,copy,overlap,time,parse,defaultState,windowFor,locoWindow,build,validate,at,segments,available,loadPOA,importState,placeFixed,useSourceTimes,createTimingVersion,setDaoLead,setDaoOffsets,chooseLocoKind,transferTrack,transferHosts,planTransfer,removeTransfer};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.DAOEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);

// Informasi kapasitas kereta dan penanda jam L datang; terpisah dari kapasitas rangkaian.
(function(root){
 const capacities=Object.freeze({'1':22,'2':12,'3':12,'4':11,'5':11,'6':12,'7':11,'8':14,'9':17,'10':17});
 function locoEvent(t,w,arrivals){
  const number='L'+t.depNo.replace(/^R/,'')+'-1',row=arrivals.find(l=>l.number===number);if(!row)return null;
  const base=row.arrival+(t.dep<=t.arr?1440:0),candidates=[base-1440,base,base+1440,base+2880];
  const inside=candidates.find(at=>at>=w.start&&at<=w.end);
  return{number,clock:row.arrival,at:inside??base,inside:inside!==undefined};
 }
 function marker(t,w,piece,arrivals){const e=locoEvent(t,w,arrivals);if(!e?.inside||e.clock<piece.start||e.clock>piece.end||piece.end<=piece.start)return null;return{...e,percent:(e.clock-piece.start)/(piece.end-piece.start)*100};}
 // Arsiran adalah penanda visual layanan 1 PLR setelah L datang, sampai ujung
 // segmen stabling yang terlihat. Jam absolut menjaga sambungan tengah malam.
 function serviceShade(t,w,piece,arrivals){
  const e=locoEvent(t,w,arrivals);if(!e?.inside||piece.end<=piece.start)return null;
  for(let d=Math.floor(w.start/1440)-1;d<=Math.floor(w.end/1440)+1;d++){
   const ps=piece.start+d*1440,pe=piece.end+d*1440;
   if(ps<w.start||pe>w.end)continue;
   const start=Math.max(ps,e.at);if(start>=pe)return null;
   return{...e,start,end:pe,percent:(start-ps)/(pe-ps)*100,width:(pe-start)/(pe-ps)*100};
  }
  return null;
 }
 // Cari bagian caption yang tetap terlihat ketika balok berada di belakang.
 function visibleCaption(piece,blockers){
  const duration=piece.end-piece.start;if(duration<=0)return{left:0,width:0,hidden:true,startHidden:false};
  let gaps=[{start:piece.start,end:piece.end}];
  for(const b of blockers)gaps=gaps.flatMap(g=>b.end<=g.start||b.start>=g.end?[g]:[{start:g.start,end:Math.min(g.end,b.start)},{start:Math.max(g.start,b.end),end:g.end}].filter(x=>x.end>x.start));
  const gap=gaps.sort((a,b)=>(b.end-b.start)-(a.end-a.start))[0];
  return gap?{left:(gap.start-piece.start)/duration*100,width:(gap.end-gap.start)/duration*100,hidden:false,startHidden:gap.start>piece.start}:{left:0,width:0,hidden:true,startHidden:true};
 }
 function transferCandidate(s,data,draft,to){
  const E=root.DAOEngine;if(!E.STABLING.includes(to))return{ok:false,state:s,errors:[{code:'transfer_target',message:'Mode langsir pindah jalur: pilih jalur 1–10. Gunakan Batal seret langsir untuk keluar dari mode ini.'}]};
  const hosts=E.transferHosts(s,data,draft.trainId,to,draft.start,draft.end),host=hosts.find(t=>t.id===draft.stackBehind)||hosts[0];
  const move={...draft,to,stackBehind:host?.id||''};return{...E.planTransfer(s,data,move),move};
 }
 root.DAOView={capacities,locoEvent,marker,serviceShade,visibleCaption,transferCandidate};
})(typeof globalThis!=='undefined'?globalThis:this);
(()=>{'use strict';
const E=DAOEngine,V=DAOView,$=s=>document.querySelector(s),KEY='dao-poa-structure-v2';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const id=()=>globalThis.crypto?.randomUUID?.()||'a'+Date.now()+Math.random().toString(36).slice(2),get=n=>DATA.find(t=>t.id===n);
const no=n=>n.replace(/^R/,''),pair=t=>`${no(t.arrNo)}/${no(t.depNo)}`,name=t=>t.arrName===t.depName?t.arrName:`${t.arrName} / ${t.depName}`;
const hh=n=>E.time(n).slice(0,5),isReserved=track=>['11','11A'].includes(track);
const locoInitial=l=>l.kind==='langsir'?'LL':'LD';
const palette={R15:['#a9bddb','#152332'],R79F:['#ffe6a3','#29200a'],R45:['#ef832e','#241706'],R75F:['#426c38','#fff'],R25:['#4776c8','#fff'],R125:['#8b8b8b','#fff'],R13:['#999999','#171717'],R71F:['#ffe000','#171717'],R55:['#234775','#fff'],R35:['#4975c4','#fff'],R19:['#fff000','#171717'],R17:['#3265e8','#fff'],R1:['#00df1b','#102509'],R127:['#7ca15b','#fff'],R41:['#efb67b','#2d2113'],R137:['#13a9d2','#101f26'],R49:['#ed5ae5','#25162a'],R61:['#ff352d','#fff'],R133:['#7837a5','#fff'],R53:['#ed5d9b','#24151d'],R3:['#21e81a','#152813'],R51:['#ee5c9b','#29121c'],R59:['#ff3931','#fff'],R33:['#66ecee','#213335'],R29:['#66ecee','#213335'],R57:['#203f70','#fff']};
let state,selected=null,dragging=null,history=[],future=[],message='',messageType='note',storageOK=true,previewContext=null,suppressClicksUntil=0,scheduleNotice=null;
let activeVersion='jakk',versions={},versionHistory={jakk:{history:[],future:[]},dao:{history:[],future:[]}},loadNotes=[];
const versionLabel=()=>activeVersion==='dao'?'Custom DAO':'Jadwal JAKK';
const versionLead=version=>version==='dao'?E.DAO_LEAD:0;
const daoArrival=()=>activeVersion==='dao'?state.params.inOffset:(versions.dao?.params.inOffset??E.DAO_ARRIVAL);
const daoLead=()=>activeVersion==='dao'?state.params.outOffset:(versions.dao?.params.outOffset??E.DAO_LEAD);
const initial=(version='jakk')=>{const s=E.defaultState();s.name='Struktur stabling DAO';s.layout='poa-v2';s.timingVersion=version;s.params.inOffset=version==='dao'?E.DAO_ARRIVAL:0;s.params.outOffset=versionLead(version);s.daoTimingRevision=1;s.scheduleRevision=SCHEDULE.revision;return E.loadPOA(s,DATA);};
try{
 const raw=localStorage.getItem(KEY);
 if(raw){
  const saved=JSON.parse(raw);
  if(saved.version===3&&saved.versions){versions.jakk=normalise(saved.versions.jakk,'jakk');versions.dao=normalise(saved.versions.dao,'dao');activeVersion=saved.activeVersion==='dao'?'dao':'jakk';message='Kedua versi dimuat. Versi aktif: '+versionLabel()+'.';}
  else{versions.jakk=normalise(saved.state,'jakk');const dao=E.createTimingVersion(versions.jakk,DATA,'dao');versions.dao=dao.ok?dao.state:initial('dao').state;message='Susunan lama dimuat sebagai versi JAKK. Versi DAO dibuat dengan jam datang +10 menit dan jam akhir −25 menit.'+(dao.ok?'':' Versi DAO memakai contoh POA karena susunan lama tidak cocok dengan pemangkasan waktu.');}
  messageType='ok';
 }else{versions.jakk=initial('jakk').state;versions.dao=initial('dao').state;message='Dua versi siap: jadwal JAKK sesuai sumber dan waktu DAO datang +10 / berangkat −25 menit. Penempatan yang bentrok tetap di daftar rangkaian.';}
 state=versions[activeVersion];if(loadNotes.length)message+=' ' +loadNotes.join(' ');
}catch(e){versions={jakk:initial('jakk').state,dao:initial('dao').state};activeVersion='jakk';state=versions.jakk;message='Susunan tersimpan belum dapat dimuat: '+e.message;messageType='error';}
function normalise(raw,version){
 let s=E.copy(raw);if(!s?.params)throw Error('Format skenario tidak dikenali.');
 s.params.inOffset=version==='dao'?(s.params.inOffset??0):0;s.params.outOffset=version==='dao'?(s.params.outOffset??E.DAO_LEAD):0;s.timingVersion=version;s.layout='poa-v2';s.locoAssignments??={};s.timeOverrides??={};
 for(const a of Object.values(s.assignments||{})){a.enter=null;a.exit=null;}
 if(s.scheduleRevision!==SCHEDULE.revision){const r=E.useSourceTimes(s,DATA,SCHEDULE.revision);if(r.ok)s=r.state;}
 if(version==='dao'&&!s.daoTimingRevision){const r=E.setDaoOffsets(s,DATA,E.DAO_ARRIVAL,s.params.outOffset);if(r.ok){s=r.state;loadNotes.push('Jam masuk DAO diperbarui menjadi +10 menit; susunan tetap.');}else loadNotes.push('Jam DAO lama dipertahankan karena +10 menit berbenturan dengan jam/kegiatan yang diedit. Ubah lewat pengaturan waktu langsir.');s.daoTimingRevision=1;}
 return E.importState(s,DATA);
}
function renderVersion(){
 document.querySelectorAll('[data-version]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.version===activeVersion)));
 $('[data-version="dao"]').textContent=`Custom DAO · +${daoArrival()} / −${daoLead()} mnt`;
 $('#dao-lead-form').hidden=activeVersion!=='dao';$('#dao-lead').value=daoLead();$('#dao-arrival-offset').value=daoArrival();
 $('#app-subtitle').textContent='Versi '+versionLabel()+' · penempatan manual';
 $('#version-description').textContent=activeVersion==='dao'?`Masuk DAO = datang JAKK + ${daoArrival()} menit. Keluar DAO = berangkat JAKK − ${daoLead()} menit. Berlaku otomatis untuk semua ${DATA.length} rangkaian setelah klik Terapkan ke semua.`:'JAKK: jam datang R ganjil dan berangkat R genap sesuai PDF rekap JAKK. Jam dan susunan versi ini bisa diedit sendiri.';
 $('#sync-schedule').textContent=activeVersion==='dao'?'Samakan jam DAO':'Samakan jam JAKK';document.title='Stabling DAO · '+versionLabel();
}
function switchVersion(version){if(version===activeVersion||!versions[version])return;versions[activeVersion]=state;versionHistory[activeVersion]={history,future};activeVersion=version;state=versions[version];({history,future}=versionHistory[version]);selected=null;dragging=null;previewContext=null;transferDraft=null;closeDialog();clearTargets();feedback('Versi '+versionLabel()+' aktif. Perubahan pada versi lainnya tersimpan terpisah.');save();render();}
document.querySelectorAll('[data-version]').forEach(b=>b.addEventListener('click',()=>switchVersion(b.dataset.version)));
$('#dao-lead-form').addEventListener('submit',e=>{e.preventDefault();if(activeVersion!=='dao')return;const arrival=$('#dao-arrival-offset').valueAsNumber,departure=$('#dao-lead').valueAsNumber;const r=E.setDaoOffsets(state,DATA,arrival,departure);if(!r.ok){fail('Waktu langsir belum diubah.\n'+r.errors.slice(0,4).map(x=>x.message).join('\n'));return;}commit(r.state,`Custom DAO diterapkan ke semua ${DATA.length} rangkaian: datang JAKK +${arrival} menit; berangkat JAKK −${departure} menit.`);});
function log(text,kind='ok'){state.log.unshift({text,kind,at:new Date().toLocaleString('id-ID')});state.log=state.log.slice(0,100);}
function save(){try{versions[activeVersion]=state;localStorage.setItem(KEY,JSON.stringify({version:3,activeVersion,versions}));storageOK=true;}catch{storageOK=false;}$('#storage-status').textContent=storageOK?'Kedua versi disimpan otomatis pada browser/perangkat ini.':'Penyimpanan perangkat tidak tersedia. Perubahan hanya bertahan selama halaman ini terbuka.';}
function feedback(text,type='ok'){message=text;messageType=type;$('#feedback').textContent=text;$('#feedback').className='feedback '+(type==='ok'?'':type);}
function fail(text){text=text.replace(/\b(?:LS|LL|LD)-[A-Za-z0-9_-]+\b/g,x=>{const l=state.locos.find(l=>l.id===x);return l?locoInitial(l):x;});feedback(text,'error');log(text,'error');save();if($('#dialog').open){const box=$('#dialog .error-box');box.textContent=text;box.hidden=false;}}
function commit(next,text){const v=E.validate(next,DATA);if(!v.ok){fail(v.errors.slice(0,4).map(x=>x.message).join('\n'));return false;}history.push(E.copy(state));if(history.length>50)history.shift();future=[];state=next;log(text);feedback(text);save();render();return true;}
function place(trainId,track){if(!get(trainId))return;const result=E.placeFixed(state,DATA,trainId,track);if(!result.ok){const available=E.available(state,DATA,trainId,null,null);fail(result.errors.slice(0,3).map(x=>x.message).join('\n')+(available.length?'\nJalur yang tersedia untuk jadwal ini: '+available.join(', ')+'.':''));renderSelection();return;}const prev=state.assignments[trainId]?.track,w=E.windowFor(get(trainId),result.state);selected=trainId;commit(result.state,`${pair(get(trainId))} ${name(get(trainId))} ${prev?'dipindahkan dari jalur '+prev:'dimasukkan'} ke jalur ${track}. Jam stabling ${E.time(w.start)}–${E.time(w.end)}.`);}
function remove(trainId){if(!state.assignments[trainId])return;if(transferDraft?.trainId===trainId)transferDraft=null;const n=E.copy(state);delete n.assignments[trainId];if(n.locoAssignments)delete n.locoAssignments[trainId];const count=n.activities.filter(a=>a.trainId===trainId).length;n.activities=n.activities.filter(a=>a.trainId!==trainId);for(const a of n.activities)if(a.stackBehind===trainId)a.stackBehind='';commit(n,`${pair(get(trainId))} dikeluarkan dari susunan dan kembali ke daftar.${count?' '+count+' kegiatan terkait ikut dilepas.':''}`);}
function render(){renderVersion();renderList();renderSelection();$('#chart').innerHTML=chartHTML();queueTransferArrows();renderSources();$('#undo').disabled=!history.length;$('#redo').disabled=!future.length;$('#count').textContent=`${DATA.length-Object.keys(state.assignments).length} belum · ${Object.keys(state.assignments).length} terpasang`;feedback(message,messageType);}
function renderList(){
 const q=$('#search').value.toLowerCase(),remaining=DATA.filter(t=>!state.assignments[t.id]),visible=remaining.filter(t=>`${pair(t)} ${name(t)}`.toLowerCase().includes(q));
 $('#train-list').innerHTML=visible.map(t=>{const w=E.windowFor(t,state);return `<article class="train-card ${t.id===selected?'selected':''}" data-train="${t.id}" draggable="true" style="--color:${palette[t.id][0]}" title="${esc(pair(t)+' '+name(t))}; stabling ${E.time(w.start)}–${E.time(w.end)}"><button type="button" class="train-select" aria-label="Pilih ${esc(pair(t)+' '+name(t))}"><strong>${pair(t)}</strong><span>${esc(name(t))}</span></button><div class="card-times"><div>Jam stabling<strong>${hh(w.start)}–${hh(w.end)}${w.end>=1440?' +1':''}</strong></div><button type="button" data-action="edit-stabling" data-train-id="${t.id}">Ubah jam</button></div>${state.timeOverrides?.[t.id]?'<span class="time-edited">Jam skenario telah diubah</span>':''}</article>`;}).join('')||`<p class="empty">${remaining.length?'Tidak ada rangkaian yang sesuai pencarian.':'Semua rangkaian sudah masuk denah. Klik balok pada grafik untuk mengubahnya, atau keluarkan untuk mengembalikannya ke daftar.'}</p>`;
}
function renderSelection(){
 if(!selected){$('#selection').innerHTML='<p><strong>Pilih rangkaian untuk mulai.</strong><br>Masukkan/pindahkan dengan klik atau geser. Klik balok yang sudah stabling untuk menambahkan lok.</p>';return;}
 const t=get(selected),a=state.assignments[t.id],w=E.windowFor(t,state),attachment=state.locoAssignments?.[t.id],loco=state.locos.find(l=>l.id===attachment?.locId);
 const le=loco?.kind==='dinas'?V.locoEvent(t,w,SCHEDULE.locoArrivals):null;
 const info=loco?`<span class="loco-description">${locoInitial(loco)} · ${loco.kind==='langsir'?'Lok Langsir':'Lok Dinas'} · ${E.time(E.locoWindow(t,state,attachment).start)}–${E.time(E.locoWindow(t,state,attachment).end)}</span>`:'';
 $('#selection').innerHTML=`<p><strong>${pair(t)} · ${esc(name(t))}</strong><br>${a?(transferNote(t)?'Skema: '+esc(transferNote(t)):'Terpasang di jalur '+esc(a.track)):'Belum ditempatkan'} · stabling ${E.time(w.start)}–${E.time(w.end)}${info}${transferDraft?`<span class="transfer-drag-notice">Mode seret langsir: ${pair(get(transferDraft.trainId))} · ${E.time(transferDraft.start)}–${E.time(transferDraft.end)}</span>`:''}${le?`<span class="ld-arrival-info">${esc(le.number)} datang JAKK ${E.time(le.at)}${le.inside?' · arsiran kanan: pelayanan lok dinas':' · di luar jam stabling; garis tidak ditampilkan'}</span>`:''}</p><div class="actions"><label for="target-track">Jalur</label><select id="target-track">${E.STABLING.map(track=>`<option value="${track}" ${a?.track===track?'selected':''}>${track}</option>`).join('')}</select><button id="place-selected">${a?'Pindahkan':'Masukkan'}</button><button type="button" data-action="edit-stabling" data-train-id="${t.id}">Ubah jam</button>${a?`<button id="attach-selected">${loco?'Ubah lok':'Tambah lok'}</button><button type="button" data-action="open-transfer" data-train-id="${t.id}">Skema langsir</button>`:''}<button id="remove-selected" class="danger" ${a?'':'disabled'}>Keluarkan</button>${transferDraft?'<button type="button" data-action="cancel-transfer-drag">Batal seret langsir</button>':''}<button id="clear-selection" aria-label="Batalkan pilihan">✕</button></div>`;
}
function axis(bottom=false,forPrint=false){return `<div class="axis-row"><div class="axis-label">${bottom?'JAM':''}</div><div class="axis ${bottom?'bottom':''}">${Array.from({length:25},(_,i)=>`<span class="tick ${i===0?'first':i===24?'last':''}" style="left:${i/24*100}%">${i}</span>`).join('')}</div></div>`;}
function doubleTrack(track,scenario=state){return track==='1';}
function piecesFor(track,scenario=state){
 const all=E.segments(scenario,DATA,track).filter(x=>x.kind==='rangkaian').map(x=>({...x,start:Math.max(x.start,x.drawStart??x.start),end:Math.min(x.end,x.drawEnd??x.end)})).filter(x=>x.start<x.end).sort((a,b)=>a.start-b.start||b.end-a.end),ends=[-1,-1],ownerLanes={};
 return all.map(x=>{let lane=0;if(doubleTrack(track,scenario)){lane=x.stackBehind?(ownerLanes[x.stackBehind]??0):ends.findIndex(end=>end<=x.start);if(lane<0)lane=0;ends[lane]=Math.max(ends[lane],x.end);}ownerLanes[x.owner]=lane;return{...x,lane};});
}
function transferNote(t){const moves=state.activities.filter(a=>a.type==='pindah'&&a.trainId===t.id).sort((a,b)=>a.start-b.start);return moves.map(m=>`Jalur ${E.transferTrack(state,t.id,m.start,m.id)} → ${m.to} · ${E.time(m.start)}–${E.time(m.end)}${m.stackBehind?' · di belakang '+pair(get(m.stackBehind)):''}`).join('; ');}
function block(x,track){
 const t=get(x.owner),colors=palette[t.id],full=E.windowFor(t,state),overnight=full.end>=1440,startsBefore=overnight&&x.start===0,continues=overnight&&x.end===1440;
 const attachment=state.locoAssignments?.[t.id],loco=state.locos.find(l=>l.id===attachment?.locId);
 const le=loco?.kind==='dinas'?V.locoEvent(t,full,SCHEDULE.locoArrivals):null,lm=loco?.kind==='dinas'?V.marker(t,full,x,SCHEDULE.locoArrivals):null;
 const service=loco?.kind==='dinas'?V.serviceShade(t,full,x,SCHEDULE.locoArrivals):null;
 const frontPieces=x.stackBehind?E.segments(state,DATA,track).filter(a=>a.kind==='rangkaian'&&a.owner===x.stackBehind).map(a=>({start:Math.max(a.start,a.drawStart),end:Math.min(a.end,a.drawEnd)})):[];
 const caption=x.stackBehind?V.visibleCaption(x,frontPieces):null,front=state.activities.some(a=>a.type==='pindah'&&a.to===track&&a.stackBehind===t.id);

 const incoming=x.inboundId&&x.start===x.drawStart?state.activities.find(a=>a.id===x.inboundId):null,outgoing=x.outboundId&&x.end===x.drawEnd?state.activities.find(a=>a.id===x.outboundId):null;
 const transferTag=incoming?E.transferTrack(state,t.id,incoming.start,incoming.id)+' → '+track+(outgoing?' → '+outgoing.to:''):outgoing?track+' → '+outgoing.to:'';
 const locoText=loco?`${locoInitial(loco)} · ${loco.kind==='langsir'?'Lok Langsir':'Lok Dinas'}, ${E.time(E.locoWindow(t,state,attachment).start)}–${E.time(E.locoWindow(t,state,attachment).end)}`:'';
 return `<button data-lane="${x.lane}" data-piece-start="${x.start}" data-piece-end="${x.end}" data-stack-behind="${esc(x.stackBehind||'')}" data-move-in="${incoming?.id||''}" data-move-out="${outgoing?.id||''}" class="bar ${x.stackBehind?'stacked-behind':''} ${front?'stack-front':''} ${caption?.hidden?'fully-covered':''} ${transferDraft?.trainId===t.id?'transfer-drag-ready':''} ${selected===t.id?'selected':''} ${loco?'has-loco':''}" draggable="true" data-train="${t.id}" style="left:${x.start/14.4}%;width:${(x.end-x.start)/14.4}%;top:${doubleTrack(track)?(x.lane?69:20):22}px;--color:${colors[0]};--text:${colors[1]};--caption-left:${caption?.left??0}%;--caption-width:${caption?.width??100}%" title="${esc(pair(t)+' '+name(t))} · ${E.time(full.start)}–${E.time(full.end)} · jalur ${track}.${loco?' '+esc(locoText)+'.':''}${le?' '+esc(le.number)+' datang JAKK '+E.time(le.at)+(le.inside?'':' (di luar stabling)')+'.':''}${service?' Arsiran: pelayanan lok dinas, '+E.time(le.at)+'–'+E.time(full.end)+'.':''} Bagian jalur ${track}: ${hh(x.start)}–${x.end===1440?'24:00':hh(x.end)}.${transferNote(t)?' Skema: '+esc(transferNote(t))+'.':''} Klik untuk atur lok; klik kanan untuk skema langsir; geser untuk pindah jalur." aria-label="${esc(pair(t)+' '+name(t))} di jalur ${track}${startsBefore?' dari hari sebelumnya':continues?' berlanjut esok hari':''}${loco?' · '+locoInitial(loco):''}${le?' · '+esc(le.number)+' datang JAKK '+hh(le.clock):''}">${service?`<span class="ld-plr-shade" data-l-number="${esc(service.number)}" data-plr="1" data-service-start="${hh(service.start)}" data-service-end="${hh(service.end)}" style="left:${service.percent}%;width:${service.width}%" aria-hidden="true"></span>`:''}${lm?`<span class="minute ld-marker-time" data-l-number="${esc(lm.number)}" style="left:${lm.percent}%" title="${esc(lm.number)} datang JAKK ${hh(lm.clock)}" aria-hidden="true">${String(lm.clock%60).padStart(2,'0')}</span>`:''}${lm?`<span class="ld-arrival-line" data-l-number="${esc(lm.number)}" data-l-arrival="${hh(lm.clock)}" style="left:${lm.percent}%;--marker-shift:${lm.percent===0?'0':lm.percent===100?'-100%':'-50%'}" aria-hidden="true"></span>`:''}${loco?`<span class="attached-loco ${loco.kind==='langsir'?'shunter':''}" title="${esc(locoText)}">${locoInitial(loco)}</span>`:''}<span class="minute start">${startsBefore?'←':String(Math.floor(x.start)%60).padStart(2,'0')}</span><span class="bar-caption"><span class="bar-label">${startsBefore||caption?.startHidden?'← ':''}${pair(t)}${continues?' →':''}</span><span class="bar-name">${esc(name(t).toUpperCase())}</span></span><span class="minute end">${continues?'→':String(Math.floor(x.end)%60).padStart(2,'0')}</span>${transferTag?`<span class="transfer-tag" aria-hidden="true">${transferTag}</span>`:''}</button>`;
}
function activityBlocks(track){return E.segments(state,DATA,track).filter(x=>['manuver','parkir'].includes(x.kind)).map(x=>`<button class="bar activity" style="left:${x.start/14.4}%;width:${(x.end-x.start)/14.4}%" data-activity="${esc(x.owner)}" title="${esc(x.label)} ${E.time(x.start)}–${E.time(x.end)}">${esc(x.label)}</button>`).join('');}
function chartHTML(forPrint=false){return `<div class="poa"><div class="chart-title">STABLING KERETA DAO · ${activeVersion==='dao'?'CUSTOM DAO':'JADWAL JAKK'}</div><div class="chart-band"><span>JALUR</span><span>JAM</span></div>${axis(false,forPrint)}${E.TRACKS.map(track=>`<div class="poa-row ${doubleTrack(track)?'double':''} ${isReserved(track)?'reserved':''} ${selected&&state.assignments[selected]?.track===track?'selected-row':''}" data-drop="${track}"><div class="track-label">${track}${isReserved(track)?'<small>CADANGAN</small>':`<small class="track-car-capacity">Kapasitas<br><b>${V.capacities[track]} kereta</b></small>`}</div><div class="track-canvas" data-track="${track}">${isReserved(track)?'<span class="reserved-text">JALUR CADANGAN — TIDAK UNTUK STABLING</span>':piecesFor(track).map(x=>block(x,track)).join('')}${activityBlocks(track)}</div></div>`).join('')}${axis(true,forPrint)}</div>`;}
let arrowFrame=null;
function queueTransferArrows(){if(arrowFrame!==null)cancelAnimationFrame(arrowFrame);arrowFrame=requestAnimationFrame(()=>{arrowFrame=null;drawTransferArrows();});}
function drawTransferArrows(){
 const poa=$('#chart .poa');if(!poa)return;poa.querySelector('.transfer-arrows')?.remove();
 const bounds=poa.getBoundingClientRect();if(!bounds.width||!bounds.height)return;
 const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.classList.add('transfer-arrows');svg.setAttribute('aria-hidden','true');svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);svg.setAttribute('width',bounds.width);svg.setAttribute('height',bounds.height);
 const add=(tag,attrs,parent=svg)=>{const el=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);parent.append(el);return el;};
 const defs=add('defs',{}),marker=add('marker',{id:'dao-transfer-arrowhead',viewBox:'0 0 8 8',refX:'7',refY:'4',markerWidth:'5',markerHeight:'5',orient:'auto'},defs);add('path',{d:'M0 0 L8 4 L0 8 Z',fill:'#111'},marker);
 const bars=[...poa.querySelectorAll('.bar[data-train]')],small=document.body.classList.contains('denah-fullscreen'),font=small?8:10;
 for(const m of state.activities.filter(a=>a.type==='pindah')){
  const source=bars.find(b=>b.dataset.moveOut===m.id),target=bars.find(b=>b.dataset.moveIn===m.id);if(!source||!target)continue;
  const from=E.transferTrack(state,m.trainId,m.start,m.id),label=from+' → '+m.to,sr=source.getBoundingClientRect(),tr=target.getBoundingClientRect(),forward=tr.top>sr.top;
  const sx=sr.right-bounds.left,tx=tr.left-bounds.left,sy=(forward?sr.bottom+2:sr.top-2)-bounds.top,ty=(forward?tr.top-3:tr.bottom+3)-bounds.top;
  const g=add('g',{'class':'transfer-arrow','data-move-id':m.id,'data-from':from,'data-to':m.to});
  const title=add('title',{},g);title.textContent=pair(get(m.trainId))+': '+label;
  let lx,ly;
  if(Math.abs(sx-tx)<12){const mid=(sy+ty)/2;add('path',{d:`M${sx} ${sy} V${mid} H${tx} V${ty}`,'marker-end':'url(#dao-transfer-arrowhead)'},g);lx=sx+5;ly=mid-font*.6;}
  else{ // Sambungan 24:00 ke 00:00 ditandai pada masing-masing tepi.
   add('path',{d:`M${sx-10} ${sy} H${sx-1}`,'marker-end':'url(#dao-transfer-arrowhead)'},g);add('path',{d:`M${tx+1} ${ty} H${tx+11}`,'marker-end':'url(#dao-transfer-arrowhead)'},g);lx=tx+14;ly=ty-font*.6;
  }
  const width=label.length*font*.58+8;lx=Math.max(4,Math.min(bounds.width-width-4,lx));ly=Math.max(2,Math.min(bounds.height-font-5,ly));
  add('rect',{x:lx,y:ly,width,height:font+5,rx:2},g);const text=add('text',{x:lx+4,y:ly+font+1,'font-size':font},g);text.textContent=label;
 }
 poa.append(svg);
}
window.addEventListener('resize',queueTransferArrows);
if(typeof ResizeObserver!=='undefined')new ResizeObserver(queueTransferArrows).observe($('#chart'));
function renderSources(){$('#source-table').innerHTML=`<p class="small">Acuan jam: ${esc(SCHEDULE.file)}, halaman 4 (R ganjil datang JAKK) dan 3 (R genap berangkat JAKK), seluruh 52 perjalanan R. Nama dan pasangan mengikuti Excel pola stabling. R57 datang 06:20 sesuai PDF. Versi DAO mengurangi jam berangkat JAKK sebesar ${daoLead()} menit dan menambah jam datang ${daoArrival()} menit.</p><table><thead><tr><th>Nomor datang</th><th>Nama datang</th><th>Datang JAKK</th><th>Nomor berangkat</th><th>Nama berangkat</th><th>Berangkat JAKK</th><th>Masuk DAO (+${daoArrival()} menit)</th><th>Keluar DAO (−${daoLead()} menit)</th></tr></thead><tbody>${DATA.map(t=>`<tr><td>${t.arrNo}</td><td>${esc(t.arrName)}</td><td>${hh(t.arr)}</td><td>${t.depNo}</td><td>${esc(t.depName)}</td><td>${hh(t.dep)}${t.dep<=t.arr?' H+1':''}</td><td>${E.time(t.arr+daoArrival())}</td><td>${E.time(t.dep+(t.dep<=t.arr?1440:0)-daoLead())}</td></tr>`).join('')}</tbody></table>`;$('#history-log').innerHTML=state.log.slice(0,30).map(x=>`<div class="log ${x.kind==='error'?'error':''}">${esc(x.at||'')} — ${esc(x.text)}</div>`).join('')||'<p class="small">Belum ada perubahan.</p>';}

function openDialog(title,desc,body){$('#dialog').innerHTML=`<div class="dialog-head"><div><h2>${esc(title)}</h2><p>${esc(desc)}</p></div><button data-action="close" aria-label="Tutup dialog">✕</button></div><div class="error-box" hidden role="alert"></div>${body}`;if(!$('#dialog').open)$('#dialog').showModal();}
function closeDialog(){$('#dialog').close();}
function foot(label='Simpan'){return `<div class="dialog-foot"><button type="button" data-action="close">Batal</button><button type="submit">${label}</button></div>`;}
function options(values,current){return values.map(x=>`<option value="${esc(x.value)}" ${x.value===current?'selected':''}>${esc(x.text)}</option>`).join('');}
function timeInput(label,key,n){return `<label>${label}<input type="time" name="${key}" value="${hh(n)}" required><select name="${key}Day" aria-label="Hari ${label}">${[0,1,2].map(d=>`<option value="${d}" ${Math.floor(n/1440)===d?'selected':''}>${d?'H+'+d:'Hari H'}</option>`).join('')}</select></label>`;}
function openManeuver(activityId){const old=state.activities.find(a=>a.id===activityId),available=DATA.filter(t=>state.assignments[t.id]),tid=old?.trainId||selected&&state.assignments[selected]&&selected||available[0]?.id||'',w=tid?E.windowFor(get(tid),state):{start:0,end:1440},start=old?.start??w.start,end=old?.end??Math.min(w.start+10,w.end);openDialog(old?'Ubah kegiatan':'Manuver atau parkir lok','Jam pada form ini hanya untuk kegiatan lok. Jam stabling rangkaian diubah lewat Ubah jam.',`<form data-form="activity" data-id="${old?.id||''}"><div class="form-grid"><label>Jenis<select name="type">${options([{value:'manuver',text:'Manuver lok ke belakang'},{value:'parkir',text:'Parkir lok lepas'}],old?.type||'manuver')}</select></label><label>Rangkaian<select name="trainId"><option value="">— Pilih (tidak perlu untuk parkir) —</option>${options(available.map(t=>({value:t.id,text:pair(t)+' '+name(t)})),tid)}</select></label><label>Lokomotif<select name="locId">${options(state.locos.map(l=>({value:l.id,text:l.id+' · '+l.name})),old?.locId||'LS-1')}</select></label><label>Jalur kosong<select name="track">${options(E.TRACKS.map(t=>({value:t,text:'Jalur '+t+(isReserved(t)?' (cadangan)':'')})),old?.track||'11')}</select></label>${timeInput('Mulai','start',start)}${timeInput('Selesai','end',end)}<label class="wide-field">Rute<select name="routeId"><option value="">Belum dimodelkan</option>${options(state.routes.map(r=>({value:r.id,text:r.name})),old?.routeId||'')}</select></label></div><p class="hint">Jalur manuver/parkir harus kosong sepanjang kegiatan. Lok yang sama tidak boleh bertugas bersamaan. Jalur 11/11A tetap tidak menerima stabling rangkaian.</p>${foot('Simpan kegiatan')}</form>`);}
function openStablingTimes(trainId){
 const t=get(trainId);if(!t)return;selected=trainId;renderSelection();const w=E.windowFor(t,state);
 openDialog('Ubah jam stabling '+pair(t),versionLabel()+' · '+name(t)+(state.assignments[trainId]?' · Jalur '+state.assignments[trainId].track:' · Belum masuk denah'),`<form data-form="stabling-time" data-id="${trainId}" data-start-day="${Math.floor(w.start/1440)}"><div class="form-grid"><label>Mulai stabling<input type="time" name="start" required value="${hh(w.start)}"></label><label>Selesai stabling<input type="time" name="end" required value="${hh(w.end)}"></label></div><p id="stabling-time-summary" class="time-summary"></p><p class="hint">Jika jam selesai lebih awal dari jam mulai, jadwal diteruskan ke hari berikutnya. Perubahan diperiksa terhadap kapasitas jalur, lok, dan kegiatan terkait.<br>Acuan PDF R JAKK: ${hh(t.arr)}–${hh(t.dep)}${t.dep<=t.arr?' H+1':''}. ${activeVersion==='dao'?'Acuan masuk DAO: '+E.time(t.arr+daoArrival())+'; keluar DAO: '+E.time(t.dep+(t.dep<=t.arr?1440:0)-daoLead())+'. ':''}Perubahan jam hanya berlaku pada versi ${versionLabel()}.</p><div class="dialog-foot">${state.timeOverrides?.[trainId]?`<button type="button" data-action="reset-stabling" data-train-id="${trainId}" style="margin-right:auto">Kembalikan jam acuan</button>`:''}<button type="button" data-action="close">Batal</button><button type="submit">Simpan jam stabling</button></div></form>`);updateTimeSummary();
}
function timeFormWindow(form){const d=new FormData(form),start=E.parse(d.get('start'))+1440*Number(form.dataset.startDay||0);let end=E.parse(d.get('end'))+1440*Number(form.dataset.startDay||0);if(end<=start)end+=1440;return{start,end};}
function updateTimeSummary(){const f=$('[data-form="stabling-time"]');if(!f)return;const w=timeFormWindow(f);$('#stabling-time-summary').textContent=Number.isFinite(w.start)&&Number.isFinite(w.end)?`Stabling ${E.time(w.start)}–${E.time(w.end)} · ${Math.floor((w.end-w.start)/60)} jam ${(w.end-w.start)%60} menit.`:'Isi kedua jam stabling.';}
document.addEventListener('input',e=>{if(e.target.closest('[data-form="stabling-time"]'))updateTimeSummary();});
document.addEventListener('submit',e=>{const f=e.target;if(f.dataset.form!=='stabling-time')return;e.preventDefault();const n=E.copy(state),w=timeFormWindow(f);n.timeOverrides=n.timeOverrides||{};n.timeOverrides[f.dataset.id]=w;if(commit(n,`Jam stabling ${pair(get(f.dataset.id))} diubah menjadi ${E.time(w.start)}–${E.time(w.end)}.`))closeDialog();});
function stackedTrainChoices(trainId){const ids=[...new Set(state.activities.filter(a=>a.type==='pindah'&&a.stackBehind===trainId).map(a=>a.trainId))];return ids.length?`<div class="stacked-choices"><p>Rangkaian di lapisan belakang</p>${ids.map(id=>`<button type="button" data-action="select-stacked" data-train-id="${id}">${pair(get(id))} · ${esc(name(get(id)))}</button>`).join('')}</div>`:'';}
function openAttachedLoco(trainId){
 const t=get(trainId);if(!t||!state.assignments[trainId])return;
 const current=state.locoAssignments?.[trainId],loco=state.locos.find(l=>l.id===current?.locId);
 const shunter=state.locos.find(l=>l.kind==='langsir'),ll=E.locoWindow(t,state,{locId:shunter.id,start:null,end:null});
 openDialog('Pilih lok',`${pair(t)} ${name(t)} · ${transferNote(t)||'Jalur '+state.assignments[trainId].track}`,`<div class="loco-choices"><button type="button" class="loco-choice" data-action="choose-loco-kind" data-kind="langsir" data-train-id="${trainId}" aria-pressed="${loco?.kind==='langsir'}"><strong>LL</strong><span>Lok Langsir</span></button><button type="button" class="loco-choice" data-action="choose-loco-kind" data-kind="dinas" data-train-id="${trainId}" aria-pressed="${loco?.kind==='dinas'}"><strong>LD</strong><span>Lok Dinas</span></button></div><button type="button" class="loco-transfer-choice" data-action="open-transfer" data-train-id="${trainId}">LANGSIR PINDAH JALUR</button>${stackedTrainChoices(trainId)}<p class="ld-choice-note">${(()=>{const e=V.locoEvent(t,E.windowFor(t,state),SCHEDULE.locoArrivals);return e?'Pilih LD untuk memberi garis hitam pada jam '+esc(e.number)+' datang JAKK: <strong>'+E.time(e.at)+'</strong>. Arsiran di sebelah kanan garis menandai pelayanan lok dinas.':'';})()}</p><p class="hint">LL: ${E.time(ll.start)}–${E.time(ll.end)}, mulai ${E.SHUNTER_LEAD} menit sebelum jam akhir versi ${versionLabel()} (atau sejak masuk jika stabling lebih singkat).<br>Klik pilihan yang aktif untuk melepas lok.</p>`);
}

let transferContext=null,transferDraft=null;
const trainMoves=trainId=>state.activities.filter(a=>a.type==='pindah'&&a.trainId===trainId).sort((a,b)=>a.start-b.start);
function closeTrainMenu(){const menu=$('#train-context-menu');menu.hidden=true;}
function openTrainMenu(e,bar){
 suppressClicksUntil=0;e.preventDefault();const t=get(bar.dataset.train),w=E.windowFor(t,state),rect=bar.closest('.track-canvas').getBoundingClientRect(),clock=Math.round(Math.max(0,Math.min(1439,(e.clientX-rect.left)/rect.width*1440)));
 let at=Math.floor(w.start/1440)*1440+clock;if(at<w.start)at+=1440;at=Math.max(w.start,Math.min(w.end-2,at));
 transferContext={trainId:t.id,at};selected=t.id;renderSelection();renderList();document.querySelectorAll('#chart .bar[data-train]').forEach(b=>b.classList.toggle('selected',b.dataset.train===selected));
 const menu=$('#train-context-menu');menu.innerHTML=`<p>${pair(t)} · ${esc(name(t))}</p><button type="button" role="menuitem" data-action="open-transfer" data-train-id="${t.id}">Skema langsir pindah jalur</button>`;menu.hidden=false;
 const r=menu.getBoundingClientRect(),anchor=bar.getBoundingClientRect();menu.style.left=Math.max(8,Math.min((e.clientX||anchor.left+15),innerWidth-r.width-8))+'px';menu.style.top=Math.max(8,Math.min((e.clientY||anchor.top+15),innerHeight-r.height-8))+'px';menu.querySelector('button').focus({preventScroll:true});
}
document.addEventListener('contextmenu',e=>{const bar=e.target.closest('#chart .bar[data-train]');if(bar)openTrainMenu(e,bar);});
document.addEventListener('click',e=>{if(!$('#train-context-menu').hidden&&!e.target.closest('#train-context-menu')){closeTrainMenu();e.preventDefault();e.stopImmediatePropagation();}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#train-context-menu').hidden){closeTrainMenu();e.preventDefault();e.stopImmediatePropagation();}},true);
window.addEventListener('resize',closeTrainMenu);document.addEventListener('wheel',closeTrainMenu,{passive:true});document.addEventListener('touchmove',closeTrainMenu,{passive:true});
function transferFormData(form){
 const base=JSON.parse(form.dataset.base),to=form.elements.to.value,r=V.transferCandidate(state,DATA,base,to);
 return r.move||{...base,to};
}
function updateTransferPreview(){
 const form=$('[data-form="transfer"]');if(!form)return;const base=JSON.parse(form.dataset.base);
 $('#transfer-origin').value='Jalur '+E.transferTrack(state,base.trainId,base.start,base.id);
 const error=$('#dialog .error-box');error.hidden=true;error.textContent='';
}
function openTransfer(trainId,activityId,next=false){
 closeTrainMenu();const t=get(trainId);if(!t||!state.assignments[trainId])return;
 const moves=trainMoves(trainId),old=activityId?moves.find(a=>a.id===activityId):(!next?(transferDraft?.trainId===trainId?transferDraft:moves.at(-1)):null),w=E.windowFor(t,state);
 let start=old?.start??(next&&moves.length?moves.at(-1).end+5:transferContext?.trainId===trainId?transferContext.at:w.start+Math.floor((w.end-w.start)/2));start=Math.max(w.start,Math.min(w.end-2,start));
 const end=old?.end??Math.min(w.end-1,start+Math.max(1,state.params.moveDuration)),origin=E.transferTrack(state,trainId,start,old?.id);
 const base={id:old?.id||id(),trainId,to:old?.to||String(Math.max(1,Number(origin)-1)),start,end,locId:old?.locId||state.locoAssignments?.[trainId]?.locId||'LS-1',routeId:old?.routeId||'',stackBehind:old?.stackBehind||''};
 selected=trainId;renderSelection();openDialog('Skema langsir pindah jalur',`${pair(t)} ${name(t)} · ${versionLabel()}`,`<form class="simple-transfer-form" data-form="transfer" data-id="${base.id}" data-train-id="${trainId}" data-base="${esc(JSON.stringify(base))}"><div class="form-grid"><label>Jalur asal<input id="transfer-origin" value="Jalur ${origin}" readonly></label><label>Jalur tujuan<select name="to">${options(E.STABLING.map(x=>({value:x,text:'Jalur '+x})),base.to)}</select></label></div><div class="dialog-foot"><button type="button" data-action="close">Batal</button><button type="button" data-action="arm-transfer-drag">Seret di denah</button><button type="submit">Pindahkan</button></div></form>`);
}
function armTransferDrag(){
 const form=$('[data-form="transfer"]');if(!form)return;transferDraft={...JSON.parse(form.dataset.base),to:form.elements.to.value};selected=transferDraft.trainId;
 closeDialog();feedback(`Mode langsir ${pair(get(selected))}: seret ke jalur tujuan.`);render();
}
function cancelTransferDrag(){transferDraft=null;clearTargets();feedback('Mode seret langsir dibatalkan.');render();}
document.addEventListener('input',e=>{if(e.target.closest('[data-form="transfer"]'))updateTransferPreview();});
document.addEventListener('change',e=>{if(e.target.closest('[data-form="transfer"]'))updateTransferPreview();});
document.addEventListener('submit',e=>{const f=e.target;if(f.dataset.form!=='transfer')return;e.preventDefault();try{const m=transferFormData(f),from=E.transferTrack(state,m.trainId,m.start,m.id);if(m.to===from){const old=state.activities.find(a=>a.id===m.id);if(old){const reset=E.removeTransfer(state,DATA,m.id);if(!reset.ok){fail(reset.errors.slice(0,3).map(x=>x.message).join('\n'));return;}if(!commit(reset.state,`Perpindahan ${from} → ${old.to} dibatalkan.`))return;}transferDraft=null;closeDialog();render();return;}const r=E.planTransfer(state,DATA,m);if(!r.ok){fail(r.errors.slice(0,4).map(x=>x.message).join('\n'));return;}if(commit(r.state,`Skema ${pair(get(m.trainId))}: jalur ${from} → ${m.to}, ${E.time(m.start)}–${E.time(m.end)}${m.stackBehind?', di belakang '+pair(get(m.stackBehind)):''}.`)){transferDraft=null;closeDialog();render();}}catch(err){fail(err.message);}});
function syncFullscreen(){const on=!!document.fullscreenElement||document.body.classList.contains('fullscreen-fallback');document.body.classList.toggle('denah-fullscreen',on);$('#fullscreen').textContent=on?'Keluar layar penuh':'Layar penuh';$('#fullscreen').setAttribute('aria-pressed',String(on));queueTransferArrows();}
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement){await document.exitFullscreen();}else if(document.body.classList.contains('fullscreen-fallback')){document.body.classList.remove('fullscreen-fallback');}else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();}else{document.body.classList.add('fullscreen-fallback');feedback('Mode fokus aktif. Gunakan F11 untuk menyembunyikan bilah browser bila diperlukan.');}}catch{document.body.classList.toggle('fullscreen-fallback');feedback('Mode fokus aktif. Gunakan F11 bila ingin menyembunyikan bilah browser.');}syncFullscreen();});
document.addEventListener('fullscreenchange',syncFullscreen);
$('#search').addEventListener('input',renderList);
document.addEventListener('click',e=>{
 if(performance.now()<suppressClicksUntil)return;
 const timeButton=e.target.closest('[data-action="edit-stabling"]');if(timeButton){openStablingTimes(timeButton.dataset.trainId);return;}
 const resetTime=e.target.closest('[data-action="reset-stabling"]');if(resetTime){const n=E.copy(state);if(n.timeOverrides)delete n.timeOverrides[resetTime.dataset.trainId];if(commit(n,'Jam stabling dikembalikan ke acuan versi aktif.'))closeDialog();return;}
 const train=e.target.closest('[data-train]');if(train){selected=train.dataset.train;renderSelection();renderList();document.querySelectorAll('.bar').forEach(b=>b.classList.toggle('selected',b.dataset.train===selected));if(train.classList.contains('bar')&&state.assignments[selected])openAttachedLoco(selected);return;}
 const a=e.target.closest('button'),action=a?.dataset.action;
 if(action==='arm-transfer-drag'){armTransferDrag();return;}
 if(action==='cancel-transfer-drag'){cancelTransferDrag();return;}
 if(action==='select-stacked'){selected=a.dataset.trainId;renderSelection();document.querySelectorAll('#chart .bar[data-train]').forEach(b=>b.classList.toggle('selected',b.dataset.train===selected));openAttachedLoco(selected);return;}
 if(action==='open-transfer'||action==='edit-transfer'||action==='next-transfer'){openTransfer(a.dataset.trainId,a.dataset.activityId,action==='next-transfer');return;}
 if(action==='delete-transfer'){const r=E.removeTransfer(state,DATA,a.dataset.activityId);if(!r.ok){fail(r.errors.slice(0,4).map(x=>x.message).join('\n'));return;}if(commit(r.state,'Skema langsir dihapus; pembagian jalur dihitung ulang.'))closeDialog();return;}
 if(action==='close'){closeDialog();return;}
 if(action==='choose-loco-kind'){const trainId=a.dataset.trainId,result=E.chooseLocoKind(state,DATA,trainId,a.dataset.kind);if(!result.ok){fail(result.errors.slice(0,3).map(x=>x.message).join('\n'));return;}const label=a.dataset.kind==='langsir'?'LL':'LD',r=result.action==='attached'?E.locoWindow(get(trainId),result.state,result.state.locoAssignments[trainId]):null;if(commit(result.state,`${label} ${result.action==='detached'?'dilepas dari':'dipasang pada'} rangkaian ${pair(get(trainId))}${r?' · tugas '+E.time(r.start)+'–'+E.time(r.end):''}.`))closeDialog();return;}
 if(action==='detach-loco'){const n=E.copy(state);delete n.locoAssignments[a.dataset.trainId];if(commit(n,'Lok dilepas dari rangkaian '+pair(get(a.dataset.trainId))+'.'))closeDialog();return;}
 if(action==='add-loco'){const n=E.copy(state);let i=1;while(n.locos.some(l=>l.id==='LD-'+i))i++;n.locos.push({id:'LD-'+i,name:'Lok dinas '+i,kind:'dinas',from:0,to:1440});commit(n,`Lok dinas LD-${i} ditambahkan.`);return;}
 if(action==='new-maneuver'||action==='edit-maneuver'){openManeuver(a.dataset.id);return;}
 if(action==='remove-maneuver'){const n=E.copy(state);n.activities=n.activities.filter(x=>x.id!==a.dataset.id);commit(n,'Kegiatan dilepas dari susunan.');return;}
 if(action==='routes'){openDialog('Konfigurasi rute','Opsional; gunakan ruas rute yang sudah kamu tetapkan.',`<form data-form="routes"><label class="hint">Satu baris: ID ; nama rute ; ruas1, ruas2<textarea name="routes" rows="6" style="width:100%">${esc(state.routes.map(r=>`${r.id} ; ${r.name} ; ${r.segments.join(', ')}`).join('\n'))}</textarea></label><p class="hint">Ruas identik tidak dapat digunakan dua kegiatan bersamaan. Pemeriksaan ini belum membuktikan geometri atau posisi wesel.</p>${foot()}</form>`);return;}
 const lane=e.target.closest('.poa-row');if(lane&&selected&&!e.target.closest('.bar')){if(transferDraft?.trainId===selected)applyTransferDrop(lane.dataset.drop);else place(selected,lane.dataset.drop);}
 const activity=e.target.closest('[data-activity]');if(activity)openManeuver(activity.dataset.activity);
 if(a?.id==='place-selected'&&selected)place(selected,$('#target-track').value);
 if(a?.id==='remove-selected'&&selected)remove(selected);
 if(a?.id==='attach-selected'&&selected)openAttachedLoco(selected);
 if(a?.id==='clear-selection'){transferDraft=null;selected=null;render();}
});
document.addEventListener('submit',e=>{const form=e.target;if(!form.dataset.form)return;e.preventDefault();const f=new FormData(form),n=E.copy(state);try{if(form.dataset.form==='activity'){const type=f.get('type'),a={id:form.dataset.id||id(),type,trainId:type==='parkir'?'':f.get('trainId'),locId:f.get('locId'),track:f.get('track'),start:E.parse(f.get('start'))+1440*Number(f.get('startDay')),end:E.parse(f.get('end'))+1440*Number(f.get('endDay')),routeId:f.get('routeId')||''};n.activities=n.activities.filter(x=>x.id!==a.id);n.activities.push(a);if(commit(n,'Kegiatan lok disimpan.'))closeDialog();}if(form.dataset.form==='routes'){n.routes=f.get('routes').split('\n').filter(x=>x.trim()).map(line=>{const p=line.split(';').map(x=>x.trim());if(p.length!==3||!p[0]||!p[1]||!p[2])throw Error('Format: ID ; nama rute ; ruas1, ruas2');return{id:p[0],name:p[1],segments:[...new Set(p[2].split(',').map(x=>x.trim()).filter(Boolean))]};});if(commit(n,'Konfigurasi rute disimpan.'))closeDialog();}}catch(err){fail(err.message);}});
$('#empty-plan').addEventListener('click',()=>{const n=E.copy(state);n.assignments={};n.activities=[];n.locoAssignments={};transferDraft=null;selected=null;commit(n,'Susunan dikosongkan. Semua rangkaian kembali ke daftar. Bisa diurungkan.');});
$('#load-poa').addEventListener('click',()=>{transferDraft=null;const r=E.loadPOA(state,DATA);if(commit(r.state,`Contoh POA dimuat: ${Object.keys(r.state.assignments).length}/26 rangkaian.`)&&r.rejected.length)feedback('Contoh POA: '+r.rejected.map(x=>x.errors.map(y=>y.message).join(' ')).join('\n')+'\nRangkaian yang ditolak tetap berada di daftar. Pilih jalur lain.','note');});
$('#sync-schedule').addEventListener('click',()=>{const r=E.useSourceTimes(state,DATA,SCHEDULE.revision);if(!r.ok){fail('Jam acuan belum diterapkan karena bentrok.\n'+r.errors.slice(0,4).map(x=>x.message).join('\n'));return;}commit(r.state,'Semua jam versi '+versionLabel()+' dikembalikan ke acuan'+(activeVersion==='dao'?' (datang +'+daoArrival()+' menit, berangkat −'+daoLead()+' menit dari JAKK).':' PDF R JAKK.'));});
$('#undo').addEventListener('click',()=>{if(!history.length)return;transferDraft=null;future.push(E.copy(state));state=history.pop();feedback('Perubahan terakhir diurungkan.');save();render();});
$('#redo').addEventListener('click',()=>{if(!future.length)return;transferDraft=null;history.push(E.copy(state));state=future.pop();feedback('Perubahan diterapkan kembali.');save();render();});
function preparePrint(){$('#print-sheet').innerHTML=chartHTML(true)+`<p class="small">Versi ${versionLabel()} · ${activeVersion==='dao'?'Masuk DAO = datang JAKK + '+daoArrival()+' menit; keluar DAO = berangkat JAKK − '+daoLead()+' menit':'Jam datang / berangkat JAKK sesuai PDF'}; jam skenario dapat diedit. ${Object.keys(state.assignments).length}/26 terpasang.</p>${DATA.filter(t=>trainMoves(t.id).length).map(t=>`<p class="print-transfer-note">${pair(t)} ${esc(name(t))}: ${esc(transferNote(t))}</p>`).join('')}`;}
$('#print').addEventListener('click',()=>{preparePrint();window.print();});
window.addEventListener('beforeprint',preparePrint);

function clearTargets(){document.querySelectorAll('.target-ok,.target-no,.pool-target').forEach(x=>x.classList.remove('target-ok','target-no','pool-target'));document.querySelectorAll('.drop-preview').forEach(x=>x.remove());$('#drag-preview-info').hidden=true;}
function applyTransferDrop(destination){
 if(!transferDraft)return;const r=V.transferCandidate(state,DATA,transferDraft,destination);
 if(!r.ok){fail(r.errors.slice(0,3).map(x=>x.message).join('\n'));return;}
 const m=r.move,from=E.transferTrack(state,m.trainId,m.start,m.id);
 if(commit(r.state,`Skema langsir ${pair(get(m.trainId))}: jalur ${from} → ${m.to}, ${E.time(m.start)}–${E.time(m.end)}${m.stackBehind?', ditumpuk di belakang '+pair(get(m.stackBehind)):''}.`)){transferDraft=null;render();}
}
function previewAt(target){
 const destination=target.dataset.drop,isTransfer=transferDraft?.trainId===dragging,key=dragging+'|'+destination+'|'+!!isTransfer;
 if(previewContext?.key===key)return previewContext.result;
 clearTargets();
 const result=isTransfer?V.transferCandidate(state,DATA,transferDraft,destination):destination==='pool'?{ok:true}:E.placeFixed(state,DATA,dragging,destination),t=get(dragging),w=E.windowFor(t,state),caption=$('#drag-preview-info');
 previewContext={key,result};target.classList.add(destination==='pool'&&!isTransfer?'pool-target':result.ok?'target-ok':'target-no');
 caption.textContent=isTransfer?`${result.ok?'Pratinjau langsir pindah jalur':'Skema belum bisa disimpan'} · ${pair(t)} · Jalur ${destination}\nLangsir ${E.time(transferDraft.start)}–${E.time(transferDraft.end)}${result.move?.stackBehind?' · di belakang '+pair(get(result.move.stackBehind)):''}${result.ok?'':' · '+result.errors[0].message}`:destination==='pool'?`${pair(t)} ${name(t)} → keluarkan dari susunan`:`${result.ok?'Pratinjau':'Tidak bisa ditempatkan'} · ${pair(t)} ${name(t)} · Jalur ${destination}\nJam stabling ${E.time(w.start)}–${E.time(w.end)}${result.ok?'': ' · '+result.errors[0].message}`;
 caption.classList.toggle('invalid',!result.ok);caption.hidden=false;
 if(destination!=='pool'&&(!isTransfer||result.candidate)){
  const candidate=isTransfer?result.candidate:result.ok?result.state:E.copy(state);if(!isTransfer&&!result.ok)candidate.assignments[dragging]={track:destination,enter:null,exit:null};
  const canvas=target.querySelector('.track-canvas');
  for(const piece of piecesFor(destination,candidate).filter(x=>x.owner===dragging)){
   const ghost=document.createElement('div');ghost.className='drop-preview'+(isTransfer?' transfer-ghost':'')+(result.ok?'':' invalid');
   ghost.style.left=piece.start/14.4+'%';ghost.style.width=(piece.end-piece.start)/14.4+'%';ghost.style.top=(doubleTrack(destination,candidate)?(piece.lane?69:20):isReserved(destination)?8:22)+'px';ghost.style.height=(isReserved(destination)?30:34)+'px';
   if(isTransfer){ghost.style.setProperty('--color',palette[t.id][0]);ghost.style.setProperty('--text',palette[t.id][1]);}
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
 document.addEventListener('drop',e=>{const target=e.target.closest('[data-drop]');if(!target)return;e.preventDefault();const trainId=e.dataTransfer.getData('text/plain')||dragging;clearTargets();if(get(trainId)){if(transferDraft?.trainId===trainId)applyTransferDrop(target.dataset.drop);else if(target.dataset.drop==='pool')remove(trainId);else place(trainId,target.dataset.drop);}finishDrag();});
 document.addEventListener('dragend',()=>{if(previewContext&&!previewContext.result.ok)feedback(previewContext.result.errors[0].message,'error');finishDrag();});
function toggleLocoArrivals(open){$('#loco-arrivals-panel').hidden=!open;$('#loco-arrivals-toggle').setAttribute('aria-expanded',String(open));if(open)$('#loco-arrivals-close').focus();else $('#loco-arrivals-toggle').focus();}
$('#loco-arrivals-rows').innerHTML=SCHEDULE.locoArrivals.map(l=>`<tr><td>${esc(l.number)}</td><td>${esc(l.name)}</td><td><strong>${hh(l.arrival)}</strong></td></tr>`).join('');
$('#loco-arrivals-toggle').addEventListener('click',()=>toggleLocoArrivals($('#loco-arrivals-panel').hidden));
$('#loco-arrivals-close').addEventListener('click',()=>toggleLocoArrivals(false));
document.addEventListener('click',e=>{if(!$('#loco-arrivals-panel').hidden&&!e.target.closest('#loco-arrivals-panel,#loco-arrivals-toggle')){$('#loco-arrivals-panel').hidden=true;$('#loco-arrivals-toggle').setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#loco-arrivals-panel').hidden){toggleLocoArrivals(false);e.preventDefault();e.stopImmediatePropagation();}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('fullscreen-fallback')){document.body.classList.remove('fullscreen-fallback');syncFullscreen();}if(e.target.closest('input,select,textarea,dialog'))return;if(e.key==='Delete'&&selected){e.preventDefault();remove(selected);}if(e.key==='Escape'){transferDraft=null;selected=null;render();}});
render();save();syncFullscreen();
})();

// Referensi aktual: REKAP SF KA DAO JAKK.pdf, 52 perjalanan; terpisah dari DAOEngine.
(function(){
'use strict';
const SF_DUKSAR = [{"number":"1","name":"Anggrek","direction":"datang","partner":"4","total":11,"components":[{"type":"T","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"3","name":"Anggrek","direction":"datang","partner":"2","total":11,"components":[{"type":"T","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"13","name":"Argo Lawu","direction":"datang","partner":"14","total":11,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":7},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"15","name":"Argo Dwipangga","direction":"datang","partner":"16","total":11,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":7},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"17","name":"Muria","direction":"datang","partner":"18","total":11,"components":[{"type":"K1 SS(NG)","count":9},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"19","name":"Muria","direction":"datang","partner":"20","total":11,"components":[{"type":"K1 SS(NG)","count":9},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"25","name":"Muria","direction":"datang","partner":"26","total":11,"components":[{"type":"K1 NI","count":9},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"29","name":"Taksaka","direction":"datang","partner":"34","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"33","name":"Taksaka","direction":"datang","partner":"32","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"35","name":"Anggrek","direction":"datang","partner":"36","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"41","name":"Pandalungan","direction":"datang","partner":"138","total":11,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1},{"type":"B/BP","count":1}],"sourcePage":1},{"number":"45","name":"Pandalungan 2","direction":"datang","partner":"46","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"49","name":"Gajayana","direction":"datang","partner":"132","total":11,"components":[{"type":"K1 LUX 26","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":1},{"number":"51","name":"Brawijaya","direction":"datang","partner":"52","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"53","name":"Brawijaya","direction":"datang","partner":"54","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"55","name":"Anggrek","direction":"datang","partner":"58","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"57","name":"Anggrek","direction":"datang","partner":"56","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"59","name":"Manahan","direction":"datang","partner":"62","total":11,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"61","name":"Manahan","direction":"datang","partner":"60","total":11,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"71F","name":"Purwojaya","direction":"datang","partner":"64F","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":1},{"number":"75F","name":"Borobudur","direction":"datang","partner":"76F","total":10,"components":[{"type":"K1 (NG)","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"79F","name":"Gajayana Fakultatif","direction":"datang","partner":"80F","total":10,"components":[{"type":"K1 (NG)","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"125","name":"Batavia","direction":"datang","partner":"126","total":10,"components":[{"type":"K1 SS(NG)","count":4},{"type":"K3 SS(NG)","count":4},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"127","name":"Pangandaran","direction":"datang","partner":"130","total":10,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":3},{"type":"K3 SS","count":4},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"133","name":"Parahyangan","direction":"datang","partner":"50","total":11,"components":[{"type":"K1 LUX 26","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"137","name":"Parahyangan","direction":"datang","partner":"42","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"2","name":"Anggrek","direction":"berangkat","partner":"3","total":11,"components":[{"type":"T","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"4","name":"Anggrek","direction":"berangkat","partner":"1","total":11,"components":[{"type":"T","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"14","name":"Argo Lawu","direction":"berangkat","partner":"13","total":11,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":7},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"16","name":"Argo Dwipangga","direction":"berangkat","partner":"15","total":11,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":7},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"18","name":"Muria","direction":"berangkat","partner":"17","total":11,"components":[{"type":"K1 SS(NG)","count":9},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"20","name":"Muria","direction":"berangkat","partner":"19","total":11,"components":[{"type":"K1 SS(NG)","count":9},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"26","name":"Muria","direction":"berangkat","partner":"25","total":11,"components":[{"type":"K1 NI","count":9},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"32","name":"Taksaka","direction":"berangkat","partner":"33","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"34","name":"Taksaka","direction":"berangkat","partner":"29","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"36","name":"Anggrek","direction":"berangkat","partner":"35","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"42","name":"Pandalungan","direction":"berangkat","partner":"137","total":11,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1},{"type":"B/BP","count":1}],"sourcePage":2},{"number":"46","name":"Pandalungan 2","direction":"berangkat","partner":"45","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"50","name":"Gajayana","direction":"berangkat","partner":"133","total":11,"components":[{"type":"K1 LUX 26","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":2},{"number":"52","name":"Brawijaya","direction":"berangkat","partner":"51","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"54","name":"Brawijaya","direction":"berangkat","partner":"53","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"56","name":"Anggrek","direction":"berangkat","partner":"57","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":2},{"number":"58","name":"Anggrek","direction":"berangkat","partner":"55","total":12,"components":[{"type":"K1 LUX 26","count":2},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"60","name":"Manahan","direction":"berangkat","partner":"61","total":11,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"62","name":"Manahan","direction":"berangkat","partner":"59","total":11,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"64F","name":"Purwojaya","direction":"berangkat","partner":"71F","total":10,"components":[{"type":"K1 NI","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"76F","name":"Borobudur","direction":"berangkat","partner":"75F","total":10,"components":[{"type":"K1 (NG)","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"80F","name":"Gajayana Fakultatif","direction":"berangkat","partner":"79F","total":10,"components":[{"type":"K1 (NG)","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"126","name":"Batavia","direction":"berangkat","partner":"125","total":10,"components":[{"type":"K1 SS(NG)","count":4},{"type":"K3 SS(NG)","count":4},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":3},{"number":"130","name":"Papandayan","direction":"berangkat","partner":"127","total":10,"components":[{"type":"K1 WIS","count":1},{"type":"K1 SS","count":3},{"type":"K3 SS","count":4},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3},{"number":"132","name":"Parahyangan","direction":"berangkat","partner":"49","total":11,"components":[{"type":"K1 LUX 26","count":1},{"type":"K1 SS(NG)","count":8},{"type":"M1 SS(NG)","count":1},{"type":"P SS(NG)","count":1}],"sourcePage":3},{"number":"138","name":"Parahyangan","direction":"berangkat","partner":"41","total":10,"components":[{"type":"K1 SS","count":8},{"type":"M1","count":1},{"type":"P","count":1}],"sourcePage":3}];
if(typeof document==='undefined')return;
const toggle=document.getElementById('sf-duksar-toggle'),panel=document.getElementById('sf-duksar-panel');
if(!toggle||!panel)return;
const search=document.getElementById('sf-duksar-search'),direction=document.getElementById('sf-duksar-direction');
const rows=document.getElementById('sf-duksar-rows'),count=document.getElementById('sf-duksar-count'),empty=document.getElementById('sf-duksar-empty');
const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderSF(){
 const query=search.value.trim().toLowerCase().replace(/^ka\s*/,'').replace(/^r(?=\d)/,'');
 const matches=SF_DUKSAR.filter(r=>(direction.value==='semua'||r.direction===direction.value)&&(!query||`${r.number} ${r.name} ${r.components.map(c=>c.type).join(' ')}`.toLowerCase().includes(query)));
 rows.innerHTML=matches.map(r=>`<tr><td><strong>KA ${esc(r.number)}</strong><span class="sf-duksar-name">${esc(r.name)}</span><small>${r.direction==='datang'?'Datang':'Berangkat'} · pasangan KA ${esc(r.partner)}<br>Rekap hal. ${r.sourcePage}</small></td><td class="sf-duksar-total"><strong>${r.total}</strong><span>kereta</span></td><td class="sf-duksar-composition">${r.components.map(c=>`<span class="sf-duksar-component">${c.count} ${esc(c.type)}</span>`).join('<span class="sf-duksar-plus" aria-hidden="true"> + </span>')}</td></tr>`).join('');
 count.textContent=`${matches.length} dari 52 perjalanan KA`;
 empty.hidden=matches.length>0;
}
function positionSF(){
 if(panel.hidden)return;
 const edge=12,viewportWidth=document.documentElement.clientWidth||innerWidth,rect=toggle.getBoundingClientRect(),width=Math.min(720,viewportWidth-edge*2);
 const left=Math.max(edge,Math.min(rect.right-width,viewportWidth-width-edge));
 const top=viewportWidth<=620?edge:Math.max(edge,Math.min(rect.bottom+10,innerHeight-280));
 panel.style.width=width+'px';panel.style.left=left+'px';panel.style.top=top+'px';
 panel.style.maxHeight=Math.max(160,innerHeight-top-edge)+'px';
}
function setOpen(open,returnFocus=false){
 panel.hidden=!open;toggle.setAttribute('aria-expanded',String(open));
 if(open){
  const locoPanel=document.getElementById('loco-arrivals-panel'),locoToggle=document.getElementById('loco-arrivals-toggle');
  if(locoPanel)locoPanel.hidden=true;if(locoToggle)locoToggle.setAttribute('aria-expanded','false');
  renderSF();positionSF();search.focus({preventScroll:true});
 }else if(returnFocus)toggle.focus({preventScroll:true});
}
toggle.addEventListener('click',()=>setOpen(panel.hidden));
document.getElementById('sf-duksar-close').addEventListener('click',()=>setOpen(false,true));
search.addEventListener('input',renderSF);direction.addEventListener('change',renderSF);
document.getElementById('loco-arrivals-toggle')?.addEventListener('click',()=>setOpen(false));
document.addEventListener('click',e=>{if(!panel.hidden&&!e.target.closest('#sf-duksar-panel,#sf-duksar-toggle'))setOpen(false);});
document.addEventListener('focusin',e=>{if(!panel.hidden&&!e.target.closest('#sf-duksar-panel,#sf-duksar-toggle'))setOpen(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){setOpen(false,true);e.preventDefault();e.stopImmediatePropagation();}},true);
window.addEventListener('resize',positionSF);window.addEventListener('scroll',positionSF,{passive:true});
document.addEventListener('fullscreenchange',()=>requestAnimationFrame(positionSF));
renderSF();
})();
