'use strict'

document.addEventListener('DOMContentLoaded', appStart, false);

function appStart() {
    let shiftInput = document.getElementById('shift-amount');
    let isDecrypting = document.getElementById('switch');
    let textarea = document.getElementById('textarea');
    let resultArea = document.getElementById('result');
    let button = document.getElementById('cta');

    button.addEventListener('click', cezarShift);

    function cezarShift() {
        let shiftAmount = parseInt(shiftInput.value);
        let message = textarea.value;
        let result = translateMessage(message, shiftAmount);

        if(!!result) {
            resultArea.innerHTML = result;
        }
    }

    function translateMessage(text, shift) {
        if (shift == '') {
            return ;
        }

        if (shift < 0) {
            return translateMessage(text, shift + 26);
        }

        if (isDecrypting.checked) {
            shift = -shift + 26;
        }

        var output = '';

        for (let i = 0; i < text.length; i ++) {
            let c = text[i];
            if (c.match(/[a-z]/i)) {
                var code = text.charCodeAt(i);

                if ((code >= 65) && (code <= 90)) {
                    c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                }

                else if ((code >= 97) && (code <= 122)) {
                    c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }
            }

            output += c;
        }

        return output;
    }
}