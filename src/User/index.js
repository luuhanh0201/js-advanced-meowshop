import Header from "./Components/Header"
function RenderUserPage(page) {
    return `
    ${Header()}
    ${page()}
    `;
}

export default RenderUserPage;