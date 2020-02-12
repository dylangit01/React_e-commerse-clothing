import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// below codes transfer object to an array, as the shop list has been transferred to an object
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections =>
        collections ?
            Object.keys(collections).map(key => collections[key])
            :
            []
);


export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );
