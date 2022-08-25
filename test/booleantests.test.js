const assert = require('assert'); describe('Simple Boolean Test', () => {
    it('should return true', () => {
        assert.equal(true && true, true);
    });
    it('should return false', () => {
        assert.equal(false && true, false);
    });
});