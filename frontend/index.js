//alert("Welcome to web bootcamp!");

var users = [
    {
        "name": "John Doe", 
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name": "Jane Doe", 
        "gender": "Female",
        "image": "jane.png"
    }
];

var curID = 0;

function toggleUser() {
    curID = (curID + 1) % 2;

    var username = document.getElementById("user-name");
    var usergender = document.getElementById("user-gender");
    var userimage = document.getElementById("user-image");

    username.innerHTML = users[curID].name;
    usergender.innerHTML = users[curID].gender;
    userimage.src = users[curID].image;
}

function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var username = document.getElementById("user-name");
            var usergender = document.getElementById("user-gender");
            var userimage = document.getElementById("user-image");

            var newusername = data.results[0].name.first + " " + data.results[0].name.last;
            var newusergender = data.results[0].gender;
            var newuserimage = data.results[0].picture.large;

            username.innerHTML = newusername;
            usergender.innerHTML = newusergender;
            userimage.src = newuserimage;
        })
        .catch(function(err){
            console.log("Error occured : " + err);
        })
}
