const simpleNums = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1)
            nums[i] = Infinity
        else {
            let j = nums[i] - 1
            while (nums[i] % j !== 0 && j > 1) {
                j--
            }
            if (j !== 1) nums[i] = Infinity
        }
    }

    return nums.filter(i => i !== Infinity)
}

simpleNums([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15, 20, 25, 30, 100])