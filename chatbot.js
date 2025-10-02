// GUIDO AI - chatbot client-side
let chatbotOpen = false;
function toggleChatbot(){
  const box = document.getElementById("chatbot-box");
  chatbotOpen = !chatbotOpen;
  box.style.display = chatbotOpen ? "flex" : "none";
}
function sendMessage(){
  const input = document.getElementById("chatbot-text");
  const msg = input.value.trim();
  if(!msg) return;
  addMessage("user", msg);
  input.value="";
  setTimeout(()=>{
    let reply="Non ho capito, ripeti meglio.";
    if(msg.toLowerCase().includes("ciao")) reply="Ciao, sono GUIDO AI. Ti guido passo passo nella creazione.";
    if(msg.toLowerCase().includes("premium")) reply="Con Premium hai il menù completo e il sito definitivo.";
    if(msg.toLowerCase().includes("logo")) reply="Per inserire il logo potrai caricare un’immagine o fornire un link.";
    addMessage("bot", reply);
  },600);
}
function addMessage(sender,text){
  const box=document.getElementById("chatbot-messages");
  const div=document.createElement("div");
  div.style.margin="4px 0";
  div.innerHTML="<b>"+(sender==="user"?"Tu":"GUIDO AI")+":</b> "+text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
function guide(step){
  if(step===1) addMessage("bot","Benvenuto! Scegli il tipo di locale per iniziare.");
  if(step===2) addMessage("bot","Ora guarda i modelli demo e clicca 'Usa questo'.");
  if(step===3) addMessage("bot","Inserisci i tuoi dati: nome, indirizzo, WhatsApp.");
  if(step===4) addMessage("bot","Questa è la tua anteprima demo. Attiva Premium per sbloccare tutto.");
  if(step===5) addMessage("bot","Questa è la versione Premium, menù completo e pronto da pubblicare!");
}
