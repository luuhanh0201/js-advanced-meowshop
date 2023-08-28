import { useEffect, useState } from "~/assets/lib";
import axios from "axios";
import { API_URL } from "~/assets/data";
import "animate.css"
import numeral from "numeral";
function HomePage() {
  const [categoriesAccessories, setCategoriesAccessory] = useState([]);
  const [food, setFood] = useState([]);
  const [products, setProducts] = useState([]);
  var count = 0;
  var countFood = 0;
  useEffect(() => {

    axios.get(`${API_URL}/categories`).then((response) => {
        // data category
      const categories = response.data.data;

      const categoriesAccessories = categories.find(category => category.name === "Phụ kiện")
      setCategoriesAccessory(categoriesAccessories);

      const food = categories.find(category => category.name === "Thức ăn")
      setFood(food);
    });

    axios.get(`${API_URL}/products`).then((response) => {
      const products = response.data.data;
      setProducts(products);
    });
  }, []);
// handle slide
  useEffect(()=> {
//    const listImage [] 
  },[])
  return `
   
  <main class="px-content m-x-auto mt-5 mb-20 inline-block">
  <div class="flex flex-row h-[30rem] overflow-hidden justify-between items-center">
  <div class="basis-2/5 animate__animated animate__backInLeft">
      <p class="text-2xl font-bold text-gray-500">Muốn VUI – Nuôi PET !</p>
      <div class="mt-5 mb-5 relative w-32 h-2 bg-gray-300 after:absolute after:w-2 l-5">
          <p class="relative w-4 h-4 rounded-full bg-detail -top-1 left-0 animation-lineLeftRight"></p>
      </div>
      <p class="text-lg font-medium text-green-400">
          Bạn muốn nuôi một bé Mèo không nhỉ? Chắc chắn sẽ Vui lắm đấy!
      </p>
      <p class="mt-4 text-lg font-medium text-green-400">
          Gia nhập cộng đồng MeowShop và trải nghiệm làm “Sen” nhé!
      </p>
  </div>
  <div class="h-full">
      <img
          src="https://png.pngtree.com/png-clipart/20230316/ourmid/pngtree-cute-little-cat-ai-digital-artwork-png-image_6652213.png"
          alt=""
          class="inline-block m-auto h-full object-cover animate__animated animate__backInRight"
      />
  </div>
</div>
                <div class="flex flex-row h-[25rem]  overflow-hidden items-center justify-center gap-10 mt-10">
                    <!-- slide -->
                    <div class="basis-3/5 h-full w-full relative group border-l border-b border-black pl-1.5 pb-1.5">
                        <img src="https://giadinhpet.com/wp-content/uploads/2020/11/meo-canh-gia-bao-nhieu-min-1.jpg" alt="" class="w-full h-full object-cover">
                       <div class="absolute bottom-5 right-10 w-32 flex items-center justify-center gap-6 group-hover:gap-9 transition-all">
                        <button type="button" class=" text-white bg-detail rounded-full inline-block w-10 h-10 hover:bg-green-950"><i class="fa-solid fa-arrow-left"></i></button>
                        <button type="button" class=" text-white bg-detail rounded-full inline-block w-10 h-10 hover:bg-green-950"><i class="fa-solid fa-arrow-right"></i></button>
                       </div>
                    </div>
                <div class="basis-2/5">
                    <p class="text-2xl font-bold text-gray-500">MeowShop có gì nè?</p>
                    <div class="mt-5 mb-5 relative w-32 h-2 bg-gray-300 after:absolute after:w-2 l-5">
                    <p class="relative w-4 h-4 rounded-full bg-detail -top-1 left-0 animation-lineLeftRight"></p>
                </div>
                    <p class="text-lg font-medium text-green-400">Một cửa hàng thú cưng xinh xắn cung cấp các dịch vụ chăm sóc thú cưng cao cấp, chuẩn 5*.</p>
                </div>
                </div>
                <h2 class="text-center mt-10 text-green-600 text-2xl font-bold">DỊCH VỤ THÚ CƯNG Ở MeowShop</h2>
                <div class="grid grid-cols-3 gap-16 mt-8">
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://dean2020.edu.vn/wp-content/uploads/2020/03/anh-meo-12.jpg" alt="" class="object-cover h-full w-11/12 block mx-auto rotate-[4deg]">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">Đồ chơi – Nội thất</p>
                    </div>
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://vuipet.com/wp-content/uploads/2023/04/Shop-600x600.jpg" alt="" class="object-cover h-full w-11/12 block mx-auto rotate-[-4deg]">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">
                            Thức ăn – Phụ kiện</p>
                    </div>
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://img.meta.com.vn/Data/image/2021/09/21/anh-meo-con-35.jpg" alt="" class="object-cover h-full w-11/12 block mx-auto ">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">Trông giữ thú cưng
                            Hotel – Daycare</p>
                    </div>
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://huevet.vn/wp-content/uploads/2020/03/2106_cl1-min.png" alt="" class="object-cover h-full w-11/12 block mx-auto rotate-[4deg]">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">Spa – Cắt tỉa lông chuẩn 5*</p>
                    </div>
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://scr.vn/wp-content/uploads/2020/10/Anh-meo-cute-dang-yeu-de-thuong-1536x960.jpg" alt="" class="object-cover h-full w-11/12 block mx-auto rotate-[-4deg]">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">Khu vui chơi cho Pet</p>
                    </div>
                    <div class="w-full bg-black shadow-my-shadow hover:-translate-y-2 duration-300 ease-out pb-6">
                        <div class="h-[20rem]">
                            <img src="https://vuipet.com/wp-content/uploads/2023/04/pool-600x600.jpg" alt="" class="object-cover h-full w-11/12 block mx-auto ">
                        </div>
                        <p class="mt-5 px-7 text-green-500 font-bold text-2xl">Hồ bơi thú cưng</p>
                    </div>
                </div>
                <div class="text-3xl font-bold text-green-500 text-center mt-10">MUA PHỤ KIỆN CHO MÈO</div>
                <div class="grid grid-cols-5 gap-8 mt-10 h-64">

                ${products.map((product,index) =>{
                    
                    if( product.categoryId == categoriesAccessories._id ){
                        count++;
                        if( count >= 6){
                            return
                        }
                        return `
                        <div class="relative shadow-my-shadow rounded-md overflow-hidden group">
                            <img src="${product.images[0]}" alt="" class="w-full h-full object-cover group-hover:scale-125 ease-linear duration-1000">
                            <div class="absolute w-full h-full left-0 top-0 -z-10 group-hover:z-20 duration-150 bg-black opacity-30"></div>
                            <a href="/products/${product._id}" class="absolute inline-block text-center w-full text-white h-full left-0 top-1/2 -z-10 group-hover:z-20 duration-150  text-xl font-bold">Xem chi tiết>></a>
                        </div>
                        `} 
                   
                }).join('')
            }
                </div>
               
                <span class="block text-right text-base font-bold text-blue-400 mt-6 ">Mua phụ kiện cho mèo đẹp >></span>
                <div class="text-3xl font-bold text-green-500 text-center mt-10">MUA ĐỒ ĂN CHO MÈO</div>
                <div class="grid grid-cols-5 gap-8 mt-10 h-64">
                ${products.map((product,index) =>{
                    
                    if( product.categoryId == food._id ){
                        countFood++;
                        if( countFood >= 6){
                            return
                        }
                        return `
                        <div class="shadow-my-shadow rounded-md overflow-hidden group relative">
                            <img src="${product.images[0]}" alt="" class="w-full h-full object-cover group-hover:scale-125 ease-linear duration-1000">
                            <div class="absolute w-full h-full left-0 top-0 -z-10 group-hover:z-20 duration-150 bg-black opacity-30"></div>
                            <a href="/products/${product._id}" class="absolute inline-block text-center w-full text-white h-full left-0 top-1/2 -z-10 group-hover:z-20 duration-150  text-xl font-bold">Xem chi tiết>></a>
                        </div>
                        `} 
                   
                }).join('')}
                    
                </div>
                <span class="block text-right text-base font-bold text-blue-400 mt-6 ">Mua đồ ăn cho mèo ăn >></span>
                <h2 class="text-2xl text-green-600 font-bold mt-10">Cùng MeowShop lưu giữ các khoảnh khắc đẹp với Boss cưng, Sen nhé!</h2>
                <div class="flex flex-row mt-8 mb-10">
                  <div class="flex flex-col gap-5  basis-4/6">
                      <p class="font-bold text-green-600">-Địa chỉ: <span class="text-blue-400 font-medium">Số nhà 12,Ngõ 99,Đường Cầu Diễn,Bắc Từ Liêm,Hà Nội</span></p>
                    <p class="font-bold text-green-600">-Hotline: <span class="text-green-400 font-medium">0987654321</span></p>
                    <p class="font-bold text-green-600">-Mail: <span class="text-green-400 font-medium">Quangdzno1st@gmail.com</span></p>
                    </div>
          
                </div>
            </main>
    `;
}

export default HomePage;
