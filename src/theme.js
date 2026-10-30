export const THEME_KEY='civsync-theme';
export const themes=[
 {id:'original',name:'Original',description:'Warm ivory and forest green.',colors:['#f8f9f4','#245d49','#a6b987'],background:'#f8f9f4'},
 {id:'dark',name:'Dark',description:'Soft charcoal with calm green accents.',colors:['#101517','#1c2425','#a4c9b0'],background:'#101517'},
 {id:'midnight',name:'Midnight',description:'Midnight black, soft navy and a touch of orange.',colors:['#080e18','#14243b','#e4a36d'],background:'#080e18'}
];
export function validTheme(id){return themes.some(theme=>theme.id===id)?id:'original';}
export function readTheme(){try{return validTheme(localStorage.getItem(THEME_KEY));}catch{return 'original';}}
export function applyTheme(id){
 const theme=themes.find(theme=>theme.id===validTheme(id));
 document.documentElement.dataset.theme=theme.id;
 document.documentElement.style.colorScheme=theme.id==='original'?'light':'dark';
 document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme.background);
 return theme.id;
}
