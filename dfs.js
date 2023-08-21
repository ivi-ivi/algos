const dfs = (tree, callback) => {
    const stack = [tree]

    while (stack.length) {
        let elem = stack.pop()
        callback(elem.value)
        let children = elem.children
        if (children) {
            children.forEach(child => stack.push(child))
        }
    }
}

let tree = {
    value: 6,
    children: [{value: 4, children: [{value: 2, children: null}]}, {value: 0, children: [{value: -2, children: null}]}]
}

dfs(tree, console.log)