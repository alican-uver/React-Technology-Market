import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

const FilterProducts = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                    placeholder ="search product"
                  />
                </div>
                {/* category search */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={company}
                    className="filter-item"
                  >
                    <option value="all">all</option>
                    <option value="samsung">samsung</option>
                    <option value="apple">apple</option>
                    <option value="nikon">nikon</option>
                  </select>
                </div>
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product-price : <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    value={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default FilterProducts;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 5px;
    border: 2px solid var(--darkGrey);
  }
`;
