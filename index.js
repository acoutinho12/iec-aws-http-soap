var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
soap.createClient(url, function(err, client) {
    client.Add({ intA: 2, intB:3 }, function(err, result) {
        if(err) return console.log(err);
        console.log("Add: ",result.AddResult);
    });

    client.Subtract({ intA: 3, intB:2 }, function(err, result) {
        if(err) return console.log(err);
        console.log("Subtract: ",result.SubtractResult);
    });

    client.Multiply({ intA: 3, intB:2 }, function(err, result) {
        if(err) return console.log(err);
        console.log("Multiply: ",result.MultiplyResult);
    });
});