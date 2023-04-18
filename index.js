const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'banco',
    user: 'root',
    password: 'Doumaooito',
    database:'node'
};

const mysql = require('mysql2');
const connection = mysql.createConnection(config)
connection.query("CREATE TABLE IF NOT EXISTS people (id bigint not null auto_increment, name VARCHAR(255), constraint peoplepk primary key(id))");
popularBanco();



app.get('/', (req, res) => {

    var resposta = '<h1>Full Cycle</h1>\n';
    resposta += '<ul>';

    connection.query('SELECT * FROM people', (errors, records) => {
        records.forEach(record => {
            resposta += '<li> ' + record.name + ' </li>';
        });

        resposta += '</ul>';

        res.send(resposta);
    });
});

app.get('/healthcheck', (req, res) => {
    res.status(200).send('OK');
  });

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})



function popularBanco() {
    let sql = `INSERT INTO people(name) values('Wesley')`
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Cristian')`
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Full Cycle')`
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Docker')`
    connection.query(sql)
    sql = `INSERT INTO people(name) values('Docker-Compose')`
    connection.query(sql)
}