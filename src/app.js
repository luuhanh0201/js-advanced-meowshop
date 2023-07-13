import { render, router } from "~/assets/lib";
import RenderUserPage from "./User";
import ProductPage from "./User/Pages/Products";
import HomePage from "./User/Pages/Home";

import ComponentsAdmin from "./Admin";

const app = document.getElementById("app");

// user routers
router.on("/", () => {
  render(() => RenderUserPage(HomePage), app);
});
router.on("/home", () => {
  render(() => RenderUserPage(HomePage), app);
});
router.on("/products", () => {
  render(() => RenderUserPage(ProductPage), app);
});

// Admin routes
router.on("/admin", () => {
  render(() => ComponentsAdmin(HomePage), app);
});
router.on("/admin/home", () => {
  render(() => ComponentsAdmin(HomePage), app);
});
router.on("/admin/products", () => {
  render(() => ComponentsAdmin(ProductPage), app);
});
router.on("/admin/product/:id", ({ data }) => {
  render(() => ComponentsAdmin(() => ProductDetailPage(data)), app);
});

router.resolve();
