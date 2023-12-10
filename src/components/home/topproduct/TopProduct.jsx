import React, {useState} from "react";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
import { topProducts } from "../../assets/data/data";

const TopProduct = () => {
    const [data,setData] = useState(topProducts)
    const allCategories = ['all', ... new Set(data.map((item) => item.category))]
    const [category, setCategory] = useState(allCategories)

    const handleFilter = (category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setData(newItem)

        if(category === 'all') {
            setData(topProducts)
            return
        }
    }
  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading
              title="Our Products"
              desc="This is our best products of all times"
            />
            <div className="category">
            {category.map((category) => (
                <button className="button" onClick={() => handleFilter(category)}>
                    {category}
                </button>
            ))}     
            </div>
          </div>
          <ProductItem data={data}/>
        </div>
      </section>
    </>
  );
};

export default TopProduct;
