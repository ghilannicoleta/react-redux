import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSubMenu, hideSubMenu } from '../../actions/menu/setSubMenuDisplay.action';
import { getContactData } from '../../actions/menu/getContactData.action'

export function MenuContactItems() {

    const dispatch = useDispatch();
    const subMenu = useSelector((state) => state.subMenuDisplay.show);
    const contactData = useSelector((state) => state.contactData);


    useEffect(() => {
        dispatch(getContactData())
    }, [dispatch])

    console.log(`SubMenu ${subMenu}`)
    return (
        <div
            className='text-[#ffffff76] cursor-pointer '
            onMouseEnter={() => dispatch(showSubMenu())}
            onMouseLeave={() => dispatch(hideSubMenu())}>
            <div>
                <span>{contactData[0].city} : </span>
                <span>{contactData[0].number}</span>
            </div>

            <div
                className="bg-neutral-800 border border-neutral-700 p-4 rounded-md w-[300px] absolute "
                hidden={subMenu}
            >
                <ul>
                    {contactData.length &&
                        contactData.map((el, index) => {
                            return (
                                <li
                                    key={index}
                                    className="hover:text-yellow-400 flex justify-between"
                                >
                                    <span className="border-r-2 border-r-stone-500 w-[55%]">{el.city}</span>
                                    <span className="pl-2">{el.number}</span>
                                </li>
                            )
                        })}
                </ul>
            </div>


        </div>
    )
}


export default MenuContactItems