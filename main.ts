let a = 0
let x = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (a == 0) {
            led.plot(x, 0)
            basic.pause(200)
            basic.clearScreen()
            x += 1
        } else {
            led.plot(x, 0)
            basic.pause(200)
            basic.clearScreen()
            x += -1
        }
    }
})
basic.forever(function () {
    if (x == 4) {
        a = 2
    }
    if (x == 0) {
        a = 0
    }
})
