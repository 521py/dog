
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
  avatar: "",
  _id: "",
  email: "",
  group: "",
  __v: 0
}

export const initialFilterState = {
  search: "",
}

export const initialCartState = []