
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

export const createNewProduct = (token, values) => {
  return fetch('https://api.react-learning.ru/products', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(values)
  })
}