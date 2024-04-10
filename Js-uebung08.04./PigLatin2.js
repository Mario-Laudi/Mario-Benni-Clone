function pigLatin(sentence) {
    const words = sentence.split(' ');

    const translatedWords = words.map(word => {
        const startsWithVowel = /^[aeiou]/i.test(word);
        const isUpperCase = word[0] === word[0].toUpperCase();

        let translatedWord;
        if (startsWithVowel) {
            translatedWord = word + 'way';
        } else {
            translatedWord = word.slice(1) + word[0] + 'ay';
        }

        
        if (isUpperCase) {
            translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1).toLowerCase();
        }

        return translatedWord;
    });

    return translatedWords.join(' ');
}

console.log(pigLatin("Cats are great pets.")); 
console.log(pigLatin("Tom got a small piece of pie.")); 
console.log(pigLatin("He told us a very exciting tale.")); 
