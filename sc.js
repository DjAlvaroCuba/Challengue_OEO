// sc.js

function encrypt(text) {
    let encryptedText = text.replace(/e/ig, 'enter')
                            .replace(/é/ig, 'enter')
                            .replace(/i/ig, 'imes')
                            .replace(/í/ig, 'imes')
                            .replace(/a/ig, 'ai')
                            .replace(/á/ig, 'ai')
                            .replace(/o/ig, 'ober')
                            .replace(/ó/ig, 'ober')
                            .replace(/u/ig, 'ufat')
                            .replace(/ú/ig, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/ig, 'e')
                            .replace(/imes/ig, 'i')
                            .replace(/ai/ig, 'a')
                            .replace(/ober/ig, 'o')
                            .replace(/ufat/ig, 'u');
    return decryptedText;
}

document.getElementById('encrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    if (inputText === "") {
        showModal("Por favor, ingrese un texto para encriptar.");
        document.getElementById('Texto-encriptado').value = "";
    } else {
        const encryptedText = encrypt(inputText);
        document.getElementById('Texto-encriptado').value = encryptedText;
        document.getElementById('no-message').style.display = "none";
    }
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    if (inputText === "") {
        showModal("Por favor, ingrese un texto para desencriptar.");
        document.getElementById('Texto-encriptado').value = "";
    } else {
        const decryptedText = decrypt(inputText);
        document.getElementById('Texto-encriptado').value = decryptedText;
        document.getElementById('no-message').style.display = "none";
    }
});

function showModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeButton = document.querySelector(".close-button");

    modalMessage.textContent = message;
    modal.style.display = "flex";

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function copyTextToClipboard() {
    const textarea = document.getElementById('Texto-encriptado');
    const copyMessage = document.getElementById('copy-message');
    
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    
    document.execCommand('copy');
    
  
    window.getSelection().removeAllRanges();

    copyMessage.classList.add('show');

    setTimeout(function() {
        copyMessage.classList.remove('show');
    }, 2000); 
}

document.getElementById('copy-button').addEventListener('click', copyTextToClipboard);