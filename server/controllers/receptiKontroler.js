/**
 * GET /
 * homepage 
*/ 

exports.homepage = async(req, res) => {
    res.render('index', {title:'Perina kuvarica - Naslovna'});
}