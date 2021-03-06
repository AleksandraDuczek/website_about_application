import appTapes from '../../assets/data.js'


const STORAGE_KEY = "tapes";



export const addTapeToStorage = id => {
    const appToAdd = appTapes.find(tape => tape.id == id);
    //tape dow. nazwa//
    const tapesInStorage = getTapesFromStorage();
    console.log(tapesInStorage);
    if (tapesInStorage) {
        tapesInStorage.push(appToAdd);
        const uniqueTapesIds = [...new Set(tapesInStorage.map(tape => tape.id))]
        console.log(uniqueTapesIds);
        const uniqueTapes = uniqueTapesIds.map(id => tapesInStorage.find(s => s.id === id));
        console.log(uniqueTapes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueTapes ));
        //bylo klikane
    }
    else {
        localStorage.setItem(STORAGE_KEY,JSON.stringify([appToAdd])) 
    }
    // tu nie bylo klikane 
    }

export const getTapesFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    return dataStorage;
}


export const removeTapesFromStorage = (id) => {
    const tapesOutFromStorage = getTapesFromStorage();
    const tapesFiltered = tapesOutFromStorage.filter(app => app.id != id);
    //app dowolna nazwa//
    localStorage.setItem(STORAGE_KEY,  JSON.stringify(tapesFiltered));
}

