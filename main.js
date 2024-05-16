let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let nombreApodo = document.getElementById("nombreApodo");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let info= document.getElementById("info");
let fichasRecomendacion = document.getElementById("fichasReferidos");
let sistemaRecomendacion = document.getElementById("sistemaRecomendacion");
let textoRecomendacion = document.getElementById("textoRecomendacion");
let recomendacion = document.getElementById("recomendacion");
let retiro = document.getElementById("retiro");
let retiroExitoso = document.getElementById("retiroExitoso");
let premioEnviado = document.getElementById("premioEnviado");
let solicitarUsuario = document.getElementById("solicitarUsuario");
let demoraCargas = document.getElementById("demoraCargas");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let usuario2 = document.getElementById("usuario2");
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("pad-button-reg2");
let span2 = document.getElementsByClassName("close2")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  globalThis.inputNombre = document.getElementById("name").value;
  globalThis.inputCBU = document.getElementById("number").value;
  globalThis.inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `*DATOS DE LA CUENTA* 💳

▪️ *Nombre del Titular:* ${inputNombre}
▪️ *CBU:* ${inputCBU}
▪️ *Alias:* ${inputAlias}

✅ *ENVIAR USUARIO ASIGNADO DEBAJO DEL COMPROBANTE PARA AGILIZAR LA CARGA*

INGRESÁ ACÁ PARA JUGAR:
https://citygame.casino 🎲`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

nombreApodo.addEventListener("click", () => {
  const texto = `Buenas! Para comenzar a jugar con nosotros solicito su nombre o apodo que le gustaría tener… 🃏`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `*Registrad@:* ✅ 

👤 *Usuario:* ${user}
🔑 *Clave:* vip123
 
Sitio web: https://citygame.casino 🎲`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});


bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario2").value;
  console.log(user);

  const texto = `Bienvenido/a a...
♠️ *MONTANA 22* ♠️
Tu casino online de confianza 🤜🏼🤛🏼

💥 *DUPLICAMOS TU PRIMER CARGA* 💥

👤 *Usuario:* ${user}
🔑 *Clave:* vip123

*Carga mínima: $1.500*
*Retiro mínima: $3.000*
(Si lo desea, consultar sistema de pagos)

*🚨RECORDÁ SOLICITAR SIEMPRE  CBU VIGENTE SEGUNDOS ANTES DE TRANSFERIR 🚨*
(De lo contrario puede perder su dinero)

*DATOS DE LA CUENTA* 💳
*Nombre del titular:* *${inputNombre}*
*CBU:* *${inputCBU}*
*Alias:* *${inputAlias}*

✅ *Enviar debajo comprobante y usuario asignado*

*Sitio web:* https://citygame.casino 🎲`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario2").value = "";

  modal2.style.display = "none";
});

info.addEventListener("click", () => {
  const texto = `Bienvenido/a a...
♠️ *MONTANA 22* ♠️
Tu casino online de confianza 🤜🏼🤛🏼

*Sitio web:* https://citygame.casino 🎲

💥 *DUPLICAMOS TU PRIMER CARGA* 💥

*Carga mínima: $1.500*
*Retiro mínimo: $3.000*
(Si lo desea, consultar sistema de pagos)

Para generar usuario dejanos debajo tu nombre completo o apodo... ⤵️⤵️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

fichasReferidos.addEventListener("click", () => {
  const texto = `⚜️ *FICHAS CARGADAS* ⚜️
LE DESEAMOS MUCHA SUERTE!!

💸 *¿QUERÉS OBTENER 1500 FICHAS GRATIS?* 💸
▪️ Solicitá nuestro texto de referidos para poder compartir con tus conocidos!!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaRecomendacion.addEventListener("click", () => {
  const texto = `🫂 *SISTEMA DE REFERIDOS* 🫂

*¿Cómo invitar a tus amigos y obtener 1.500 fichas?* 🤑
▪️ Compartiendo el siguiente texto que te enviaremos debajo, completá los paréntesis así podemos verificar que haya venido de tu parte..`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

textoRecomendacion.addEventListener("click", () => {
  const texto = `(TU USUARIO) te REGALA un 100% de bonificación en tu primer carga 🎁🤑 , solo tenés que llenar los (Paréntesis) en el texto que se crea al ingresar al siguiente link:

wa.link/`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

recomendacion.addEventListener("click", () => {
  const texto = `🫂 *Sistema de Referidos* 🫂
¡Recibimos una recomendación tuya! 🤩🙌🏼 

*¿Cómo canjear tus fichas?*
Simplemente escríbenos apartir de las 10 am a 12 am  para solicitar tus fichas correspondientes.
A continuación, envíanos los números de tus amigos a quienes invitaste para que podamos verificar que hayan jugado.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `⚜️ *Para retirar tu dinero completa los siguientes datos...* ⚜️
▪️Nombre completo del titular que recibe la transferencia
▪️Su CBU o Alias
▪️Monto a retirar

🚨 Recordatorio: *LA BONIFICACIÓN NO ES RETIRABLE* 🚨

💸 *¿Cómo saber cuanto puedo retirar?* 💸
▪️Presiona el usuario o icono de perfil en la parte superior derecha de la pantalla y chequear el apartado *BALANCE QUE PUEDE RETIRAR*

Una vez que retiramos las fichas, el mismo sistema de la página da de baja la bonificación activa en el usuario.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `✅ FICHAS RETIRADAS ✅ 

*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 

*POR FAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO, SEA PACIENTE PORFAVOR*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `💸*PREMIO ENVIADO*💸
Felicitaciones!! Que disfrutes tu premio 🥳

Mucha gracias por confiar en *MONTANA 22* ♥️
Recordá que brindamos *30% de bonificación* en todas tus cargas`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarUsuario.addEventListener("click", () => {
  const texto = `*Recordá porfavor 🙏🏼 ENVIAR DEBAJO DEL COMPROBANTE TU USUARIO ASIGNADO 🙏🏼 para agilizar la carga de fichas*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demoraCargas.addEventListener("click", () => {
  const texto = `Le comento que al estar en publicidad podemos tener un poco de *demora*, *SEA PACIENTE PORFAVOR* 🙏🏼vamos a responderle lo mas rápido posible. Contestamos por órden de llegada, si envía muchos mensajes luego del comprobante se posicióna *ÚLTIMO EN LA FILA!!!*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `🚫 Tu transferencia todavía no impactó 🚫

*Tené en cuenta que a veces las transferencias se demoran.*  🙏🏻

*Por favor sea paciente, en cuanto impacte en nuestra cuenta, las fichas serán cargadas* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Por problemas e inconvenientes con la plataforma le solicitamos que *se comuníque con el whatsapp de soporte*. 📲

Puede encontrar el contacto en el menú de nuestra página, en la parte inferior del lado izquierdo donde figuran tres rayitas ☺️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `⚜️ *SISTEMA DE PAGOS MONTANA* ⚜️

Horarios de Retiro: 
*De 12:00hs a 12:00hs*
Límites de Retiro:
▪️ *Mínimo de Retiro: $3.000*
▪️ *Máximo de Retiro por Día: $50.000*

‼ *IMPORTANTE* ‼

▪️ Usuario que retire desde $2.000 a $20.000 puede realizar un retiro mas, luego se deben cumplir 24hs para volver a retirar.
▪️ Para retiros superiores a $20.000, se permite solo un retiro cada 24 horas.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

btn2.onclick = function () {
  modal2.style.display = "block";
  usuario2.focus();
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    event.target.style.display = "none";
  }
};
