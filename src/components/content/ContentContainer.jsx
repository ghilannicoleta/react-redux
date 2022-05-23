import ContentProduct from "./ContentProduct";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../actions/content/getProducts.action";


export function ContentContainer(props) {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const productsData = useSelector((state) => state.productsData);


    useEffect(() => {
        dispatch(getProductsData())
    }, [dispatch])


    return (
        productsData.length ?
            productsData.map((product, index) => {
                return (
                    <div className='w-4/6 mx-auto '
                        key={index}>
                        <div className='border-b border-gray-500 pt-10 flex justify-between pb-4'>
                            <div className='font-bold text-4xl'>{product.title}</div>
                            {/* <a className='mt-5' href='#'>GO TO MENU  PIZZA</a> */}
                        </div>

                        <div className='products-wrapper flex justify-between pt-10'>
                            {product.items.map((item, index) => {
                                return (
                                    <ContentProduct

                                        setIsOpenModal={props.setIsOpenModal}
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        currency={item.currency}
                                        urlImg={item.urlImg}
                                    />
                                )
                            })}

                        </div>

                    </div>
                )
            })

            : <div>No data to display</div>

    )
}

export default ContentContainer