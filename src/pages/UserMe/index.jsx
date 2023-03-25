import { useQuery } from "@tanstack/react-query"
import { getUserMe } from "../../api/user"
import { useAuth } from "../../hooks/useAuth"

export const UserMe = () => {

    const {token} = useAuth()

    const { data: userData, isLoading, isError, error } = useQuery({
        queryKey: ['getUserMe'],
        queryFn: async () => {
            const res = await getUserMe(token)

            if (res.ok) {
                return await res.json();
            }
        }
    })
    if (isLoading) return <p>Загрузка...</p>

    if (isError) return <p>Произошла ошибка: {error}</p>
    
    return (
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
        </div>
    )
}

