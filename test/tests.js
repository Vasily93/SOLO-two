import getYesOrNo from '../source/get-yes-or-no.js';
const test = QUnit.test;

test('gets yes for less than .5', (assert) => {
    const number = .49;
    const expected = 'yes';

    const result = getYesOrNo(number);

    assert.equal(result, expected);
});

test('gets no for more or equal than .5', (assert) => {
    const number = .5;
    const expected = 'no';

    const result = getYesOrNo(number);

    assert.equal(result, expected);
});