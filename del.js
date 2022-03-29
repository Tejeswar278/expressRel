



var arr = [Mongodb,Express,React,NodeJS]
var count = 0;

function isFullStackDeveloper(arr, student){
    for(var i=0;i<arr.length;i++){
        if(arr[i].value == "Learned & Experience"){
            count++;
        }

    }
    if(count == arr.length){
        return true;
    }
}
console.log(isFullStackDeveloper());








