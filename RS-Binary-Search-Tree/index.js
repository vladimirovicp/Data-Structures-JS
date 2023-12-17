
class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{

    constructor() {
        this.root = null;
    }

    add(value){
        this.root = addWithin(this.root, value)

        function addWithin(node, value){
            if(!node){
                return new Node(value);
            }

            // В дереве находятся уникальные элементы, если такой элемент есть то ничего не делаем
            if(node.value === value){
                return node;
            }

            if(value < node.value){
                node.left = addWithin(node.left, value)
            } else {
                node.right = addWithin(node.right, value)
            }

            return node;
        }

    }

    //has(data) — returns true if node with the data exists in the tree and false otherwise
    //has(data) — возвращает true, если узел с данными существует в дереве, и false в противном случае.
    has(value){
        return searchWithin(this.root, value);

        function searchWithin(node, value){
            if(!node){
                return false;
            }

            if (node.value === value){
                return true;
            }


            return value <node.value ?
                searchWithin(node.left, value) :
                searchWithin(node.right, value);
        }

    }

    //remove(data) — removes node with the data from the tree if node with the data exists
    //Remove(data) — удаляет узел с данными из дерева, если узел с данными существует

    remove(value){

        this.root = removeNode(this.root,value);

        function removeNode(node, value){
            if(!node){
                return null;
            }

            if(value < node.value){
                node.left = removeNode(node.left, value);
                return node;
            } else if(node.value < value){
                node.right = removeNode(node.right, value);
                return node;
            } else{
                if(!node.left && !node.right){
                    return null;
                }

                if(!node.left){
                    node = node.right;
                    return node;
                }

                if(!node.right){
                    node = node.left;
                    return node;
                }


                //Есть оба поддерева
                let minFroRight = node.right;

                while (minFroRight.left){
                    minFroRight = minFroRight.left
                }

                node.value = minFroRight.value
                node.right = removeNode(node.right, minFroRight.value)


                return node;
            }
        }
    }

    min(){
        if (!this.root){
            return;
        }

        let node = this.root;
        while (node.left){
            node = node.left;
        }

        return node.value;
    }

    max(){
        if (!this.root) {
            return;
        }

        let node = this.root;
        while (node.right) {
            node = node.right;
        }

        return node.value;
    }

    leftTraverse(cb) {
        doLeft(this.root, cb);

        function doLeft(node, cb) {
            if (node) {
                doLeft(node.left, cb);
                cb(node.value);
                doLeft(node.right, cb);
            }
        }
    }

    rightTraverse(cb) {
        doRight(this.root, cb);

        function doRight(node, cb) {
            if (node) {
                doRight(node.right, cb);
                cb(node.value);
                doRight(node.left, cb);
            }
        }
    }







}




//BST: Left Traversing


const bst = new BinarySearchTree;

bst.add(15)
bst.add(3)
bst.add(36)
bst.add(2)
bst.add(12)
bst.add(28)
bst.add(39)

console.log('bst',bst)

console.log('bst.has 39 ',bst.has(39))
console.log('bst.has 4 ',bst.has(4))


//console.log('bst.remove 39 \n',)

// bst.remove(36);
// console.log('bst',bst)

console.log('min  ',bst.min())


