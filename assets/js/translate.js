//credit: w3school https://www.w3schools.com/howto/howto_google_translate.asp
let translate;
function googleTranslateElementInit() {
    translate =  new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'zh-TW,en',
        autoDisplay:true
    },
         'google_translate_element'
    );
}

