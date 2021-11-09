
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const body = formatFormData(data);
//     postData("http://localhost:3000/users/add", body).then((response) =>
//       console.log(response)
//     );
//   };

//   function formatFormData(fd) {
//     const data = {};
//     for (let key of fd.keys()) {
//       data[key] = fd.get(key);
//     }
//     return data;;
//   }

// //   const form = document.getElementById("form");
// // form.addEventListener("submit", handleSubmit);

//   async function postData(url, body) {
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body, null, 4)
//     });
//     return response.json();
//   }

//   const contactList = document.getElementById("contactList");
//   contactList.addEventListener("click", handleClick);

  // function handleClick(e) {
  //   const target = e.target;
  //   const id = target.id;

  //   if (target.tagName === 'BUTTON'){
  //     const parent = target.parentElement
  //     const body = {
  //       id: target.getAttribute('data-id'),
  //       name: parent.querySelector('input').value
  //     }
  //     deleteRow(`http://localhost:3000/users/edit`, body)
  //         .then(res => console.log(res.message))
  //         .catch(err => console.log(err));
  //   } else {
  //     target.innerHTML = `
  //     <input value="${target.innerText}" />
  //     <button data-id="${id}">Update</button>
  //   `;
  //   }}

// function handleClick(e) {
//   const target = e.target;
//   const id = target.id;

//   if (target.tagName === "BUTTON") {
//     const parent = target.parentElement;
//     const body = {
//       id: target.getAttribute("data-id"),
//         };
//     deleteData(`http://localhost:3000/users/leave`, body)
//       .then((res) => console.log(res.message))
//       .catch((err) => console.log(err));
//   } else {
//     target.innerHTML = `
//     <input value="${target.innerText}" />
//     <button data-id="${id}">Delete</button> 
//   `;
//   }
// }

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = formatFormData(data);
  postData("http://localhost:3000/users/add", body).then((response) =>
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

const form = document.getElementById("form");
// made it so this script is not executed before the page loads
if(form){
  form.addEventListener("submit", handleSubmit);
}

async function postData(url, body) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 4),
  });
  return response.json();
}

// const contactList = document.getElementById("contactList");
// contactList.addEventListener("click", handleClick);
// const deleteUser = () => {
//   axios.deleteData(`http://localhost:3000/users/:id`)
// }

// function handleClick(e) {
//     const target = e.target;
//     const id = target.id;
  
//     if (target.tagName === "BUTTON") {
//       const body = {
//         id
//           };
//       deleteData(`http://localhost:3000/users/:id`, body)
//         .then((res) => console.log(res.message))
//         .catch((err) => console.log(err));
//     }
    
//     }
  

const removeUser = document.querySelector(".delete");
removeUser.addEventListener("click", deleteData);


function test(){
alert('it works')
}



async function deleteData(url, body) {
  const member = document.querySelector('.delete');
  const id = member.id;
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 4),
  });
  return response.json();
}


// async function deleteData() {
//   const response = await fetch('http://localhost:3000/users/:id', {
//     method: "DELETE", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify(body, null, 4),
//   });
//   return response.json();
//}


