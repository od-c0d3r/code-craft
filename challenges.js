// https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

function autocomplete(input, dictionary){
    return dictionary.filter( word => word.toLowerCase().match(input))
}

console.log(autocomplete('ai', ['airplane','airport','apple','ball'])) // == ['airplane','airport']
