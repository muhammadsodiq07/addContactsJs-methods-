let elInput = document.querySelector('#formOne');
let elGroup = document.querySelector(".btn-group");
let elList = document.querySelector(".list-group");
let elName1 = document.querySelector("#name1");
let elContact = document.querySelector("#cont");
let elType = document.querySelector("#type");

let newArr = [
  {
    name1: 'Khojiakbar:',
    cont: '+998998893223',
    type: 'Friends'
  },
   {
    name1: 'Ulugbek:',
    cont: '+998998893223',
    type: 'Friends'
  },
   {
    name1: 'Akmal:',
    cont: '+998998893223',
    type: 'Family'
  },
  {
    name1: 'Muhammadsodiq:',
    cont: '+998998893223',
    type: 'Family'
  }
]
let listArr = [];

elInput.addEventListener('submit', (e) => {
  e.preventDefault();

  newArr.push({
    name1: elName1.value,
    cont: elContact.value,
    type: elType.value,
  });

  listArr = newArr.map((item) => {
    return `
    <li class="list-group-item w-75">
    ${item.name1}:
    <span class="number">Phone number: <b>${item.cont}</b></span>
    <span class="float-end badge bg-dark">${item.type}</span>
    </li>

    `
  });

  elList.innerHTML = listArr.join("");
  elName1.value = "";
  elContact.value = "";
  elType.value = "";
});



elGroup.addEventListener("click", (e) => {
    let newTypeArr = newArr.filter((item) => {
      return item.type == e.target.textContent;
    });
    if(e.target.textContent == "All") {
      newTypeArr = newArr;
    }
    let listArrOne = newTypeArr.map((item) => {
      return `
      <li class="list-group-item">
      ${item.name1}
      <span class="number">Phone number: <b>${item.cont}</b></span>
      <span class="float-end badge bg-dark">${item.type}</span>
      </li>
      `
    });

    elList.innerHTML = listArrOne.join("");
});