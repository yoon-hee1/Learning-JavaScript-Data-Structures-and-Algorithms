/**
 * Set
 * @constructor
 */
const Set = function () {
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    };
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if (!this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        let length = 0;
        for (let value in items) {
            if (this.has(value)) {
                length++;
            }
        }
        return length;
    };
    this.values = function () {
        let values = [];
        for (let value in items) {
            if (this.has(value)) {
                values.push(value);
            }
        }
        return values;
    };
    this.union = function (otherSet) {
        let unionSet = new Set();
        const valuesA = this.values();
        for (let i = 0; i < valuesA.length; i++) {
            unionSet.add(valuesA[i]);
        }
        const valuesB = otherSet.values();
        for (let i = 0; i < valuesB.length; i++) {
            unionSet.add(valuesB[i]);
        }
        return unionSet;
    };
    this.intersection = function (otherSet) {
        let intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    this.difference = function (otherSet) {
        let differenceSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    this.subset = function (otherSet) {
        if (this.size() <= otherSet.size()) {
            const values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
};

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log(setA.subset(setB));
