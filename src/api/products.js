
export const getAllProducts = (token) => {
    return fetch('https://api.react-learning.ru/products', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}