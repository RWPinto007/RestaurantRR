const { db } = require("mongodb");
const mongoUrl = 'mongodb://localhost:27017/TWB';
db.Users.drop();
db.Users.insertMany([
    {
        name: 'rogerio',
        email: 'rogerio@example.pt',
        password: "5j564tlj54lj4545jl"
    },
    {
        name: 'Waldner',
        email: 'waldenr@example.pt',
        password: "5j564tlj54lj4545jl"
    },
    {
        name: 'costa',
        email: 'costa@example.pt',
        password: "5j564tlj54lj4545jl"
    }
])