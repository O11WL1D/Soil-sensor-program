function soilReading() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    let soil = pins.analogReadPin(AnalogPin.P0)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return soil
}

function map_(reading: number) {
    //~205 per step
    if (reading > 1023) { reading = 1023 }
    if (reading < 0) { reading = 0 }
    return pins.map(reading, 0, 1023, 0, 5)
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
    if (unformatted == 5) {
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

//completed by Muajeh Lee and Gavin Unrue

basic.forever(function () {
    output(map_(soilReading()))
})
