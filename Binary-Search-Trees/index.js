

class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

//Binary Search Tree

class BST{
    constructor(value) {
        this.root = new Node(value)
        this.count = 1
    }

    size(){
        return this.count
    }

    //вставлять
    insert(value){

        this.count++

        let newNode = new Node(value)

        //Применим рекурсию
        const searchTree = node => {
            //if value < node.value, go left
            if(value < node.value){
                // Если нет дочернего элемента, то добавляем узел
                if(!node.left){
                    node.left = newNode
                }
                //сли есть дочерний элемент, то вызываем дерево поиска
                else{
                    searchTree(node.left)
                }
            }

            //if value > node.value, go right
            else if(value > node.value){
                if(!node.right){
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }

            }

        }

        searchTree(this.root)

    }

    min(){
        let currentNode = this.root

        while (currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    max(){
        let currentNode = this.root

        while (currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.value
    }

    //содержит, хранит
    contains(value){

        let currentNode = this.root
        while (currentNode){
            if(value === currentNode.value){
                // нашли значение.
                return true
            }
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else{
                currentNode = currentNode.right
            }

        }
        //не нашли значение
        return false


    }


    //Поиск по глубине

    //depth first search  - поиск по ветвям

    //поиск по заказу
    //in-order
    //left, root, right

    dfsInOrder(){
        let result = []

        const traverse = node =>{
            if(node.left) traverse(node.left)

            result.push(node.value)

            if(node.right) traverse(node.right)
        }

        traverse(this.root)
        return result
    }

    //предварительный заказ
    //pre-order
    //root, left, right
    dfsInPreOrder(){
        let result = []
        const traverse = node =>{
            result.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    //post-order
    //lef, right, root
    dfsInPostOrder(){
        let result = []
        const traverse = node =>{

            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }

    // Поиск по ширине
    //breadth first search

    bfs(){
        let result = []
        let queue = []
        queue.push(this.root)
        while (queue.length){
            let currentNode = queue.shift()

            result.push(currentNode.value)

            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return result
    }

}


const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)


console.log('bst',bst)

console.log('size',bst.size())

console.log('min',bst.min())

console.log('max',bst.max())

console.log('Содержит 2',bst.contains(2))
console.log('Содержит 9',bst.contains(9))


//DFS
//in-order: 2,3,12,15,28,36,39

console.log('2,3,12,15,28,36,39 \n',bst.dfsInOrder())


//pre-order: 15,3,2,12,36,28,39
console.log('15,3,2,12,36,28,39 \n',bst.dfsInPreOrder())

//post-order:  2,12,3,28,39,36,15

console.log('2,12,3,28,39,36,15 \n',bst.dfsInPostOrder())

// BFS
//15,3,36,2,12,28,39


console.log('BFS \n',bst.bfs())
