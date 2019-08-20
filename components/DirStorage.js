import {Platform} from 'react-native';

const RNFS = require('react-native-fs');

export const dirHome = Platform.select({

    ios: `${RNFS.DocumentDirectoryPath}/project1`,
    android: `${RNFS.DocumentDirectoryPath}/project1`



});

export const dirPictures = `${dirHome}/Pictures`;