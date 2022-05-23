import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNavMenu } from '../../actions/menu/getNavMenu.action'
import { showSubMenuNav, hideSubMenuNav } from '../../actions/menu/setSubMenuNav.action'

import { useTranslation } from "react-i18next";


export function MenuNavigation() {

    const dispatch = useDispatch();
    const navMenu = useSelector((state) => state.navMenuData);
    const subMenuNavDisplay = useSelector((state) => state.subMenuNavDisplay);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getNavMenu())
    }, [dispatch])


    const menuHandler = (e) => {
        if (e.target.innerHTML === ('Menu' || 'Meniu')) {
            dispatch(showSubMenuNav())
        }
    }

    return (
        <div
            onMouseEnter={(e) => menuHandler(e)}
            onMouseLeave={() => dispatch(hideSubMenuNav())}
        >
            <ul className="flex gap-x-8 cursor-pointer">

                {navMenu.map((el) => {
                    return (
                        <li key={el.id}
                            className="hover:text-yellow-400 pb-2">
                            {t(el.title)}
                        </li>
                    )
                })}

            </ul>

            <div
                className="bg-neutral-800 border border-neutral-700 p-4 rounded-md w-[48%] absolute "
                hidden={subMenuNavDisplay.show}
            >
                <ul>
                    {
                        navMenu.find((el) => {
                            return el.title === 'Menu'

                        })?.subMenu.map((el) => {
                            return (
                                <li
                                    className="hover:text-yellow-400 cursor-pointer"
                                    key={el.id}>
                                    {<Link to={`products/${el.id}`}>{el.title}</Link>}

                                </li>
                            )
                        })
                    }

                </ul>
            </div>

        </div>
    )
}

export default MenuNavigation