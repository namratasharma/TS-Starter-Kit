import {deleteUser, getUsers} from "./api/userAPI";
import './index.css';

//populate users via API call
getUsers().then(result => {
  let userBody:string = "";
  for (let i = 0; i < result.length; i++) {
    userBody += `<tr>
      <td><a href="#" data-id="${result[i].id}" class="deleteUser">Delete</a></td>
      <td>${result[i].id}</td>
      <td>${result[i].firstName}</td>
      <td>${result[i].lastName}</td>
      <td>${result[i].email}</td>
    </tr>`
  }

  global.document.getElementById('users').innerHTML = userBody;

})
