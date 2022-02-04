const data = {
    products: [
        {
            id: 1,
            name: 'DATEJUST 36',
            model: '126200',
            price: 5000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126200-0020.png?imwidth=420'
        },
        {
            id: 2,
            name: 'OYSTER PERPETUAL 41',
            model: '124300',
            price: 4000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m124300-0001.png?imwidth=420'
        },
        {
            id: 3,
            name: 'SKY-DWELLER',
            model: '326238',
            price: 7000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m326238-0009.png?imwidth=420'
        },
        {
            id: 4,
            name: 'DAT-DATE',
            model: '228238',
            price: 6000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m228238-0042.png?imwidth=420'
        },
        {
            id: 5,
            name: 'GMT-MASTER II',
            model: '126710BLNR',
            price: 10000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126710blnr-0002.png?imwidth=420'
        },
        {
            id: 6,
            name: 'YACHT-MASTER II',
            model: '116688',
            price: 15000,
            image: 'https://content.rolex.com/dam/2021/upright-bba-with-shadow/m116688-0002.png?imwidth=420'
        },
    ],
    
    idCart: 0,

    cart: [],

    findProduct: function(id){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id === +id){
                return this.products[i];
            }
        }
    }
}

export default data;