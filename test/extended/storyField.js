import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';


describe('Story Field', function () {
    before('Open App', function () {
        browser.url('');
    });

    it('TC-074 The story field placeholder = "Type of the story"', function () {
        let storyPH = $(sel.story).getText();
        expect(storyPH).toEqual(exp.storyPlaceholder);
    });

    it('TC-075 Story type field has 7 selections', function () {
       $(sel.storyType).click();
        let size = $$(sel.storyList).length;
        expect(size).toEqual(exp.countOfStories);
    });

    it('TC-076 Dropdown returns into collapsed state', function () {
        $(sel.nameField).click();
        $(sel.storyType).click();
        $$(sel.storyList)[1].click();
        let dropdowncllpsd = $(sel.storyDropdown).getAttribute("aria-expanded");
        expect(dropdowncllpsd).toEqual("false");

    });

    it('TC-077 User can change the type of the story ', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.nameField).click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story6);
    });

    it('TC-078 User able to make "Overcoming the Monster" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story1);
    });

    it('TC-079 User able to make "Rebirth" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story2);
    });

    it('TC-080 User able to make "Quest" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story3);
    });

    it('TC-081 User able to make "Journey and Return" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story4);
    });

    it('TC-082 User able to make "Rags and Riches" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story5);
    });

    it('TC-083 User able to make "Tragedy" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story6);
    });

    it('TC-084 User able to make "Comedy" selection', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let storyType = $(sel.story).getText();
        expect(storyType).toEqual(exp.story7);
    });

    it('TC-085 Field allows to use only preset selections, no typed value accepted', function () {
        $(sel.storyType).click();
        browser.keys('hero');
        let typeIn = $(sel.storyType).getValue();
        expect(typeIn).toEqual(null);
    });
});
