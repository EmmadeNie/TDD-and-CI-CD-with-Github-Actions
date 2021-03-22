const functions = require('./verifyPassword')

test("verify length",()=>{
    expect(functions.verifyLength("lalalalala")).toBe(true)
})

test("password not null",()=>{
    expect(functions.notNull(null)).toBe(false)
    expect(functions.notNull(undefined)).toBe(true)
    expect(functions.notNull("string")).toBe(true)
    expect(functions.notNull(0)).toBe(true)
})

test("password has at least one uppercase character",()=>{
    expect(functions.atLeastOneUppercaseCharacter("laLa")).toBe(true)
    expect(functions.atLeastOneUppercaseCharacter("lalalala")).toBe(false)
    expect(functions.atLeastOneUppercaseCharacter("LALalala")).toBe(true)
    expect(functions.atLeastOneUppercaseCharacter("laLaLlAla")).toBe(true)
    expect(functions.atLeastOneUppercaseCharacter("lala&&a")).toBe(false)
    expect(functions.atLeastOneUppercaseCharacter("lala1a")).toBe(false)
})

test("password has at least one lowercase character",()=>{
    expect(functions.atLeastOneLowercaseCharacter("LALAla")).toBe(true)
    expect(functions.atLeastOneLowercaseCharacter("laLA")).toBe(true)
    expect(functions.atLeastOneLowercaseCharacter("LALALA")).toBe(false)
    expect(functions.atLeastOneLowercaseCharacter("L1ALALA")).toBe(false)
    expect(functions.atLeastOneLowercaseCharacter("LALAL**A")).toBe(false)
})
test("password has at least one number",()=>{
    expect(functions.atLeastOneNumber("LALA1la")).toBe(true)
    expect(functions.atLeastOneNumber("1laLA")).toBe(true)
    expect(functions.atLeastOneNumber("LALALA")).toBe(false)
})

test("verify password at least 3 conditions should be true", ()=> {
    expect(functions.passwordVerifier("henkie1")).toBe(true)
    expect(functions.passwordVerifier("1234a")).toBe(true)
    expect(functions.passwordVerifier("z")).toBe(false)
    expect(functions.passwordVerifier("henkie1234")).toBe(true)
    expect(functions.passwordVerifier("HENKhenk")).toBe(true)
    expect(functions.passwordVerifier("HENK33$")).toBe(false)
    expect(functions.passwordVerifier("1234")).toBe(false)
    expect(functions.passwordVerifier("")).toBe(false)
})