const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
    const r1 = drivers.slice(0,2);
    return r1;
}

const returnLastTwoDrivers = function (drivers){
    const r2 =  drivers.slice(-2);
    return r2;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function (fare){
        return fare * int;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
}


selectDifferentDrivers(drivers, returnFirstTwoDrivers);