import sel from "../data/selectors";
import * as path from "path";

function inputValues4 (name, gender, age, story){
    $(sel.nameField).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.ageField).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}


function picturesUpload(imageResolution){
    const filePath = path.join(__dirname, `../data/images/${imageResolution}`);
    const remoteFilePath = browser.uploadFile(filePath);
    const input = $(sel.imageUpload);
    input.addValue(remoteFilePath);
    $(sel.submitButton).click();
}


module.exports = {picturesUpload, inputValues4};






