'use_strict';
// Object
// Example the room
// they have properties: 
// example: wallpaper, flooring
// behavoirs: 
// example: turning the light switch 

// writing an object in JS

// var objectName = {
//     key: 'value',
//     keyTwo: 2,
// }


var room = {
  
    wallpaper: 'green',
    flooring: 'wooden',
    numOfPainting: 1,
    paintingNames: ['stars'],
    lightStatus: false,
    turnLightOn: function(){
        console.log('Light has been turned on');
    },
    turnLightOff: function(){
        console.log('Light Has been turned off');
    },
    turnSwitch: function(){
        if(this.lightStatus){
            console.log('Light Has been turned off');
            this.lightStatus=false;
            console.log(this.lightStatus);
        } else {
            console.log('Light has been turned on');
            this.lightStatus = true;
            console.log(this.lightStatus);
        }
    }
};
// dot notation access
console.log(room.wallpaper);
// bracket notation access
console.log(room['wallpaper']);

// room.turnLightOn();
// room.turnLightOff();

room.turnSwitch()
room.turnSwitch()

console.log(room.flooring);
room.flooring='Balat';
console.log(room.flooring);


