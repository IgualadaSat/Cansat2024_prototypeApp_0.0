class Terminal{
  static content = document.querySelector("#terminal").value;
  static update(){
    Terminal.content = document.querySelector("#terminal").value;
    if(Connex.msg.text != Terminal.content){
      Connex.msg = {text:Terminal.content};
      Connex.conect();
      console.log("sexo")
    }
    console.log("cancer");
  }
}

let button = document.querySelector("#submit");
button.addEventListener("click",()=>{
  Terminal.update();
});