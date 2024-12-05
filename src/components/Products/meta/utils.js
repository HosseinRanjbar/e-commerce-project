export const getArray = (number, star) => {
    let arr = []
    for (let index = 0; index < number; index++) {
        arr.push({ id: index, fill: getBoolean(star) })
        star--
    }
    return arr
}

function getBoolean(star) {
    if (star > 0) {
        return false
    } else return true

}