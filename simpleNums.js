const simpleNums = (num) => {
    let res = []

    while (num > 1) {
        let tmp = num
        let i = num - 1
        while (num % i !== 0 && i > 1) {
            i--
        }
        if (i === 1)
            res.push(tmp)
        num--
    }

    return res.reverse()
}

simpleNums(100)