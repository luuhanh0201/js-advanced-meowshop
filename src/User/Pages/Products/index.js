import axios from "axios";
import { useState, useEffect } from "~/assets/lib"
import { API_URL } from "~/assets/data";
import  numeral  from "numeral";

function ProductPage() {
    const [product, setProduct] = useState([])

   useEffect(()=>{
    axios.get(`${API_URL}/products`)
    .then((data) => {
        const products = data.data
        setProduct(products.data)
    })

   },[])
    // console.log(product)

    return `
     <div class="content-wraper font-Roboto px-content mx-auto">
                <!-- phân trang -->
                <div class="flex flex-row gap-3 items-center mt-2.5">
                    <span class="font-normal text-xs text-black">Home</span>
                    <span>/</span>
                    <span class="font-semibold text-xs">Cat Accessories</span>
                </div>
                <div class="text-3xl font-medium text-detail mt-6">
                    All
                    <span class="text-detail2 text-3xl font-normal">(${product.length || 0})</span>
                </div>
                <!-- main product -->
                <main class="grid grid-cols-[auto,1fr] mt-11 gap-24">
                    <!-- filter -->
                    <div>
                        <div class="text-xl font-normal">Filter</div>
                        <!--BRAND -->
                        <div class="mt-8">
                            <div class="uppercase text-base font-semibold">BRAND</div>
                            <form action="" class="grid grid-cols-[auto,1fr] gap-2.5 mt-5">
                                <input type="checkbox" name="PetKit" id="brand-1" />
                                <label for="brand-1" class="select-none text-base font-normal">PetKit</label>
                                <input type="checkbox" name="Doggy Man" id="brand-2" />
                                <label for="brand-2" class="select-none text-base font-normal">Doggy Man</label>
                                <input type="checkbox" name="LMD" id="brand-3" />
                                <label for="brand-3" class="select-none text-base font-normal">LMD</label>
                                <input type="checkbox" name="Catty Man" id="brand-4" />
                                <label for="brand-4" class="select-none text-base font-normal">Catty Man</label>
                                <input type="checkbox" name="Pawsee" id="brand-5" />
                                <label for="brand-5" class="select-none text-base font-normal">Pawsee</label>
                            </form>
                        </div>

                        <!-- price -->
                        <div class="mt-8">
                            <div class="uppercase text-base font-semibold">price</div>
                            <form action="" class="grid grid-cols-[auto,1fr] gap-2.5 mt-5">
                                <input type="radio" name="price" id="price-1" />
                                <label for="price-1" class="text-base font-normal select-none">Under $10</label>
                                <input type="radio" name="price" id="price-2" />
                                <label for="price-2" class="select-none text-base font-normal">$10 - $50</label>
                                <input type="radio" name="price" id="price-3" />
                                <label for="price-3" class="select-none text-base font-normal">$50 - $100</label>
                                <input type="radio" name="price" id="price-4" />
                                <label for="price-4" class="select-none text-base font-normal">$100 - $300</label>
                                <input type="radio" name="price" id="price-5" />
                                <label for="price-5" class="select-none text-base font-normal">$300 - $500</label>
                                <input
                                    type="radio"
                                    name="price"
                                    id="price-6
                        "
                                />
                                <label for="price-5" class="select-none text-base font-normal">$300 - $500</label>
                            </form>
                        </div>
                    </div>


                    <!-- list product -->
                    <div class="grid grid-cols-4 gap-x-3.5 gap-y-5">
            ${
                product.map(product=>{
                    return `
                    <div class="w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative h-96">
            <div class="rounded-md overflow-hidden hover:scale-105 transition duration-300 hover:cursor-zoom-in">
                ${product.discount === "" || product.discount === 0 ? "" : `
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
                >`}

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
                <img src="${product.images[0]}" alt="" class="h-56 w-full object-cover rounded-md" />
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
                        ${product.discount !== 0 ? `<span class="text-detail text-lg font-medium">${numeral(product.price - (product.price/product.discount)).format("0,0")}</span>` 
                        :
                         `<span class="text-detail text-lg font-medium">${numeral(product.price).format("0,0")}</span>`}
                        <span class="text-sm text-detail font-normal"> đ</span>
                    </div>
                    <!-- sold -->
                    <div class="font-normal text-sm text-detail2">273 sold</div>
                </div>
            </div>
        </div>
                    `
                }).join("")
            }
        </div>
                </main>
                <!-- dàn trang -->
                <div
                    class="flex flex-row gap-9 justify-center items-center pr-2.5 mt-8 mb-14 text-sm font-normal text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        class="cursor-pointer"
                    >
                        <path d="M8 1L2 7L8 13" stroke="black" stroke-width="2" />
                    </svg>
                    <span class="w-10 h-10 text-center leading-10 rounded-full bg-accessory-opacity cursor-pointer"
                        >1</span
                    >
                    <span class="cursor-pointer">2</span>
                    <span class="cursor-pointer">3</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        class="cursor-pointer"
                    >
                        <path d="M1 13L7 7L1 0.999999" stroke="black" stroke-width="2" />
                    </svg>
                </div>
            </div>
    `;
}

export default ProductPage;
