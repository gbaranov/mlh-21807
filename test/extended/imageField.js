import sel from '../../data/selectors';
const path = require ('path');
import {inputValues4, picturesUpload} from '../../helpers/methods';
import {name, gender, age, story, imageResolution} from '../../data/testData';
import exp from '../../data/expected.json';


describe('Image', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    beforeEach(function () {
        browser.refresh();
    });

    it('TC-086 Image field is present', function () {
        let imagePH = $(sel.imageField).isExisting();
        expect(imagePH).toEqual(true);

    });

    describe('Upload File', () => {
        it('TC-112 Upload  4.5 mb JPEG file', () => {
            picturesUpload(imageResolution.jpeg);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageSizeError);
        });

        it('TC-114 Upload 4.5 mb PNG file', () => {
            picturesUpload(imageResolution.png);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageSizeError);
        });

        it('TC-116 Upload 2 mb BMP file', () => {
            picturesUpload(imageResolution.bmp);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });

        it('TC-118 Upload 2 mb GIF file', () => {
            picturesUpload(imageResolution.gif);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });

        it('TC-120 Upload 2 mb MP4 file', () => {
            picturesUpload(imageResolution.mp4);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });

        it('TC-122 Upload 2 mb PDF file', () => {
            picturesUpload(imageResolution.pdf);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });

        it('TC-124 Upload 2 mb TIF file', () => {
            picturesUpload(imageResolution.tif);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
        });

        it('TC-126 Upload 2 mb HEIC file', () => {
            picturesUpload(imageResolution.heic);
            let error = $('.ant-message-error').getText();
            expect(error).toEqual(exp.imageError);
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


        it.skip('TC-132 User can upload only one JPEG image file', () => {
            picturesUpload(imageResolution.jpgUnder4);
            picturesUpload(imageResolution.jpgUnder4);
            let error = $('.ant-message-error');
            expect(error).toBeDisplayed();
        });


        it.skip('TC-134 User can upload only one PNG image file', () => {
            picturesUpload(imageResolution.pngUnder4);
            picturesUpload(imageResolution.pngUnder4);
            let error = $('.ant-message-error');
            expect(error).toBeDisplayed();
        });


    });
});


