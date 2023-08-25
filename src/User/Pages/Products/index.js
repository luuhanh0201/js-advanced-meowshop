import axios from "axios";
import { useState, useEffect } from "~/assets/lib";
import { API_URL } from "~/assets/data";
import numeral from "numeral";
import "animate.css";
function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [categoriesChecked, setCategoriesChecked] = useState();
  //   lấy dữ liệu từ api
  const [product, setProduct] = useState([]);
  //   product filter theo category
  const [productFilter, setProductFiler] = useState([]);
  // checked product filter theo giá
  const [priceChecked, setPriceChecked] = useState({
    upPrice: "",
    downPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const productPerPage = 12;

  const [totalPages, setTotalPage] = useState();

  useEffect(() => {
    axios.get(`${API_URL}/products`).then((data) => {
      const products = data.data.data;
      setProduct(products);
     const renderProduct = productFilter.length > 0 ? productFilter : products

      const totalPage = Math.ceil(renderProduct.length / productPerPage);
      setTotalPage(totalPage);

      const startIndex = (currentPage - 1) * productPerPage;
      const endIndex = startIndex + productPerPage;
      setDisplayedProducts(renderProduct.slice(startIndex, endIndex));
    });
  }, [currentPage]);

  useEffect(() => {
    axios.get(`${API_URL}/categories`).then((data) => {
      setCategories(data.data.data);
    });
  }, []);
  //   lọc sản phẩm theo category

  let valueCategory = 0;
  useEffect(() => {
    const categories = document.querySelectorAll('input[name="category"]');
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        valueCategory = category.value;
        // xác đinh category đang được checked
        setCategoriesChecked(valueCategory);
        let products = product.filter(
          (product) => product.categoryId == category.value
        );
        console.log(products);
        let startIndex = (currentPage - 1) * productPerPage;
        let endIndex = startIndex + productPerPage;
        if (products.length < 12) {
          startIndex = 0;
          endIndex = products.length;
        }
        setTotalPage(`${Math.ceil(products.length / productPerPage)}`);
        setDisplayedProducts(products.slice(startIndex, endIndex));
        setProductFiler(products);
      setCurrentPage(1)

      });
    });
  }, valueCategory);

  useEffect(() => {
    const listProduct = productFilter.length > 0 ? productFilter : product;
    const upPrice = document.getElementById("price-1");
    const dowPrice = document.getElementById("price-2");
    upPrice.addEventListener("click", () => {
      console.log(1);
      const products = listProduct.sort((a, b) => a.price - b.price);
      const upProduct = product.sort((a, b) => a.price - b.price);
      let startIndex = (currentPage - 1) * productPerPage;
      let endIndex = startIndex + productPerPage;
      if (products.length < 12) {
        startIndex = 0;
        endIndex = products.length;
      }
      setPriceChecked({
        upPrice: "checked",
        dowPrice: "",
      });
      setDisplayedProducts(products.slice(startIndex, endIndex));
      setProductFiler(products);
      setProduct(upProduct);
      setCurrentPage(1)

    });
    dowPrice.addEventListener("click", () => {
      const products = listProduct.sort((a, b) => b.price - a.price);
      const dowProduct = product.sort((a, b) => b.price - a.price);
      let startIndex = (currentPage - 1) * productPerPage;
      let endIndex = startIndex + productPerPage;

      if (products.length < 12) {
        startIndex = 0;
        endIndex = products.length;
      }
      setPriceChecked({
        upPrice: "",
        dowPrice: "checked",
      });
      setDisplayedProducts(products.slice(startIndex, endIndex));
      setProductFiler(products);
      setProduct(dowProduct);
      setCurrentPage(1)
    });
  });

  //

  useEffect(() => {
    const btnNextPage = document.getElementById("next-page");
    const btnPrevPage = document.getElementById("prev-page");

    btnNextPage.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage + 1 <= totalPages) {
        setCurrentPage(currentPage + 1);
      }
    });

    btnPrevPage.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage - 1 >= 1) {
        setCurrentPage(currentPage - 1);
      }
    });

    const spansEle = document.querySelectorAll(".span-value");
    spansEle.forEach((item) => {
      item.addEventListener("click", (e) => {
        setCurrentPage(e.target.innerHTML);

        item.classList.add(
          "w-10 h-10 text-center leading-10 rounded-full bg-accessory-opacity"
        );
      });
    });
    // Clean up event listeners when component unmounts
    return () => {
      btnNextPage.removeEventListener("click");
      btnPrevPage.removeEventListener("click");
    };
  });

  return ` 
  
     <div class="content-wraper font-Roboto px-content mx-auto">
                <!-- phân trang -->
                <div class="flex flex-row gap-3 items-center mt-2.5">
                    <span class="font-normal text-xs text-black">Home</span>
                    <span>/</span>
                    <span class="font-semibold text-xs">Products</span>
                </div>
                <div class="text-3xl font-medium text-detail mt-6">
                    All
                    <span class="text-detail2 text-3xl font-normal">(${
                      productFilter.length
                        ? productFilter.length
                        : product.length
                    })</span>
                </div>
                <!-- main product -->
                <main class="grid grid-cols-[auto,1fr] mt-11 gap-24">
                    <!-- filter -->
                    <div>
                        <div class="text-xl font-normal">Filter</div>
                        <!--BRAND -->
                        <div class="mt-8">
                            <div class="uppercase text-base font-semibold">categories</div>
                            <form action="" class="grid grid-cols-[auto,1fr] gap-2.5 mt-5 items-center justify-center">
                            ${categories
                              .map((category) => {
                                return `
                            <input type="radio" ${
                              category._id == categoriesChecked ? "checked" : ""
                            } name="category"  id="${category._id}"  value="${
                                  category._id
                                }" />
                            <label for="${
                              category._id
                            }" class="text-base font-normal select-none">${
                                  category.name
                                }</label>
                                `;
                              })
                              .join("")}
                            </form>
                        </div>

                        <!-- price -->
                        <div class="mt-8">
                            <div class="uppercase text-base font-semibold">price</div>
                            <form action="" class="grid grid-cols-[auto,1fr] gap-2.5 mt-5">
                                <input type="radio" value="upPrice" name="price" id="price-1"  ${
                                  priceChecked.upPrice
                                }/>
                                <label for="price-1" class="text-base font-normal select-none">Thấp đến cao</label>
                                <input type="radio" value="dowPrice" name="price" id="price-2"  ${
                                  priceChecked.dowPrice
                                }/>
                                <label for="price-2" class="select-none text-base font-normal">Cao đến Thấp</label>
                                
                            </form>
                        </div>
                    </div>


                    <!-- list product -->
                    <div class="grid grid-cols-4 gap-x-3.5 gap-y-5">
            ${displayedProducts
              .map((product) => {
                return `
                    <div class="w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative h-96  duration-200 
                    ">
            <div class="rounded-md overflow-hidden hover:scale-105 transition duration-300 hover:cursor-zoom-in">
                ${
                  product.discount === "" || product.discount === 0
                    ? ""
                    : `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="39"
                    viewBox="0 0 55 39"
                    fill="none"
                    class="absolute rounded-md"
                >
                    <path d="M0 38.4492V0H52.3337V38.4492L26.1668 32.5751L0 38.4492Z" fill="#FFB800" />
                    <span class="absolute top-1 left-2 text-base text-black font-normal">
                        ${product.discount}%
                    </span></svg
                >`
                }

                <!-- like product -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="absolute top-2.5 right-2.5 z-10 rounded-full bg-white text-center p-2.5 shadow-like-product"
                >
                    <path
                        d="M7.38651 3.35684L6.77945 2.74247C5.35451 1.30033 2.74171 1.79799 1.79852 3.61109C1.35572 4.46388 1.25581 5.69512 2.06438 7.26648C2.84331 8.77948 4.46382 10.5918 7.38651 12.5657C10.3092 10.5918 11.9289 8.77948 12.7086 7.26648C13.5172 5.69429 13.4181 4.46388 12.9745 3.61109C12.0313 1.79799 9.4185 1.29949 7.99357 2.74164L7.38651 3.35684ZM7.38651 13.5702C-5.5954 5.1241 3.3894 -1.4681 7.23749 2.0189C7.28829 2.06475 7.33825 2.11226 7.38651 2.16144C7.43428 2.11231 7.48399 2.06503 7.53552 2.01973C11.3828 -1.46976 20.3684 5.12326 7.38651 13.5702Z"
                        fill="#00575C"
                        stroke="#00575C"
                        stroke-width="0.260504"
                        class=""
                    />
                </svg>
                <img src="${
                  product.images[0]
                }" alt="" class="h-56 w-full object-cover rounded-md" />
            </div>
            <div class="content-product px-3.5 pt-3.5 pb-3 relative overflow-hidden group">
                <button
                    class="w-12/12 uppercase text-base text-white rounded-md bg-detail font-semibold text-center py-2.5 absolute transition-all duration-300 ease-linear right-0 left-0 -bottom-12 group-hover:bottom-0 hover:bg-yellow-500 mx-3"
                >
                    Add to cart
                </button>
                <div class="text-base font-medium line-clamp-1">
                    <a href="products/${product._id}"> ${product.name}</a>
                </div>
                <div class="mt-4 flex flex-row gap-0.5 items-center">
                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                    <i class="fa-solid fa-star" style="color: #ffb800"></i>

                    <span class="text-colors-rated-product text-sm">(83)</span>
                </div>
                <!-- price & sold-->
                <div class="flex flex-row justify-between items-center mt-8">
                    <!-- price -->
                    <div class="flex flex-row items-center gap-0.5">
                        ${
                          product.discount !== 0
                            ? `<span class="text-detail text-lg font-medium">${numeral(
                                product.price - product.price / product.discount
                              ).format("0,0")}</span>`
                            : `<span class="text-detail text-lg font-medium">${numeral(
                                product.price
                              ).format("0,0")}</span>`
                        }
                        <span class="text-sm text-detail font-normal"> đ</span>
                    </div>
                    <!-- sold -->
                    <div class="font-normal text-sm text-detail2">273 sold</div>
                </div>
            </div>
        </div>
                    `;
              })
              .join("")}
        </div>
                </main>
                <!-- dàn trang -->
                <div
                    class="flex flex-row gap-9 justify-center items-center pr-2.5 mt-8 mb-14 text-sm font-normal text-black"
                >
            <button class="cursor-pointer" id="prev-page">
                <i class="fa-solid fa-angle-left"></i>
            </button>
            
            ${Array.from({ length: totalPages }, (_, index) => {
              return `
               <span class="cursor-pointer span-value ${
                 index + 1 === currentPage
                   ? "w-10 h-10 text-center leading-10 rounded-full bg-accessory-opacity "
                   : ""
               }"
               >${index + 1}</span
               > 
               `;
            }).join("")}

            <button class="cursor-pointer" id="next-page">
                <i class="fa-solid fa-angle-right"></i>
            </button>
                  
                </div>
            </div>
    `;
}

export default ProductPage;

{
  /* <span class="w-10 h-10 text-center leading-10 rounded-full bg-accessory-opacity cursor-pointer"
>1</span
> */
}
