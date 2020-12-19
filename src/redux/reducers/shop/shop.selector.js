import { createSelector } from "reselect";

const shop = ({shop}) => shop;

export const shopDataSelector = createSelector(
    [shop],
    (shop) => shop
);

export const selectCollectionById = (collectionId) => {
    return createSelector(
    [shopDataSelector],
    (collections) => collections.find((collection) => collection.id === parseInt(collectionId))
);
};