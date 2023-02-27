export const passwordService = {
   
}

export const numbers = '0123456789'
// abcdefghijklmnopqestvuwyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+
// console.log('testing new passwords', generatePass(9))

function generatePass(passLength, options) {
    let optionsForPass = options
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