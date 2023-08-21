import { useState, useEffect, uploadFiles, uploadFile } from "~/assets/lib";
import "animate.css";
import axios from "axios";
import { API_URL } from "~/assets/data";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import numeral from "numeral";
import "animate.css";
function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [toast, setToast] = useState("");


  // render category,
  useEffect(() => {
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

  // Delete category
  useEffect(() => {
    const btns = document.querySelectorAll("#deleteCategory");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (!confirm) return;
        axios
          .delete(`${API_URL}/categories/remove/${id}`)
          .then(() => {
            console.log("remove successfully");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });

  // edit category
  useEffect(() => {
    const btnEdits = document.querySelectorAll("#editCategory");
    if(btnEdits){
        btnEdits.forEach((btn) => {
            btn.addEventListener("click", () => {
              const id = btn.dataset.id;
              console.log(id);
              axios.get(`${API_URL}/categories/detail/${id}`)
              .then((response) => {
                const dataCategory= response.data.data;
                setToast(`
                <div id="opacity" class="transition-all duration-300 bg-slate-500 opacity-50  w-full h-screen absolute top-0 left-0 z-20"></div>
        
                <div id="toast-message-cta" class="animate__animated animate__zoomIn absolute z-50 top-10 w-2/5 p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                    <div class="">
                        <div class="text-sm font-normal flex justify-between">
                            <span class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Thông tin Category</span>
                
                            <button type="button" id="closeToast" class="auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500" data-dismiss-target="#toast-message-cta" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                        </div>
                
                            <form class="w-full">
                            <div class="flex flex-col gap-2">
                                <input type="text" value="${dataCategory.image}" hidden id="oldImage" >
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Category</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value = "${dataCategory.name}"  required>
                                </div>
                                <div>   
                                <label class="block mb-2 text-sm font-medium text-gray-900">UpLoad Image</label> 
                                <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="imageCategory" type="file">
                                <img src="${dataCategory.image}" class="object-cover h-60 w-full"/>
                </div> 
                                </div>
                                <button data-id=${dataCategory._id} type="submit" id="updateCategory" class="mt-3 text-white !bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-1/4 sm:w-auto px-5 py-2.5 text-center ">Lưu</button>  
                                </form>
                        </div>
                        
                    </div>
                `);
              })
             
            });
          });
    }
    const btnSubmit = document.querySelector("#updateCategory");
    const oldImage = document.querySelector("#oldImage");
        if(btnSubmit) {
            btnSubmit.addEventListener("click", async (e)=> {
                e.preventDefault();
                const id = btnSubmit.dataset.id
                const nameCategory = document.querySelector("#first_name");
                const images = Array.from(document.getElementById("imageCategory").files);
                let imagesUrl = await uploadFiles(images);
                 imagesUrl = images.length > 0 ? images[0] : oldImage.value;
                const updateCategory = {
                    name: nameCategory.value,
                    image: imagesUrl
                }
                console.log(updateCategory);
            axios
            .put(`${API_URL}/categories/update/${id}`,updateCategory)
            .then(() => {
              console.log("update successfully");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
            })
            
        }
    // close toast
    const closeToast = document.querySelector("#closeToast");
    if (closeToast) {
      closeToast.addEventListener("click", () => {
        setToast("");
      });
    }
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
        const images = Array.from(
          document.getElementById("imageCategory").files
        );
        const imagesUrl = await uploadFiles(images);
        const newCategory = {
          name: nameCategory.value,
          image: imagesUrl[0],
        };
        console.log(newCategory);
        axios
          .post(`${API_URL}/categories/create`, newCategory)
          .then(() => {
            window.location.reload();
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
                    <div class="w-full p-2"><input name="option" type="radio" /> <label>Từ A - Z</label></div>
                    <div class="w-full p-2">
                        <input name="option" type="radio" /> <label>Từ cao - thấp</label>
                    </div>
                </form>
            </nav>
        </div>

        <div class="w-10/12 ml-4">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">Categories</h3>
                
            </div>
            <table class="w-full bg-white rounded shadow-md mt-6">
                <tr class="border-b bg-green-100">
                <th class="px-4 py-2 border-r">ID</th>
                <th class="px-4 py-2 w-4/12 border-r">Loại</th>
                <th class="px-4 py-2 w-4/12 border-r">Image</th>
                <th class="px-4 py-2  w-2/12 border-r"></th>
                <th class="px-4 py-2  w-2/12 border-r"></th>
                </tr>
              ${categories
                .map((category, index) => {
                  return `
                <tr class="border-b  ${
                  index % 2 == 1 ? "bg-slate-100" : "bg-slate-50"
                }">
                <th class="px-4 py-2 font-medium w-1  border-r">${index}</th>
                <th class="px-4 py-2 font-medium w-4/12 border-r">${category.name}</th>
                <th class="px-4 py-2 font-medium w-4/12 border-r "><img src="${category.image}" class="object-cover w-4/5 h-20 shadow-shadow-slide-product block m-auto" /></th>
                <th id="editCategory" data-id= ${category._id} class="px-4 py-2 font-medium  w-2/12 border-r"><button type="button" class="focus:outline-none text-white !bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sửa</button></th>
                <th id="deleteCategory" data-id= ${category._id} class="px-4 py-2 font-medium  w-2/12 border-r"><button type="button" class="text-white !bg-gray-700 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Xóa</button></th>
                </tr>
                `;
                })
                .join("")}
            </table>
        </div>
    </div>
    
</main>
    `;
}

export default AdminCategoriesPage;
