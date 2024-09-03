const jornal = document.getElementById("jornal");
const lblFile = document.getElementById("lblFile");
const interval = document.getElementById("interval");
const history = document.getElementById("history");
const btnSend = document.getElementById("btnSend");
const custonPgm = document.getElementById("custom-pgm");
const txtPgm = document.getElementById("txtPgm");

let file = "";
let intervalCount = 0;

document.onchange = validate;

function fillFileName(event) {
  inputFile = event.target;
  var reader = new FileReader();
  reader.readAsText(inputFile.files[0]);
  reader.onload = function () {
    file = reader.result;
  };
  reader.onerror = (event) => {
    console.log(event);
    if (event.target.error.name == "NotReadableError") {
      alert("O arquivo não pode ser lido!");
    }
  };

  if (inputFile.files.length > 0) {
    lblFile.innerText = inputFile.files[0].name;
  } else {
    lblFile.innerText = "Escolha o arquivo...";
  }
}

function validate() {
  if (jornal.selectedIndex > 0 && lblFile.innerText != "Escolha o arquivo...") {
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "true");
  }

  if (jornal.selectedIndex == 6) {
    custonPgm.classList.remove("d-none");
  } else {
    custonPgm.classList.add("d-none");
    txtPgm.value = "";
  }
}

function addInterval() {
  intervalCount++;
  fillIntervals();
}

function fillIntervals() {
  interval.innerHTML = "";
  for (let index = 0; index < intervalCount; index++) {
    interval.innerHTML += `
      <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text">Intervalo ${index + 1}</span>
          </div>
          <input id="timeIn${
            index + 1
          }"  type="time" class="form-control interval">
          <input id="timeOut${
            index + 1
          }" type="time" class="form-control interval">
          <div class="input-group-append">
              <button type="button" class="btn btn-danger" id="trash${
                index + 1
              }" onClick="deleteInterval(${index + 1})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-trash" viewBox="0 0 15 15">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                  </svg>
              </button>
          </div>
      </div>`;
  }
}

function deleteInterval(interval) {
  document.getElementById("interval").childNodes.forEach((value) => {
    value.remove();
  });
  intervalCount--;
  fillIntervals();
}

function addHistory() {
  history.innerHTML = `
    <div class="input-group input-group-sm mb-3">
        
        <input id="hAud" type="text" class="form-control history" onkeyup="validKey(event)">
        <div class="input-group-prepend">
            <span class="input-group-text">pts</span>
        </div>
        &nbsp;
        <input id="hSha" type="text" class="form-control history" onkeyup="validKey(event)">
        <div class="input-group-prepend">
            <span class="input-group-text">%</span>
        </div>
        <div class="input-group-append">
            <button type="button" class="btn btn-danger" onClick="deleteHistory()">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-trash" viewBox="0 0 15 15">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                </svg>
            </button>
        </div>
    </div>`;
}

function deleteHistory() {
  history.innerHTML = "";
}

function send() {
  let intervalArray = [];
  const intervals = document.getElementsByClassName("interval");
  for (let index = 0; index < intervals.length; index++) {
    intervalArray.push(intervals[index].value);
  }
  localStorage.setItem("file", file);
  localStorage.setItem("jornal", jornal.value);
  localStorage.setItem("intervals", JSON.stringify(intervalArray));
  const hAud = document.getElementById("hAud");
  const hSha = document.getElementById("hSha");

  if (hAud && hSha) {
    localStorage.setItem(
      "history",
      JSON.stringify({ haud: hAud.value, hsha: hSha.value })
    );
  } else {
    localStorage.removeItem("history");
  }
  if (txtPgm.value.trim() !== "") {
    localStorage.setItem("pgm", txtPgm.value.trim());
  } else {
    localStorage.removeItem("pgm");
  }

  window.location.href = "result/previa.html";
}

function validKey(e) {
  const validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "-",
    "+",
  ];
  if (!validKeys.includes(e.key)) {
    e.target.value = e.target.value.slice(0, -1);
  }
}
