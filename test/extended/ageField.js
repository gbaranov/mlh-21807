import sel from "../../data/selectors";
import exp from "../../data/expected.json";

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
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
        let radio = $(sel.ageInput).isElementSelected('1');
        expect(radio).toEqual(true);
    });
    it('TC-057 Age input field accepts 12 digits', function () {
        let radio = $(sel.ageInput).isElementSelected('999999999999');
        expect(radio).toEqual(true);
    });
    it('TC-058 Age input field accepts any digits in range 1-12', function () {
        let radio = $(sel.ageInput).isElementSelected('1234567890');
        expect(radio).toEqual(true);
    });
    it('TC-059 Age input field accepts 0 before digits', function () {
        let radio = $(sel.ageInput).isElementSelected('09');
        expect(radio).toEqual(true);
    });
    it('TC-060 Age input field accepts spaces', function () {
        let radio = $(sel.ageInput).getHeapSpaceStatistics('3 2');
        expect(radio).toEqual(true);
    });
    it('TC-061 Clicking up the spinner increases empty Age input field', function () {
        let radio = $(sel.ageFieldPlaceholder).click();
        expect(radio).toEqual(true);
    });
    it('TC-062 Clicking up the spinner increases the digit', function () {
        let radio = $(sel.ageFieldPlaceholder).click();
        expect(radio).toEqual(true);
    });
    it('TC-063 Clicking down the spinner decreases the digit', function () {
        let radio = $(sel.ageFieldPlaceholder).click();
        expect(radio).toEqual(true);
    });
});
