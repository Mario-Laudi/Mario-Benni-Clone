function pigLatin(result) {
    const words = result.split(' ');

    const translatedWords = words.map(word => {
        const startsWithVowel = /^[aeiou]/i.test(word);

        
        const translatedWord = startsWithVowel ? word + 'way' : word.slice(1) + word[0] + 'ay';

        return translatedWord;
    });

    return translatedWords.join(' ');
}


const result = "Es würgten sich 2 Klapperschlangen";
const translatedResult = pigLatin(result);
console.log(translatedResult); 




