import { render, router } from "~/assets/lib";
import RenderUserPage from "./User";
import ProductPage from "./User/Pages/Products";
import HomePage from "./User/Pages/Home";


import RenderAdminPage from "./Admin";
import AdminProductPage from "./Admin/pages/Products";
import AdminDetailProduct from "./Admin/pages/Products/detailProduct";
import ProductDetailPage from "./User/Pages/Products/ProductDetail";

import SignUp from "./AccountUsers/SignUp";
import Login from "./AccountUsers/Login";
import FormSignUpLogin from "./AccountUsers";
import BlogPage from "./User/Pages/Blog";
import DetailBlogPage from "./User/Pages/Blog/DetailBlog";
import AdminHomePage from "./Admin/pages/Home";

const app = document.getElementById("app");

// user routers
router.on("/", () => { render(() => RenderUserPage(HomePage), app); });
router.on("/home", () => {
  render(() => RenderUserPage(HomePage), app);
});
router.on("/products", () => {
  render(() => RenderUserPage(ProductPage), app);
});
router.on("/products/:id", ({ data }) => {
  render(() => RenderUserPage(() => ProductDetailPage(data)), app);
});
router.on("/blog", () => {
  render(() => RenderUserPage(BlogPage), app);
});
router.on("/blog/:id", ({ data }) => {
  render(() => RenderUserPage(() => DetailBlogPage(data)), app);
});


// Admin routes & validate routes
router.on("/login", () => { render(() => FormSignUpLogin(Login), app) })
router.on("/signup", () => { render(() => FormSignUpLogin(SignUp), app) })

router.on("/admin/*", () => { }, {
  before(next) {
    // user = {}
      const token = window.localStorage.getItem("token")
      console.log(token)
      if(!token) return window.location.href="/login"
      next();
  }
})


router.on("/admin", () => {
  render(() => RenderAdminPage(AdminHomePage), app);
});
router.on("/admin/home", () => {
  render(() => RenderAdminPage(AdminHomePage), app);
});
router.on("/admin/products", () => {
  render(() => RenderAdminPage(AdminProductPage), app);
});
router.on("/admin/product/:id", ({ data }) => {
  render(() => RenderAdminPage(() => AdminDetailProduct(data)), app);
});

router.resolve();

