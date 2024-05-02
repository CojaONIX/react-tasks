import {atom} from "recoil";
import {appDataStateEffect} from "../Effects/appDataStateEffect";
import {defaultTasks} from "../Data/Default";


export const appDataState = atom({
    key: 'appDataState',
    default: {
        tasks: defaultTasks
    },
    effects_UNSTABLE: [appDataStateEffect()]
});