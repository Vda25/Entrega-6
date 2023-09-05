let btn1; let btn2;

btn1 = document.getElementById("btn_1");
  btn1.addEventListener("click",enviar);//Acción de presion de botón

function enviar(event){
  frm = document.getElementById("formulario");
    if(frm.checkValidity())
    {
      txt = document.getElementById("boletin");
      txt.value = "";
      alert("¡Gracias por registrarte,Te estaremos contactando proximante!");
      event.preventDefault();  
    }
  }


window.onload = ()=>{
 localStorage.setItem("usuario","admin");
 localStorage.setItem("clave","12345");
  btn2 = document.getElementById("btn_enviar");
  btn2.addEventListener("click",login);
}

function login(event){
  let frm_user = document.getElementById("user");
  let frm_password = document.getElementById("password");
  let usr = localStorage.getItem("usuario");
  let psw = localStorage.getItem("clave");

  event.preventDefault();
  
  if(frm_user.value==usr && frm_password.value==psw){
    
    location.href = "https://www.upb.edu.co";
  }
  else{
    alert("Verifica los datos")
  }
}