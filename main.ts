let Temperatur = 0
basic.forever(function () {
	
})
loops.everyInterval(30000, function () {
    Temperatur = input.temperature()
    serial.writeValue("Celsius", Temperatur)
    basic.showNumber(Temperatur)
})
