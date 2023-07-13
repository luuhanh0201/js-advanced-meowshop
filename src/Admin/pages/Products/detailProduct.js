import axios from "axios"
import { useEffect, useState } from "~/assets/lib"
import { API_URL } from "~/assets/data"
function AdminDetailProduct({ id }) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`,)
            .then(response => {
                setProduct(response)
            })

    }, [])

    useEffect(() => {
        const btnName = document.getElementById("btn-name");
        const inputName = document.getElementById("input-name");
        btnName.addEventListener("click", (e) => {
            inputName.disabled = false
            btnName.className.add("hidden")
            console.log(inputName)
        })
        
    })
    return `
    <div class="w-full h-screen rounded-md">
            <form class="w-10/12 m-auto px-4 pb-8 min-h-72 bg-white grid grid-cols-3 rounded-md pt-12">
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
                                class="w-full outline-none h-full py-1 px-2"
                                type="text"
                                value="Name product"
                                id = "input-name"
                                disabled
                            />
                            <span id ="btn-name" class="absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Danh mục:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2"
                                type="text"
                                value="Name product"
                                disabled
                            />
                            <button class="absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Giá:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2"
                                type="text"
                                value="Name product"
                                disabled
                            />
                            <button class="absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Giảm giá:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2"
                                type="text"
                                value="Name product"
                                disabled
                            />
                            <button class="absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Số lượng:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2"
                                type="text"
                                value="Name product"
                                disabled
                            />
                            <button class="absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex ml-4 py-4 flex-col">
                    <p class="font-bold">Mô tả:</p>
                    <div class="relative w-full border rounded">
                        <textarea class="w-full outline-none h-full py-1 px-2" cols="8" id="description" disabled>
ád
                        </textarea>
                        <button class="absolute hover:text-green-600 duration-200 z-10 right-2">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>
                </div>

                <div class="m-auto col-span-3 pt-6">
                    <button class="p-2 bg-green-600 text-white rounded-md text-center" type="submit">
                        <i class="fa-solid fa-floppy-disk"></i> Cập nhật
                    </button>
                    <button class="p-2 bg-red-600 text-white rounded-md text-center" type="submit">
                        <i class="fa-solid fa-floppy-disk"></i> Xoá
                    </button>
                    <button class="p-2 bg-gray-600 text-white rounded-md text-center" type="submit">
                        <a href="/admin/products"><i class="fa-solid fa-floppy-disk"></i> Huỷ bỏ</a>
                    </button>
                </div>
            </form>
        </div>
    `
}

export default AdminDetailProduct;