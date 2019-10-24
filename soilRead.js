function soilReading() {
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(50)
    let soil = pins.analogReadPin(AnalogPin.P7)
    pins.digitalWritePin(DigitalPin.P6, 0)
    return soil
}
