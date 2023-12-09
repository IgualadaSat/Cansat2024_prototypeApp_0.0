class Terminal{
  static content = document.querySelector("#command-line")!=null?document.querySelector("#command-line").value:0;
  static terminal = document.querySelector("#terminal")!=null?document.querySelector("#terminal"):0;
  static update(){
    Terminal.content = document.querySelector("#command-line").value;
    if(Terminal.content == "clear")
      Terminal.terminal.innerHTML = "";
    Connex.msg = {text:Terminal.content};
    Connex.conect();

    Terminal.recive();
  }
  static recive(){
    fetch('/terminal', {
      method: 'POST'
    }).then(response => {
      response.json().then(out => {
        Terminal.terminal.innerHTML = "~$ "+out.text+"\n"+Terminal.terminal.innerHTML;
      })
    }).catch(error => console.error('Error al enviar el texto:', error));
  }
}

let button = document.querySelector("#submit")!=null?document.querySelector("#submit"):0;
if(button!=0)
  button.addEventListener("click",()=>{
    Terminal.update();
  });