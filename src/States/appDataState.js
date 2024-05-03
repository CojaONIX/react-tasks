import {atom} from "recoil";
import {appDataStateEffect} from "../Effects/appDataStateEffect";
import {appVersion, defaultTasks} from "../Data/Default";


export const appDataState = atom({
    key: 'appDataState',
    default: {
        app: {
            version: appVersion
        },
        tasks: defaultTasks
    },
    effects_UNSTABLE: [appDataStateEffect()]
});