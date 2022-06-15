const webHookController = {
    update: (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.send(req.query.validationToken);
        console.log('Corriendo controlador')
    }
}

module.exports = webHookController;