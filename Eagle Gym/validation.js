


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    
    var namef = document.membershipForm.name.value;
    var email = document.membershipForm.email.value;
    var cell = document.membershipForm.cell.value;
    var address = document.membershipForm.address.value;
    var city = document.membershipForm.city.value;
    var zip = document.membershipForm.zip.value;
    
    

var nameErr = emailErr = cellErr = addErr = cityErr = zipErr = true;

if(namef == "") {
    printError("nameErr", "Enter your name");
} else {
        printError("nameErr", "");
        nameErr = false;
    }


if(email == "") {
    printError("emailErr", "Please enter your email address");
}  else{
        printError("emailErr", "");
        emailErr = false;
    }


if(cell == "") {
    printError("cellErr", "Enter your cell number");
}  else{
        printError("cellErr", "");
        cellErr = false;
    }

    if(zip == "") {
        printError("zipErr", "Enter Zip code");
    }  else{
            printError("zipErr", "");
            zipErr = false;
        }





if(address == "") {
    printError("addErr", "Enter your Address");
} else {
   
        printError("addErr", "");
        addErr = false;
    }

    if(city == "") {
        printError("cityErr", "Enter your City");
    } else {
       
            printError("cityErr", "");
            cityErr = false;
        }

    if((nameErr || emailErr || cellErr || addErr || cityErr || zipErr ) == true) {
        return false;}
        else
        {
            alert("Membership form submitted!");
        }


    }
        
 

