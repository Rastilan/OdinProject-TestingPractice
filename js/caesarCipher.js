function caesar(str, num) {
    let alph = 26;
    if(str < alph){
      return str;
    }
    return str.split('')
      .map(function(char) {
        if (char.match(/[a-z]/i)){
          let code = char.charCodeAt();
          let shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
          return String.fromCharCode(((code - shift + num) % alph) + shift);

        }
        return char;
      }).join('');
  }
  module.exports = caesar;



