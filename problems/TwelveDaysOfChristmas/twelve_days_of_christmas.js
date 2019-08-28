// This program creates the poem "Twelve Days of Christmas" using only the components of the poem, e.g., "A partridge in a pear tree"
// It is possible to change the components by changing the strings inside the 'poem_components' array
const poem_components = [
    "Twelve lords a-leaping,",
    "Eleven ladies dancing,",
    "Ten pipers piping,",
    "Nine drummers drumming,",
    "Eight maids a-milking,",
    "Seven swans a-swimming,",
    "Six geese a-laying,",
    "Five gold rings,",
    "Four colly birds,",
    "Three french hens,",
    "Two turtle doves, and",
    "A partridge in a pear tree."
];
const days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

// create a stanza of the poem based on the day, and add it to the "poem_stanzas" array
// @param day:Number - the number of the day of christmas, from 1 - 12
// @param components:Array - the array of the components of the poem
function createStanza(day, components) {
    let str = "On the " + days[day-1] + " day of Christmas, my true love sent to me,\n";
    const numOfComponents = components.length;
    for (let i = numOfComponents - day; i < numOfComponents; i++) {
        str += (components[i] + '\n');
    }
    return str;
}

// create each stanza and join them into the poem; calls the createStanza function
// @param components:Array - passes it to the createStanza function
function joinStanzas(components) {
    let poem = "";
    for (var i = 1; i < 13; i++) {
        poem += (createStanza(i, components) + "\n\n");
    }
    return poem;
}

console.log(joinStanzas(poem_components));