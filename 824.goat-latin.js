/*
 * @lc app=leetcode id=824 lang=javascript
 *
 * [824] Goat Latin
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    if(sentence.length < 1 || sentence.length>150)
        return null;

    const vowels = new Set('aeiouAEIOU');
    
    return sentence.split(' ').map((word, i) => 
        vowels.has(word[0]) 
            ? word + 'ma' + 'a'.repeat(i + 1)
            : word.slice(1) + word[0] + 'ma' + 'a'.repeat(i + 1)
    ).join(' ');
    
};
// @lc code=end

