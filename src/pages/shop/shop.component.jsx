import React from "react";
import CollectionOverveiw from "../../components/collection-overview/collection-overview.component";

import {Route} from 'react-router-dom';
import CollectionPage from "../collection/collection.component";

const ShopPage =({match}) => {
    console.log(match);
   return (
       <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionOverveiw} />
           <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
       </div>
   )
};

export default ShopPage
