import assert from 'assert';
import NicaraguanId from '../lib';

describe('NicaraguanId', () => {
    it('Should accepts a valid id number', () => {
        var idDoc = new NicaraguanId('000-010180-0001A')
        assert.equal(idDoc.number, '000-010180-0001A')
        idDoc.setNewNumber('0010101000001A')
        assert.equal(idDoc.number, '0010101000001A')
    });

    it('Should rejects invalid id numbers', () => {
        assert.throws(() => new NicaraguanId('000-010180-Invalid'));
    });

    it('Should populate parts properties', () => {
        var c = new NicaraguanId('001-010100-0001A')
        assert.equal(c.cityId, '001')
        assert.equal(c.birthDigits, '010100')
        assert.equal(c.consecutive, '0001A')
    });

    it('Should populate birthDate from passed number', () => {
        var c = new NicaraguanId('001-010170-0001A')
        assert.equal(c.birthDate.getFullYear(), 1970)
        assert.equal(c.birthDate.getMonth(), 0)
        assert.equal(c.birthDate.getDate(), 1)
    });
})
