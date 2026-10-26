export const cities = [
 {id:'bengaluru',city:'Bengaluru',state:'Karnataka',area:'Indiranagar',address:'Indiranagar, Bengaluru, Karnataka',ward:'Ward 80',aliases:['bengaluru','bangalore','indiranagar','560038'],meeting:'Saturday, 14 November · 10:00 AM',venue:'Indiranagar Community Hall'},
 {id:'delhi',city:'New Delhi',state:'Delhi',area:'Greater Kailash',address:'Greater Kailash, New Delhi',ward:'Ward 173',aliases:['delhi','greater kailash','110048'],meeting:'Sunday, 15 November · 11:00 AM',venue:'Greater Kailash Community Centre'},
 {id:'mumbai',city:'Mumbai',state:'Maharashtra',area:'Bandra West',address:'Bandra West, Mumbai, Maharashtra',ward:'H West ward',aliases:['mumbai','bandra','400050','bombay'],meeting:'Saturday, 21 November · 10:30 AM',venue:'Bandra Community Hall'}
];
export function matchCity(query){const q=query.trim().toLowerCase();if(!q)return null;return cities.find(c=>c.aliases.some(a=>q.includes(a)))||null;}
export const representatives = [
 {id:'ananya',name:'Ananya Rao',initials:'AR',role:'Municipal councillor',level:'Local',party:'Civic Alliance',alignment:'Ruling coalition',portrait:'woman1',color:'#e6e9dc',promises:12,delivered:7,tenure:'2023 – 2028',about:'Ananya’s demo portfolio focuses on safer streets, better waste collection, and accessible neighbourhood services.',email:'ananya.rao@example.org',phone:'+91 00000 00001',hours:'Monday & Thursday · 10 AM – 1 PM'},
 {id:'vikram',name:'Vikram Desai',initials:'VD',role:'Member of Legislative Assembly',level:'State',party:'People’s Forum',alignment:'Opposition',portrait:'man',color:'#f0e6d9',promises:18,delivered:9,tenure:'2023 – 2028',about:'Vikram’s demo portfolio covers public transport, school infrastructure, and transparency in state spending.',email:'vikram.desai@example.org',phone:'+91 00000 00002',hours:'Tuesday & Friday · 11 AM – 2 PM'},
 {id:'meera',name:'Meera Shah',initials:'MS',role:'Member of Parliament',level:'Central',party:'Civic Alliance',alignment:'Ruling coalition',portrait:'woman2',color:'#e5e6ee',promises:15,delivered:10,tenure:'2024 – 2029',about:'Meera’s demo portfolio includes urban infrastructure, affordable healthcare, and citizen access to public information.',email:'meera.shah@example.org',phone:'+91 00000 00003',hours:'Wednesday · 10 AM – 2 PM'}
];
export const promises = [
 {id:1,title:'Better roads. Smoother everyday journeys.',short:'Resurface 12 neighbourhood roads',description:'Resurface 12 priority roads, with accessible pavements and clearly marked pedestrian crossings.',rep:'ananya',category:'Infrastructure',status:'In progress',progress:67,update:'8 of 12 demo roads completed',date:'20 Oct 2026'},
 {id:2,title:'A healthier neighbourhood for everyone.',short:'Upgrade primary health centres',description:'Improve equipment, extend consultation hours, and create accessible entrances at three health centres.',rep:'ananya',category:'Healthcare',status:'Delivered',progress:100,update:'All 3 demo centres upgraded',date:'18 Oct 2026'},
 {id:3,title:'Public money, in plain sight.',short:'Publish monthly ward expenditure',description:'Publish a readable monthly statement of ward allocations, contracts, and expenditure.',rep:'ananya',category:'Transparency',status:'Not started',progress:0,update:'No demo progress reported',date:'15 Oct 2026'},
 {id:4,title:'More buses. Less time waiting.',short:'Add 25 electric buses to local routes',description:'Expand the electric bus fleet on high-demand corridors and improve evening frequency.',rep:'vikram',category:'Transport',status:'In progress',progress:48,update:'12 of 25 demo buses introduced',date:'19 Oct 2026'},
 {id:5,title:'Better classrooms, brighter futures.',short:'Renovate 8 government schools',description:'Repair classrooms and provide reliable drinking water, accessible toilets, and digital learning spaces.',rep:'vikram',category:'Education',status:'Delivered',progress:100,update:'8 demo school renovations complete',date:'12 Oct 2026'},
 {id:6,title:'Healthcare within reach.',short:'Open two community health clinics',description:'Establish two additional clinics with free primary consultations and essential diagnostic services.',rep:'meera',category:'Healthcare',status:'In progress',progress:50,update:'1 of 2 demo clinics opened',date:'21 Oct 2026'},
 {id:7,title:'A more connected city.',short:'Secure funding for suburban rail',description:'Raise the proposed rail connection in Parliament and seek funding through the appropriate central programme.',rep:'meera',category:'Transport',status:'Delivered',progress:100,update:'Illustrative funding commitment recorded',date:'10 Oct 2026'}
];
export const votes=[
 {id:1,title:'Public transport expansion',rep:'vikram',vote:'For',date:'16 Oct 2026',body:'State Legislative Assembly',description:'Illustrative motion to expand electric bus services and improve accessible bus stops.'},
 {id:2,title:'Monthly public budget disclosures',rep:'vikram',vote:'Abstained',date:'8 Oct 2026',body:'State Legislative Assembly',description:'Illustrative proposal to require a monthly, publicly accessible statement of departmental spending.'},
 {id:3,title:'Urban healthcare access',rep:'meera',vote:'For',date:'22 Sep 2026',body:'Lok Sabha',description:'Illustrative proposal to improve access to primary healthcare in underserved urban neighbourhoods.'},
 {id:4,title:'Ward parking fee increase',rep:'ananya',vote:'Against',date:'12 Oct 2026',body:'Municipal council',description:'Illustrative council motion to increase fees for residential street parking.'}
];
export const projects=[
 {id:1,name:'Neighbourhood road improvements',category:'Roads & footpaths',amount:110,spent:76,color:'#245b4e',progress:69,status:'In progress',description:'Road resurfacing and pedestrian improvements across 12 neighbourhood streets.',source:'Illustrative municipal development allocation'},
 {id:2,name:'Clean water, closer to home',category:'Water & sanitation',amount:80,spent:58,color:'#9ebc8a',progress:73,status:'In progress',description:'Replace ageing water pipes and improve drainage at six priority locations.',source:'Illustrative local development allocation'},
 {id:3,name:'Spaces that bring us together',category:'Parks & public spaces',amount:50,spent:26,color:'#e2b875',progress:52,status:'In progress',description:'Restore two neighbourhood parks with accessible paths, lighting, and seating.',source:'Illustrative community infrastructure allocation'}
];
export const initialQuestions=[
 {id:'q1',text:'When will the footpaths near the metro station be made accessible?',category:'Infrastructure',level:'Local',votes:124,author:'A neighbour',city:'bengaluru',created:1792756800000},
 {id:'q2',text:'Can we get more frequent buses after 9 PM?',category:'Transport',level:'State',votes:87,author:'A neighbour',city:'bengaluru',created:1792843200000},
 {id:'q3',text:'How can residents track the progress of local development projects?',category:'Transparency',level:'Local',votes:56,author:'A neighbour',city:'bengaluru',created:1792929600000},
 ...['delhi','mumbai'].flatMap(city=>[{id:city+'1',text:'Can we improve street lighting around our neighbourhood parks?',category:'Infrastructure',level:'Local',votes:42,author:'A neighbour',city,created:1792756800000},{id:city+'2',text:'What is the timeline for more accessible public transport?',category:'Transport',level:'State',votes:31,author:'A neighbour',city,created:1792843200000}])
];
export function money(lakhs){return lakhs>=100?'₹'+(lakhs/100).toFixed(2).replace(/0$/,'')+' cr':'₹'+lakhs+' lakh';}
