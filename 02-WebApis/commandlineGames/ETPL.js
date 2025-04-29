function translatePigLatin(word) {
    const vowel = ["a", "e", "i", "o", "u"];
    const lowercaseWord = word.toLowerCase();
    //if word start with vowel return an end way
    if (vowel.includes(lowercaseWord[0])) {
      return lowercaseWord + "way";
    }
  
    //check first and secound letter both are consonants
    if (!vowel.includes(lowercaseWord[0]) && !vowel.includes(lowercaseWord[1])) {
      return lowercaseWord.slice(2) + lowercaseWord.slice(0, 2) + "Ay";
    }
  
    // if word start with a consonant
    return lowercaseWord.slice(1) + lowercaseWord[0] + "ay";
  }
  
  // get words from command line
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Please Enter a words");
    process.exit(1);
  }
  // translate each word ofo array
  const translate = args.map(translatePigLatin).join(" ");
  console.log("Pig Latin: ", translate);