const secondSort = (arr) => {
    let res = []
    let min = Infinity
    let minIdx = -1
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '-' && arr[i] < min) {
                min = arr[i]
                minIdx = i
            }
        }
        res.push(min)
        arr[minIdx] = '-'
        min = Infinity
    }
    return res
}