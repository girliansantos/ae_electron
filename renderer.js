function dropdown_function(id){
    document.getElementById(id).classList.toggle('show')
    dropdowns = document.getElementsByClassName("dropdown-content")
    for (i = 0; i < dropdowns.length; i++){
      if (dropdowns[i].id != id){
        dropdowns[i].classList.remove('show')
      }
    }
}

function openPage(pagina){
  console.log('Abrindo página '+pagina)
  // aqui é a parte de enviar solicitação para o ipcMain realizar alguma ação, via preload.js
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}