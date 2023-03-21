input.onButtonPressed(Button.A, function () {
    for (let oszlop = 0; oszlop <= 4; oszlop++) {
        basic.pause(500)
        led.plot(oszlop, 3)
        led.plot(oszlop, 4)
    }
    basic.showNumber(randint(300, 3000))
    basic.clearScreen()
})
