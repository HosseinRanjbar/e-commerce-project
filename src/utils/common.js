export function setLocal(key, value) {
    let previousValue;

    if (typeof value === "function") {
        previousValue = getLocal(key);
        value = value(previousValue);
    }

    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocal(key) {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
}

export function removeLocalItem(key) {
    localStorage.removeItem(key)
}

export function clearLocal() {
    localStorage.clear()
}
