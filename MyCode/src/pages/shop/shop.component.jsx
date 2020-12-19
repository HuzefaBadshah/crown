import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map((data) => (
                        <CollectionPreview key={data.id} {...data}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

export default Shop;