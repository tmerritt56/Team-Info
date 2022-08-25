const Employee = require("./employee");

class Manager extends Employee {
    constructor (name,id,email,offnumber) {
        super(name,id,email);
        this.offnumber = offnumber;
    }
    getRole () {
        return "Manager";
    }
    getOffNumber () {
        return this.offnumber;
    }
}
module.exports = Manager;