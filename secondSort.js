const secondSort = (arr) => {
    let res = [0]
    let min = Infinity
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min && res[res.length - 1] < arr[i]) {
                min = arr[i]
            }
        }
        if (min !== Infinity)
            res.push(min)
        min = Infinity
    }
    return res.slice(1)
}

secondSort([1, 7, 6, 3, 0])