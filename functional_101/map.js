Array.prototype.map = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i += 1){
        let newValue = callback(this[i], i);
        newArr.push(newValue);
    }
    return newArr;
}