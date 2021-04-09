import sel from "../../data/selectors";
import exp from "../../data/expected.json";

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach(function () {
        browser.refresh();
    });

    it('TC-053 Not chosen button / Required', function () {
        $(sel.nameField). getText();
        $(sel.ageField). getText();
        $(sel.storyTypeDropdown).getText();
        $(sel.submitButton).click();
        let submitButton = $(sel.submitButton).isEnabled();
        expect(submitButton).toEqual(false);
    });

    it('TC-054 Age Field placeholder Hero\'s age', function () {
    let radio = $(sel.ageFieldPlaceholder).getAttribute('placeholder');
    expect(radio).toEqual(exp.placeholderAge);
});
    it('TC-055 Age Field spinner is present', function () {
    let spinner = $(sel.spinnerAge).isExisting();
    expect(spinner).toEqual(true);
});
    it('TC-056 Age input field accepts 1 digit', function () {
        $(sel.age).setValue("3");
        let err = $(sel.error).isDisplayed();
        expect(err).toEqual(false);
    });
    it('TC-057 Age input field accepts 12 digits', function () {
        $(sel.age).setValue('999999999999');
        let err = $(sel.error).isDisplayed();
        expect(err).toEqual(false);
    });
    it('TC-058 Age input field accepts any digits in range 1-12', function () {
        $(sel.age).setValue("12456789123");
        let err = $(sel.error).isDisplayed();
        expect(err).toEqual(false);
    });
    it('TC-059 Age input field accepts 0 before digits', function () {
        $(sel.age).setValue("09");
       $(sel.nameField).click();
       let value = $(sel.age).getValue();
       expect(value).toEqual("9");

    });
    it('TC-060 Age input field accepts spaces', function () {
        $(sel.age).setValue(" 9 9");
        let value = $(sel.age).getValue();
        expect(value).toEqual("99");
    });
    it('TC-061 Clicking up the spinner increases empty Age input field', function () {
        $(sel.spinnerUp).click();
        let value = $(sel.ageField).getValue();
        expect(value).toEqual("1");
    });
    it('TC-062 Clicking up the spinner increases the digit', function () {
        $(sel.ageField).setValue("9");
        $(sel.spinnerUp).click();
        let value = $(sel.ageField).getValue();
        expect(value).toEqual("10");
    });
    it('TC-063 Clicking down the spinner decreases the digit', function () {
        $(sel.spinnerDown).click();
        let value = $(sel.ageField).getValue();
        expect(value).toEqual("-1");
    });
    it('TC-064 Error appears when user decreases empty age field', function () {
        $(sel.spinnerDown).click();
        $(sel.error).waitForDisplayed();
        let err = $(sel.error).isDisplayed();
        expect(err).toEqual(true);
    });
});

