import ProccCard from "./ProcessCard";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from './../../store/slices/ProductSlice'

function ProccSection() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.product);

    const addItem = () => {
        dispatch(addToCart({
            title: 'HP Laptop',
            content: 'Donec cursus odio ac sodalses hendrerit.',
            price: 30000
        }))
    }
    const subItem = () => {
        dispatch(removeFromCart({
            id: 10,
            title: 'HP Laptop',
            content: 'Donec cursus odio ac sodalses hendrerit.',
            price: 30000
        }))
    }

    return (
        <section className="process">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <button onClick={subItem} className="btn btn-primary">Remove Item</button>
                        My Working Process <button onClick={addItem} className="btn btn-primary">Add Item</button></h2>
                </div>
                <div className="section-content">
                    <div className="row">
                        {
                            data && data.length > 0
                                ? data.map((item, i) => {
                                    return (
                                        <div key={i} className="col-4">
                                            <ProccCard data={item} />
                                        </div>
                                    )
                                })
                                : <p>no data</p>

                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProccSection;