const bfs = (tree, callback) => {
    const queue = [tree]

    while (queue.length) {
        const item = queue.shift()
        callback(item.value)
        const children = item.children
        if (children) {
            children.forEach(child => queue.push(child))
        }
    }
}

let tree = {
    value: 6,
    children: [{value: 4, children: [{value: 2, children: null}]}, {value: 0, children: [{value: -2, children: null}]}]
}

bfs(tree, console.log)