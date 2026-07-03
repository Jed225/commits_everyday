const phrase = [
    "bonjour",
    "javascript",
    "react",
    "css"
];


function nb_caractere(arr) {
    return arr.reduce((acc, mot) => {
        acc[mot] = mot.length;
        return acc;
    }, {}); 
}

console.log(nb_caractere(phrase));
