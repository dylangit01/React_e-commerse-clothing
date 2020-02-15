import React, {Component} from "react";
import CollectionOverveiw from "../../components/collection-overview/collection-overview.component";

import {Route} from 'react-router-dom';
import CollectionPage from "../collection/collection.component";
// import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {connect} from 'react-redux'
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverveiw);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    // state = {
    //     loading: true
    // };
    //
    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()

        // Below codes are not using anymore since all put into reducer by using thunk and redux
        // const {updateCollections} = this.props
        // const collectionRef = firestore.collection('collections');
        //
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap)
        //     // console.log(collectionsMap)
        //     this.setState({loading: false})
        // })
    }

    render() {
        const {match, selectIsCollectionsLoaded} = this.props;
        // const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={props =>
                           <CollectionsOverviewWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />
                       }
                />
                <Route exact path={`${match.path}/:collectionId`}
                       render={props =>
                           <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />
                       }
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    // isCollectionFetching: selectIsCollectionFetching,
    selectIsCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))         // no need this line anymore
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
