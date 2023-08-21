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

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 1)
    //         nums[i] = Infinity
    //     else {
    //         let j = nums[i] - 1
    //         while (nums[i] % j !== 0 && j > 1) {
    //             j--
    //         }
    //         if (j !== 1) nums[i] = Infinity
    //     }
    // }
    //
    // return nums.filter(i => i !== Infinity)
}

simpleNums(25)