import AdminHeader from "./Components/Header";
function ComponentsAdmin(container) {
  return `
    
    ${Header()}
    ${container()}
   
    
    `;
}

export default ComponentsAdmin;
