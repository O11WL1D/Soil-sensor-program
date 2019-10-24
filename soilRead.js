function soilReading() {
    pins.digitalWritePin(DigitalPin.P6, 1)
    let soil = pins.digitalReadPin(DigitalPin.P7)
    pins.digitalWritePin(DigitalPin.P6, 0)
    return soil
} 
