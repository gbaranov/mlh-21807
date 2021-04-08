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

});
