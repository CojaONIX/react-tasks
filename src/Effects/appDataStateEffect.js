

export const appDataStateEffect = () => ({setSelf, onSet}) => {
    const saveValues = localStorage.getItem('react-tasks-app-data');

    if(saveValues !== null) {
        setSelf(JSON.parse(saveValues));
    }

    onSet(newValue => {
        localStorage.setItem('react-tasks-app-data', JSON.stringify(newValue));
    })
};