function display1() {
    console.log("Display 1 function part of abc.js file ie module");
}
function display2() {
    console.log("Display 2 function part of abc.js file ie module");
}
module.exports = {display1, displayInfo: display2};