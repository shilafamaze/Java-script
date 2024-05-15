function valid(){
    let email= document.getElementById("email").value;
    let reg= /^([a-z A-Z]+)([0-9 \._]+)@([a-z A-Z 0-9])+.([a-z]+)(.[a-z]+)?$/;
    let result=reg.test(email);

    if(result==false){
        alert("sorry! Invalid Email ID");
        return false;

  }
  else{
    alert("successfully");
    return true;
  }
}