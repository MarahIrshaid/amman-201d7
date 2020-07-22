'use_strict';

// constructor 
function Room(wallpaper, flooring, numberOfPainitngs, paintingNames) {
    var tempArr = [];
    tempArr.push(paintingNames);

    this.wallpaper = wallpaper;
    this.flooring = flooring;
    this.numberOfPainitngs = numberOfPainitngs;
    this.paintingNames = tempArr;
    this.lightStatus = false;

    // this.turnSwitch = function() {
    //     if (this.lightStatus) {
    //         console.log('The light has beeb turned off');
    //         this.lightStatus = false;
    //     } else {
    //         console.log('The light has beeb turned on');
    //         this.lightStatus = true;
    //     }
    // }
}

Room.prototype.turnSwitch = function () {
    if (this.lightStatus) {
        console.log('The light has beeb turned off');
        this.lightStatus = false;
    } else {
        console.log('The light has beeb turned on');
        this.lightStatus = true;
    }
}

var greenRoom = new Room('green', 'wooden', 1, 'stars');
var redRoom = new Room('red', 'tiles', 1, 'stars');

console.log(greenRoom);
console.log(redRoom);

greenRoom.turnSwitch();
redRoom.turnSwitch();



// var greenRoomTwo = {
//     wallpaper: 'green',
//     flooring: 'wooden',
//     numberOfPainitngs: 1,
//     paintingNames: ['stars'],
//     lightStatus: false
// }

// console.log(greenRoomTwo);

// var redRoom = {
//     wallpaper: 'red',
//     flooring: 'tiles',
//     numberOfPainitngs: 0,
//     paintingNames = [],
//     lightStatus: false,

//     turnSwtich: function(){
//         if (this.lightStatus){
//             console.log('The light has beeb turned off');
//             this.lightStatus = false;
//         } else {
//             console.log('The light has beeb turned on');
//             this.lightStatus = true;
//         }
//     }
// }