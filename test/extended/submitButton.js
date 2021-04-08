import sel from '../../data/selectors';
import exp from '../../data/expected.json';
const path = require('path');
import {inputValues4, picturesUpload} from '../../helpers/methods';
import {name, gender, age, story, imageResolution} from '../../data/testData';

describe('Submit Button', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    it('TC-142 By pressing "submit" button story appears', function () {
        inputValues4(name.default, gender.he, age.default, story.comedy);
        $(sel.submitButton).click();
        let storyBody = $(sel.storyBody).waitForDisplayed();
        expect(storyBody).toEqual(true);
    });

    it('TC-143 Verify that Submit button is enabled when all required fields are filled in', function () {
        inputValues4(name.default, gender.he, age.default, story.comedy);
        let submitButton = $(sel.submitButton).isEnabled();
        expect(submitButton).toEqual(true);
    });

});


