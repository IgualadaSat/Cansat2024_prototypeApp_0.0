class Terminal{
  static content = document.querySelector("#command-line").value;
  static terminal = document.querySelector("#terminal");
  static update(){
    Terminal.content = document.querySelector("#command-line").value;
    if(Terminal.content == "clear")
      Terminal.terminal.innerHTML = "";
    Connex.msg = {text:Terminal.content};
    Connex.conect();
  }
}

let button = document.querySelector("#submit");
button.addEventListener("click",()=>{
  Terminal.update();
});