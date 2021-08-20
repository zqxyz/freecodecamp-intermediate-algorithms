//---------------------DOUCHEBAG CODE----------------
const whatIsInAName = (c, qu) => {
    let r = []; c.forEach((iC) => {
        let m = false
        Object.getOwnPropertyNames(qu).forEach((k) => {
            const DEX = r.indexOf(iC)
            if (iC[k] == qu[k] && !m) { if (DEX === -1) r.push(iC) } 
            else { m = true; if (DEX >= 0) r.pop() }
        })})
    return r
}


//---------------NORMAL CODE---------------
/**
 * Get filtered array of objects in original array by key/value pairs in a query
 * @param {*} collection array of objects
 * @param {*} query object key and value to match
 * @returns Array of collection objects matching key and value from "source"
 */
 function whatIsInAName(collection, query) {
    let arr = []
    collection.forEach((o) => {
        let mismatch = false
        Object.getOwnPropertyNames(query).forEach((key) => {
            let index = arr.indexOf(o)
            if (o[key] == query[key] && !mismatch) {
                if (index === -1) arr.push(o)
            } else {
                mismatch = true
                if (index >= 0) arr.pop()
            }
        })
    })
    return arr
}