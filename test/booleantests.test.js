const assert = require('assert'); describe('Simple Boolean Test', () => {
    it('should return true', () => {
        assert.equal(true && false, true);
    });
    it('should return false', () => {
        assert.equal(false || true, true);
    });
});