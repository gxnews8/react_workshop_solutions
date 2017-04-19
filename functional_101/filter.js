Array.prototype.filter = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i += 1){
        if(callback(this[i])){
           newArr.push(this[i]); 
        }
    }
    return newArr;
}
