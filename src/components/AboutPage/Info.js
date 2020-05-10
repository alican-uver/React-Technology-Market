import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className = "py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src= {aboutBcg} className = "img-fluid img-thumbnail" alt="about page img"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title = "About Us" />
                        <p className = "text-lead text-muted my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vel numquam dolore adipisci rem repudiandae odio laboriosam ipsum debitis, incidunt quisquam suscipit aliquam dolor eaque! Consequatur, ratione aliquid? Fugiat minima, id esse officiis delectus ducimus nihil eius explicabo iste neque optio rem nobis maiores inventore natus excepturi alias aspernatur quo.
                        </p>
                        <p className = "text-lead text-muted my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vel numquam dolore adipisci rem repudiandae odio laboriosam ipsum debitis, incidunt quisquam suscipit aliquam dolor eaque! Consequatur, ratione aliquid? Fugiat minima, id esse officiis delectus ducimus nihil eius explicabo iste neque optio rem nobis maiores inventore natus excepturi alias aspernatur quo.
                        </p>
                        <button type ="button" className = "main-link">more info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;
