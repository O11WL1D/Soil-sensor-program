let calibrationCounter: number = 0
//used to determine which part of the calibration the program is on
let lowerValue: number = 0
let upperValue: number = 0
//global variables that change the mapping based on initial calibration
function soilReading() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(50)
    let soil = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return soil
}

function map_(reading: number) {
    //steps change depending on calibration
    if (reading > 1023) { reading = 1023 }
    if (reading < 0) { reading = 0 }
    return pins.map(reading, lowerValue, upperValue, 0, 5)
}


function output(unformatted: number) {
    basic.clearScreen()
    if (unformatted > 1 && unformatted < 2) {
        toggleRows(4)
    }
    if (unformatted > 2 && unformatted < 3) {
        toggleRows(3)
    }
    if (unformatted > 3 && unformatted < 4) {
        toggleRows(2)
    }
    if (unformatted >= 4 && unformatted < 5) {
        toggleRows(1)
    }
    if (unformatted >= 5) {
        toggleRows(0)
    }
}

function toggleRows(upperLimit: number) {
    for (let x = 4; x > upperLimit - 1; x--) {
        led.toggle(0, x); led.toggle(1, x)
        led.toggle(2, x); led.toggle(3, x)
        led.toggle(4, x)
    }
    //function for toggling matrix based on mapping
}

function autoCalibrate() {
    if (calibrationCounter == 0 || calibrationCounter == 4 || calibrationCounter == 8) {
        basic.showArrow(4)
    }
    //shows that it will record lowerValue when A is pressed
    if (calibrationCounter == 1 || calibrationCounter == 5 || calibrationCounter == 9) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        lowerValue += pins.analogReadPin(AnalogPin.P12)
        pins.digitalWritePin(DigitalPin.P8, 0)
        calibrationCounter++
    }
    // takes lower readings every other time
    if (calibrationCounter == 2 || calibrationCounter == 6 || calibrationCounter == 10) {
        basic.showArrow(0)
    }
    //shows that it will record upperValue when A is pressed
    if (calibrationCounter == 3 || calibrationCounter == 7 || calibrationCounter == 11) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        upperValue += pins.analogReadPin(AnalogPin.P12)
        pins.digitalWritePin(DigitalPin.P8, 0)
        calibrationCounter++
    }
    // takes upper readings every other time
    if (calibrationCounter == 12) {
        lowerValue = lowerValue / 3
        upperValue = upperValue / 3
        basic.clearScreen()
        basic.showString("Calibration Success")
        calibrationCounter++
    }
}

input.onButtonPressed(Button.A, function () {
    calibrationCounter++
})
// when button a is pressed the calibrated cycles through upper and lower readings

basic.forever(function () {
    while (calibrationCounter < 13) {
        autoCalibrate()
    }
    //after calibration it performs normal readings
    output(map_(soilReading()))
})
//completed by Muajeh Lee and Gavin Unrue
