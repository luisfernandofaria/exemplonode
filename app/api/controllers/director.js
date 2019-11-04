const directorModel = require('../models/director');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        directorModel.findById(req.params.directorId, function (err, directorInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "Sucesso", message: "Diretor localizado!", data: { director: directorInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let directorList = [];
        directorModel.find({}, function (err, director) {
            if (err) {
                next(err);
            } else {
                for (let director of director) {
                    directorList.push({ id: director._id, name: director.name, bestMovie: director.bestMovie });
                }
                res.json({ status: "Sucesso", message: "Lista de diretores encontrada!", data: { director: directorList } });

            }
        });
    },
    updateById: function (req, res, next) {
        directorModel.findByIdAndUpdate(req.params.directorId, { name: req.body.name }, function (err, directorInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "Sucesso", message: "Diretor atualizado com sucesso!!", data: null });
            }
        });
    },
    deleteById: function (req, res, next) {
        directorModel.findByIdAndRemove(req.params.directorId, function (err, directorInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "Sucesso", message: "Diretor deletado com sucesso!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        directorModel.create({ name: req.body.name, bestMovie: req.body.bestMovie }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "Sucesso", message: "Diretor adicionado com sucesso!!", data: null });

        });
    },
}