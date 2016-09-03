
var uniqueRandomArray=require('unique-random-array');
var customerName=require('./customer.json');

module.exports={

    all:customerName,
     random:uniqueRandomArray(customerName)


};