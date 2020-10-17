let data = null;
let registerSensitive = false;
const resultParent = document.querySelector('#resultBlock');
const inputElement = document.querySelector('.form-control');

loadData();

function changeCheckbox() {
  this.registerSensitive = !this.registerSensitive;
};

function loadData() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://www.mrsoft.by/data.json";
  fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => {
      this.data = data.data;
      document.querySelector(".load").style.display = "none";
    });
};

function filterByLength() {
  const inputValue = +inputElement.value;
  let sortedData = [];
  if (!isNaN(inputValue)) {
    sortedData = this.data.filter(x => x.length >= inputValue);
    document.querySelector("#resultBlock p").innerHTML = sortedData.join(
      "<br>"
    );
    if (sortedData.length == 0) {
      let resultItem = document.createElement('p');
      resultItem.innerHTML = "Don't have a length of the word more than" + " " + inputValue;
      resultParent.appendChild(resultItem);
    };
  } else {
    let resultItem = document.createElement('p');
    resultItem.innerHTML = "Enter only a number, please";
    resultParent.appendChild(resultItem);
  };
};

function filterBySubstring() {
  const inputValue = inputElement.value;

  if (this.registerSensitive) {
    sortedData = this.data.filter(x => x.includes(inputValue));
    document.querySelector("#resultBlock p").innerHTML = sortedData.join(
      "<br>"
    );
    if (sortedData.length == 0) {
      let resultItem = document.createElement('p');
      resultItem.innerHTML = "Don't have a string with" + " " + inputValue;
      resultParent.appendChild(resultItem);
    };
  } else {
    sortedData = this.data.filter(x =>
      x.toLowerCase().includes(inputValue.toLowerCase())
    );
    document.querySelector("#resultBlock p").innerHTML = sortedData.join(
      "<br>"
    );
    if (sortedData.length == 0) {
      let resultItem = document.createElement('p');
      resultItem.innerHTML = "Don't have a string with" + " " + inputValue;
      resultParent.appendChild(resultItem);
    };
  };
};