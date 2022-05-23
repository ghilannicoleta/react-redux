import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MenuLogin = () => {

    const { t } = useTranslation()

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    return (
        <div className="login hover:text-yellow-400 cursor-pointer">
            {user ? <div>{user.name} - Log out</div> : <Link to={'login'}> {t('Login')}</Link>}
           { }
        </div>
    )
}

export default MenuLogin