async function loadMenu(limitFree=false){
  try{
    const res=await fetch("menu.json");
    const data=await res.json();
    let html="";
    data.forEach(cat=>{
      html+=`<h4>${cat.cat}</h4><ul>`;
      let items=cat.items;
      if(limitFree) items=items.slice(0,3);
      items.forEach(i=>{
        html+=`<li>${i.name} – €${i.price}</li>`;
      });
      html+="</ul>";
    });
    return html;
  }catch(e){
    return "<p>Menu non disponibile</p>";
  }
}
