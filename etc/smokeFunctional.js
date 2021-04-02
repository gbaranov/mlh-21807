

//import inputValues4 from '../../helpers/methods';

describe('Required fields and story created', function () {

​
    describe('Getting to the page', function () {

        before('Open Application', function () {
            browser.url('');
        })

        it('TC-001 Page title is MLH trial', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('MLH trial');
        });
    });


    describe('Elements exists', function () {



    });


});









    //
    // describe('My Little Hero', function () { //define suite title by passing a string
    //

    //

    //
    //         describe('Labels are correct', function () {
    //             it('Header = My Little Hero' , function () {
    //                 let header = $('h3');
    //                 expect(header).toHaveText('My Little Hero');
    //             })
    //             it('Instruction - Let\'s create your own HERO! It\'s super easy with our application!' , function () {
    //                 let str = 'Let\'s create your own HERO! It\'s super easy with our application!';
    //                 let instruction = $('.hero__form p');
    //                 expect(instruction).toHaveText(str);
    //
    //             })
    //             it('Name field label = 1.What is your Hero\'s name?' , function () {
    //                 let str = '1.What is your Hero\'s name?';
    //                 let namelabel = $("//label[@for='name']");
    //                 expect(namelabel).toHaveText(str);
    //
    //             })
    //             it.skip('Gender field label = 2. Please choose gender.' , function () {
    //                 let str = '2. Please choose gender.';
    //                 let label = $("//label[@for='gender']");
    //                 expect(label).toHaveText(str);
    //
    //             })
    //             it('The first button label = "he"' , function () {
    //                 let str = 'he';
    //                 let label = $('//*[@id="gender"]/label[1]/span[2]');
    //                 expect(label).toHaveText(str);
    //
    //             })
    //             it('The second button label = "she"' , function () {
    //                 let str = 'she';
    //
    //             })
    //             it('The third button label = "it"' , function () {
    //                 let str = 'it';
    //
    //             })
    //             it('Age field label  = 3. How old is your Hero?' , function () {
    //
    //             })
    //             it('Story Type label  =  What type of story would you like to read' , function () {
    //
    //             })
    //             it('Image label  = Upload an image(optional)' , function () {
    //
    //             })
    //             it('Submit button label - "Create"' , function () {
    //
    //             })
    //         })
    //
    //     });
    //
    // });




​
//     it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
//         $(sel.name).setValue(name.default);
//         $$(sel.radioButtons)[gender.she].click();
//         $(sel.age).setValue(age.default);
//         $(sel.storyType).click();
//         $$(sel.storyList)[story.comedy].click();
//         let submitBtn = $(sel.submit).isEnabled();
//         expect(submitBtn).toEqual(true);
//     });
// ​
//     it('TC-027 User can create a story with valid values', function () {
//         browser.refresh();
//         inputValues4(name.default, gender.she, age.default, story.comedy);
//         $(sel.submit).click();
//         let tryAgainBtn = $(sel.tryAgain).isDisplayed();
//         expect(tryAgainBtn).toEqual(true);
//     });


