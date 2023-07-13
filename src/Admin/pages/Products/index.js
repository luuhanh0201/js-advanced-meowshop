import { useState, useEffect, uploadFiles, uploadFile } from "~/assets/lib";
import axios from "axios";
import { API_URL } from "~/assets/data";
function AdminProductPage() {
    const [products, setProduct] = useState([])
    const [categories, setCategories] = useState([])
    // Bật tắt form add, reset value khi bật tắt form add
    useEffect(() => {
        const wrapperFormAdd = document.getElementById('wrapper-form-add');
        const btnCloseFormAdd = document.getElementById('close-form-add');
        const btnOpenFormAdd = document.getElementById('open-form-add');
        const formAdd = document.getElementById("form-add")
        btnCloseFormAdd.addEventListener("click", () => {
            wrapperFormAdd.classList.add("hidden");
        })
        btnOpenFormAdd.addEventListener("click", () => {
            wrapperFormAdd.classList.remove("hidden");
            formAdd.reset();
        })
    })

   
    // render category, sản phẩm
    useEffect(() => {
        axios.get(`${API_URL}/products`)
            .then(response => {
                const products = response.data;
                // Xử lý dữ liệu sản phẩm
                setProduct(products);
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
            });

        axios.get(`${API_URL}/categories`)
            .then(response => {
                const categories = response.data;
                // Xử lý dữ liệu sản phẩm
                setCategories(categories);
            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error);
            });
    }, []);

    // Delete product
    useEffect(() => {
        const btns = document.querySelectorAll("#btn-remove");
        btns.forEach(btn => {
            const id = btn.dataset.id
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                axios.delete(`${API_URL}/products/${id}`)
                    .then(() => {
                        console.log("OK")
                        window.location.reload()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        });
    });

    // Add product 
    useEffect(() => {
        const formAdd = document.getElementById("form-add");
        formAdd.addEventListener("submit", async (e) => {
            // Note 
            e.preventDefault()

            // Upload 1 img
            const image = document.getElementById("image").files[0];
            const imageUrl = await uploadFile(image);

            // Upload > 1 img
            const images = document.getElementById("images").files;
            const imagesUrl = await uploadFiles(images);
            console.log(imagesUrl);
            const product = {
                name: document.querySelector("#name").value,
                category: document.querySelector("#category").value,
                image: imageUrl,
                detailImage: imagesUrl,
                price: document.querySelector("#price").value,
                discount: document.querySelector("#discount").value,
                quantify: document.querySelector("#quantify").value,
                description: document.querySelector("#description").value
            }
            axios.post(`${API_URL}/products`, product)
                .then(() => {

                    window.location.href = "/admin/products"

                })


        })
    })
    return `
    <main class="w-full relative m-auto flex justify-center items-center h-screen">
    <div class="w-10/12 m-auto mt-4 flex">
        <div class="w-2/12">
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-search" class="bg-white rounded pb-4 w-full">
                    <h3 class="ml-2 font-medium mb-4 pt-2">Tìm kiếm</h3>
                    <input
                        class="border-b-2 border-gray-400 ml-2 mr-2 w-max pb-1"
                        type="text"
                        placeholder="Theo mã, tên hàng"
                    />
                </form>
            </nav>
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-categories" class="bg-white rounded pb-4 w-full">
                    <div class="flex items-center mb-4 mt-2 justify-between mr-2 ml-2">
                        <h3 class="font-medium">Danh mục</h3>
                        <button type="submit" class="text-green-700">
                            <i class="fa-solid fa-circle-plus"></i>
                        </button>
                    </div>
                    <select
                        class="w-full p-2 border-b-gray-300 rounded appearance-none"
                        name="category"
                        id="category-select"
                    >
                        <option class="py-2" value="" selected>Tất cả</option>
                        ${categories.map(({ name }) => {
        return `
                            <option class="py-2" value="${name}">${name}</option>
                            `

    })}
                    </select>
                </form>
            </nav>
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-categories" class="bg-white rounded pb-4 w-full">
                    <h3 class="ml-2 font-medium mb-4 pt-2">Bộ lọc</h3>
                    <div class="w-full p-2"><input name="option" type="radio" /> <label>Từ A - Z</label></div>
                    <div class="w-full p-2">
                        <input name="option" type="radio" /> <label>Từ cao - thấp</label>
                    </div>
                </form>
            </nav>
        </div>

        <div class="w-10/12 ml-4">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">Sản phẩm</h3>
                <div>
                    <button id="open-form-add" class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
                        Thêm mới <i class="fa-solid fa-plus"></i>
                    </button>
                    <button class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
                        <a href="#">Import <i class="fa-solid fa-file-import"></i></a>
                    </button>
                    <button class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
                        <a href="#">Export <i class="fa-solid fa-file-export"></i></a>
                    </button>
                </div>
            </div>
            <table class="w-full bg-white rounded shadow-md mt-6">
                <tr class="border-b bg-green-100">
                <th class="px-4 py-2  border-r">ID</th>
                <th class="px-4 py-2 w-3/12 border-r">Tên sản phẩm</th>
                <th class="px-4 py-2 w-2/12 border-r">Loại</th>
                <th class="px-4 py-2 w-2/12 border-r">Hình ảnh</th>
                <th class="px-4 py-2 w-2/12 border-r">Giá</th>
                <th class="px-4 py-2 w-1/12 border-r">Giảm giá</th>
                <th class="px-4 py-2 w-1/12 border-r">Tồn kho</th>
                <th class="px-4 py-2 w-1/12 border-r"></th>
                <th class="px-4 py-2  border-r"></th>
                </tr>
                ${products.map(({ id, name, category, image, detailImage, price, discount, quantify }, index) => {
        return `
                    <tr class= "${index % 2 === 0 ? 'bg-gray-100 shadow-sm' : ''}">
                    
                    <td class="px-4 py-2 border-r">${id}</td>
                    <td class="px-4 py-2 border-r">${name}</td>
                    <td class="px-4 py-2 border-r">${category === "" ? "Chưa xác định" : category}</td>
                    <td class="px-4 py-2 border-r">
                        <img src="${image}" alt="Hình ảnh sản phẩm" class="w-12 h-12 rounded" />
                    </td>
                    <td class="px-4 py-2 border-r">${price === "" ? 0 : price} VNĐ</td>
                    <td class="px-4 py-2 border-r">${discount === "" ? 0 : discount} %</td>
                    <td class="px-4 py-2 border-r">${quantify === "" ? 0 : quantify}</td>
                    <td class="px-4 py-2 border-r text-xs">
                        
                        <a class="hover:text-blue-500 duration-300" href="/admin/product/${id}">Chi tiết</a>
                        
                    </td>
                    <td class="px-4 py-2 border-r">
                    <button id = "btn-remove" data-id="${id}"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
                    `
    }).join("")}
            </table>
        </div>
    </div>
    <div id="wrapper-form-add" class="hidden absolute w-full h-full flex items-center justify-center">
        <form id="form-add" class="relative w-2/3 bg-white z-10 rounded shadow-md p-4">
            <button id="close-form-add" class="absolute right-6 text-2xl">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 class="text-center pt-8 font-bold text-lg mb-4">Thêm mới sản phẩm</h2>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="id">Mã sản phẩm</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="id"
                        type="text"
                        placeholder="Id nhập tự động"
                        disabled
                    />
                </div>

                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Giá</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        placeholder="Nhập giá sản phẩm"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Tên sản phẩm</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="discount">Giảm giá</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="discount"
                        type="text"
                        placeholder="Nhập giảm giá"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="category">Danh mục</label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                    >
                        <option value="" disabled selected>Chọn danh mục</option>
                        ${categories.map(({ name }) => {
        return `
                           <option value="${name}">${name}</option>
                           `

    })}
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Hình ảnh</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        placeholder="Nhập URL hình ảnh"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="quantity">Số lượng</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantify"
                        type="text"
                        placeholder="Nhập số lượng"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="detailImage"
                        >Hình ảnh chi tiết</label
                    >
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="images"
                        type="file"
                        multiple
                        placeholder="Nhập URL hình ảnh chi tiết"
                    />
                </div>
                <div class="col-span-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Mô tả</label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Nhập mô tả"
                    ></textarea>
                </div>
                <div class="col-span-2 flex justify-center">
                    <button
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        id = "submit-form"
                    >
                        Thêm sản phẩm
                    </button>
                </div>
            </div>
        </form>

        <div class="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur"></div>
    </div>
</main>
    `
}

export default AdminProductPage;