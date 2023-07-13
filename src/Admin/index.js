// import AdminHeader from "./DefaultLayout/Header"
function ComponentsAdmin(container) {
    return `
    
    ${Header()}
    ${container()}
   
    
    `
}

export default ComponentsAdmin;