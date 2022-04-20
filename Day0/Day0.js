
//This function returns the reversed string value, when a string is passed as an argument
const reverseString = (word) => {

    //create a constant to assign word length
    const wordLength = word.length;

    //check whether the string is empty
    if(wordLength < 1 ) throw Error ("The string is empty");

    //define leters array
    let letters = [];
            
    /*assign values for letters array */
    for(let i = 0; i < wordLength; i++){

        // the value of lettershould be the char value at wordLength - (i+1)
        letters[i] = word.charAt(wordLength - i - 1);

    }

    //join("") use to join the values of the array without commas
    return letters.join("");     

}

//to call the function
//reverseString("abcde");



 