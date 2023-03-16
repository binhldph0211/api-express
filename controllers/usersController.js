const { db } = require('../config/db'); // import { db } from '../config/db.js'

const getUsers = (req, res) => {
    const q = 'SELECT * FROM user';
    db.query(q, (err, data) => {
        if (err) res.status(500).json(err);
       return res.status(200).json(data)
    })
};

const getUser = (req, res) => {
    const q = 'SELECT * FROM user where id=?';
    db.query(q, [req.params.id], (err, data) => {
        if(err) throw err;
        return res.status(200).json(data);
    })
};

const addUser = (req, res) => {
    const values = [
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.birthday,
        req.body.role
    ];
    const q = 'INSERT INTO user (username, password, email, birthday, role) VALUES (?)';
    db.query(q, [values], (err, data) => {
        if (err) res.status(500).json(err);
        return res.status(201).json("Success created user");
    })
};

const updateUser = (req, res) => {
    const values = [
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.birthday,
        req.body.role,
        req.params.id
    ];
    const q = 'UPDATE user SET username=?, password=?, email=?, birthday=?, role=? where id=?';
    db.query(q, [...values], (err, data) => {
        if (err) res.status(500).json(err);
        return res.status(203).json('Success Updated user')
    })
};

const deleteUser = (req, res) => {
    const q = 'DELETE FROM user where id=?';
    db.query(q, [req.params.id], (err, data) => {
        if (err) res.status(500).json(err);
        return res.json("Success Deleted user");
    })
};

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser } ;




// data để test cho addUser

// {
    // "username": "test1",
    // "password": "12345",
    // "email": "test1@gmail.com",
    // "birthday": "2021-02-15",
    // "role": "user"
// }