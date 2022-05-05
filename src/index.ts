let data = document.getElementById("data");
let btnSend = document.getElementById("Send");

btnSend.addEventListener("click", () => {
  //let posicionLlegada: number = data.value;
  switch (Number(data.value)) {
    case 1:
      console.log("entregar medalla de oro");
      break;
    case 2:
      console.log("entregar medalla de plata");
      break;
    case 3:
      console.log("entregar medalla de bronce");
      break;
    default:
      console.log("entregar mencion de participacion");
  }
});
