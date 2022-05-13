import React from 'react'

const Compare = () => {
  return (
    <div className='compare-container'>
        <div className='compare-row'>
            <h1>Product 1</h1>
            <form>
                <div className='compare-select'>
                    <label>Category</label>
                    <select>
                        <option hidden>Category</option>
                        <option>Mouse</option>
                        <option>Keyboard</option>
                        <option>Headset</option>
                    </select>
                </div>
                <div className='compare-select'>
                    <label>Product</label>
                    <select>
                        <option hidden>Product</option>
                        <option>Sades Hunter</option>
                        <option>Sades Lance</option>
                        <option>Sades Kappa</option>
                    </select>
                </div>
                <button className='sub-button orange' >Search</button>
            </form>
            <div className='compare-product'>
                <h1>title</h1>
                <img src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/1/25/0ebbaff1-6640-4ecf-b169-c8528d2caad5.jpg' alt="product" />
                <h3>price</h3>
                <p>300000</p>
                <h3>desc</h3>
                <p>300000</p>
                <h3>rating</h3>
                <p>300000</p>
                <h3>Stock</h3>
                <p>300000</p>        
            </div>
        </div>
        <div className='compare-row'>
            <h1>Product 1</h1>
            <form>
                <div className='compare-select'>
                    <label>Category</label>
                    <select>
                        <option hidden>Category</option>
                        <option>Mouse</option>
                        <option>Keyboard</option>
                        <option>Headset</option>
                    </select>
                </div>
                <div className='compare-select'>
                    <label>Product</label>
                    <select>
                        <option hidden>Product</option>
                        <option>Sades Hunter</option>
                        <option>Sades Lance</option>
                        <option>Sades Kappa</option>
                    </select>
                </div>
                <button className='sub-button orange' >Search</button>
            </form>
            <div className='compare-product'>
                <h1>title</h1>
                <img src='https://images.tokopedia.net/img/cache/900/VqbcmM/2022/1/15/b604a649-450f-47ce-a136-eabaf1193934.jpg' alt="product" />
                <h3>price</h3>
                <p>300000</p>
                <h3>desc</h3>
                <p>300000</p>
                <h3>rating</h3>
                <p>300000</p>
                <h3>Stock</h3>
                <p>300000</p>        
            </div>
        </div>
    </div>
  )
}

export default Compare