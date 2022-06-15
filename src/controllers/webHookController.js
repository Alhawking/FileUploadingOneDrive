const webHookController = {
    update: (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.send(req.query.validationToken);
    }
}

module.exports = webHookController;