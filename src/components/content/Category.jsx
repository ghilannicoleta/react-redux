import ContentProduct from "./ContentProduct";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategoryId } from "../../actions/content/getProducts.action";

export function Category() {
    const dispatch = useDispatch();
    const productsDataById = useSelector((state) => state.productsDataById);
    // const [category, setCategory] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductsByCategoryId(id))
    }, [dispatch])


    return (
        <div>
            <div className='w-4/6 h-auto mx-auto pt-40'>
                <div className='border-b border-gray-500 pt-10 flex justify-between pb-4'>
                    <div className='font-bold text-4xl'>{productsDataById.title}</div>
                    {/* <a className='mt-5' href='#'>GO TO MENU  PIZZA</a> */}
                </div>

                <div className='products-wrapper flex justify-between pt-10'>
                    {productsDataById.items?.map((item, index) => {
                        return (
                            <ContentProduct
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
        </div>
    )

}

export default Category