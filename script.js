
const vowels = ["a", "e", "i", "o", "u"]


function encodeVowelWord(word) {

    let vowelStart = false

    for (let i = 0; i < vowels.length; i++) {
        if (word.startsWith(vowels[i])) {
            vowelStart = true
        }
    }

    if (vowelStart) {
        word = word.concat("yay")
    }

    return word

}




function encodeConsonantWord(word) {

    let vowelStart = false
    let newWord = word

    for (let i = 0; i < vowels.length; i++) {
        if (word.startsWith(vowels[i])) {
            vowelStart = true
        }
    }


    if (vowelStart === false) {
        for (let i = 0; vowelStart === false; i++) {

            newWord = newWord.slice(1)
            for (let i = 0; i < vowels.length; i++) {

                if (newWord.startsWith(vowels[i])) {
                    vowelStart = true
                }
            }

        }
    }

    if (newWord.length !== word.length) {

        let sufix = "-"
        for (let i = 0; i < (word.length - newWord.length); i++) {
            sufix = sufix.concat(word[i])
        }
        sufix = sufix.concat("ay")
        newWord = newWord.concat(sufix)
    }

    return newWord

}


function encodeWord(word) {

    let encoded = ""

    encoded = encodeVowelWord(word)
    if (encoded === word) {
    encoded = encodeConsonantWord(word)
    }

    return encoded

}



const separatorPoints = [",", ":", ";", ".", "?", "!"]

function takePoints(word) {

    let separatorFound = false

    let cleanWord = word
    let separatorEnding = ""
    let result = []
    
    for (let i = 0; i < separatorPoints.length; i++) {

        if (word.endsWith(separatorPoints[i])) {
            separatorFound = true
        }

    }
    
    
    if (separatorFound === true) {

        for (let i = 0; separatorFound === true; i++) {
            separatorFound = false

            for (let j = 0; j < separatorPoints.length; j++) {

                if (cleanWord.endsWith(separatorPoints[j]) === true) {

                    separatorEnding = cleanWord[cleanWord.length - 1].concat(separatorEnding)
                    cleanWord = cleanWord.slice(0, -1)

                    separatorFound = true
                }
            }
        }
    }

    result.push(cleanWord)
    result.push(separatorEnding)

    return result

}





function encodeText(text) {

    let textArray = text.split(" ")
    let newTextArray = []

    for (let i = 0; i < textArray.length; i++) {
        let newWord = ""
        newWord = encodeWord(takePoints(textArray[i])[0])

        newWord = newWord.concat(takePoints(textArray[i])[1])

        newTextArray.push(newWord)
    }

    let textEncoded = newTextArray.join(" ")

    return textEncoded

}




function decodeVowelWord(word) {

    if (word.endsWith("yay") & (word.search("-") === (-1))) {

        word = word.slice(0, -3)

    }

    return word

}



function decodeConsonantWord(word) {

    let newWord = word

    if (word.endsWith("ay") & (word.search("-") > (-1))) {

        for (let i = (word.length - 3); i > (word.search("-")); i--) {

            newWord = word[i].concat(newWord)

        }

        // newWord = newWord.slice(newWord.search("-"))
        // newWord = newWord.slice((newWord.length - 2), newWord.search("-"))
        newWord = newWord.slice(0, -(newWord.length - newWord.search("-")))

    }

    return newWord

}




function decodeWord(word) {

    let decoded = ""

    decoded = decodeVowelWord(word)
    if (decoded === word) {
    decoded = decodeConsonantWord(word)
    }

    return decoded


}


function decodeText(text) {

    let textArray = text.split(" ")
    let newTextArray = []

    for (let i = 0; i < textArray.length; i++) {
        let newWord = ""
        newWord = decodeWord(takePoints(textArray[i])[0])

        newWord = newWord.concat(takePoints(textArray[i])[1])

        newTextArray.push(newWord)
    }

    let textEncoded = newTextArray.join(" ")

    return textEncoded



}


const chipotleMessage = "ince-say e-thay irst-fay ipotle-chay openedyay inyay 1993, we've earned-lay ayay ot-lay aboutyay igs-pay. e-way ow-knay itsyay importantyay or-fay em-thay o-tay oot-ray, oam-ray, andyay expressyay eir-thay atural-nay endencies-tay, o-say e-way ork-way ith-way armers-fay o-whay aise-ray igs-pay at-thay ang-hay outyay outdoorsyay oryay inyay eeply-day edded-bay arns-bay. ey're-thay alsoyay ever-nay iven-gay aily-day oses-day ofyay antibioticsyay o-tay ake-may em-thay ow-gray aster-fay. ut-bay, eaking-spay ofyay allyay ings-thay ig-pay, at-whay onyay earthyay isyay ig-pay atin-lay? eally-ray, o-whay inventedyay ityay? en-whay o-day ou-yay useyay ityay? isyay ityay onlyyay or-fay eens-tway? oes-day ityay ake-may ou-yay ound-say art-smay? isyay ityay onlyyay usedyay y-bay armers-fay? isyay is-thay ust-jay ayay ong-lay etup-say or-fay ayay ogwash-hay oke-jay? areyay ou-yay ill-stay eading-ray? o-say any-may uestions-qay, o-say ittle-lay ime-tay. en-thay againyay, ifyay ou're-yay itting-say ere-thay ith-way ayay ag-bay ull-fay ofyay urritos-bay, aybe-may ou-yay ave-hay e-thay ime-tay o-tay onder-pay andyay ecode-day allyay is-thay. andyay ifyay at's-thay e-thay ase-cay, en-thay itsyay ack-bay, unwrapyay, andyay onder-pay awayyay."


console.log(decodeText(chipotleMessage))













