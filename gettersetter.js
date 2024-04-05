// getter and setter method for control object propertities for accessing and change 
const obj = {
    _val: 1,
    get getVal(){
        return this._val * 2;
    },
    set setVal(value){
        this._val = value;
    }
}

console.log(obj._val);
console.log(obj.getVal);
console.log(obj.setVal = 44, obj.getVal);