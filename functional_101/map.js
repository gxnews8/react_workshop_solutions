Array.prototype.map = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i += 1){
        let newValue = callback(this[i], i);
        newArr.push(newValue);
    }
    return newArr;
}

const arr = [1,2,3]
console.log(arr.map((val) => val * 2));