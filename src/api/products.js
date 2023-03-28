
export const getAllProducts = (token) => {
    return fetch('https://api.react-learning.ru/products', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllProductsWithSearch = (token, search) => {
    return fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getActualProduct = (token, id) => {
    return fetch(`https://api.react-learning.ru/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}