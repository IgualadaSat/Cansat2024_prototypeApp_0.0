class Config{
  static button = document.getElementsByClassName("fase");
  static id = 0;
  static update(){
    Connex.msg = {text:Config.button[Config.id].innerText};
    Connex.conect();
  }
}

for(let i = 0;i < Config.button.length;i++){
  Config.button[i].addEventListener("click",()=>{
    Config.id = i;
    Config.update();
  });
}