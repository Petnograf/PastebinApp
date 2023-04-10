export function transformPastes(pasteArray) {
    let array;
    if (pasteArray) {
        const xmlRoot = `<root>${pasteArray}</root>`
        var parseString = require('react-native-xml2js').parseString;
        parseString(xmlRoot, function (err, result) {
            array = result.root.paste;
        });
    }
    
    return array;
};
