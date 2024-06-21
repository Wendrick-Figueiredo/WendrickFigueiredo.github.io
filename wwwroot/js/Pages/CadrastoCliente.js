// MASCARA DAS CAIXAS DE TEXT 
$('.CPF').mask('999.999.999-99');
$('.RG').mask('99.999.999-9');
$('.CNPJ').mask('999.999/9999-99');
$('.Celular').mask('(99) 99999-9999');
$('.Telefone').mask('(99) 9999-9999');
$('.CEPRua').mask('99999-999');
// $('.Valor').mask('9.99999');


// modal
const myModal = document.getElementById('myModal')
        const myInput = document.getElementById('myInput')

        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus()
})


// funções modal  

// selecione o botão que deve disparar o modal
var btn = document.querySelector('#BTNSALVAR');

// adicione um evento de clique ao botão
btn.addEventListener('click', function() {
  // selecione todos os campos de entrada que devem ser preenchidos
  var inputs = document.querySelectorAll('.form-control');
  
  // verifique se todos os campos têm um valor usando o método 'every'
  var todosPreenchidos = Array.prototype.every.call(inputs, function(input) {
    return input.value !== '';
  });
  
  // se todos os campos estiverem preenchidos, exiba o modal
  if (todosPreenchidos) {
    $('#meuModal').modal('show');
  } else {
    // caso contrário, exiba uma mensagem de erro
    alert('Por favor, preencha todos os campos antes de enviar.');
  }
});












// var bnt = document.querySelector('#btnSalva').addEventListener('click', dnd);

// function dnd(){

//     var inputTT = document.querySelectorAll('form-control');

//     // var todosPreenchidos = Array.prototype.every.call(inputs, function(input) {
//     //     return input.value !== '';
//     //   });

//     bnt = ( inputTT == null ) ? $('mymodal').show : ""

// }