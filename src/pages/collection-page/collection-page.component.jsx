import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionById } from '../../redux/reducers/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection-page.styles.scss';

const CollectionPage = (props) => {
    const {match, collection: {title, items}} = props;
   // console.log('collection CategoryPage:  ', collection, match);
    return (
        <div className="collection-page">
            <div className="title">{title}</div>
            <div className="items">
                {
                    items.map((item) => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const {match:{params: {collectionId}}} = ownProps;
    return {
        collection: selectCollectionById(collectionId)(state)
    };
}
export default connect(mapStateToProps)(CollectionPage);