
export const getInitialValues = () => {
    const lsStore = localStorage.getItem('reduxState')

    if (lsStore) {
        return JSON.parse(lsStore)
    }

    return {
        user: initialUserState,
        filter: initialFilterState,
        cart: initialCartState,
    }
}


export const initialUserState = {
    token: "",
    name: "",
    about: "",
    avatar: "https://react-learning.ru/image-compressed/default-image.jpg",
    _id: "63e5448259b98b038f77b4da",
    email: "521python@gmail.com",
    group: "9-gr",
    __v: 0
}

export const initialFilterState = {
    search: "",
}

export const initialCartState = []