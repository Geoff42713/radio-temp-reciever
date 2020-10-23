radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(radio.receivedPacket(input.temperature()))
})
radio.setGroup(69)
