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
document.writeln("Total Even Numbers is "+result+"<br>")




// Task 2

var arr = [1,2,3,4,3,2,1,1,1,3,4,5,6,7,8,6,5,5];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1) 
            j--
        }
    }
}
document.writeln("Your array is "+arr+"<br>")



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

document.writeln("5-star ratings = ", result+"<br>");







