import { useState, useEffect, uploadFiles, uploadFile } from "~/assets/lib";
import axios from "axios";
import { API_URL } from "~/assets/data";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import numeral from "numeral";
import "animate.css"
function UserManagement() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [toast, setToast] = useState("");
  const [Users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([])
  const [checkedFilter, setCheckedFilter] = useState({
    all: "checked",
    admin: "",
    member: ""
  })

  // get all users
  useEffect(() => {
    axios.get(`${API_URL}/auths/users`).then((response) => {
      const dataUsers = response.data.showUser;

      setUsers(dataUsers);
      setCurrentUser(dataUsers)
    });

  }, []);
  // get one user
  useEffect(() => {
    const btnDetails = document.querySelectorAll("#detailUser");
    btnDetails.forEach((btn) => {
      btn.addEventListener("click", () => {
        var id = btn.dataset.id;
        axios.get(`${API_URL}/auths/${id}`)
          .then(async (response) => {
            const dataUser = await response.data.data
            await setToast(`
        <div id="opacity" class="transition-all duration-75 bg-slate-500 opacity-50  w-full h-screen absolute top-0 left-0 z-20"></div>

        <div id="toast-notification" class=" animate__animated animate__zoomIn nptransition-all duration-300 shadow-shadow-slide-product absolute z-50 top-1/4 w-3/5 p-4 text-gray-900 bg-white rounded-lg  dark:bg-gray-800 dark:text-gray-300" role="alert">
        <div class="flex items-center justify-between mb-3">
            <span class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Thông tin người dùng  <span class="text-gray-500 text-base">(${dataUser.role})</span></span>
            <button type="button" id="btnClose" class=" -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
        <div class="flex items-center">
              <div class="basis-1/3 flex items-center justify-center flex-col ">
              <div class="relative inline-block shrink-0 items-center justify-center">
              <img class=" w-24 h-24 rounded-full object-cover" src="${dataUser.avatar[0]}" alt=""/>

          </div>
          <div class=" inline-flex items-center justify-center mt-3 " >
              <p class="font-medium text-base">${dataUser.fullName} <i class="fa-solid fa-circle-check fa-xs" style="color: #005eff;"></i></p>
              
              </div>
           
          <div class="mt-1 font-medium text-base">
          <span class="font-medium text-base">${dataUser.numberPhone > 0 ? dataUser.numberPhone : 0}</span>
          <span class="font-normal text-sm text-orange-400">${dataUser.banking || 0} <i class="fa-solid fa-coins" style="color: #a7a21b;"></i></span>

          </div>

              </div>
            <div class="ml-3 text-sm font-normal basis-2/3 w-full">

       <form>
       <div class=" grid gap-6 mb-3 md:grid-cols-2">

          <div>
              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
           <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">${dataUser.userName}</div>
          </div>
          <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ</label>
              <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">${dataUser.address || "Không xác định"}</div>

          </div>
          <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
              <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">${dataUser.numberPhone}</div>

          </div>
          <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">${dataUser.email}</div>

       </div>

       </div>

       </form>
                <a href="#hh" id="btn-remove" data-id=${dataUser._id} class="inline-flex px-3 py-2 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 duration-200 dark:hover:bg-red-600 dark:focus:ring-blue-800">Remove</a>
            </div>
        </div>
       </div>
        `)



          });
      });

    });
    // close toast
    const btnClose = document.querySelector('#btnClose');
    if (btnClose) {
      btnClose.addEventListener('click', () => {
        setToast('')
      });
    }
  });

  useEffect(() => {

    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (!confirm) return;
        axios
          .delete(`${API_URL}/auths/${id}`)
          .then(() => {
            setUsers(Users.filter(user => user._id !== id))
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });

  useEffect(() => {
    const filterAdmin = document.getElementById("input-admin");
    const filterMember = document.getElementById("input-member");
    const all = document.getElementById("input-all");

    filterAdmin.addEventListener("click", () => {
      setUsers(currentUser.filter(user => user.role === "admin"))
      setCheckedFilter({
        all: "",
        admin: "checked",
        member:""
      })
    })
    filterMember.addEventListener("click", () => {
      setUsers(currentUser.filter(user => user.role === "member"))
      setCheckedFilter({
        all: "",
        admin: "",
        member:"checked"
      })
    })
    all.addEventListener("click", () => {
      setUsers(currentUser)
      setCheckedFilter({
        all: "checked",
        admin: "",
        member:""
      })
    })
  })
  return `
  <main class="w-full relative m-auto flex justify-center items-center   z-0">
  <div class="w-10/12 m-auto pt-4 flex">
      <div class="w-2/12">
          <nav class="w-full flex flex-col items-center shadow-md mb-4">
              <form id="form-search" class="bg-white rounded pb-4 w-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:z-10 after:bg-detail2 after:rounded-full">
                  <h3 class="ml-2 font-medium mb-4 pt-2">Tìm kiếm</h3>
                  <input type="text" class="w-full !border-transparent border-detail rounded-md" placeholder="Theo mã số, tên người dùng" />
              </form>
          </nav>
          
          <nav class="w-full flex flex-col items-center shadow-md mb-4">
              <form id="form-categories" class="bg-white rounded pb-4 w-full">
                  <h3 class="ml-2 font-medium mb-4 pt-2">Bộ lọc</h3>
                  <div class="w-full p-2"><input id = "input-all" name="option" type="radio" ${checkedFilter.all}/> <label>Tất cả</label></div>
                  <div class="w-full p-2"><input id = "input-admin" name="option" type="radio" ${checkedFilter.admin}/> <label>Admin</label></div>
                  <div class="w-full p-2"><input id = "input-member" name="option" type="radio" ${checkedFilter.member}/> <label>Member</label></div>
              </form>
          </nav>
      </div>

      <div class="w-10/12 ml-4">
          <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium">Thông tin người dùng</h3>
          </div>
          <table class="w-full bg-white rounded shadow-md mt-6">
              <tr class="border-b bg-green-100">
              <th class="px-4 py-2  border-r">STT</th>
              <th class="px-4 py-2 w-3/12 border-r">Tên khách hàng</th>
              <th class="px-4 py-2 w-1/12 border-r">Username</th>
              <th class="px-4 py-2 w-2/12 border-r">SDT</th>
              <th class="px-4 py-2 w-1/12 border-r">Email</th>
              <th class="px-4 py-2 w-1/12 border-r">Số dư</th>
              <th  class="px-4 py-2 w-1/12 border-r"></th>
              <th class="px-4 py-2  border-r"></th>
              </tr>
              ${Users.map((user, index) => {
    return `
                    <tr class="border-b bg-green-50 text-sm font-normal">
                    <td class="px-4 py-2 font-medium border-r">${++index}</td>
                    <td class="px-4 py-2 font-medium w-3/12 border-r "title ="${user.role}">${user.fullName
      }
                    ${user.role === "admin" ? `<i  class="fa-solid fa-circle-check fa-xs" style="color: #005eff;"></i>` : ""}</td>
                    <td class="px-4 py-2 font-medium w-1/12 border-r">${user.userName
      }</td>
                    <td class="px-4 py-2 font-medium w-2/12 border-r">${user.numberPhone
      }</td>
                    <td class="px-4 py-2 font-medium w-1/12 border-r">${user.email
      }</td>
                    <td class="px-4 py-2 font-medium w-1/12 border-r">${(user.numberPhone =
        "0" ? user.numberPhone : 0)}</td>
                    <td  data-id=${user._id
      } id="detailUser" class="px-4 py-2 font-medium w-1/12 border-r first-letter hover:text-yellow-300 cursor-pointer duration-200 ">Chi tiết</td>
                    <td id="btn-remove" class="btn-remove px-4 py-2  border-r hover:text-red-600 duration-200 cursor-pointer" data-id="${user._id}" ><i class="fa-solid fa-trash-can"></i></td>
                    </tr>
                `;
  }).join("")}
          </table>
          ${toast}
      </div>
  </div>
</main>
    `;
}

export default UserManagement;
