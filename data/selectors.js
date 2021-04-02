const elements = {
    "header": "h3",
    "instruction": "p",
    "nameLabel": "//label[@for='name']",
    "nameField": "#name",
    "genderRadioLabel": "//label[@for='gender']",
    "genderRadioButtons": "#gender",
    "ageLabel": "//label[@for='age']",
    "ageField": "//input[@type='number']",
    "storyTypeLabel": "//label[@for='story']",
    "storyTypeDropdown": ".ant-select-selector",
    "imageFieldLabel": "//label[contains(@title, 'image')]",
    "imageField": "//span[@role='img']",
    "submitButton": ".ant-btn"
}

module.exports = elements;
