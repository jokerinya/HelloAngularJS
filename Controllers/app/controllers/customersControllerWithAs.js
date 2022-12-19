function CustomersController() {
    this.sortBy = 'name';
    this.reverse = false;
    this.customers = customers = [
        {
            joined: '2000-12-02',
            name: 'John',
            city: 'New York',
            orderTotal: 9.9956,
        },
        {
            joined: '2002-10-01',
            name: 'Tina',
            city: 'Atlanta',
            orderTotal: 10.6,
        },
        {
            joined: '2010-03-20',
            name: 'Max',
            city: 'Chicago',
            orderTotal: 5,
        },
        {
            joined: '2008-07-30',
            name: 'Tony',
            city: 'Chicago',
            orderTotal: 5,
        },
    ];
    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };
}
