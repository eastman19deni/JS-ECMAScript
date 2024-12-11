const rootElement = document.getElementById('root');

const targetElement = findElementByClass(rootElement, 'my-group')

function findElementByClass(root, groupName) {
    if (root.classList.contains(groupName)) {
        return root
    }

    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClass(root.children[i], groupName)

        if (found) {
            return found
        }
    }
    return null
}

console.log(targetElement)
