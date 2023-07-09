console.log('***** Music Collection *****')

let collection = [];


//add to collection
function addToCollection(title, artist, yearPublished) {
    let album = {title:title,artist:artist,yearPublished:yearPublished};
    collection.push(album);
    return [album];
}

console.log(addToCollection("American Idiot", "Green Day", "2004"));
console.log(addToCollection("Black Holes and Revelations", "Muse", "2006"));
console.log(addToCollection("Absolution", "Muse", "2003"));
console.log(addToCollection("Progress", "Take That", "2010"));
console.log(addToCollection("Good News for People Who Love Bad News", "Modeest Mouse", "2004"));
console.log(addToCollection("To Lose My Life...", "White Lies", "2009"));

console.log(collection);


//show collection
function showCollection() {

}


//find by artist
function findByArtist(artist) {
    let results = [];
    for (each of collection) {
        if (each == collection.artist) {
            results.push(each);
            return results;
        }
        else {
            return false;
        }
    }
}

console.log(findByArtist("Muse"));