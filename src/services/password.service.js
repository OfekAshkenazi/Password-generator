export const passwordService = {
    getEmptyPassword,
    generatePass
}

// console.log('testing new passwords', generatePass(9,numbers))

function generatePass(passLength, options) {
    let optionsForPass = options.join()
    let newPassword = ''
    for (let i = 0; i < passLength; i++) {
        const char = getRandomInt(0, optionsForPass.length)
        newPassword += optionsForPass.charAt(char)
    }
    return newPassword
}

function getRandomInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min) + min)
    return randomNum
}

function getEmptyPassword() {
    const password = {
        length: 3,
        level: 'TOO WEAK!',
        numbers: '0123456789',
        lowerCase: 'abcdefghijklmnopqestvuwyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        symbols: '!@#$%^&*()_+',
        optionsForPassword: [],
        outCome: ''
    }
    return password
}