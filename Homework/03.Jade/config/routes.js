module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    app.get('/home', function (req, res) {
        res.render('partials/home');
    });

    app.get('/phones', function (req, res) {
        res.render('partials/smartphones', {
            phones: [
                {
                    model: 'Apple iPhone 6S 64GB',
                    price: 1750,
                    imageUrl: '/public/img/phones/1.jpg'
                },
                {
                    model: 'Apple iPhone 6S 16GB',
                    price: 1540,
                    imageUrl: '/public/img/phones/2.jpg'
                },
                {
                    model: 'Apple iPhone 6 Plus 64GB',
                    price: 1799,
                    imageUrl: '/public/img/phones/3.jpg'
                },
            ]
        });
    });

    app.get('/tablets', function (req, res) {
        res.render('partials/tablets', {
            tablets: [
                {
                    model: 'Microsoft - Surface Pro 3 - 12" - Intel Core i3 - 128GB - Silver',
                    price: 599,
                    imageUrl: '/public/img/tablets/1.jpg'
                },
                {
                    model: 'Apple - iPad mini 4 Wi-Fi 16GB - Silver',
                    price: 299.99,
                    imageUrl: '/public/img/tablets/2.jpg'
                },
                {
                    model: 'Apple - iPad Air 2 Wi-Fi 16GB - Gold',
                    price: 374.99,
                    imageUrl: '/public/img/tablets/3.jpg'
                }
            ]
        });
    }),

    app.get('/wearables', function (req, res) {
        res.render('partials/wearables', {
            products: [
                {
                    model: 'SMART WATCH DIVA SM0615b',
                    price: 60,
                    imageUrl: '/public/img/wearables/1.jpg'
                },
                {
                    model: 'SMART WATCH FOREVER FIT SB-100 Blue',
                    price: 70,
                    imageUrl: '/public/img/wearables/2.jpg'
                },
                {
                    model: 'SMART WATCH FOREVER FIT SB-100 Yellow',
                    price: 70,
                    imageUrl: '/public/img/wearables/3.jpg'
                }
            ]
        });
    })
};