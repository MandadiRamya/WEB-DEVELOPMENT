const express  = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("frontend"));

app.use(express.json());


var users = [
    {
        "id": 1,
        "name": "Roope",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        "id": 2,
        "name": "Hala",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/87.jpg"
    },
    {
        "id": 3,
        "name": "Tristan",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
        "id": 4,
        "name": "Auguste",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
        "id": 5,
        "name": "Maria",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/25.jpg"
    },
    {
        "id": 6,
        "name": "Ella",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    {
        "id": 7,
        "name": "Ishwar",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
        "id": 8,
        "name": "Greg",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        "id": 9,
        "name": "Ryder",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/37.jpg"
    },
    {
        "id": 10,
        "name": "Alberto",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/94.jpg"
    }
]

var nextId = 11;

function findIndex(id) {
    for(var i=0; i<users.length; i++) {
        if(id === users[i].id) {
            return i;
        }
    }
    return -1;
}

app.get("/api/users", function(req, res) {
    return res.json(users);
});

app.get("/api/users/:id", function(req, res) {
    var id = Number(req.params.id);
    var index = findIndex(id);
    if(index === -1) {
        return res.status(404).json({"message": "User not found :" + id});
    }
    var user = users[index];
    return res.json(user);
});

app.get("/api/random-user", function(req, res) {
    if(users.length === 0) {
        return res.status(404).json({"message": "No user found"});
    }
    var randomIndex = Math.floor(Math.random() * users.length);
    return res.json(users[randomIndex]);
});

app.post("/api/users", function(req, res) {
    var newuser = req.body;
    var tempuser = {
        "id": nextId,
        "name": newuser.name,
        "gender": newuser.gender,
        "image": newuser.image
    };
    nextId += 1;
    users.push(tempuser);
    return res.status(201).json({"message": "User created successfully", "user": tempuser});
});


















app.listen(port, function() {
    console.log("Server running on http://localhost:" + port);
});


