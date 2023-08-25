// export const API_URL = 'https://meowshop-be.onrender.com/api'
export const API_URL = 'http://localhost:9999/api'

export const getUserLocalStorage = (user) =>{
    const users = localStorage.getItem(user)
    return JSON.parse(users)
}