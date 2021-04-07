import sel from '../../data/selectors';

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-086 Image field is present', function () {
        let imagePH = $(sel.imageField).isExisting();
        expect(imagePH).toEqual(true);
    });
});