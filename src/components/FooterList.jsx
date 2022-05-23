import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function FooterList() {
    const { t } = useTranslation()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/footerList')
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result)
                }
            )
    }, [])


    return (
        <div className='flex justify-center w-[80%] border-t-8 border-t-red-600' >
            {items.map((item, index) => {
                return (
                    <div key={index} className='w-1/6 pt-6'>
                        <span className='text-amber-400'>{t(item.title)}</span>
                        <ul className='py-6'>
                            {item.list.map((el) => {
                                return (
                                    <li key={el.id}>{t(el.name)}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}


            <div>
                <div className='flex mb-8 pt-6'>{t('Subscribe to newsletter')}</div>
                <input className='input p-2'></input>
                <button className='p-2 ml-2.5 border rounded border-solid'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default FooterList