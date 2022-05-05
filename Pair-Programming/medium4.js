function vehicle(){
    let car = {
            make: 'Honda',
            model: 'CR-V',
            year: 2003,
            milage: 15161,
            color: 'silver',

            driveToWork: this.milage + 10,
            driveAroundTheWorld: this.milage * 3,
            runErrands: this.milage + 50
           
    };
    return car;
}
console.log(vehicle());
