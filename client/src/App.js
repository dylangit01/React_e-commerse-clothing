import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import {HomePage} from './pages/homepage/homepage.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

// import {selectCollectionsForPreview} from "./redux/shop/shop.selector";


class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {
            setCurrentUser,
            // collectionsArray
        } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    }, () => console.log(this.state))
                })
            }

            setCurrentUser(userAuth); // Here means if userAuth is null, so here setCurrentUser is null
            // Below deconstruct array to title and items, and return a new array with title and items only:
            // await addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))

        })
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={
                               () => this.props.currentUser ?
                                   <Redirect to='/'/>
                                   :
                                   <SignInAndSignUpPage/>
                           }
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
