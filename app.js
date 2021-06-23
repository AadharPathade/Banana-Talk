var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(inputText){
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error){
    alert("Something wrong with server ! please try again later.");
}

function clickHandler(){
    var input = txtInput.value;
    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            var output = json.contents.translated;
            txtOutput.innerText = output;
        })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);
