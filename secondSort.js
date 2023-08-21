const secondSort = (arr) => {
    let res = [0]
    let min = Infinity
    let repeats = -1
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min && res[res.length - 1] === arr[i]) {
                repeats++
            }
            if (arr[i] < min && res[res.length - 1] < arr[i]) {
                min = arr[i]
            }
        }
        let toRepeat = res[res.length - 1]
        while (repeats) {
            res.push(toRepeat)
            repeats--
        }
        if (min !== Infinity)
            res.push(min)
        min = Infinity
        repeats = -1
    }
    return res
}

secondSort([1, 1, 7, 6, 3, 0])