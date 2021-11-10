const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = formatFormData(data);
  postData("http://localhost:3000/chores/add-chore", body).then((response) =>
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

  
const removeUser = document.querySelector(".delete");
removeUser.addEventListener("click", deleteData);


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
