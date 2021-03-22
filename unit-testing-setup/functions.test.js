const functions = require('./functions')

test('Should be null', () => {
   expect(functions.isNull()).toBe(null)
});

test('checkValue Should be falsy when argument is undefined', () => {
expect(functions.checkValue("Emma")).not.toBe(true)
});

test('User should be Brad Traversy object', () => {
    let user = functions.createUser()
expect(user.firstName).toBe("Brad")
    expect(user.lastName).toBe("Traversy")
});

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBe(1600)
});

// Regex
test('There is no I in team', () => {
     expect('team').not.toContain("I");
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain("admin")
});

