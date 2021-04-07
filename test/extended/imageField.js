import sel from '../../data/selectors';
const path = require ('path');
import picturesUpload from '../../helpers/methods';
import {name, gender, age, story, imageResolution} from '../../data/testData'

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-086 Image field is present', function () {
        let imagePH = $(sel.imageField).isExisting();
        expect(imagePH).toEqual(true);
    });

    describe('Upload File, negative', () => {
        it('TC-112 Upload  4.5 mb JPEG file', () => {
            picturesUpload(imageResolution.jpeg);
        });

        it('TC-114 Upload 4.5 mb PNG file', () => {
            picturesUpload(imageResolution.png);
        });

        it('TC-116 Upload 2 mb BMP file', () => {
            picturesUpload(imageResolution.bmp);
        });

        it('TC-118 Upload 2 mb GIF file', () => {
            picturesUpload(imageResolution.gif);
        });

        it('TC-120 Upload 2 mb MP4 file', () => {
            picturesUpload(imageResolution.mp4);
        });

        it('TC-122 Upload PDF file', () => {
            picturesUpload(imageResolution.pdf);
        });

        it('TC-124 Upload TIF file', () => {
            picturesUpload(imageResolution.tif);
        });

        it('TC-126 Upload HEIC file', () => {
            picturesUpload(imageResolution.heic);
        });
    });
});


