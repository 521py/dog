import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewProduct } from "../../api/products"
import { getUserMe } from "../../api/user"
import { Modal } from "../../components/Modal/Modal"
import { ProductForm } from "../../components/ProductForm"
import { useAuth } from "../../hooks/useAuth"

export const UserMe = () => {

  const { token } = useAuth()
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  const { data: userData, isLoading, isError, error } = useQuery({
    queryKey: ['getUserMe'],
    queryFn: async () => {
      const res = await getUserMe(token)

      if (res.ok) {
        return await res.json();
      }
    }
  })

  const closeModal = () => {
    setModalOpen(false)
  }

  const onSubmit = async (values) => {
    const res = await createNewProduct(token, values)

    if (res.ok) {
      const responce = await res.json()
      return navigate(`/products/${responce._id}`)
    }
  }

  if (isLoading) return <p>Загрузка...</p>

  if (isError) return <p>Произошла ошибка: {error}</p>

  return (
    <>
      <div>
        <h1>пользователь</h1>
        <div className="user_wrapper">
          <div className="user_card">
            <div className="img_wrap">
              <img src={userData.avatar} alt="Картинка юзера" style={{ width: "60%" }} />
            </div>

            <div className="container">
              <h4><b>Информация о пользователе.</b></h4>
              <ul>
                <li>Имя: {userData.name}</li>
                <li>О себе: {userData.about}</li>
                <li>И-мейл: {userData.email}</li>
                <li>Группа: {userData.group}</li>
              </ul>

              <div className="btn_wrapper">
                <button className="btn">редактировать</button>
              </div>

              <p>Dog Food Store &</p>
            </div>
          </div>
        </div>
        <button className="btn" onClick={() => setModalOpen(true)}>Добавить товар</button>
        <Modal isOpen={modalOpen} closeModal={closeModal}><ProductForm onSubmit={onSubmit} /></Modal>
      </div>
    </>
  )
}

