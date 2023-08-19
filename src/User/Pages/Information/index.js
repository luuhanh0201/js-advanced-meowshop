function InformationPage() {
  return `
    <div class="content-wrapper px-content m-auto">
    <div class="flex flex-row pt-5 pb-12">
      <!-- controller -->
      <div class="basis-2/12 pr-2">
        <div class="flex gap-3.5 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RCwpRRrYQiFDn6EDHiLPjgaMhngAWWRoOg&usqp=CAU"
            alt=""
            class="object-cover w-12 h-12 rounded-full"
          />
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-sm text-black"
              >quandzno1st</span
            >
            <span class="text-sm font-normal text-yellow-500"
              ><i class="fa-solid fa-coins"></i> 50.000</span
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
        <div class="bg-white px-8 pt-2.5 pb-10">
          <h1 class="text-lg font-medium text-black">Hồ sơ của tôi</h1>
          <span class="text-sm font-normal"
            >Quản lý thông tin hồ sơ để bảo mật tài khoản</span
          >
          <hr />
          <!-- content -->
          <div class="flex flex-row mt-8">
            <form action="" class="basis-2/3 pr-12">
              <div class="flex flex-row justify-center gap-5 mt-5">
                <label
                  for="username"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Tên đăng nhập</label
                >
                <input
                  type="text"
                  name="username"
                  id=""
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-3 text-xs"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5">
                <label
                  for="username"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Tên
                </label>
                <input
                  type="text"
                  name="username"
                  id=""
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-3 text-xs"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5">
                <label
                  for="address"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  id=""
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-3 text-xs"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5">
                <label
                  for="phone"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-3 text-xs"
                />
              </div>
              <div class="flex flex-row justify-center gap-5 mt-5">
                <label
                  for="email"
                  class="basis-1/4 text-sm font-normal text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  id=""
                  class="w-3/4 border-gray-300 border rounded-md outline-none p-3 text-xs"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RCwpRRrYQiFDn6EDHiLPjgaMhngAWWRoOg&usqp=CAU"
                alt=""
                class="w-24 h-24 object-cover rounded-full"
              />
              <form action="" class="relative mb-10 mt-2 w-20">
                <input type="file" class="opacity-0 absolute z-10" />
                <button
                  class="absolute left-0 top-0 z-1 border border-gray-500 text-sm px-2 py-1.5 rounded-sm"
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
  </div>
    `;
}

export default InformationPage;
