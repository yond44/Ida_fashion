import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const SearchItems = ({value,product,onSearch}) => {

  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {product.filter((items) => {
            const searchKey = value.toLowerCase()
            const title = items.title.toLowerCase()

            return searchKey && title.startsWith(searchKey) && title !== searchKey
          }).slice(0,10).map((items) => (
            <div className="box" key={items.id}>
            <div className="img">
              <img src={items.cover} alt="not Found" />
              <div className="overlay">
                <button className="button">
                  <FiShoppingBag />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                <button className="button">
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
                <h3>{items.title}</h3>
                <p>{items.author}</p>
                <h4>Price: Rp. {items.price}</h4>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SearchItems
