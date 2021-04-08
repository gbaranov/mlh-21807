import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from "../../helpers/methods";

describe('Age field suit', function () {
    beforeEach('Open App', function () {
        browser.url('');
    });

    describe('Negative cases', function () {

        it('TC-065 Age input field does not accept 13 digits', function () {
            $(sel.age).setValue(age.thirteenDigits);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-066 Age input field does not accept letters', function () {
            $(sel.age).setValue(name.default);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        //  Untill bug fixed
        // it('TC-067 Age input field accepts empty Age field', function () {
        //     $(sel.age).click();
        //     $(sel.name).click()
        //     let errorMessage = $(sel.ageError).waitForDisplayed();
        //     expect(errorMessage).toEqual(true);
        // });

        // it('TC-068 Age input field does not accept "0"', function () {
        //     inputValues4(name.default,gender.he, age.zero, story.comedy);
        //     let submitButton = $(sel.submitButton).isEnabled();
        //     expect(submitButton).toEqual(false);
        // });

        it('TC-069 Age input does not field accepts symbols', function () {
            $(sel.age).setValue(age.symbols);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-070 Age input field accepts negative numbers', function () {
            $(sel.age).setValue(age.negativeNum);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-071 Age input field accepts floats', function () {
            $(sel.age).setValue(age.float);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-072 Clicking up the spinner increases the maximum 12-digit number', function () {
            $(sel.age).setValue(age.max);
            $(sel.ageSpinnerUp).click();
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-073 Clicking down the spinner decreases empty Age input field', function () {
            $(sel.age).setValue(age.zero);
            $(sel.ageSpinnerDown).click();
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

    });

});