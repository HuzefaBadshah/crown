import { createSelector } from "reselect";

const DirectorySelector = ({directory}) => directory;

export const DirectorySectionsSelector = createSelector(
    [DirectorySelector], 
    (sections) => sections
);