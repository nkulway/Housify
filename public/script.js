const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = formatFormData(data);
  httpRequest("http://localhost:3000/users/add", body, "POST").then((response) =>
    console.log(response)
  );
};


const createChore = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = formatFormData(data);
  httpRequest("http://localhost:3000/chores/add-chore", body, "POST").then((response) =>
    console.log(response)
  );
};


function formatFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
}


// function handleClick(e) {

//   const target = e.target;
//   let id = target.id;

//   if (target.tagName === "BUTTON" && target.innerText === "Delete") {
//     id = target.getAttribute('data-id');
//     httpRequest(`http://localhost:3000/users/${id}`, null, 'DELETE')
//     .then(res => console.log(res.message))
//     .catch(err => console.log(err))
//   } else if (target.tagName === 'BUTTON') {

//     const parent = target.parentElement;

//     const body = {
//       id: target.getAttribute('data-id'),
//       name: parent.querySelector('input').value
//     }
//     httpRequest('http://localhost:3000/users/edit', body, 'POST')
//     .then(res => console.log(res.message))
//     .catch(err => console.log(err))
//   } else {
//     target.innerHTML = `
//     <input value="${target.innerText}" />
//     <button data-id="${id}">Update</button>
//     <button data-id="${id}">Delete</button>
//     `;
//   }
// }

const form = document.getElementById("form");
// made it so this script is not executed before the page loads
if(form){
  form.addEventListener("submit", handleSubmit);
}

const addChore = document.getElementById("add");
// made it so this script is not executed before the page loads
if(addChore){
  addChore.addEventListener("submit", createChore);
}

async function httpRequest(url, body, method) {
  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 4),
  });
  return response.json();
}

  
const removeUser = document.querySelector(".delete");
removeUser.addEventListener("click", deleteData);




async function deleteData(url, body) {
  const member = document.querySelector('.delete');
  let id = member.id;
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 4),
  });
  return response.json();
}
