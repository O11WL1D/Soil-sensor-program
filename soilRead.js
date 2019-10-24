function soilReading() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    let soil = pins.digitalReadPin(DigitalPin.P7)
    pins.digitalWritePin(DigitalPin.P0, 0)
    return soil
} 
