export function setLocal(key,value){
    localStorage.setItem(key,value)
}

export function getLocal(key){    
    return localStorage.getItem(key)
}

export function removeLocalItem(key) {
    localStorage.removeItem(key)
}

export function clearLocal(){
    localStorage.clear()
}
