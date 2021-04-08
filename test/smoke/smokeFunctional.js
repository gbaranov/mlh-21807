import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, picturesUpload} from '../../helpers/methods';


describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enable after fields 1 - 4 are filled in with valid value', function () {
        browser.refresh;
        inputValues4(name.default, gender.he, age.default, story.comedy);
        let submitBtn = $(sel.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        inputValues4(name.default,gender.he, age.default, story.comedy);
        $(sel.submitButton).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('TC-028.a story appears with valid value', function () {
        browser.refresh();
        inputValues4(name.default, gender.he, age.default, story.comedy);
        $(sel.submitButton).click();
        let storyHead= $(sel.storyHeader).getText();
        expect(storyHead).toEqual(exp.storyHeader);
    });
    it('TC-028.c story appears with valid value', function () {
        browser.refresh();
        inputValues4 (name.default, gender.he, age.default, story.comedy)
        $(sel.submitButton).click();
        let storyMoral = $$(sel.storyBody)[1].getText();
        expect(storyMoral).toEqual(exp.storyMoral);
    });

});