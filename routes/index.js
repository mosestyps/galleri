// Remove the uuid line from the top of the file
const express = require('express');
const router = express.Router();
let upload = require('./upload');
let Image = require('../models/images'); // Make sure this path is correct

router.get('/', (req, res) => {
    Image.find({}, function(err, images) {
        if (err) console.log(err);
        res.render('index', { images: images, msg: req.query.msg });
    });
});

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.redirect(`/?msg=${err}`);
        } else {
            if (req.file == undefined) {
                res.redirect('/?msg=Error: No file selected!');
            } else {
                let newImage = new Image({
                    name: req.file.filename,
                    size: req.file.size,
                    path: 'images/' + req.file.filename
                });
                newImage.save();
                res.redirect('/?msg=File uploaded successfully');
            }
        }
    });
});

module.exports = router;