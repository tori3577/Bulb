document.onkeydown = function (e) {
    toggleLamp(e.keyCode);
};
function toggleLamp(keyCode) {
    if (keyCode == 32) {
        var lamp = document.getElementById("lamp");
        var clazz = lamp.getAttribute("class");
        console.log("current state is " + clazz);
        if (clazz == "off") {
            console.log("turning on");
            lamp.setAttribute("class", "on");
        } else {
            console.log("turning off");
            lamp.setAttribute("class", "off");
        }
    }
} 

