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

// Below codes will fail because in shop.reducer.js, the default isFetching value is false, so the spinner will not function as false value,
// since spinner will not run, the collections will be null, and the pageMount will be error :

// export const selectIsCollectionFetching = createSelector(
//     [selectShop],
//     shop => shop.isFetching
// );

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);
