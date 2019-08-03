const User = require('../models/User');

module.exports = {
    async read(req, res){
        try {
            const users = await User.find().sort('-createdAt');

            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    async create(req, res){
        try {
            const { nome, senha, email } = req.body;

            const user = await User.create({
                nome,
                senha,
                email
            });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    async update(req, res){
        try {
            const { nome, senha, email } = req.body;

            const user = await User.findById(req.params.id);

            user.nome = nome;
            user.senha = senha;
            user.email = email;

            await user.save();

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    async delete(req, res){
        try {
            const user = await User.findById(req.params.id);

            await user.remove();

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}