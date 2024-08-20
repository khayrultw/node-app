const db = require('../models')
const Tutorial = db.tutorial

exports.create = (req, res) => {

    Tutorial.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
}

exports.findAll = (req, res) => {
    const title = req.query.title
    const condition = title ? title : null
    Tutorial.findAll({
            where: condition
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Tutorial.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1)
                res.json('Updated successfully')
            else
                res.json('Cannot update')
        })
        .catch(err => {
            res.json(err)
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Tutorial.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1)
                res.json('Deleted successfully')
            else
                res.json('Cannot delete')
        })
        .catch(err => {
            res.json(err)
        })
}
