import sel from "../../data/selectors";
describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
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

