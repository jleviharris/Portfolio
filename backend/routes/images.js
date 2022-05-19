const Images = require("../models/image");
const express = require('express')
const router = express.Router();
const multer = require("multer");
const fs = require('fs')
const path = require('path')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

// http://localhost:3007/api/images
router.get('/', (req, res) => {
  try {
    Images.find({}, (error, items) => {
        if(error) return res.status(400).send('Error occurred getting images: '+ error)
      return res.render('imagePage', { items: items });
    });
  } catch (error) {
    return res.status(500).send('An error occurred getting images: '+error);
  }
});

router.post('/', upload.single('image'), (req, res) => {
    console.log(path.join(__dirname , '/uploads/' , req.file.filename))
    const obj = {
        name: req.body.name,
        img: {
            data: fs.readFileSync(path.join(__dirname, '/uploads/',  req.file.filename)),
            contentType: 'image/jpg'
        }
    }
    Images.create(obj, (error, item) => {
        try {
            res.redirect('/')
        } catch (error) {
            return res.status(500).send('An error occurred saving the image: '+ error)
        }
    })
    
})
module.exports = router;