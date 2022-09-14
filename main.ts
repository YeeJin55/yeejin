basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . . # .
        # . . # .
        . # # . .
        `)
    basic.pause(2000)
    basic.showString("12YRS OLD")
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
