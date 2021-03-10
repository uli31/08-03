const login = (email,passwd,callback)=>{
    var err;
    var bd_data;
    if(email =='joe@foe.com' && passwd=='1234'){
      bd_data = {
          'email': email,
          'depto':'Ventas',
          'phone':'5551214'
      }  ;

    }else{
        err ={'mensaje':"credenciales incorrectas"};
        
    }
    callback(err,bd_data);
}

exports.login = login;