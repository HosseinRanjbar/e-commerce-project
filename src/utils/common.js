export function setLocal(key, value) {

    if (typeof value === "function") {
        if (!getLocal(key)) return

        value(getLocal(key))

    }
    localStorage.setItem(key, JSON.stringify(value))
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
