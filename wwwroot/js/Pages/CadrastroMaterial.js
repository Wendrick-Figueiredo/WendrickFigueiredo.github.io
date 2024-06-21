// Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



function excluir_e(){

}

// Editar Tabela
function habilitarEdicao() {
  var tabela = document.querySelector(".table-sub");
  var celulas = tabela.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].setAttribute("contenteditable", "true");
  }
}

function desabilitarEdicao() {
  var tabela = document.querySelector(".table-sub");
  var celulas = tabela.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].removeAttribute("contenteditable");
  }
}


function procurar_e(){

}

function novo_e(){

}

