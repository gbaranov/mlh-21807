import sel from '../../data/selectors';

describe('Smoke test', function() {

    describe('Open the app', function() {

        before('Main page', function () {
            browser.url('');
        });

        it('TC-001 Page title is MLH trial', function() {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('MLH trial');
        });
    });


    describe('Elements exists', function() {

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let label = $(sel.nameLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function () {
            let field = $(sel.nameField).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-006 Gender radio buttons label are present', function () {
            let label = $(sel.genderRadioLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Gender radio buttons are present', function () {
            let radio = $(sel.genderRadioButtons).isDisplayed();
            expect(radio).toEqual(true);
        });

        it('TC-008 Age field label is present', function () {
            let age = $(sel.ageLabel).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let age = $(sel.ageField).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010 Story Type label is present', function () {
            let storylabel = $(sel.storyTypeLabel).isDisplayed();
            expect(storylabel).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present', function () {
            let dropdown = $(sel.storyTypeDropdown).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let label = $(sel.imageFieldLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let image = $(sel.imageField).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let btn = $(sel.submitButton).isDisplayed();
            expect(btn).toEqual(true);
        });


    });


});