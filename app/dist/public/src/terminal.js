class Terminal{
  static content = document.querySelector("#terminal").innerHTML;
  static update(){
    Terminal.content = document.querySelector("#terminal").innerHTML;
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