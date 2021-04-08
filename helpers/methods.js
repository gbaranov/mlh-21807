import sel from "../data/selectors";
import * as path from "path";
import {image} from '../data/testData';


exports.inputValues4 = function inputValues4(name, gender, age, story){
    $(sel.nameField).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.ageField).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}


exports.picturesUpload = function picturesUpload(imageResolution){
    const filePath = path.join(__dirname, `../data/images/${imageResolution}`);
    const remoteFilePath = browser.uploadFile(filePath);
    const input = $(sel.imageUpload);
    input.addValue(remoteFilePath);
    $(sel.submitButton).click();
}


exports.picturesUploadN = function picturesUpload(imageResolution){
    const filePath = path.join(__dirname, `../data/images/${imageResolution}`);
    const remoteFilePath = browser.uploadFile(filePath);
    const input = $(sel.imageUpload);
    input.addValue(remoteFilePath);
    //$(sel.submitButton).click();
}


exports.uploadImage = function uploadImage(imageName) {
    const imageUpload = $(sel.imageUpload);
    browser.execute(
        (el) => el.style.display = 'block',
        imageUpload
    );

    const filePath = path.join(__dirname, image.imagesFolderPath, imageName);
    imageUpload.setValue(filePath);
}












