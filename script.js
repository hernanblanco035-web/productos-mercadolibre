const products=[
 {name:"Auriculares Bluetooth Pro",cat:"Audio",price:"$39.999",rating:"4,7",icon:"🎧",desc:"Buena batería, conexión inalámbrica y micrófono integrado.",url:"https://meli.la/18KeDbr"},
 {name:"Celular Samsung Galaxy A16 128GB",cat:"Tecnología",price:"$304.000",rating:"4,6",icon:"📱",desc:"Celular Samsung Galaxy A16 de 128GB para uso diario, redes y multimedia.",url:"https://meli.la/1g28Y8c"},
 {name:"Mouse Gaming RGB",cat:"Gaming",price:"$24.999",rating:"4,8",icon:"🖱️",desc:"Sensor preciso y diseño pensado para sesiones largas.",url:"TU_ENLACE_DE_AFILIADO_3"},
 {name:"Teclado mecánico compacto",cat:"Gaming",price:"$49.999",rating:"4,7",icon:"⌨️",desc:"Formato compacto, switches mecánicos y retroiluminación.",url:"TU_ENLACE_DE_AFILIADO_4"},
 {name:"Parlante Bluetooth portátil",cat:"Audio",price:"$32.999",rating:"4,5",icon:"🔊",desc:"Portátil y práctico para escuchar música en cualquier lugar.",url:"TU_ENLACE_DE_AFILIADO_5"},
 {name:"Cargador rápido USB-C",cat:"Tecnología",price:"$17.999",rating:"4,8",icon:"🔌",desc:"Cargador compacto para dispositivos compatibles.",url:"TU_ENLACE_DE_AFILIADO_6"},
 {name:"Soporte para celular",cat:"Hogar",price:"$11.999",rating:"4,6",icon:"📲",desc:"Ideal para escritorio, videollamadas y contenido.",url:"TU_ENLACE_DE_AFILIADO_7"},
 {name:"Lámpara LED de escritorio",cat:"Hogar",price:"$21.999",rating:"4,7",icon:"💡",desc:"Iluminación regulable para estudiar, trabajar o jugar.",url:"TU_ENLACE_DE_AFILIADO_8"}
];

const grid=document.querySelector("#products"), count=document.querySelector("#resultCount"), empty=document.querySelector("#empty");
function render(list){
 grid.innerHTML=list.map(p=>`<article class="product">
   <div class="product-img">${p.icon}</div>
   <div class="product-body">
    <span class="tag">${p.cat}</span><h3>${p.name}</h3>
    <div class="stars">★★★★★ <span style="color:#697482">${p.rating}</span></div>
    <p>${p.desc}</p><div class="price">${p.price}</div>
    <a class="cta" href="${p.url}" target="_blank" rel="nofollow sponsored noopener">Ver en Mercado Libre</a>
   </div></article>`).join("");
 count.textContent=`${list.length} productos`;
 empty.hidden=list.length!==0;
}
function search(term=""){
 const q=term.trim().toLowerCase();
 render(!q?products:products.filter(p=>(p.name+" "+p.cat+" "+p.desc).toLowerCase().includes(q)));
 document.querySelector("#ofertas").scrollIntoView({behavior:"smooth"});
}
document.querySelector("#searchBtn").onclick=()=>search(document.querySelector("#searchInput").value);
document.querySelector("#searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")search(e.target.value)});
document.querySelectorAll("[data-search]").forEach(b=>b.onclick=()=>{document.querySelector("#searchInput").value=b.dataset.search;search(b.dataset.search)});
document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{document.querySelector("#searchInput").value=b.dataset.cat;search(b.dataset.cat)});
render(products);
