//#8. Egg Drop 
// determines max height in which egg will drop and not break 
let real_max;
function dropEgg(height) {
	console.log("["+real_max+"] Dropping egg from "+height+"...",
		height>real_max ? "SPLOT" : "Safe");
	return height > real_max;
}

function egg_drop_binary(maxHeight){ 
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

console.log("================"); real_max = 0;
console.log("Binary:", egg_drop_binary(100));
console.log("================"); real_max = 17;
console.log("Binary:", egg_drop_binary(100));
console.log("================"); real_max = 96;
console.log("Binary:", egg_drop_binary(100));
console.log("================"); real_max = 200;
console.log("Binary:", egg_drop_binary(100));