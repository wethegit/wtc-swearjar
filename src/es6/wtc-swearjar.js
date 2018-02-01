import words from './curse-library';

class WTCSwearJar {
  /**
   * WTCSwearJar constructor.
   * @constructor
   * @param {array} extraWords - Additional words to add to the blacklist
   * @param {string} replacement - Character for replacing swears
   * @param {string} regex - Regular expression used to sanitize words before comparing them to blacklist
   * @param {string} regexReplace - Regular expression used to replace profane words with placeHolder
   */
  constructor(extraWords, replacement, regex, regexReplace) {
    this.blacklist = Array.prototype.concat.apply(words, [extraWords || []]);
    this.replacement = replacement || '*';
    this.regex = regex || /[^a-zA-z0-9|\$|\@]|\^/g;
    this.regexReplace = regexReplace || /\w/g;
  }

  /**
   * Determine if a string contains profane language.
   * @param {string} string - String to evaluate for profanity.
   */
  isProfane(string) {
    return string
      .split(' ')
      .map(function(w) {
        return w.toLowerCase().replace(this.regex, '');
      }, this)
      .filter(this.isProfaneLike, this)
      .shift() || false;
  };

  /**
   * Determine if a single word is profane or looks profane.
   * @param {string} word - String to evaluate for profanity.
   */
  isProfaneLike(word) {
    return this.blacklist.indexOf(word) > -1 || this.blacklist
      .map(function(w) {
        return new RegExp(w.replace(/(\W)/g, '\\$1'), 'gi');
      }, this)
      .reduce(function(outcome, wordExp) {
        if (wordExp.test(word)) {
          return true;
        }
        return outcome >= 0 ? outcome : false;
      }, false);
  };

  /**
   * Replace a word with placeHolder characters;
   * @param {string} string - String to replace.
   */
  replaceWord(string) {
    return string.replace(this.regex, '').replace(this.regexReplace, this.replacement);
  };

  /**
   * Evaluate a string for profanity and return an edited version.
   * @param {string} string - Sentence to filter.
   */
  clean(string) {
    return string.split(/\b/).map(function(word) {
      return this.isProfane(word) ? this.replaceWord(word) : word;
    }.bind(this)).join('');
  };

  /**
   * Add words to the blacklist. If a string is provided, try to split it first.
   * @param {string/array} words - Words to add to the blacklist
   */
  addWords(words) {
    if(typeof words == 'string') words = words.split(',');
    this.blacklist = this.blacklist.concat(words);
  }

  set blacklist(value) {
    if(value instanceof Array) 
      this._blacklist = value;
  }
  get blacklist() {
    return this._blacklist || [];
  }
}

export default WTCSwearJar