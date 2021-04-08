import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {image} from '../../data/testData';
import {uploadImage} from '../../helpers/methods';

describe('Verify Image Field', function () {

    before('Open App', function () {
        browser.url('');
    })

    beforeEach(function () {
        browser.refresh();
    });

    describe('Verify Placeholder', function () {

        it('TC-087 Placeholder is correct ', function () {
            let imagePlaceholder = $(sel.imagePlaceholder).getText();
            expect(imagePlaceholder).toEqual(exp.imagePlaceholder);
        });
    });

    describe('Verify Image Uploading ', function () {

        it('TC-088 Upload JPEG image 2 MB', function () {
            uploadImage(image.imageJPEG2MB);

            const uploadedImage = $(sel.imageName).getAttribute(image.title);
            expect(uploadedImage).toEqual(image.imageJPEG2MB);
        });

        it('TC-090 Upload PNG image 2 MB', function () {
            uploadImage(image.imagePNG2MB);

            const uploadedImage = $(sel.imageName).getAttribute(image.title);
            expect(uploadedImage).toEqual(image.imagePNG2MB);
        });

        it('TC-095 Upload PNG image sizing less than 3.9 Mb', function () {
            uploadImage(image.imagePNG3MB);

            const uploadedImage = $(sel.imageName).getAttribute(image.title);
            expect(uploadedImage).toEqual(image.imagePNG3MB);
        });

        it('TC-095 Upload JPEG image sizing less than 3.9 Mb', function () {
            uploadImage(image.imageJPEG3MB);

            const uploadedImage = $(sel.imageName).getAttribute(image.title);
            expect(uploadedImage).toEqual(image.imageJPEG3MB);
        });
    });
});
