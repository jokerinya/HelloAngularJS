var express = require('express');
var app = express();

app.configure(function () {
    app.use(express.static(__dirname, '/'));
});

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === parseInt(customerId)) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function (req, res) {
    res.json(customers);
});

app.listen(8080);

console.log('Express is on 8080');

var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name: 'John',
        city: 'New York',
        orderTotal: 9.9956,
        orders: [
            {
                id: 1,
                product: 'Shoes',
                total: 9.9956,
            },
        ],
    },
    {
        id: 2,
        joined: '2002-10-01',
        name: 'Tina',
        city: 'Atlanta',
        orderTotal: 10.6,
        orders: [
            {
                id: 2,
                product: 'Baseball',
                total: 10,
            },
            {
                id: 3,
                product: 'Bat',
                total: 0.6,
            },
        ],
    },
    {
        id: 3,
        joined: '2010-03-20',
        name: 'Max',
        city: 'Chicago',
        orderTotal: 101.5,
        orders: [
            {
                id: 4,
                product: 'Kindle',
                total: 101.5,
            },
        ],
    },
    {
        id: 4,
        joined: '1995-07-30',
        name: 'Tony',
        city: 'Chicago',
        orderTotal: 44.99,
        orders: [
            {
                id: 5,
                product: 'Headphones',
                total: 44.99,
            },
        ],
    },
];
