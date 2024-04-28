import {atom} from "recoil";
import {appDataStateEffect} from "../Effects/appDataStateEffect";


export const appDataState = atom({
    key: 'appDataState',
    default: {},
    effects_UNSTABLE: [appDataStateEffect()]
});