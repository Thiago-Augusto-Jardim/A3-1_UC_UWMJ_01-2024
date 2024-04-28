function addUC() {
  let table = document.getElementById("ucTable");

  let row = document.createElement("tr");

  let cell = document.createElement("td");

  let newUC = prompt("Digite o nome da nova UC:");

  cell.textContent = newUC;

  row.appendChild(cell);

  table.appendChild(row);
}

// Validar CPF
function validateCPF() {
  let input = document.getElementById("cpf");
  let cpf = input.value;
  if (cpf) {
      let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!regex.test(cpf)) {
        alert("CPF inválido!");
        input.focus();
      } else {
        alert("CPF salvo com sucesso!"); 
      }
  }
}

// Validar e-mail
function validateEmail() {
  let input = document.getElementById("email");
  let email = input.value;
  if (email) {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(email)) {
        alert("E-mail inválido!");
        input.focus();
      } else {
        alert("E-mail salvo com sucesso!"); 
      }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  let ucTable = document.getElementById('ucTable');
  new Sortable(ucTable, {
    animation: 150,
    ghostClass: 'blue-background-class'
  });

  ucTable.querySelectorAll('tr').forEach((row, index) => {
    let upButton = row.querySelector('.up-button');
    let downButton = row.querySelector('.down-button');

    upButton.addEventListener('click', () => {
      if (index > 0) {
        ucTable.insertBefore(row, ucTable.children[index - 1]);
      }
    });

    downButton.addEventListener('click', () => {
      if (index < ucTable.children.length - 1) {
        ucTable.insertBefore(row.nextElementSibling, row);
      }
    });
  });
});

function addDescription() {
  let newDescription = document.getElementById('newDescription').value;
  let profileDescriptionList = document.getElementById('profileDescriptionList');

  let newListItem = document.createElement('li');
  newListItem.textContent = newDescription;

  profileDescriptionList.appendChild(newListItem);
}