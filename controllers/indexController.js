

exports.index_get = (req, res, next) => {
    res.render('index', { title: 'w3_3', currentPage: "index"});
}
