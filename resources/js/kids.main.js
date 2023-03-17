$(document).ready(function () {
    initializeSpeech();
    // $('#lightgallery').lightGallery();
    // $(`.ahref-supcat`).click(function () {
    //     manipulation($(this).attr(kidsID));
    // });

    $(document).on(click, `.ahref-subcat`, function () {
        setAndShowImage($(this).attr(`alt`));
    })
});

function showPopup() {
    $(imgModalID).modal({
        keyboard: false,
        backdrop: static
    });
}

function hidePopup() {
    $(imgModalID).modal(hide);
}

function setErrorMessage(t) {
    $(errorMessageDDD).text(t);
}

let category = e;
function setCategory(v) {
    category = v;
}

function removeSubCategoryChildren() {
    setErrorMessage(e);
    $(kidsSubCategoryDDD).empty();
}

function addSubCategoryChildren(h) {    
    removeSubCategoryChildren();
    $(kidsSubCategoryDDD).html(h);
}

function checkSynonymWord(text) {
    let word = categories[text];
    if (word) {
        category = text;
        return categories[text];
    } else {
        word = synonyms[text];
        if (word) {
            category = word;
            return categories[word];
        } else {
            return undefined;
        }
    }
}

function checkSubSynonymWord(t) {
    let word = categories[category][t];
    if (word) {
        return word;
    } else {
        word = subSynonyms[t];
        if (word) {
            console.log('Find Sub Category Synonym Word:', word);
            return categories[category][word];
        } else {
            return undefined;
        }
    }
}

function manipulation(t) {
    if (clear === t) {
        hidePopup();
        setCategory(e);
        removeSubCategoryChildren();
        $(kidsSupCategoryDDD).show();
        return;
    } else if (ok === t) {
        hidePopup();
        return;
    } else {
        setSubCategoryChildren(t);
    }
}

function setAndShowImage(t) {
    const img = checkSubSynonymWord(t);
    if (img) {
        showPopup();
        setErrorMessage(e);
        $(kidAltDDD).text(img.alt);
        $(kidImgDDD).attr(src, img.src);
        $(kidImgDDD).attr(title, img.alt);
    } else {
        setErrorMessage(errorMessage);
    }
}

function setSubCategoryChildren(text) {
    // function isTriple(i, ol) {
    //     if (i === 0) {
    //         return false;
    //     } else {
    //         const ii = i + 1;
    //         if (ii % 3 === 0 && ii !== ol) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    const jsonObject = checkSynonymWord(text);
    if (jsonObject) {
        let v = ``;
        const rrrrrrr = "OOOOOOOOOOOOOOOOOOOO";
        const subKeys = Object.keys(jsonObject);
        for (var i = 0; i < subKeys.length; i++) {
            const subObject = jsonObject[subKeys[i]];
            v += `<div class="col-lg-4">`
            v += `<div class="image-wrap-2">`
            v += `<div class="image-info">`
            v += `<h2 class="mb-3">${subObject.alt}</h2>`
            v += `<a href="javascript:;" alt="${subKeys[i]}" ` 
            v += `class="btn btn-outline-white py-2 px-4 ahref-subcat">Say Loud</a>`
            v += `</div>`
            v += `<img src="${subObject.src}" alt="Image" class="img-fluid">`
            v += `</div></div>`
        }

        let html = ``;
        let vOfValues = v.split(rrrrrrr);
        for (let vvv of vOfValues) {
            html += `<div class="row kids-row">${vvv}</div>`;
        }
        
        $(kidsSupCategoryDDD).hide();
        addSubCategoryChildren(html);
        // const el = $(`button[kidsID="${text}"]`)
        // $(el).css("background-color", "gray");
    } else if (category !== e) {
        setAndShowImage(text);
    } else {
        setErrorMessage(errorMessage);
    }
}

function initializeSpeech() {
    const speechUTIL = {
        language: "en-US",
        listening: "listening",
        interimText: "interimText",
        finalisedText: "finalisedText"
    }

    const state = {
        error: e,
        interimText: e,
        listener: null,
        listening: false,
        finalisedText: [],
        language: speechUTIL.language
    };

    function setState(key, value) {
        state[key] = value;
    }

    function formatWord(text) {
        text = text.trim();
        text = text.toLowerCase();
        text = text.replace(' ', e);
        return text;
    }

    function catchSpokenWork(text) {
        console.log('catchSpokenWork:', text);
        const word = formatWord(text);
        manipulation(word);
        setState(speechUTIL.interimText, word);
        console.log('Human Spoken Word Caught:', word);
    }

    function onEndEvent() {
        if (state.listening) {
            initialize();
        }
    }

    function onFinalized(text) {
        setState(speechUTIL.interimText, e);
        setState(speechUTIL.finalisedText, text);
    }

    function initialize() {
        try {
            state.listener = new SpeechToText(onFinalized, onEndEvent, catchSpokenWork, state.language);

            state.listener.startListening();

            setState(speechUTIL.listening, true);
        } catch (error) {
            console.log('Error occured:', error);
        }
    }
    initialize();
}