function soilReading() {
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(50)
    let soil = pins.analogReadPin(AnalogPin.P7)
    pins.digitalWritePin(DigitalPin.P6, 0)
    return soil
}

function map_(reading: number) {
    //255 per step
    return pins.map(reading, 0, 1023, 1, 5);
}

basic.forever(function () {
    output(map_(soilReading()))
})
