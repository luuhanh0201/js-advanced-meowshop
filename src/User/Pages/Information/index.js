import axios from "axios";
import { uploadFiles, useEffect, useState } from "../../../assets/lib";
import { API_URL } from "../../../assets/data";

function InformationPage() {
  const [infoUser, setInfoUser] = useState({avatar: []})
  const [toastMessage, setToastMessage] = useState("")
 

  // Chỉ chạy 1 lần để lấy info ban đầu từ token
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setInfoUser(user)
  }, [])



  // Đổi thông tin
  useEffect(() => {
    const submitForm = document.getElementById("form-submit")
    submitForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const images = document.getElementById("change-avatar").files;
      const imagesUrl = await uploadFiles(images);
      const currentImages = infoUser.avatar; //
      const newUser = {
        userName: document.getElementById("userName").value,
        fullName: document.getElementById("fullName").value,
        address: document.getElementById("address").value,
        numberPhone: document.getElementById("numberPhone").value,
        email: document.getElementById("email").value,

      }
      if (imagesUrl.length > 0) {
        newUser.avatar = imagesUrl;
      } else {
        newUser.avatar = currentImages; // Giữ nguyên danh sách ảnh cũ nếu không có ảnh mới
      }
      const updateUser = { ...infoUser, ...newUser }
      axios.put(`${API_URL}/auths/${infoUser._id}`, updateUser)
        .then(() => {
          setInfoUser(updateUser)
          localStorage.setItem("user", JSON.stringify(updateUser))
          setToastMessage(`
  
          <div class="fixed z-50 inset-0 flex justify-center items-center">
          <div class="fixed inset-0 bg-black opacity-10"></div>
          <div
              class="flex flex-col animate__animated animate__slideInDown z-50 bg-white  rounded-lg shadow-lg p-6 max-w-sm text-center"
          >
              <h2 class="text-2xl font-semibold mb-4 text-green-600">Update successfully!</h2>
          </div>

          `)

          setTimeout(() => {
            setToastMessage("")
          }, 1500);
        })
        .catch(error => {
          console.log(error.response)
        })
    })
  })
  return `
    <div class="content-wrapper px-content m-auto">
    <div class="flex flex-row pt-5 pb-12">
      <!-- controller -->
      <div class="basis-2/12 pr-2">
        <div class="flex gap-3.5 items-center">
          <img
            src="${infoUser.avatar.length > 0 ? infoUser.avatar :"https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-12.jpg" }"
            alt=""
            class="object-cover w-12 h-12 rounded-full"
          />
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-sm text-black"
              >${infoUser.userName}</span
            >
            <span class="text-sm font-normal text-yellow-500"
              ><i class="fa-solid fa-coins"></i> ${infoUser.banking || 0}</span
            >
          </div>
        </div>
        <div class="mt-7">
          <ul class="flex flex-col gap-3">
            <li class="flex gap-2 flex-row hover:text-red-500 duration-300">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134004-7qvfw-lj5dkfpszr0363"
                class="w-5 h-5 object-cover"
              />
              <a href="#" class="font-medium text-sm"
                >Ưu đãi dành riêng cho bạn</a
              >
            </li>
            <li class="group">
              <div
                class="flex gap-2 flex-row hover:text-red-500 duration-300"
              >
                <i class="fa-solid fa-user text-blue-300"></i>
                <a href="#" class="font-medium text-sm"
                  >Tài khoản của tôi</a
                >
              </div>
              <!--     invisible absolute group-hover:visible group-hover:relative -->
              <ul
          
                class="ml-6"
              >
                <li class="font-medium text-sm text-red-500"><a href="">Hồ sơ</a></li>
                <li class="font-medium text-sm hover:text-red-500 duration-300"><a href="">Địa chỉ</a></li>
                <li class="font-medium text-sm hover:text-red-500 duration-300"><a href="/change-password">Đổi mật khẩu</a></li>
              </ul>
            </li>
            <li class="flex gap-2 flex-row hover:text-red-500 duration-300">
              <img
                src="https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748 "
                class="w-5 h-5 object-cover"
              />
              <a href="#" class="font-medium text-sm">Kho Voucher</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="basis-10/12">
        <div class="bg-white px-8 pt-2.5 pb-10" id = "form-submit">
          <h1 class="text-lg font-medium text-black">Hồ sơ của tôi</h1>
          <span class="text-sm font-normal"
            >Quản lý thông tin hồ sơ </span
          >
          <hr />
          <!-- content -->
          <div class="flex flex-row mt-8">
            <form action="" class="basis-2/3 pr-12">
              <div class="flex flex-row justify-center gap-5 mt-5 items-center">
                <label
                  for="username"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Tên đăng nhập</label
                >
                <input
                  type="text"
                  name="username"
                  id="userName"
                  value = "${infoUser.userName || ""}"
                  disabled
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-2 text-base"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5 items-center">
                <label
                  for=""
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Tên người dùng
                </label>
                <input
                  type="text"
                  name="username"
                  id="fullName"
                  value ="${infoUser.fullName || ""}"
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-2 text-base"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5 items-center">
                <label
                  for="address"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value="${infoUser.address || ""}"
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-2 text-base"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5 items-center">
                <label
                  for="phone"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="numberPhone"
                  value="${infoUser.numberPhone || ""}"
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-2 text-base"
                  disabled
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5 items-center">
                <label
                  for="email"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  value="${infoUser.email || ""}"
                  id="email"
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-2 text-base"
                  disabled
                />
              </div>
              
              <button
                type="submit"
                class="mt-5 px-5 !bg-red-500 rounded-sm text-white text-sm py-2 duration-300 hover:opacity-80" 
              >
                LƯU
              </button>
            </form>
            <div
              class="basis-1/3 border-l-2 border-gray-400  flex flex-col pt-16 items-center"
            >
              <img
                src="${infoUser.avatar.length > 0 ? infoUser.avatar :"https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-12.jpg" }"
                alt=""
                class="w-32 h-32 object-cover rounded-full"
              />
              <form action="" class="relative mb-10 mt-4 w-20">
                <input type="file" class="opacity-0 absolute z-10 " id ="change-avatar" />
                <button
                  class="absolute left-0 top-0 z-1 border border-gray-500 text-sm px-2 py-1.5 rounded-sm "
                  type="button"
                >
                  Chọn ảnh
                </button>
              </form>
              <div class="text-sm text-gray-400">
                Dụng lượng file tối đa 1 MB
              </div>
              <div class="text-sm text-gray-400">Định dạng:.JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${toastMessage}
  </div>
    `;
}

export default InformationPage;
