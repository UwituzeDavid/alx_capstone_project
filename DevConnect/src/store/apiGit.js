const API_URL= " https://api.github.com/users/{username}"  

export async function getProfile() {
    const response = await fetch(API_URL)
    
}