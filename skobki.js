const skobki = (str) => {
    let stack = []

    const open = ['(', '[', '{']
    const close = [')', ']', '}']

    for (let i = 0; i < str.length; i++) {
        if (open.indexOf(str[i]) !== -1) {
            stack.push(str[i])
        } else {
            let item = stack.pop()
            if (open.indexOf(item) !== close.indexOf(str[i]))
                return false
        }
    }

    return !stack.length;

}


skobki('(((')