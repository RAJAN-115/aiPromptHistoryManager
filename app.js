const promptHistory = [];
const addButton = document.getElementById('add-prompt-btn');
const promptInput = document.getElementById('prompt-input');
const history = document.getElementById('history-container');
const removeButton = document.getElementById('remove-prompt-btn');

addButton.addEventListener('click', function () {
  // Instructions go
  promptHistory.push(promptInput.value);
  displayPrompts();
  promptInput.value = '';
});

removeButton.addEventListener('click', () => {
  promptHistory.pop();
  // This code perfectly draws our list
  displayPrompts();
});

function displayPrompts() {
  history.innerHTML = ''; // This clears the container
  for (let prompt of promptHistory) {
    let p = document.createElement('p');
    p.textContent = prompt;
    history.append(p);
  }
}
