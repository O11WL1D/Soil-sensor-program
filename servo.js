let cycle: number = 0
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, cycle * 90)
    //changes the angle by 90 so it shows 0,90,180,270,360
})
input.onButtonPressed(Button.A, function () {
    cycle++
    //increases the angle
})
input.onButtonPressed(Button.B, function () {
    cycle--
    //decreases the angle
})
