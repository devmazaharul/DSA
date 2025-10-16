// push , pop , shift , unshift , map , sort , findindex,length,

Array.prototype.myPush = function (...args) {
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i];
    }

    return this.length;
};
Array.prototype.myPop = function () {
    if (this.length < 1) return;
    let temp = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return temp;
};

Array.prototype.myShify = function () {
    let temp = this[0];

    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length--;

    return temp;
};

Array.prototype.myUnShift = function (...args) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + args.length] = this[i];
    }

    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
};

Array.prototype.myIndexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
};

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            cb(this[i], i, this);
        }
    }
};
Array.prototype.myMap = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result.push(cb(this[i], i, this));
        }
    }
    return result;
};

Array.prototype.mySort = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (this[i] > this[i + 1]) {
                result.push(cb(this[i], i, this));
            }
        }
    }
    return result;
};

Array.prototype.myLength = function () {
    return this.length;
};

const arr = [31, 2, 1, 3];

const newArr = arr.myMap((item) => {
    return item;
});

Array.prototype.myFill = function (val, start = 0, end = this.length) {
    for (let i = start; i < end; i++) {
        this[i] = val;
    }
    return this;
};

Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        return cb(this[i]);
    }
};

Array.prototype.myReduce = function (cb, init) {
    let acc = init;
    let firstIndex = 0;
    if (!init) {
        acc = this[0];
        firstIndex = 1;
    }

    for (let i = this.findIndex; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }

    return acc;
};


Array.prototype.myEvery=function(cb){
for (let i = 0; i < this.length; i++) {
        if(!cb(this[i],i,this)){
            return false
        }

}
    return true
}
Array.prototype.mySome=function(cb){
        for (let i = 0; i < this.length; i++) {
           if(cb(this[i],i,this)){
            return true
           }
            
        }
        return false
}



