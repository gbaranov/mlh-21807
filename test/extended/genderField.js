import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Required fields and story created', function () {


    before('Open App', function () {
        browser.url('');
    });


    describe('Radio Buttons are enabled', function () {

        it('TC-041.a Button "he" is enabled', function () {
            $$(sel.radioButtons)[gender.he].click();
            let radioButtonIsBlue = $$(sel.radioButtons)[gender.he].isEnabled();
            expect(radioButtonIsBlue).toEqual(true);
        });

        it('TC-042 Button "she" is enabled', function () {
            $$(sel.radioButtons)[gender.she].click();
            let radioButtonIsBlue = $$(sel.radioButtons)[gender.she].isEnabled();
            expect(radioButtonIsBlue).toEqual(true);
        });

        it('TC-043 Button "it" is enabled', function () {
            $$(sel.radioButtons)[gender.it].click();
            let radioButtonIsBlue = $$(sel.radioButtons)[gender.it].isEnabled();
            expect(radioButtonIsBlue).toEqual(true);
        });
    });

    describe('Button "he"', function () {

        it('TC-044.a User can choose only one button at the time: he', function () {
            $$(sel.radioButtons)[gender.she].$('input').click();
            $$(sel.radioButtons)[gender.he].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.he].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(true);
        });

        it('TC-044.b "SHE" is not selected', function () {
            $$(sel.radioButtons)[gender.she].$('input').click();
            $$(sel.radioButtons)[gender.he].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.she].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });

        it('TC-044.c "IT" is not selected', function () {
            $$(sel.radioButtons)[gender.she].$('input').click();
            $$(sel.radioButtons)[gender.he].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.it].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });
    });

    describe('Button "she"', function () {

        it('TC-045.a User can choose only one button at the time: she', function () {
            $$(sel.radioButtons)[gender.he].$('input').click();
            $$(sel.radioButtons)[gender.she].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.she].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(true);
        });

        it('TC-045.b "HE" is not selected', function () {
            $$(sel.radioButtons)[gender.he].$('input').click();
            $$(sel.radioButtons)[gender.she].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.he].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });
        it('TC-045.c "IT" is not selected', function () {
            $$(sel.radioButtons)[gender.it].$('input').click();
            $$(sel.radioButtons)[gender.he].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.it].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });
    });

    describe('Button "it"', function () {

        it('TC-045.a User can choose only one button at the time: it', function () {
            $$(sel.radioButtons)[gender.she].$('input').click();
            $$(sel.radioButtons)[gender.it].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.it].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(true);
        });

        it('TC-045.b "HE" is not selected', function () {
            $$(sel.radioButtons)[gender.he].$('input').click();
            $$(sel.radioButtons)[gender.it].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.he].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });
        it('TC-045.c "SHE" is not selected', function () {
            $$(sel.radioButtons)[gender.she].$('input').click();
            $$(sel.radioButtons)[gender.it].$('input').click();
            let radioButtonIsGray = $$(sel.radioButtons)[gender.she].$('input').isSelected();
            expect(radioButtonIsGray).toEqual(false);
        });
    });
});

it('TC-047 User can switch the option: he->she', function () {
    $$(sel.radioSelections)[0].click();
    $$(sel.radioSelections)[1].click();
    let radio = $$(sel.radioSelections)[1].isSelected();
    expect(radio).toEqual(true);

});
    it('TC-048 User can switch the option: he->it', function () {
        $$(sel.radioSelections)[0].click();
        $$(sel.radioSelections)[2].click();
        let radio = $$(sel.radioSelections)[2].isSelected();
        expect(radio).toEqual(true);

    });

    it('TC-049 User can switch the option: she->he', function () {
        $$(sel.radioSelections)[1].click();
        $$(sel.radioSelections)[0].click();
        let radio = $$(sel.radioSelections)[0].isSelected();
        expect(radio).toEqual(true);

    });
    it('TC-050 User can switch the option: she->it', function () {
        $$(sel.radioSelections)[1].click();
        $$(sel.radioSelections)[2].click();
        let radio = $$(sel.radioSelections)[2].isSelected();
        expect(radio).toEqual(true);

    });
    it('TC-051 User can switch the option: it->he', function () {
        $$(sel.radioSelections)[2].click();
        $$(sel.radioSelections)[0].click();
        let radio = $$(sel.radioSelections)[0].isSelected();
        expect(radio).toEqual(true);

    });
    it('TC-052 User can switch the option: it->she', function () {
        $$(sel.radioSelections)[2].click();
        $$(sel.radioSelections)[1].click();
        let radio = $$(sel.radioSelections)[1].isSelected();
        expect(radio).toEqual(true);

    });

});

});