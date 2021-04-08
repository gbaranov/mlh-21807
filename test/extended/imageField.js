import sel from '../../data/selectors';
import exp from '../../data/expected.json';
const path = require ('path');
import {inputValues4, picturesUpload} from '../../helpers/methods';
import {name, gender, age, story, imageResolution} from '../../data/testData'

describe('Image', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    it('TC-086 Image field is present', function () {
        let imagePH = $(sel.imageField).isExisting();
        expect(imagePH).toEqual(true);
    });

    describe('Upload File', () => {
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

        it('TC-127 Drag and drop HEIC file', () => {

        });

        it('TC-128 Upload TGA file', () => {
            picturesUpload(imageResolution.tga);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });


        it('TC-130 Upload XPM file', () => {
            picturesUpload(imageResolution.xpm);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });


        it('TC-132 User can upload only one JPEG image file', () => {
            picturesUpload(imageResolution.jpgUnder4);
            picturesUpload(imageResolution.jpgUnder4);
            let error = $('.ant-message-error');
            expect(error).toBeDisplayed();
        });


        it('TC-134 User can upload only one PNG image file', () => {
            picturesUpload(imageResolution.pngUnder4);
            picturesUpload(imageResolution.pngUnder4);
            let error = $('.ant-message-error');
            expect(error).toBeDisplayed();
        });


    });
});


