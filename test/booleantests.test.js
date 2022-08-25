const assert = require('assert'); describe('Simple Boolean Test', () => {
    it('should return true', () => {
        assert.equal(true && false, false);
    });
    it('should return false', () => {
        assert.equal(false || true, true);
    });
});