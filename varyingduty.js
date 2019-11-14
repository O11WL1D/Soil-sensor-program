let cycleCounter: number = 1
basic.forever(function () {
    if (cycleCounter < 1) { cycleCounter = 1 }
    if (cycleCounter > 19) { cycleCounter = 19 }
    pins.servoSetPulse(AnalogPin.P1, 1000 * cycleCounter)
})
/*1000 is used here because that gives a duty cycle of 5% 
compared to the 20000 microsecond period the multiplier 
moves the duty cycle from 5% up to 95% in 5% increments*/
input.onButtonPressed(Button.A, function () {
    cycleCounter++
})
input.onButtonPressed(Button.B, function () {
    cycleCounter--
})
/*period is 20.00 ms so the calculations of the 5% duty
cycle was given by taking 5% of 20.00 ms which gave
1000 microseconds. The 19 in the cycleCounter comes from
the 1000*19 = 19000 microseconds which is 95% of the 
total period. */
