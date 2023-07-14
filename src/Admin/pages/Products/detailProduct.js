import axios from "axios"
import { useEffect, useState } from "~/assets/lib"
import { API_URL } from "~/assets/data"
function AdminDetailProduct({ id }) {
    const [product, setProduct] = useState({})
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`,)
            .then(response => {
                setProduct(response.data)
            })
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
    }, [])

    // show input edit product
    useEffect(() => {
        const btnName = document.querySelectorAll(".btn-icon");
        const inputName = document.querySelectorAll(".input-name");
        btnName.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                inputName[index].disabled = false;
                btn.classList.add("hidden")
            })
        })

    })

    // update
    useEffect(() => {
        const formUpdate = document.getElementById("form-update");
        formUpdate.addEventListener("submit", (e) => {
            e.preventDefault();
            const newProduct = {
                name: document.getElementById("product-name").value,
                category: document.getElementById("category").value,
                price: document.getElementById("price").value,
                discount: document.getElementById("discount").value,
                quantify: document.getElementById("quantify").value,
                description: document.getElementById("description").value,
            }
            try {
                axios.put(`${API_URL}/products`, newProduct)
                    .then(() => {
                        const confirm = window.confirm("Add product successfully")
                        if (confirm) window.location.href = "/admin/products";

                    })
            } catch (error) {

            }
        })
    }, [])
// delete
    useEffect(()=>{
        const btnDelete = document.getElementById("btn-delete");
        btnDelete.addEventListener("click",async (e) =>{
            e.preventDefault()
            const confirm = window.confirm("Bạn có chắc muốn xoá")

            if(confirm){
               await axios.delete(`${API_URL}/products/${id}`)
                window.confirm("Xoá sản phẩm thành công")
                window.location.href = "/admin/products"
            }
        })
    })
    return `
    <div class="w-full h-screen rounded-md">
            <form id= "form-update" class=" w-10/12 m-auto px-4 pb-8 min-h-72 bg-white grid grid-cols-3 rounded-md pt-12">
                <div class="items-center grid grid-cols-5 p-2">
                    <div class="mr-2 flex items-center col-span-4">
                        <img
                            class="w-full"
                            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1688749955/Meowshop/zvyxz4firuqhronmcvuo.png"
                            alt=""
                        />
                    </div>
                    <div class="col-span-1">
                        <img
                            class="w-full mb-2"
                            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1688749955/Meowshop/zvyxz4firuqhronmcvuo.png"
                            alt=""
                        />
                        <img
                            class="w-full mb-2"
                            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1688749955/Meowshop/zvyxz4firuqhronmcvuo.png"
                            alt=""
                        />
                        <img
                            class="w-full mb-2"
                            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1688749955/Meowshop/zvyxz4firuqhronmcvuo.png"
                            alt=""
                        />
                    </div>
                    <div class="col-span-5">
                        <input type="file" name="" id="" class="w-full py-2 px-4 border rounded" />

                        <input type="file" name="" id="" multiple class="w-full py-2 px-4 border rounded" />
                    </div>
                </div>
                <div class="ml-4 py-4 flex flex-col">
                    <div class="flex mb-4 pr-2">
                        <p class="w-1/3 font-bold">Mã sản phẩm:</p>
                        <input
                            class="w-2/3 border py-1 rounded px-2 font-medium"
                            type="text"
                            value="ID ĐIỀN TỰ ĐỘNG"
                            disabled
                        />
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Tên sản phẩm:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="product-name w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.name}"
                                id = "product-name"
                                disabled
                            />
                            <span id ="btn-name" class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Danh mục:</p>
                        <div class="relative w-2/3 border rounded">
                 
                        <select
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="category"
                        >
                            <option value="${product.category}" disabled selected>${product.category}</option>
                            ${categories.map(({ name }) => {
        return `
                               <option value="${name}">${name}</option>
                               `

    })}
                        </select>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Giá:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.price} VNĐ"
                                id = "price"
                                disabled
                            />
                            <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Giảm giá:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.discount} %"
                                id = "discount"
                                disabled
                            />
                            <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Số lượng:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.quantify}"
                                id = "quantify"
                                disabled
                            />
                            <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex ml-4 py-4 flex-col">
                    <p class="font-bold">Mô tả:</p>
                    <div class="relative w-full border rounded">
                        <textarea class="w-full outline-none h-full py-1 px-2 input-name" cols="8" id="description" disabled>
${product.description}
                        </textarea>
                        <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </span>
                    </div>
                </div>

                <div class="m-auto col-span-3 pt-6">
                    <button class="p-2 bg-green-600 text-white rounded-md text-center" type="submit">
                        <i class="fa-solid fa-floppy-disk"></i> Cập nhật
                    </button>
                    <button id="btn-delete" class="p-2 bg-red-600 text-white rounded-md text-center">
                        <i class="fa-solid fa-floppy-disk"></i> Xoá
                    </button>
                    <button class="p-2 bg-gray-600 text-white rounded-md text-center">
                        <a href="/admin/products"><i class="fa-solid fa-floppy-disk"></i> Huỷ bỏ</a>
                    </button>
                </div>
            </form>
        </div>
    `
}

export default AdminDetailProduct;