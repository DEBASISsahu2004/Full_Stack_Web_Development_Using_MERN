export function addToLocalStorage(key, value){
    if(typeOf(value) === "object"){
        localStorage.setItem(key, Json.Stringify(value));
    }else{
        localStorage.setItem(key, value);
    }
}

export function getFromLocalStorage(key){
    let value = localStorage.getItem(key);
    if(!value){
        return null;
    }

    try{
        return Json.parse(value);
    }catch(err){
        return value;
    }
}

export function removeFromLocaStorage(key){
    localStorage.removeItem(key);
}

