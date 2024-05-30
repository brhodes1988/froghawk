const translationDict = {
    'A': '𓀀', 'B': '𓀁', 'C': '𓀂', 'D': '𓀃', 'E': '𓀄', 'F': '𓀅', 'G': '𓀆', 'H': '𓀇', 'I': '𓀈',
    'J': '𓀉', 'K': '𓀊', 'L': '𓀋', 'M': '𓀌', 'N': '𓀍', 'O': '𓀎', 'P': '𓀏', 'Q': '𓀐', 'R': '𓀑',
    'S': '𓀒', 'T': '𓀓', 'U': '𓀔', 'V': '𓀕', 'W': '𓀖', 'X': '𓀗', 'Y': '𓀘', 'Z': '𓀙',
    'a': '𓀀', 'b': '𓀁', 'c': '𓀂', 'd': '𓀃', 'e': '𓀄', 'f': '𓀅', 'g': '𓀆', 'h': '𓀇', 'i': '𓀈',
    'j': '𓀉', 'k': '𓀊', 'l': '𓀋', 'm': '𓀌', 'n': '𓀍', 'o': '𓀎', 'p': '𓀏', 'q': '𓀐', 'r': '𓀑',
    's': '𓀒', 't': '𓀓', 'u': '𓀔', 'v': '𓀕', 'w': '𓀖', 'x': '𓀗', 'y': '𓀘', 'z': '𓀙'
};

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = '';
    for (let char of inputText) {
        translatedText += translationDict[char] || char;
    }
    document.getElementById('outputText').innerText = translatedText;
}
