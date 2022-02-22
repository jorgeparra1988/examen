var express = require('express');
var router = express.Router();

const pool = require('../database');



router.get('/add', function(req, res, next) {
    res.render('links/add');
  });

router.post('/add', async (req, res, next) => {
    const {marca,potencia,url} = req.body;
    const newLink = {
            marca,
            potencia,
            url
        };
await pool.query('INSERT INTO coche set ?', [newLink]);
req.flash('success', 'coche guardado correctamente');
res.redirect('/links');
});

router.get('/edit/:id', function(req, res, next) {
    res.render('links/edit');
  });

router.post('/edit/:id', async (req, res, next) => {
    const {marca,potencia,url} = req.body;
    const newLink = {
        marca,
        potencia,
        url
};
await pool.query('INSERT INTO coche WHERE id= ?', [newLink, id]);
req.flash('edit!', 'coche editado correctamente');
res.redirect('/links');
});

router.get('/delete/:id',  async (req, res, next) => {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);
    req.flash('eliminado', 'coche borrado correctamente');
    res.redirect('/links');
});

router.get('/',  async (req, res, next) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links', {coche});
});


module.exports = router;