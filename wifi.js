
// TP-Link Archer C2 v1 auto wifi switch

var CronJob = require('cron').CronJob;
var net = require('net');
var kikapcs = new CronJob('00 45 23 * * *', function() {
  var client = net.connect({ host: '10.0.7.1', port: 23 }, function () {
    console.log('connected to server!');
  });

 client.on('data', function (data) {
    //console.log(data.toString());
   
      client.write('username\n',() => {
        client.write('password\n',() =>{
          client.write('wlctl set 2g --switch off\n', function () {  
          setTimeout(function (){
            client.end()
          },100)

          })
          
        })
       })
  });

  client.on('close', function () {
    console.log('befejezve')
  })

  client.on('timeout', () => {
    console.log('socket timeout');
    client.end();
  });
  client.on('end', function () {

    console.log('disconnected from server');
  });



}, null, true, 'Europe/Budapest');
kikapcs.start();


var bekapcs = new CronJob('00 30 7 * * *', function() {
  var client = net.connect({ host: '10.0.7.1', port: 23 }, function () {
    console.log('connected to server!');
  });

 client.on('data', function (data) {
    //console.log(data.toString());
   
      client.write('username\n',() => {
        client.write('password\n',() =>{
          client.write('wlctl set 2g --switch on\n', function () {  
          setTimeout(function (){
            client.end()
          },100)

          })
          
        })
       })
  });

  client.on('close', function () {
    console.log('befejezve')
  })

  client.on('timeout', () => {
    console.log('socket timeout');
    client.end();
  });
  client.on('end', function () {

    console.log('disconnected from server');
  });



}, null, true, 'Europe/Budapest');
bekapcs.start();

