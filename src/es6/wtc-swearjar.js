import words, {specials} from './curse-library';

class WTCSwearJar {
  /**
   * WTCSwearJar constructor.
   * @constructor
   * @param {array} extraWords - Additional words to add to the blacklist
   * @param {array} specialWords - Additional words to add to the blacklist
   * @param {string} replacement - Character for replacing swears
   * @param {string} regex - Regular expression used to sanitize words before comparing them to blacklist
   * @param {string} regexReplace - Regular expression used to replace profane words with placeHolder
   */
  constructor(extraWords = [], specialWords = [], replacement, regex, regexReplace, wordBoundary = true) {
    this.check_specials = true;
    this.replacement = replacement || '*';
    this.regex = regex || /[^a-zA-z0-9|\$|\@]|\^/g;
    this.regexReplace = regexReplace || /\w/g;
    this.testWordBoundary = wordBoundary;

    this.special_blacklist = [];
    this.blacklist = words.concat(extraWords).slice(0);
    this.special_blacklist = this.special_blacklist.concat(specials.concat(specialWords));

    // This updates the special black list with all the words from the black list thet might
    // contain word boundaries. This ensures that all words within the blacklist are caught
    // by the swearjar because the basic, quick method of testing does so by word boundaries
    // which might not be relevant. It also removes the relevant word from the blacklist
    // as it's now useless there.
    for(let i = this.blacklist.length - 1; i >=0; i--) {
      const word = this.blacklist[i];
      if(word.split(/\b/).length > 1) {
        this.special_blacklist.push(word);
        this.blacklist.splice(i, 1);
      }
    }
  }

  /**
   * Determine if a string contains profane language.
   * @param {string} string - String to evaluate for profanity.
   */
  isProfane(string) {
    let isProfane = false 
    if(this.check_specials) {
      for(let i = this.special_blacklist.length-1; i >= 0; i--) {
        let word = this.special_blacklist[i];
        if(string.indexOf(word) > -1) return word;
      }
    }
    isProfane = string
      .split(' ')
      .map(function(w) {
        return w.toLowerCase().replace(this.regex, '');
      }, this)
      .filter(this.isProfaneLike, this)
      .shift() || false;
    
    return isProfane;
  };

  /**
   * Determine if a single word is profane or looks profane.
   * @param {string} word - String to evaluate for profanity.
   */
  isProfaneLike(word) {
    return this.blacklist.indexOf(word) > -1 || this.blacklist
      .map((w) => {
        let exp = new RegExp(w.replace(/(\W)/g, '\\$1'), 'gi');
        if(this.testWordBoundary) {
          exp = new RegExp('\W' + w.replace(/(\W)/g, '\\$1') + '\W', 'gi');
        }
        return exp;
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
    let str = string;
    if(this.check_specials) {
      for(let i = this.special_blacklist.length-1; i >= 0; i--) {
        let word = this.special_blacklist[i];
        str = str.replace(word, word.replace(/./g,this.replacement));
      }
    }
    str = str.split(/\b/).map(function(word) {
      return this.isProfane(word) ? this.replaceWord(word) : word;
    }.bind(this)).join('');
    return str;
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
    if(value instanceof Array) {
      this._blacklist = value;
      
      // This is here just to make sure that one word doesn't clobber another, more specific word.
      // For example if your list is:
      // [ bullshit, shit ]
      // then feeding the word `bullshit` to this will result in a false positive and only censor
      // as `bull****`. This code is here to prevent this.
      this.blacklist.forEach((word, i)=> {
        let replaced = this.clean(word);
        // console.log(replaced, (new RegExp('[^'+this.replacement+']', 'i')).exec(replaced))
        if((new RegExp('[^'+this.replacement+']', 'i')).exec(replaced) !== null) {
          let a = this.blacklist.splice(i, 1);
          this.blacklist.push(a[0]);
        }
      });
      // The special blacklist is here to catch any words that don't conform to normal word-boundary rules.
      // for(let i in this.blacklist) {
      //   if(/(\W)/.test(value[i])) {
      //     this.special_blacklist.push(value[i]);
      //   }
      // }
    }
  }
  get blacklist() {
    return this._blacklist || [];
  }
}

export default WTCSwearJar