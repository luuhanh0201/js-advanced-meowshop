
import AdminHeader from "./Components/Header"
function RenderAdminPage(container) {
    return `

    ${AdminHeader()}
    <div class="bg-[url('https://res.cloudinary.com/dn3k4bznz/image/upload/v1692744759/bg-vuipet_wrxvmx.png')] bg-[length:740px_506px]>
    ${container()}
    
    </div>
   
    
    `;
}

export default RenderAdminPage;
