import Header from "./Components/Header";
import Footer from "./Components/Footer";
function RenderUserPage(page) {
  return `
    ${Header()}
   <div class ="m-auto" style = "width:1400px">
   ${page()}
   </div>
    ${Footer()}

    `;
}

export default RenderUserPage;
