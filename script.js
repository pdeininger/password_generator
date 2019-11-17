//generate randome password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password ="";

    //create for loop to choose password characters
    for(var i = 0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("previous_passwords").innerHTML += password + "<br />";

}

document.getElementById("length").innerHTML = "Length:  25";

document.getElementById("slider").oninput =function(){

        if(document.getElementById("slider").value > 0){
            document.getElementById("length").innerHTML = "Length: " +document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innerHTML = "Length: 1";
        }

}

function copyPassword(){

        document.getElementById("display").select();

        document.execCommand("Copy");

        alert("Password copied to clipboard");
}