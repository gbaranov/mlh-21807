import selectors from "../../data/selectors";
import expected from "../../data/expected.json";
import  {picturesUpload, inputValues4} from '../../helpers/methods';
import {name, gender, age, story, image, imageResolution} from '../../data/testData';


describe('Name field positive test cases', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-0147 Submit button changes it\'s state disabled when Age has been cleared', () => {
        inputValues4(name.default, gender.it, age.default, story.comedy);
        $(selectors.ageField).click();
        browser.keys(['Command','a','NULL']);
        browser.keys(['Command','x','NULL']);
        let submitBtn = $(selectors.submitButton).isEnabled();
        expect(submitBtn).toEqual(false);
        browser.refresh();
    });

    it('TC-0148 Reset button present on story page', () => {
        inputValues4(name.default, gender.it, age.default, story.comedy);
        $(selectors.submitButton).click()
        let resBtn = $(selectors.resetButton).isDisplayed();
        expect(resBtn).toEqual(true);
    });

    it('TC-0149 Reset button label is "Try again!"', () => {
        let resBtn = $(selectors.resetButton).getText();
        expect(resBtn).toEqual('Try again!');
    });

    it('TC-0150 Reset button is active', () => {

        let resBtn = $(selectors.resetButton).isEnabled();
        expect(resBtn).toEqual(true);
    });

    it('TC-0151 Story page Header is present', () => {
        let storyHeader = $(selectors.header).isDisplayed();
        expect(storyHeader).toEqual(true);
    });

    it('TC-0152 Title is present', () => {
        let title = $(selectors.storyTitle).isDisplayed();
        expect(title).toEqual(true);
    });

    it('TC-0153 Body is present', () => {
        let body =$(selectors.storyBody).isDisplayed();
        expect(body).toEqual(true)
    });

    it('TC-0154 Moral is present', () => {
        let moral =$(selectors.storyMoral).isDisplayed();
        expect(moral).toEqual(true)
    });

    it('TC-0155 Image is present', () => {
        let img =$(selectors.imageStoryPage).isDisplayed();
        expect(img).toEqual(true)
    });

    it('TC-0156 Header text is \'My Little Hero\'', () => {
        let storyHeader = $(selectors.header).getText();
        expect(storyHeader).toEqual('My Little Hero');
        browser.refresh();

    });

    it('TC-0157 In the following story the gender \'He\'', () => {
        inputValues4(name.default, gender.he, age.default, story.comedy);
        $(selectors.submitButton).click()
        let heIsPresent = $(selectors.storyBody).getText().match(/\b(He)\b/g).join(' ');
        expect(heIsPresent).toEqual(expected.heIsPresent);
        browser.refresh();
    });

    it('TC-0158 In the following story the gender She', () => {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(selectors.submitButton).click()
        let sheIsPresent = $(selectors.storyBody).getText().match(/\b(She)\b/g).join(' ');
        expect(sheIsPresent).toEqual(expected.sheIsPresent);
        browser.refresh();
    });

    it('TC-0159 In the following story the gender \'It\'.', () => {
        inputValues4(name.default, gender.it, age.default, story.comedy);
        $(selectors.submitButton).click()
        let itIsPresent = $(selectors.storyBody).getText().match(/\b(It)\b/g).join(' ')
        expect(itIsPresent).toEqual(expected.itIsPresent);
    });

    // it('TC-0160  In the story to read each sentence should start from upper letter.', () => {
    //     let captl = $(selectors.storyBody).getText().split('\n').join(' ').match(/\b[A-Z]/g).join('')+
    //                 $(selectors.storyMoral).getText().match(/\b[A-Z]/g).join('');
    //     expect(captl).toEqual(expected.storyCapitalLetters)
    // });

    it('TC-0161  Name title is merging up', () => {
        let result = $(selectors.storyTitle).getText().includes(name.default);
        expect(result).toEqual(true);
    });

    it('TC-0164  PronounName - it = its', () => {
        let itsIsPresent = $(selectors.storyBody).getText().match(/\b(its)\b/g).join('')
        expect(itsIsPresent).toEqual(expected.its);
        browser.refresh();
    });

    it('TC-0162  PronounName - he = his', () => {
        inputValues4(name.default, gender.he, age.default, story.comedy);
        $(selectors.submitButton).click();
        let hisIsPresent = $(selectors.storyBody).getText().match(/\b(his)\b/g).join('')
        expect(hisIsPresent).toEqual(expected.his);
        browser.refresh();
    });
    //
    it('TC-0163  PronounName - he = his', () => {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(selectors.submitButton).click();
        let herIsPresent = $(selectors.storyBody).getText().match(/\b(her)\b/g).join('')
        expect(herIsPresent).toEqual(expected.her);
    });

    it('TC-0165  Image is stored at the top right corner', () => {
        let xLocation = $(selectors.imageStoryPage).getLocation('x');
        let yLocation = $(selectors.imageStoryPage).getLocation('y');
        expect(xLocation > 0 && yLocation > 0).toEqual(true);
        browser.refresh();
    });

    it('TC-0166 The maximum size of the image is 200x200px', () => {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        picturesUpload(image.squereOverSize);
        let width = $(selectors.imageStoryPage).getSize('width');
        let height = $(selectors.imageStoryPage).getSize('height');
        expect(width <= expected.imageWidth && height <= expected.imageHeight);
        browser.refresh();
    });

    it('TC-0167 If the image is not square, the longest side is 200 px.', () => {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        picturesUpload(image.rctnglarOverSize);
        let width = $(selectors.imageStoryPage).getSize('width');
        let height = $(selectors.imageStoryPage).getSize('height');
        expect(Math.max[width, height] <= 200)
        browser.refresh();
    });

});


