const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        id: '2323',
        title: 'hello',
        imgUrl: 'jefjkniufhiur'
    });
});

router.get('/all', (req, res) => {
    res.json({
        data: [{
            title: '1'
        },
        {
            title: '2'
        },
        {
            title: '3'
        }
        ]
    })
})



module.exports = router;
