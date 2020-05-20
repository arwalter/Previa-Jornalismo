let jornal = document.getElementById('jornal');
let lblFile = document.getElementById('lblFile');
let file = "";

document.onchange = validate;

function fillFileName(event) {
    inputFile = event.target;
    var reader = new FileReader();
    reader.readAsText(inputFile.files[0]);
    reader.onload = function () {
        file = reader.result;
    }
    reader.onerror = (event) => {
        console.log(event);
        if (event.target.error.name == "NotReadableError") {
            alert('O arquivo não pode ser lido!');
        }
    }

    if (inputFile.files.length > 0) {
        lblFile.innerText = inputFile.files[0].name;
    } else {
        lblFile.innerText = "Escolha o arquivo...";
    }
}

function validate() {
    if (jornal.selectedIndex > 0 && lblFile.innerText != "Escolha o arquivo...") {
        document.getElementById('btnSend').removeAttribute('disabled')
    } else {
        document.getElementById('btnSend').setAttribute('disabled', 'true');
    }
}

function send() {
    localStorage.setItem('file', file);
    localStorage.setItem('jornal', jornal.value);
    window.location.href = 'result/previa.html';
}