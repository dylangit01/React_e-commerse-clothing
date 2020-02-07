import React from "react";
import './collection-overview.styles.scss'
import {CollectionPreview} from "../collection-preview/collection-preview.component";

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selector";

const CollectionOverveiw = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps) (CollectionOverveiw)
