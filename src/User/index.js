import Header from "./Components/Header";
import Footer from "./Components/Footer";
function RenderUserPage(page) {
  return `
    ${Header()}
    ${page()}
    ${Footer()}

    `;
}

export default RenderUserPage;
