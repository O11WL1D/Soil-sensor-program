function soilReading() {
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(50)
    let soil = pins.analogReadPin(AnalogPin.P7)
    pins.digitalWritePin(DigitalPin.P6, 0)
    led.enable(true)
    return soil
}

function map_(reading: number) {
    //255 per step
    return pins.map(reading, 0, 1023, 0, 5);
}


function output(unformatted: number) {
    if (unformatted > 0 && unformatted < 1) { unformatted = 0 };
    if (unformatted > 1 && unformatted < 2) { unformatted = 1 };
    if (unformatted > 2 && unformatted < 3) { unformatted = 2 };
    if (unformatted > 3 && unformatted < 4) { unformatted = 3 };
    if (unformatted > 4 && unformatted < 5) { unformatted = 4 };
    //console.log("" + unformatted);
    basic.showNumber(unformatted)
}


for(;;){output(map_(soilReading()))}

