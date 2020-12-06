import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Sam Pilgrim',
        email: 'sam@pilgrim.com',
        password: bcrypt.hashSync('sampilgrim', 10),
        isAdmin: true
    },
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    }

]

export default users