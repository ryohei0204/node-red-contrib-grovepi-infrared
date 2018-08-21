// module.exports = function(RED){
//   'use strict';
//   function infraredNode(n){
//     RED.nodes.createNode(this,n);
//     //var Infrared = new GrovePi.sensors.DigitalInput(4);
//     this.gpioPin = Number(n.gpioPin);

//     console.log("gpioPin is" + this.gpioPin);
//     var node = this;
//     var Gpio = require('pigpio').Gpio;
//     infrared = new Gpio(node.gpioPin,{mode: Gpio.OUTPUT});
    
//   node.on('input', function(input_msg) {
//     var msg = new Object();
//     if(input_msg == 0){
//       msg.payload = "true";
//     }else{
//       msg.payload = "false";
//     }
//     node.send(msg);
//   });
// }
//   RED.nodes.registerType("infrared-sensor",infraredNode);
// }


module.exports = function(RED){
  'use strict';
  var GrovePiBoard = require('./lib/GrovePiBoard');
  function irNode(config){
    RED.nodes.createNode(this,config);

    //this.gpioPin = Number(n.gpioPin);
    this.boardConfig = RED.nodes.getNode(config.board);
    this.pin = config.pin;
    this.sensor = config.sensor;
    this.repeat = config.repeat;

    this.log("Digital Sensor Pin:" + this.pin+",Repeat:"+this.repeat);

    //console.log("gpioPin is" + this.gpioPin);
    var node = this;
    //ここまではとりあえず何とかなっている？
    var GrovePi = require('node-grovepi').GrovePi;

    //var Gpio = require('pigpio').Gpio;
    ir = new GrovePi(node-grovepi,{mode: GrovePi.OUTPUT});
    

    //ここからコードかく
  
    node.on('input', function(input_msg) {
    var msg = new Object();

    if(input_msg == 0){
      msg.payload = "true";
    }else{
      msg.payload = "false";
    }
    node.send(msg);
  });
}
  RED.nodes.registerType("ir-sensor",irNode);
}
