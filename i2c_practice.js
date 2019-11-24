for (; ;) {
    //accelerometer  -- signed value
    //basic.showNumber(pins.i2cReadNumber(0x19, NumberFormat.Int8LE));
    // the value -128 was consistently shown.


    //magnetometer  -- signed value
    //basic.showNumber(pins.i2cReadNumber(0x1E, NumberFormat.Int8LE));
    //values changed based on physical location.

    //accelerometer, + unsigned numbers format
    //basic.showNumber(pins.i2cReadNumber(0x19, NumberFormat.UInt8LE));
    // still, the value -128 was consistently shown.


    //magnetometer + unsigned number
    //basic.showNumber(pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE));
    //values changed based on physical location 





}

