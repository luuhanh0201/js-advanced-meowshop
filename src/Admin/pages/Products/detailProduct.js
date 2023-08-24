import axios from "axios"
import { useEffect, useState, uploadFiles } from "~/assets/lib"
import { API_URL } from "~/assets/data"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import productValidate from "./productValidate";
import numeral from "numeral"
function AdminDetailProduct({ id }) {
    const [product, setProduct] = useState({images :[]})
    // const [detailProduct, setDetailProduct] = useState(product)
    const [categories, setCategories] = useState([])



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
    useEffect(async () => {
        await axios
            .get(`${API_URL}/products/${id}`)
            .then(response => {
                const products = response.data;
                // Xử lý dữ liệu sản phẩm
                // console.log(typeof [products.images].)
                setProduct(products.data);

            })
            .catch(error => {
                // Xử lý lỗi
                console.error(error.message);
            });

        await axios
            .get(`${API_URL}/categories`)
            .then((response) => {
                const categories = response.data;
                setCategories(categories.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    // update
    useEffect(() => {
        ClassicEditor
            .create(document.getElementById('description'))
            .catch(error => {
                console.error(error);
            });
        const btnUpdate = document.getElementById("btn-update");
        btnUpdate.addEventListener("click", async (e) => {
            e.preventDefault();
            const images = document.getElementById("images").files;
            const imagesUrl = await uploadFiles(images);
            const currentImages = product.images; // Lưu danh sách ảnh cũ
    
            // Kiểm tra xem có ảnh mới được tải lên hay không
            const newProduct = {
                name: document.getElementById("product-name").value,
                categoryId: document.getElementById("category").value,
                price: document.getElementById("price").value,
                brand: document.getElementById("brand").value,
                discount: document.getElementById("discount").value,
                quantify: document.getElementById("quantify").value,
                description: document.getElementById("description").value,
            };
    
            if (imagesUrl.length > 0) {
                newProduct.images = imagesUrl;
            } else {
                newProduct.images = currentImages; // Giữ nguyên danh sách ảnh cũ nếu không có ảnh mới
            }
    
            const dataProduct = productValidate.validate(newProduct);
            if (dataProduct.error) {
                console.log(dataProduct.error.details);
                return;
            }
    
            axios.put(`${API_URL}/products/${id}`, newProduct)
                .then(() => {
                    const confirm = window.confirm("Cập nhật sản phẩm thành công");
                    if (confirm) return window.location.href = "/admin/products";
                    window.location.reload();
                });
        });
    });
    
    // delete
    useEffect(() => {
        const btnDelete = document.getElementById("btn-delete");
        btnDelete.addEventListener("click", async (e) => {
            e.preventDefault()
            const confirm = window.confirm("Bạn có chắc muốn xoá")

            if (confirm) {
                await axios.delete(`${API_URL}/products/${id}`)
                window.confirm("Xoá sản phẩm thành công")
                window.location.href = "/admin/products"
            }
        })
    })

    // slideshow
    useEffect(() => {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Xử lý sự kiện click
        var smallImages = document.querySelectorAll('.small-image');
        smallImages.forEach(function (image) {
            image.addEventListener('click', function () {
                var mainImage = document.querySelector('.main-image');
                mainImage.src = image.src;
            });
        });
    })
    return `
    
    <div class="w-full h-screen rounded-md">
            <form id= "form-update" class=" w-10/12 m-auto px-4 pb-8 min-h-72 bg-white grid grid-cols-3 rounded-md pt-12">
            <div class="grid grid-cols-5 gap-2 p-2 overflow-hidden">
            <div class="col-span-5 flex items-center max-h-64">
                <img
                    class="w-full max-h-64 object-contain main-image border rounded-md"
                    src='${product.images[0]}'
                    alt=""
                />
            </div>
            <div class="col-span-5 grid grid-cols-4 gap-2 ">
                <div class="swiper-container">
                    <div class="swiper-wrapper flex justify-between items-center">
                        ${product.images.map(img =>{
                            return `
                            <div class="swiper-slide mr-2 ">
                            <img
                                class="rounded-md w-full h-20 object-cover cursor-pointer small-image"
                                src="${img}"
                                alt=""
                            />
                        </div>
                            `
                        }).join("")}
                       
                    </div>
                </div>
            </div>
            <input id="images" class="absolute" type="file" name="" multiple>
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
                            ${categories.map(({ _id, name }) => {
        if (product.categoryId === _id) {
            return `<option value="${_id}" selected>${name}</option>`
        } else {
            return `<option value="${_id}">${name}</option>`

        }


    })}
                        </select>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Tên hãng:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.brand}"
                                id = "brand"
                                disabled
                            />
                            <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 right-2">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </span>
                        </div>
                    </div>
                    <div class="flex mb-4 pr-2 items-center">
                        <p class="w-1/3 font-bold">Giá:</p>
                        <div class="relative w-2/3 border rounded">
                            <input
                                class="w-full outline-none h-full py-1 px-2 input-name"
                                type="text"
                                value="${product.price}"
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
                                value="${product.discount}"
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
                        <textarea class="w-full outline-none h-full py-1 px-2 input-name" cols="auto" id="description" disabled>
${product.description}
                        </textarea>
                        <span class="btn-icon absolute hover:text-green-600 duration-200 z-10 w-full h-full bg-slate-500 top-0 opacity-5">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </span>
                    </div>
                </div>

                <div class="m-auto col-span-3 pt-6">
                    <button style="background-color: #166534" id ="btn-update" class="p-2 bg-green-600 text-white rounded-md text-center" type="submit">
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