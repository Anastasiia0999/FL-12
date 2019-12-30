var email;

var flag;

var password;

var passwordUser = 'UserPass';

var passwordAdmin = 'AdminPass';

var confirmAnswer;

var newPassword, check;

    email = prompt('Input your email', '');
    
    if(email===null || email.length===0){
    
        alert('Canceled');
    
    }else if(email.length<5){
    
        alert("I don't know any emails having name length less than 5 symbols");
        
    } else{
        
             if(email==='user@gmail.com' || email==='admin@gmail.com'){
                 
                 
                    password = prompt('Input your password', '');
    
                    if(password===null || password.length===0){

                            alert('Canceled');
                    }else{

    if(email==='user@gmail.com' && password===passwordUser || email==='admin@gmail.com' && password===passwordAdmin ){
                                
                                
                                confirmAnswer= confirm('Do you want to change your password?');

                                if(confirmAnswer){


                                    password = prompt('Input your old password', '');

                                    if(password===null || password.length===0){

                                        alert('Canceled');

                                    }else{

    if(email==='user@gmail.com' && password===passwordUser || email==='admin@gmail.com' && password===passwordAdmin){

                                                newPassword = prompt('Input your new password', '');

                                                 if(newPassword===null || newPassword.length===0){

                                                alert('Canceled');

                                                }else if(newPassword.length<6){

                                                    alert('It’s too short password. Sorry.');

                                                }else{

                                                    check = prompt('Repeat your new password','');

                                                    if(check===newPassword){

                                                        alert('You have successfully changed your password.');

                                                        if(email==='user@gmail.com'){

                                                        passwordUser=newPassword;

                                                        }
                                                        if(email==='admin@gmail.com'){

                                                        passwordAdmin=newPassword;

                                                        }

                                                    }else{

                                                        alert('You wrote the wrong password.');
                                                    }
                                                }
                                            }else{
                                                alert('Wrong password');
                                            }
                                    }
                                }else{

                                    alert('You have failed the change.');
                                }

                            }else{

                                alert('Wrong password');
                            }

                    }
            }else{

                alert('I don’t know you');
            }
        
    }
    



    
   
    

