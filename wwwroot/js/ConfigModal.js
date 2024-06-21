// const ooooo = document.querySelector("#");
// const ooooo = document.querySelector("#");
// const oooo  = document.querySelector("$");
// const oooo  = document.querySelector("#");

// const tooooo = () => {
//     modal.class.toggle("");
//     Face.class.toggle("");
// };

// [openteste, closeteste, fadeteste].forEach((el) => {
//     el.addEventList("click", () => )
// })

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

$(document).ready(function () {
    $('#teste').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "teste1",
        "language": {
            "url": "//Endereço da Internet cdn.datatables"
        }
    });
});

// PERCEBER!!! Inicialmente incorporado em nossos documentos, este JavaScript
// o arquivo contém elementos que podem ajudá-lo a criar
// casos de uso no StackBlitz, por exemplo.
// Em um projeto real, adapte este conteúdo às suas necessidades.
//+++++++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript para documentos do Bootstrap (https://getbootstrap.com/)
 * Copyright 2011-2022 Os autores do Bootstrap
 * Direitos autorais 2011-2022 Twitter, Inc.
 * Licenciado sob a Licença Creative Commons Attribution 3.0 Unported.
 * Para obter detalhes, consulte https://creativecommons.org/licenses/by/3.0/.
 */

/* bootstrap global: falso */

(() => {
    'use strict'

    // --------
    // Dicas de ferramenta
    // --------
    // Instancia todas as dicas de ferramentas em um documento ou página StackBlitz

    document.querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(tooltip => {
            new bootstrap.Tooltip(tooltip)
        })

    // --------
    // Popovers
    // --------
    // Instancia todos os popovers em uma página docs ou StackBlitz

    document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
            new bootstrap.Popover(popover)
        })

    // -------------------------
    // Torradas
    // -------------------------
    // Usado pelo exemplo 'Placement' em docs ou StackBlitz

    const toastPlacement = document.getElementById('toastPlacement')
    if (toastPlacement) {
        document.getElementById('selectToastPlacement').addEventListener('change', function () {
            if (!toastPlacement.dataset.origina) {
                toastPlacement.dataset.originalClass = toastPlacement.className
            }

            toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
        })
    }

    // Instancia todos os toasts apenas em uma página docs
    document.querySelectorAll('.bd-example .toast')
        .forEach(toastNode => {
            const toast = new bootstrap.Toast(toastNode, {
                autohide: false
            })

            toast.show()
        })

    // Instancia todos os toasts apenas em uma página docs

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }

    // -------------------------
    // Alertas
    // -------------------------
    // Usado no exemplo 'Show live toast' em docs ou StackBlitz

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const alertTrigger = document.getElementById('liveAlertBtn')

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Nice, you triggered this alert message!', 'success')
        })
    }

    // --------
    // Carrosséis
    // --------
    // Instancia todos os carrosséis sem reprodução automática em uma página de documentos ou StackBlitz  

    document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
        .forEach(carousel => {
            bootstrap.Carousel.getOrCreateInstance(carousel)
        })

    // -------------------------
    // Cheques & Rádios
    // -------------------------
    // Exemplo de caixa de seleção indeterminada em documentos e StackBlitz

    document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
        .forEach(checkbox => {
            if (checkbox.id.includes('Indeterminate')) {
                checkbox.indeterminate = true
            }
        })

    // -------------------------
    // Links
    // -------------------------
    // Desabilitar links vazios apenas em exemplos de documentos

    document.querySelectorAll('.bd-content [href="#"]')
        .forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault()
            })
        })

    // -------------------------
    // Modal
    // -------------------------
    // Exemplo de 'conteúdo modal variável' modal em documentos e StackBlitz 

    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-bs-whatever')

            // Update the modal's content.
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyInput = exampleModal.querySelector('.modal-body input')

            modalTitle.textContent = `New message to ${recipient}`
            modalBodyInput.value = recipient
        })
    }

    // -------------------------
    // Fora da tela
    // -------------------------
    // Exemplo de 'componentes offcanvas' apenas em documentos
    const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    if (myOffcanvas) {
        myOffcanvas.forEach(offcanvas => {
            offcanvas.addEventListener('show.bs.offcanvas', event => {
                event.preventDefault()
            }, false)
        })
    }

})()