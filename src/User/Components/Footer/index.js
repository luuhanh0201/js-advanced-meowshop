function UserFooter() {
  return `
    <div class="footer bg-white border-t-2 border-detail border-solid pb-20">
    <div
      class="content px-content pt-content grid gap-48 lg:grid-cols-[auto,1fr]"
    >
      <!-- group-left -->
      <div class="flex flex-row justify-between lg:flex-col">
        <!-- group-1 -->
        <div class="flex flex-col gap-7">
          <img
            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686825638/logo.aabe47d334b1014d8199a12eb123fced_rfq1yu.svg"
            alt=""
            class="inline-block h-102 w-375 object-cover"
          />
          <span class="text-detail text-2xl font-semibold">
            We Have Everything For Cat Here!</span
          >
        </div>
        <!-- group-2 -->
        <div class="flex flex-col w-full lg:mt-16 gap-4">
          <span class="text-lg font-semibold text-black"
            >Subscribe To Our Newsletter</span
          >
          <span class="text-detail2 text-sm font-normal"
            >New blogs about cats every week!</span
          >
          <form action="" class="relative w-full">
            <input
              type="text"
              required
              placeholder="YOUR EMAIL ADDRESS"
              class="px-7 py-4 border border-solid border-detail2 rounded-full text-sm font-semibold w-full"
            />
            <input
              type="submit"
              value="SUBSCRIBE"
              class="absolute px-6 py-3.5 bg-detail rounded-full text-sm font-semibold text-white right-1 top-calc-50%-width-minus-24"
            />
          </form>
        </div>
      </div>
      <!-- group right -->
      <div class="grid grid-cols-3 auto-cols-min gap-16">
        <div>
          <span class="title text-lg font-semibold text-black">
            Where's my order?</span
          >
          <ul class="style-footer">
            <li
              class="inline-block text-center uppercase text-sm text-white font-semibold px-5 py-2.5 bg-detail rounded-full"
            >
              TRACK ORDER
            </li>
            <li class="leading-normal">
              Please note, it may take longer than usual to fulfill orders
              due to the impacts of COVID-19.
            </li>
          </ul>
        </div>
        <div>
          <span class="title text-lg font-semibold text-black"
            >Shipping</span
          >
          <ul class="style-footer">
            <li class="leading-normal">Shipping Information</li>
            <li class="leading-normal">About Free Shipping</li>
          </ul>
        </div>
        <div>
          <span class="title text-lg font-semibold text-black"
            >Shopping App</span
          >
          <ul class="style-footer">
            <li class="leading-normal">
              Try our View in Your Room feature, manage registries and
              save payment info.
            </li>
            <li class="leading-normal">
              <img src="imgs/icon-footer-list.svg" alt="" />
            </li>
          </ul>
        </div>
        <div>
          <span class="title text-lg font-semibold text-black"
            >Our Company</span
          >
          <ul class="style-footer">
            <li class="leading-normal">About Us</li>
            <li class="leading-normal">Careers</li>
            <li class="leading-normal">Contact</li>
            <li class="leading-normal">Store locations</li>
          </ul>
        </div>
        <div class="">
          <span class="title text-lg font-semibold text-black"
            >Social Media</span
          >
          <ul class="style-footer">
            <li class="flex flex-row justify-between pr-4">
              <img src="./imgs/brandico_facebook.svg" alt="" />
              <img src="./imgs/bxl_instagram.svg" alt="" />
              <img src="./imgs/ant-design_youtube-filled.svg" alt="" />
              <img src="./imgs/akar-icons_twitter-fill.svg" alt="" />
            </li>
            <li class="leading-normal">
              Show us your cat with: #meowshop #themeowshop
            </li>
          </ul>
        </div>
        <div>
          <span class="title text-lg font-semibold text-black"
            >Policies</span
          >
          <ul class="style-footer">
            <li class="leading-normal">Shipping Policy</li>
            <li class="leading-normal">vvvc</li>
            <li class="leading-normal">Privacy Policy</li>
            <li class="leading-normal">Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
}

export default UserFooter;
