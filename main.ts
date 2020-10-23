radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(radio.receivedPacket(input.temperature()))
})
radio.setGroup(69)
