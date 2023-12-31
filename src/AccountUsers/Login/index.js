
import axios from "axios";
import { useEffect, useState } from "~/assets/lib"
import { API_URL } from "~/assets/data";
import { signInValid } from "../validate";
import "animate.css"
function Login() {
    const [toastMessage, setToastMessage] = useState("")
    const [loading, setLoading] = useState("")

    const [messageValid, setMessageValid] = useState({
        userName: "",
        password: ""
    })
    useEffect(() => {
        const formLogin = document.getElementById("form-login")
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            setLoading(`
            <div class="fixed z-50 inset-0 flex justify-center items-center ">
                <div class="fixed inset-0 bg-black opacity-10"></div>
                <svg
                    class="animate-spin -ml-1 mr-3 h-10 w-10 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div >
            `)
            const account = {
                userName: document.getElementById('userName').value,
                password: document.getElementById('password').value,
            }
            if (account.userName === "" || account.password === "") {
                const newMessageValid = {};
                account.userName === "" ? newMessageValid.userName = "Please enter username" : newMessageValid.userName = "";
                account.password === "" ? newMessageValid.password = "Please enter password" : newMessageValid.password = "";
                setMessageValid(newMessageValid);
                 setLoading("")

                return;
            }
            const { error } = signInValid.validate(account, { abortEarly: false });
            if (error) {

            }
            axios.post(`${API_URL}/auths/signin`, account)
                .then(async (account) => {
                    console.log(1)
                    const userInfo = await account.data.user
                    const Token = await account.data.accessToken
                    await window.localStorage.setItem("user", JSON.stringify(userInfo))
                    await window.localStorage.setItem("token", Token)
                    await setLoading("")
                    if (userInfo.role === "admin") {

                    }
                    await setToastMessage(`

                    <div class="fixed z-50 inset-0 flex justify-center items-center">
                    <div class="fixed inset-0 bg-black opacity-10"></div>
                    <div
                        class="flex flex-col animate__animated animate__slideInDown z-50 bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-sm"
                    >
                        <h2 class="text-2xl font-semibold mb-4">Đăng nhập thành công!</h2>
                        <p>Bạn có thể truy cập tài khoản của mình.</p>
                        ${userInfo.role === 'admin' ? `<div role="status"class = "flex w-full mt-8 justify-center">
                        <a class = "mr-1 uppercase text-lg font-medium py-2 px-2 bg-detail rounded-md  text-white  hover:bg-detail/90 duration-200" href = "/admin">Admin</a>
                        <a class = "ml-1 uppercase text-lg font-medium py-2 px-2 bg-detail rounded-md  text-white  hover:bg-detail/90 duration-200" href = "/">User</a>
                     </div>` : setTimeout(() => { window.location.href = "/" }, 2000)}
                    </div>
                </div>

                    `)
                    await setLoading("")

                })
                .catch(async error => {
                    console.log(error.response)
                    await setLoading("")

                    await setToastMessage(`
                    <div class="fixed z-50 inset-0 flex justify-center items-center text-center">
                    <div class="fixed inset-0 bg-black opacity-10"></div>
                    <div
                        class="flex flex-col animate__animated animate__slideInDown  z-50 bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-sm"
                    >
                        <h2 class="text-2xl font-bold mb-4">Login failed!</h2>
                        <p>${error.response.data.message}</p>
                       ${error.response.data.password === false ? "" : `
                       <div role="status"class = "flex w-full mt-8 justify-center">
                           <a class = "uppercase text-base font-medium py-2 px-3 bg-detail rounded-md  text-white  hover:bg-detail/90 duration-200" href = "/signup">Create account</a>
                        </div>
                       `}
                    </div>
                </div>
                    `)
                    

                    setTimeout(() => { setToastMessage("") }, 2000)

                    const endTime = await new Date().getTime();
                    const loadingTime = await (endTime - startTime) / 1000;
                    await console.log(loadingTime)
                })

        })

    })

    return `
    <div
    class=" relative h-full content-wrapper w-full bg-[url('https://res.cloudinary.com/dn3k4bznz/image/upload/v1690995572/Meowshop/zwmaduwrwmzuoelnuuh2.png')] bg-no-repeat bg-cover bg-center box-border"
>
    <div class="bg-white px-content m-auto py-5 flex justify-between items-center w-full">
        <img
            src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1689681502/Meowshop/LOGO4_1_w8r6hs.png"
            alt=""
            class="object-cover"
        />
        <div class="text-detail text-base font-normal">Need help?</div>
    </div>

    <div class="flex gap-20 justify-center items-center">
        <div class="content w-1/3 bg-white pt-12 px-12 mt-12 h-full rounded-md shadow-my-shadow pb-10">
            <form id="form-login" class="mt-2">
                <div class="text-3xl font-semibold text-black">Log in</div>
                <span class="inline-block mt-3.5 text-base font-normal text-detail2">New to Meow Shop?</span>
                <a href = "/signup" class="inline-block mt-3.5 text-detail text-base font-medium">Sign up</a>
                <input
                    type="text"
                    id="userName"
                    placeholder="Username "
                    class="mt-6 text-base text-detail font-normal py-3.5 px-6 border border-solid border-detail2 rounded-full max-h-12 w-full"
                />
                ${messageValid.userName ? `<span class = "ml-2 text-red-600 text-xs" >${messageValid.userName}</span>` : ""}
                <br />
                <input
                    type="password"
                    name=""
                    id="password"
                    placeholder="Password"
                    class="text-base text-detail font-normal py-3.5 px-6 border border-solid border-detail2 rounded-full max-h-12 w-full mt-6"
                />
                ${messageValid.password ? `<span class = "ml-2 text-red-600 text-xs" >${messageValid.password}</span>` : ""}

                <br />
                <button
                    type="submit"
                    class="uppercase text-lg font-medium py-3.5 w-full bg-detail rounded-full text-white mt-6 hover:bg-detail/90 duration-200"
                >
                    log in
                </button>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-sm font-normal text-detail2">Forgot your password?</span>
                    <span class="text-sm font-normal text-detail2">Login with phone number</span>
                </div>
            </form>
            <!-- line -->
            <div
                class="mt-5 relative after:w-full after:h-0.5 after:absolute after:bg-detail after:left-0 after:top-2.5 after:z-10"
            >
                <div
                    class="text-sm font-normal text-center text-detail2 uppercase absolute p-0.5 bg-white z-20 left-calc-50%-width-minus-16 -top-0.5"
                >
                    or
                </div>
            </div>
            <button
                class="border border-detail rounded-full flex w-full justify-center items-center p-2 mt-14 gap-1.5"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path
                        d="M25.9399 11.715H25.0002V11.6666H14.5002V16.3333H21.0936C20.1317 19.0498 17.5469 20.9999 14.5002 20.9999C10.6344 20.9999 7.50016 17.8657 7.50016 13.9999C7.50016 10.1342 10.6344 6.99992 14.5002 6.99992C16.2846 6.99992 17.908 7.67308 19.1441 8.77267L22.444 5.47275C20.3603 3.53084 17.5732 2.33325 14.5002 2.33325C8.05725 2.33325 2.8335 7.557 2.8335 13.9999C2.8335 20.4428 8.05725 25.6666 14.5002 25.6666C20.9431 25.6666 26.1668 20.4428 26.1668 13.9999C26.1668 13.2177 26.0863 12.4541 25.9399 11.715Z"
                        fill="#FFC107"
                    />
                    <path
                        d="M4.17871 8.56967L8.01179 11.3808C9.04896 8.81292 11.5608 6.99992 14.5002 6.99992C16.2846 6.99992 17.908 7.67308 19.1441 8.77267L22.444 5.47275C20.3604 3.53084 17.5732 2.33325 14.5002 2.33325C10.019 2.33325 6.13288 4.86317 4.17871 8.56967Z"
                        fill="#FF3D00"
                    />
                    <path
                        d="M14.5 25.6666C17.5135 25.6666 20.2517 24.5133 22.3219 22.6379L18.7111 19.5824C17.5004 20.5031 16.021 21.0011 14.5 20.9999C11.4655 20.9999 8.88894 19.065 7.91827 16.3647L4.11377 19.296C6.0446 23.0742 9.96577 25.6666 14.5 25.6666Z"
                        fill="#4CAF50"
                    />
                    <path
                        d="M25.9397 11.7152H25V11.6667H14.5V16.3334H21.0934C20.6333 17.6263 19.8045 18.7561 18.7093 19.5832L18.7111 19.582L22.3219 22.6375C22.0664 22.8697 26.1667 19.8334 26.1667 14.0001C26.1667 13.2178 26.0862 12.4542 25.9397 11.7152Z"
                        fill="#1976D2"
                    />
                </svg>
                <span class="text-sm font-normal text-black">Continue with Google </span>
            </button>
            <button
                class="border border-detail rounded-full flex w-full justify-center items-center p-2 mt-3.5 gap-1.5"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <g clip-path="url(#clip0_1_1794)">
                        <path
                            d="M24.5 12C24.5 5.37263 19.1274 0 12.5 0C5.87262 0 0.5 5.37253 0.5 12C0.5 17.9895 4.88825 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1575 4.6875C16.4705 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.8398 7.875 14.375 8.80003 14.375 9.74906V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1117 22.954 24.5 17.9896 24.5 12Z"
                            fill="#1877F2"
                        />
                        <path
                            d="M17.1711 15.4688L17.7031 12H14.375V9.74906C14.375 8.79994 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1575 4.6875C12.4166 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2453 23.9514 11.8722 24.0002 12.5 24C13.1278 24.0002 13.7547 23.9514 14.375 23.8542V15.4688H17.1711Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1794">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <span class="text-sm font-normal text-black">Continue with Facebook</span>
            </button>
        </div>
        
    ${loading} 
    ${toastMessage}


    </div>
    

    
    
</div>
    `;
}

export default Login;

