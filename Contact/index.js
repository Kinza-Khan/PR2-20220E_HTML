function sub() {
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    document.getElementById("userfirst").innerHTML = first += " ";
    document.getElementById("usersecond").innerHTML = last;
    if (first == "" || last == ""){
        document.getElementById("error").innerHTML= "Please enter a Name";
        document.getElementById("firstname").style.border='red 3px solid';
        document.getElementById("lastname").style.border='red 3px solid';
    }
    else if (first == "" || last != ""){
        document.getElementById("error").innerHTML= "Please enter a First Name";
        document.getElementById("firstname").style.border='red 3px solid';
        document.getElementById("lastname").style.border='black 0px solid';

    }
    else if (first != "" || last == ""){
        document.getElementById("error").innerHTML= "Please enter a Last Name";
        document.getElementById("firstname").style.border='black 0px solid';
        document.getElementById("lastname").style.border='red 3px solid';

    }
    else if (first != "" || last != "") {
        document.getElementById("content").style.display = 'none';
        document.getElementById("output").style.display = 'flex';
    }
}