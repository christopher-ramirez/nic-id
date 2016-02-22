/**
 * Copyright (c) 2016, Christopher Ramírez
 * All rights reserved.
 *
 * This source code is licensed under the MIT license.
 *
 * @providesModule Draft
 */

'use strict'

class NicaraguanId {
  const validIdNumberRegExp = /(\d{3})[ -]?(\d{6})[ -]?(\d{4}\S{1})/

  this.number = undefined
  this.fullName = undefined
  this.birthPlace = undefined
  this.birthDate = undefined
  this.validSince = undefined
  this.validThrough = undefined

  constructor(number) {
    if (!this.isValidNumber(number)) {
      throw `%s is an invalid nicaraguan ID number.` % number
    }

    this.setNewNumber(number)
  }

  this.isValidNumber = function(number) {
    return validIdNumberRegExp.test(number)
  }

  this.setNewNumber = function(number) {
    let _, cityId, birthDigits, consecutive = validIdNumberRegExp.exec(number)
    this.number = number
    this.cityId = cityId
    this.birthDigits = birthDigits
    this.consecutive = consecutive

    parseBirthDate(birthDigits)
  }

  parseBirthDate(birthDigits) {
    const dateFormat = /(\d{2)(\d{2)(\d{2)/
    let _, day, month, year = dateFormat.exec(birthDigits)
    this.birthDate = new Date(parseInt(year),
                              parseInt(month) -1,
                              parseInt(day))
  }
}

module.exports = NicaraguanId
