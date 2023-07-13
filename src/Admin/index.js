
import AdminHeader from "./Components/Header"
function RenderAdminPage(container) {
    return `

    ${AdminHeader()}
    ${container()}
   
    
    `;
}


export default RenderAdminPage;
