const xlsxFile = require('read-excel-file/node');
const { Client } = require('pg')


const db = () => {
    const connectionData = {
        user: 'edy',
        host: '',
        database: 'ampip',
        password: '1234',
        port: 5432,
    }
    return new Client(connectionData)

}
let x = new Date();
let conection = db();
conection.connect()
//adrees y street 



xlsxFile('./dos.xlsx').then((r) => {
    r.map((c) => {
        conection.query(`INSERT INTO Corporates 
        (name, english_name, address,  ext_num, int_num, postal_code, colony, municipality, state, cel_code , cel_lada, cel, social_type, membership, created_at, updated_at) values 
        ('${c[0]}', '${c[1]}', '${c[2]}', '${c[3]}', '${c[4]}', '${c[5]}', '${c[6]}','${c[7]}', '${c[8]}', '${c[9]}', '${c[10]}', '${c[11]}', '${c[20]}', '${c[21]}',  '2021-11-12 18:00:39.107656000 +0000','2021-11-12 18:00:39.107656000 +0000') RETURNING *`)
            .then(res => {
                //console.log(res.rows[0].id);
            }).catch(err => {
                console.log('--------------------->', err);
            });
    });
});