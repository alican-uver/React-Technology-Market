import React, { Component } from 'react';
import { ProductConsumer } from '../context/context';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    { value => { console.log(value)} }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

export default HomePage;