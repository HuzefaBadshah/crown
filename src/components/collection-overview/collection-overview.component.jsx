import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopDataSelector } from '../../redux/reducers/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

const mapStateToProps = () => createStructuredSelector({
    collections: shopDataSelector
})
export default connect(mapStateToProps)(CollectionOverview);