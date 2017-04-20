Array.prototype.reduce = function(callback){
    let accumulator = this[0];
    for (let i = 1; i < this.length; i += 1){
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}