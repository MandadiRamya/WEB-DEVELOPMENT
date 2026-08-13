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

