const functions = {
verifyLength: function(password){return password.length > 8},
    notNull: function(password){return password !== null},
    atLeastOneUppercaseCharacter: function(password){return [...password].some(char=> (/[A-Z]/).test(char))},
    atLeastOneLowercaseCharacter: function(password){return [...password].some(char=> (/[a-z]/).test(char))},
    atLeastOneNumber: function(password){return [...password].some(char => parseInt(char))},
    passwordVerifier: function(password){
    if (!this.atLeastOneLowercaseCharacter(password)){
        return false
    } else {
        let count = 1;
count = this.notNull(password) ? count + 1:count;
console.log(count)
        count = this.atLeastOneUppercaseCharacter(password) ? count + 1 :count;
        count = this.atLeastOneNumber(password) ? count + 1:count;
        console.log(count)
       return count > 2
    }
    }
}

module.exports = functions