// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfArt, listOfCat) {
    let res = Object.create({});
    listOfArt.map((book)=> !res[book[0]] ? res[book[0]] = 0 : "false")
    let currentBooks = listOfArt.filter(book => listOfCat.includes(book[0]))
    currentBooks.forEach(book => {
        let bookCount = Number(book.match(/[0-9]/g).join(''));
        !res[book[0]] ? res[book[0]] = 0 : "false"
        res[book[0]] += bookCount;
    });
    let output = Object.entries(res).map((key, value) => `(${key[0]} : ${key[1]})`)
    return output.join(' - ')
}

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B"];
// res = "(A : 200) - (B : 1140)";

// console.log(stockList(b, c) == res);
