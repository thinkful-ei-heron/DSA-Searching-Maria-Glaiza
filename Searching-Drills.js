const BST = require('./BST')



//#1 How many searches?

function binarySerach(array, value, cnt= 0, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? 0 : end;
    
    if(start > end) {
        return -1;
    }
    
    //find the midpoint and the item at the midpoint
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log('index : ' +index);
    console.log('start :' + start, 'end :' + end);

    //if the middle element is the target the return that location
    if(item === value) {
        return index;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return binarySerach(array, value, cnt=cnt+1, index + 1, end);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
        return binarySerach(array, value, cnt=cnt+1, start, index-1);
    }
}

console.log(binarySerach([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 1));

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
    

//#5. 
      

