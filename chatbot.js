let chatbotOpen = false;
function toggleChatbot(){
  const box=document.getElementById("chatbot-box");
  chatbotOpen=!chatbotOpen;
  box.style.display=chatbotOpen?"flex":"none";
}
function sendMessage(){
  const input=document.getElementById("chatbot-text");
  const msg=input.value.trim();
  if(!msg) return;
  addMessage("user",msg);
  input.value="";
  setTimeout(()=>{
    let reply="Non ho capito, ripeti meglio.";
    if(msg.toLowerCase().includes("ciao")) reply="Ciao, sono GUIDO AI. Ti guido passo passo.";
    if(msg.toLowerCase().includes("premium")) reply="Con Premium hai il menù completo.";
    if(msg.toLowerCase().includes("logo")) reply="Puoi caricare un logo o fornire un link.";
    addMessage("bot",reply);
  },500);
}
function addMessage(sender,text){
  const box=document.getElementById("chatbot-messages");
  const div=document.createElement("div");
  div.classList.add("message",sender);
  div.textContent=text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
function guide(step){
  if(step===1) addMessage("bot","Benvenuto! Inserisci i tuoi dati.");
  if(step===4) addMessage("bot","Questa è l’anteprima demo. Premium sblocca tutto.");
}
