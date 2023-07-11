import { useEffect } from "~/assets/lib";

function AdminHeader() {
    useEffect(() => {
        const avatarBtn = document.getElementById('avatarBtn');
        const navMenu = document.getElementById('navMenu');
        avatarBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn chặn sự kiện click lan ra bên ngoài
            navMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', (event) => {
            const targetElement = event.target;
            // Kiểm tra xem người dùng đã nhấp vào vùng ngoài menu hay không
            if (!navMenu.contains(targetElement) && !avatarBtn.contains(targetElement)) {
                navMenu.classList.add('hidden');
            }
        });
    })
    return `
    <header class="w-full border-b pt-2">
            <div class="w-10/12 m-auto flex justify-between">
                <img
                    src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686825638/logo.aabe47d334b1014d8199a12eb123fced_rfq1yu.svg"
                    class="w-34 h-full"
                />
                <ul class="flex items-center relative">
                    <li class="flex items-center">
                        <div class="relative">
                            <button id="avatarBtn">
                                <img
                                    class="w-12 h-12 rounded-full border-2 border-gray-200"
                                    src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1688198205/ECMA/313326952_3233338263580980_7160894109242646862_n_wd5gp4.jpg"
                                    alt="Avatar"
                                />
                            </button>
                            <div
                                class="absolute bottom-0 right-0 -mr-1 bg-green-700 rounded-full border-2 border-white"
                            >
                                <svg class="h-4 w-4 text-gray-100" viewBox="0 -2 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 6l4 4 4-4H6z" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <ul
                        id="navMenu"
                        class=" absolute hidden bg-white text-gray-700 border border-gray-200 rounded-md shadow-lg top-14 left-0 
                        w-32"
                    >
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Ngôn ngữ</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sáng / Tối</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 border-t font-bold">Đăng xuất</a>
                        </li>
                    </ul>
                </ul>
            </div>
            
        </header>
        <nav class=" w-full m-auto flex justify-center pt-2 pb-2 pointer bg-green-800">
            <ul class="w-10/12 flex justify-between font-semibold text-base text-white">
                <li><a class="py-2 px-4" href="/admin/home"><i class="fa-solid fa-eye"></i> Tổng quan</a></li>
                <li><a class="py-2 px-4" href="/admin/products"><i class="fa-solid fa-box"></i> Sản phẩm</a></li>
                <li><a class="py-2 px-4" href="#"><i class="fa-solid fa-file-invoice"></i> Hoá đơn</a></li>
                <li><a class="py-2 px-4" href="#"><i class="fa-solid fa-circle-dollar-to-slot"></i> Sổ quỹ</a></li>
                <li><a class="py-2 px-4" href="#"><i class="fa-solid fa-paste"></i> Bài viết</a></li>
            </ul>
        </nav>
    `
}

export default AdminHeader;