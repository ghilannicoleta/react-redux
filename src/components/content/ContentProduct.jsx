import { useTranslation } from "react-i18next";

export const ContentProduct = (props) => {

    const { t } = useTranslation()

    return (

        <div className='product border rounded border-solid border-amber-400 p-2.5' >
            <div className='product-img'
                onClick={props.setIsOpenModal}>
                <img alt="logo"
                    src={props.urlImg} />
            </div>

            <div className='product-name'>
                <div className='my-4'>{props.name}</div>
                <button className='product-buy  border rounded border-solid flex w-full py-2.5 my-2.5 px-1.5'>
                    <span>{props.price}</span>
                    <span className="pl-2">{props.currency}</span>
                    <span className="pl-24">{t('Order')}</span>
                </button>
            </div>

        </div>
    )
}

export default ContentProduct