import { useState, useEffect, uploadFiles, uploadFile } from "~/assets/lib";
import "animate.css";
import axios from "axios";
import { API_URL } from "../../../assets/data";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import productValidate from "./productValidate";
import numeral from "numeral";
import "animate.css";
function AdminProductPage() {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [toast, setToast] = useState("");
  // Bật tắt form add, reset value khi bật tắt form add
  useEffect(() => {
    ClassicEditor.create(document.getElementById("description")).catch(
      (error) => {
        console.error(error);
      }
    );
    const wrapperFormAdd = document.getElementById("wrapper-form-add");
    const btnCloseFormAdd = document.getElementById("close-form-add");
    const btnOpenFormAdd = document.getElementById("open-form-add");
    const formAdd = document.getElementById("form-add");
    btnCloseFormAdd.addEventListener("click", () => {
      wrapperFormAdd.classList.add("hidden");
    });
    btnOpenFormAdd.addEventListener("click", () => {
      wrapperFormAdd.classList.remove("hidden");
      formAdd.reset();
    });
  });

  // render category, sản phẩm
  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((response) => {
        const products = response.data;
        // Xử lý dữ liệu sản phẩm
        setProduct(products.data);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
      });

    axios
      .get(`${API_URL}/categories`)
      .then((response) => {
        const categories = response.data;
        // Xử lý dữ liệu sản phẩm
        setCategories(categories.data);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
      });
  }, []);

  // Delete product
  useEffect(() => {
    const btns = document.querySelectorAll("#btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (!confirm) return;
        axios
          .delete(`${API_URL}/products/${id}`)
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });

  // Add product
  useEffect(() => {
    const formAdd = document.getElementById("form-add");
    formAdd.addEventListener("submit", async (e) => {
      // Note
      e.preventDefault();
      // Upload > 1 img
      const images = Array.from(document.getElementById("images").files);
      const imagesUrl = await uploadFiles(images);
      const product = {
        name: document.querySelector("#name").value,
        categoryId: document.querySelector("#category").value,
        brand: document.querySelector("#brand").value,
        images: imagesUrl,
        price: document.querySelector("#price").value,
        discount: document.querySelector("#discount").value,
        quantify: document.querySelector("#quantify").value,
        description: document.querySelector("#description").value,
      };
      const dataProduct = productValidate.validate(product);

      if (dataProduct.error) {
        console.log(dataProduct.error.details);
        return;
      }
      await axios
        .post(`${API_URL}/products`, product)
        .then(() => {
          window.location.href = "/admin/products";
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
  // add category
  useEffect(() => {
    const btnCategory = document.querySelector("#addCategory");
    btnCategory.addEventListener("click", () => {
      setToast(`
        <div id="opacity" class="transition-all duration-300 bg-slate-500 opacity-50  w-full h-screen absolute top-0 left-0 z-20"></div>

        <div id="toast-message-cta" class="animate__animated animate__zoomIn absolute z-50 top-28 w-2/5 p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
            <div class="">
                <div class="text-sm font-normal flex justify-between">
                    <span class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Thêm mới Category</span>
        
                    <button type="button" id="closeToast" class="auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500" data-dismiss-target="#toast-message-cta" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                </div>
        
                    <form class="w-full">
                    <div class="flex flex-col gap-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Category</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                        </div>
                        <div>   
                        <label class="block mb-2 text-sm font-medium text-gray-900">UpLoad Image</label> 
                        <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="imageCategory" type="file">
        </div> 
        
                        </div>
                        <button type="submit" id="submitCategory" class="mt-3 text-white !bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-1/4 sm:w-auto px-5 py-2.5 text-center ">Lưu</button>  
                        </form>
                </div>
                
            </div>
        `);
    });
    // close toast
    const closeToast = document.querySelector("#closeToast");
    if (closeToast) {
      closeToast.addEventListener("click", () => {
        setToast("");
      });
    }
    // on submit
    const submitCategory = document.querySelector("#submitCategory");

    if (submitCategory) {
      submitCategory.addEventListener("click", async (e) => {
        e.preventDefault();
        const nameCategory = document.querySelector("#first_name");
        const images = Array.from(document.getElementById("imageCategory").files);
        const imagesUrl = await uploadFiles(images);
        const newCategory = {
          name: nameCategory.value,
          image: imagesUrl[0]
        };
        axios.post(`${API_URL}/categories/create`, newCategory
        )
          .then(() => {
            console.log("successfully uploaded");
          })
          .catch((error) => console.log(error));
      });
    }
  });

  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
    });
  });

  // sort products by price
  useEffect(() => {

    const newProducts = [...products]; 
    newProducts.sort((a, b) => a.price - b.price);
    setProduct(newProducts)

    
  },products)
  return `
    <main class="w-full relative m-auto flex justify-center items-center h-screen z-0">
    ${toast}

    <div class="w-10/12 m-auto mt-4 flex">
        <div class="w-2/12">
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-search" class="bg-white rounded pb-4 w-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:z-10 after:bg-detail2 after:rounded-full">
                    <h3 class="ml-2 font-medium mb-4 pt-2">Tìm kiếm</h3>
                    <input type="text" class="w-full !border-transparent border-detail rounded-md" placeholder="Theo mã số, tên" />

                </form>
            </nav>
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-categories" class="bg-white rounded pb-4 w-full">
                    <div class="flex items-center mb-4 mt-2 justify-between mr-2 ml-2">
                        <h3 class="font-medium">Danh mục</h3>
                        <button type="button" id="addCategory" class="text-green-700">
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
                            `;
  })}
                    </select>
                </form>
            </nav>
            <nav class="w-full flex flex-col items-center shadow-md mb-4">
                <form id="form-categories" class="bg-white rounded pb-4 w-full">
                    <h3 class="ml-2 font-medium mb-4 pt-2">Bộ lọc</h3>
                    <div class="w-full p-2">
                    <input name="option" type="radio" value="price-up" id = "price-up"/> <label>Từ A - Z</label></div>
                    <div class="w-full p-2">
                        <input name="option" type="radio" value="price-down" id = "price-down"/> <label>Từ cao - thấp</label>
                    </div>
                </form>
            </nav>
        </div>

        <div class="w-10/12 ml-4">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">Sản phẩm</h3>
                <div>
                    <button style = "background-color:#166534" id="open-form-add" class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
                        Thêm mới <i class="fa-solid fa-plus"></i>
                    </button>
                    <button style = "background-color:#166534" class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
                        <a href="#">Import <i class="fa-solid fa-file-import"></i></a>
                    </button>
                    <button style = "background-color:#166534" class="bg-green-700 text-white px-2 py-1 rounded text-sm" type="submit">
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
                ${products
      .map(
        (
          {
            _id,
            name,
            categoryId,
            images,
            price,
            discount,
            quantify,
          },
          index
        ) => {
          // let img = Array.from(images)
          return `
                    <tr class= "${index % 2 === 0 ? "bg-gray-100 shadow-sm" : ""
            }">
                    
                    <td class="px-4 py-2 border-r">${index + 1}</td>
                    <td class="px-4 py-2 border-r">${name}</td>
                    <td class="px-4 py-2 border-r">${categories.find((cate) => categoryId === cate._id)?.name
            }</td>

                    <td class="px-4 py-2 border-r overflow-hidden">
                    <div class="swiper-container">
                      <div class="swiper-wrapper">
                        ${images
              .map(
                (image) =>
                  `<div class="swiper-slide "><img src="${image}" alt="img error" class="w-16 h-16 rounded overflow-hidden" /></div>`
              )
              .join("")}
                      </div>
                     
                    </div>
                  </td>
                    <td class="px-4 py-2 border-r">${price === "" ? 0 : numeral(price).format("0,0")
            } VNĐ</td>
                    <td class="px-4 py-2 border-r">${discount === "" ? 0 : discount
            } %</td>
                    <td class="px-4 py-2 border-r">${quantify === "" ? 0 : quantify
            }</td>
                    <td class="px-4 py-2 border-r text-xs">
                        
                        <a class="hover:text-blue-500 duration-300" href="/admin/product/${_id}">Chi tiết</a>
                    </td>
                    <td class="px-4 py-2 border-r">
                    <button id = "btn-remove" data-id="${_id}" class ="hover:text-red-500 duration-200"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
                    `;
        }
      )
      .join("")}
            </table>
        </div>
    </div>
    <div id="wrapper-form-add" class="z-50  hidden absolute w-full h-full flex items-center justify-center">
        <form id="form-add" class="animate__animated animate__zoomIn relative w-2/3 bg-white z-10 rounded shadow-md p-4">
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
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="discount">Tên hãng</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="brand"
                        type="text"
                        placeholder="Nhập tên hãng"
                    />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="category">Danh mục</label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                    >
                        <option value="" disabled selected>Chọn danh mục</option>
                        ${categories.map(({ _id, name }) => {
        return `
                           <option value="${_id}">${name}</option>
                           `;
      })}
                    </select>
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
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="images"
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
                        style = "background-color:#166534"
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
    `;
}

export default AdminProductPage;
