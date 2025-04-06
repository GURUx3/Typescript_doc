"use strict";
function setAppPreference(mode, language) {
    const langDisplay = language === "NA" ? "Not Preferred To Say" : language;
    return `You are using ${mode} mode in ${langDisplay}.`;
}
const result = setAppPreference("Dark", "Tamil");
console.log(result); // 👉 "You are using Dark mode in Tamil."
const result2 = setAppPreference("Light", "NA");
console.log(result2); // 👉 "You are using Light mode in Not Preferred To Say."
