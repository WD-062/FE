// write a function
// two parameters for the names

const addNames = (name, lastName) => {
    return name[0].toUpperCase() + "." + lastName[0].toUpperCase();
  };
  
  // const addNames2 = (name, lastName) => {
  //   return `${name[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  // };
  
  // const addNames3 = (name, lastName) => {
  //   const shortName = name[0].toUpperCase() + "." + lastName[0].toUpperCase();
  //   return shortName;
  // };
  
  console.log(addNames("John", "Doe")); // J.D
  
  const addNames1Param = (name) => {
    const splitName = name.split(" ");
    console.log(splitName);
    return `${(splitName[0].toUpperCase())[0]}.${splitName[1][0].toUpperCase()}`;
  };
  
  const name = "John Doe";
  console.log(addNames1Param("John Doe")); // John Doe