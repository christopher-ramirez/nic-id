/**
 * Copyright (c) 2016, Christopher Ramírez
 * All rights reserved.
 *
 * This source code is licensed under the MIT license.
 */

'use strict'

const validIdNumberRegExp = /^(\d{3})[ -]?(\d{6})[ -]?(\d{4}[a-zA-Z]{1})$/

class NicaraguanId {
    constructor(number) {
        this.fullName = undefined
        this.birthPlace = undefined
        this.birthDate = undefined
        this.validSince = undefined
        this.validThrough = undefined
        this.setNewNumber(number)
    }

    setNewNumber(number) {
        this.checkNumber(number)

        let [_, cityId, birthDigits, consecutive] = validIdNumberRegExp.exec(number)
        this.number = number
        this.cityId = cityId
        this.birthDigits = birthDigits
        this.consecutive = consecutive
        this.birthDate = dateFromSixIntDigits(this.birthDigits)
    }

    checkNumber(number) {
        if (!validIdNumberRegExp.test(number)) {
            throw `${number} is an invalid nicaraguan ID number.`
        }
    }
}

function dateFromSixIntDigits(sixIntDigits) {
    const dateFormat = /^(\d{2})(\d{2})(\d{2})$/
    let [_, day, month, year] = dateFormat.exec(sixIntDigits)
    return new Date(parseInt(year), parseInt(month) -1, parseInt(day))
}

export default NicaraguanId
