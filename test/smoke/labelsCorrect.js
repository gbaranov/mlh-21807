import sel from '../../data/selectors';
import exp from '../../data/expected.json';


describe('Labels are correct', function() {

    before('Open the app', function () {
        browser.url('');
    });

    it('TC-015 Header = My Little Hero', function() {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-016 Instruction - "Let\'s create your own HERO! It\'s super easy with our application!"', function() {

    });

    it('Name field label = 1.What is your Hero\'s name?', function() {

    });

    it('Gender field label = 2. Please choose gender.', function() {

    });

    it('The first button label = "he"', function() {

    });

    it('The second button label = "she"', function() {

    });

    it('The third button label = "it"', function() {

    });

    it('Age field label  = 3. How old is your Hero?', function() {

    });

    it('Story Type label  =  What type of story would you like to read', function() {

    });

    it('Image label  = Upload an image(optional)', function() {

    });

    it('Submit button label - "Create"', function() {

    });

});
