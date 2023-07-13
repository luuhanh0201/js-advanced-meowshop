import { render, router } from "~/assets/lib"
import RenderUserPage from "./User";
import ProductPage from "./User/Pages/Products";
import HomePage from "./User/Pages/Home";


import RenderAdminPage from "./Admin";
import AdminProductPage from "./Admin/pages/Products";
import AdminDetailProduct from "./Admin/pages/Products/detailProduct";

const app = document.getElementById("app");

// user routers
router.on("/", () => { render(()=>RenderUserPage(HomePage), app) })
router.on("/home", () => { render(()=>RenderUserPage(HomePage), app) })
router.on("/products", () => { render(()=>RenderUserPage(ProductPage), app) })





// Admin routes
router.on("/admin", () => { render(() => RenderAdminPage(HomePage), app) })
router.on("/admin/home", () => { render(() => RenderAdminPage(HomePage), app) })
router.on("/admin/products", () => { render(() => RenderAdminPage(AdminProductPage), app) })
router.on("/admin/product/:id", ({ data }) => { render(() => RenderAdminPage(() => AdminDetailProduct(data)), app) })

router.resolve()
