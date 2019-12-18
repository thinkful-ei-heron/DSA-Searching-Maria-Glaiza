/* eslint-disable quotes */
const BinarySearchTree = require('./BST');
const Queue = require('./Queue');

//#1 How many searches?

// function binarySerach(array, value, cnt= 0, start, end) {
//     var start = start === undefined ? 0 : start;
//     var end = end === undefined ? 0 : end;
    
//     if(start > end) {
//         return -1;
//     }
    
//     //find the midpoint and the item at the midpoint
//     const index = Math.floor((start + end) / 2);
//     const item = array[index];

//     console.log('index : ' +index);
//     console.log('start :' + start, 'end :' + end);

//     //if the middle element is the target the return that location
//     if(item === value) {
//         return index;
//     }
//     //if the middle element is less than the target then the target lies 
//     //on the right side so eliminate all left side and only 
//     //consider after the middle to the end of the array
//     else if (item < value) {
//         return binarySerach(array, value, cnt=cnt+1, index + 1, end);
//     }
//     //if the middle element is greater than the target then the 
//     //target is on the left side so the left of the middle 
//     else if (item > value) {
//         return binarySerach(array, value, cnt=cnt+1, start, index-1);
//     }
// }

// console.log(binarySerach([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 1));

// a. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// Number of Recursive calls needed : 4
// @1 = left: 3 , middle: 11  , right: 18
// @2 = left:  3,  middle:5  , right: 11
// @3 =  left: 3, middle: 6 , right: 8
// @4 = left:3 , middle: 8, found: 8
// 4 recursive calls needed 

// b. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// Number of Recursive calls needed :
//@1 = left: 3 , middle: 12  , right: 18
//@ 2 = left: 12 , middle: 14  , right: 18
//@3 = left:  12,  middle:15  , right: 18
//@4 =  left: 12, middle: 17 , right: 18
//@5 = left:12 , middle: 18, right: 18
// 5 recursive calls needed, returns null


//#3: Find a Book 
/**
 * Imagine you are looking for a book in a library with a Dewey Decimal index. 
 * How would you go about it? Can you express this process as a search algorithm? 
 * Implement your algorithm to find a book whose Dewey and book title is provided.
 */
// const library = [
//     { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
//     { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
//     { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
//     { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
//     { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
//     { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
//     { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
//     { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
//     { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
//     { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
// ];

// function deweyBookSearch(libary, num, title,  start =0, end=library.length) {

//     if(start > end) {
//         return 'Dewey number not found in library';
//     }

//     const index = Math.floor((start + end) / 2);
//     const item = library[index];
    
//     if (parseFloat(item.dewey) === parseFloat(num)){
//         let idx = index;
//         while(library[idx].dewey === num) {
//             if(library[idx].title === title) {
//                 return `Book found at index ${idx}`;
//             }
//             idx++;
//         }
//         return 'Title not found!';
//     } 
//     else if (parseFloat(item.dewey) < parseFloat(num)) {
//         return deweyBookSearch(library, num, title, index + 1, end);
//     }
//     else if (parseFloat(item.dewey) > parseFloat(num)) {
//         return deweyBookSearch(library, num, title, start, index -1);
//     }
//  }

//  function titleSearch(index, num, title, library) {
//     let idx = index;

//     while(library[idx].dewey === num){
//         if(library[idx].title === title) {
//             return `Book found at index ${idx}`;
//         }
//         idx++;
//     }
//     return 'Title not found';

//  }
// console.log(titleSearch( 3,'005.2762','JavaScript: The Good Parts', library) )
// console.log(deweyBookSearch(library, '005.2762', 'JavaScript: The Definitive Guide'));

//#4: Searching in a BST 
//1.a 
//in-order: 14 15 19 25 27 35 79 89 90 91 
//pre-order: 35 25 15 14 19 27 89 79 91 90
//postorder: 14 15 19 25 27 35 79 89 90 91 (ANSWER )
            //         35
            //         / \
            //       25   89
            //     / \    / \
            //    15 27  79  91
            //    /\         /
            //  14   19     90



//1.b 
// post order : 5 7 6 9 11 10 8
// pre order : 8 6 5 7 10 9 11 
            //          8
            //         / \
            //       6     10
            //     / \    / \
            //     5  7  9  11
    

//#5. Implement tree traversals
let BST = new BinarySearchTree();

BST.insert(25, 25);
BST.insert(15, 15);
BST.insert(50, 50);
BST.insert(10, 10);
BST.insert(24, 24);
BST.insert(35, 35);
BST.insert(70, 70);
BST.insert(4, 4);
BST.insert(12, 12);
BST.insert(18, 18);
BST.insert(31, 31);
BST.insert(44, 44);
BST.insert(66, 66);
BST.insert(90, 90);
BST.insert(22,22);
// return inOrder(BST);
// console.log(inOrder(BST));
// console.log(preOrder(BST));
// console.log(postOrder(BST));
// BST.dsfPostOrder(BST);

//left--->root--->right
function inOrder(tree){
    if (tree.left) {
        inOrder(tree.left);
    }
    console.log(tree.key);
    if (tree.right) {
        inOrder(tree.right);
    }
}
//root--->left--->right
function preOrder(tree){
    console.log(tree.key);
    if (tree.left) {
        inOrder(tree.left);
    }
    if (tree.right) {
        inOrder(tree.right);
    } 
}

//left--->right--->root
function postOrder(tree){
    if (tree.left) {
        inOrder(tree.left);
    }
    if (tree.right) {
        inOrder(tree.right);
    }
    console.log(tree.key);
}
//#6
function main() {

const officersTree = new BinarySearchTree();
officersTree.insert(5, 'Captain Picard');
officersTree.insert(3, 'Commander Riker');
officersTree.insert(2, 'Lt Cmdr Worf');
officersTree.insert(1, 'Lieutenant Security Officer');
officersTree.insert(4, 'Lt Cmdr LaForge');
officersTree.insert(6, 'Commander Data');
officersTree.insert(8, 'Lt Cmdr Crusher');
officersTree.insert(7, 'Lieutenant Selar');
console.log(officersTree);

}
main(); 


            //          5
            //         / \
            //       3     6
            //     / \      \
            //     1  2      8
            //              /
            //            7
   

//#7. Max profit

const arr = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(arr) {
    let countMax = 0;
    
    for(let i=0; i < arr.length; i++ ){
        if(arr[i + 1] - arr[i] > countMax)
         countMax = arr[i + 1] - arr[i];
    }
    // console.log(countMax);
    return countMax;
 
    // need to check  output: 24 
} 

console.log(maxProfit(arr));


//#8. Egg Drop 
// determines max height in which egg will drop and not break 
let real_max; 
function dropEgg(height) {
	console.log("["+real_max+"] Dropping egg from "+height+"...",
		height>real_max ? "SPLOT" : "Safe");
	return height > real_max;
}

function eggDrop(maxHeight){ 
    let minHeight = 0; ++maxHeight;

    while(maxHeight > minHeight + 1) {
        let  height= Math.floor((maxHeight + minHeight) / 2);

        if(dropEgg(height)){
            // floor at which egg breaks 
            maxHeight = height;
        }
        // floor at which egg still doesnt break 
        else { minHeight = height;}
    }
    return minHeight; 
    // means last floor the egg can drop from 

}

console.log(eggDrop(100)); 