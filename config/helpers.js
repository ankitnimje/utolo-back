const  Mysqli  =  require ( 'mysqli' );

let conn = new Mysqli({
    host : 'localhost' ,  // IP/domain name 
    post : 3306 ,  //port, default 3306 
    user : 'itsankk' ,  //user name 
    passwd : 'password' ,  //password 
    charset : '' ,  // Database encoding, default utf8mb4 [Optional] 
    db : 'mega_shop'  // You can specify the database or not [optional] 
})

let db = conn.emit(false, '')

module.exports = {
    database: db
}