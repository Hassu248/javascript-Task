// Task 1

var arr = [1,3,2,4,5,6,7,,8,9,6];
function countEven(arr){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            count++;
        }
    }
    return count;
}
var result = countEven(arr)
document.writeln("Total Even Numbers is "+result)




// Task 2

var array = [1,2,3,2,5,4,1,7];
function removeDuplicate(array){
return array.filter((item, index) => array.indexOf(item) === index);
}
var uniqueArr = removeDuplicate(array)
document.writeln("(Your Array is "+array+") and removed duplicate number = "+uniqueArr)




// Task 3

var ratings = [5,4,5,3,5,4,2,6,5];
function countRatings(ratings) {
    var count = 0;

    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i] === 5) {
            count++;
        }
    }

    return count;
}

var result = countRatings(ratings);

document.writeln("5-star ratings = ", result);