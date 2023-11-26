function RegisterValidation(values){
    let error = {}
    const email_pattern = /\S+@\S+\.\S+/
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name==='')
      error.name = "name should not empty"
    else 
      error.email = ""

    if(values.user_id==='')
      error.user_id = "user_id should not empty"
    else if(values.user_id.length>5)
      error.user_id = "Invalied id"
    else 
      error.user_id = ""

    if(values.email==='')
      error.email = "email should not empty"
    else if(!email_pattern.test(values.email))
      error.email = "Email didn't match"
    else 
      error.email = ""

    if(values.password==='')
      error.password = "password should not empty"
    else if(values.password.length>6)
      error.password = "password didn't match"
    else 
      error.password = ""

    if(values.repassword==='')
      error.repassword = "repassword should not empty"
    else if(values.repassword.length>6)
      error.repassword = "repassword didn't match!"
    else
       error.repassword = "" 
    
    if(values.phone_number=='')
      error.phone_number = "phone no should not empty"
    else if(values.phone_number.length > 12)
       error.phone_number = "Invalied number"
    else
       error.phone_number = ""

     if(values.Address==='')
      error.Address = "Address should not empty"
    else if(values.Address.length > 30)
        error.Address =  "you can not fill your address more then 30 char."
    else 
      error.Address = ""

      return error;
}

export default RegisterValidation