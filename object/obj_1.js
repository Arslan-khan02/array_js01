  // obj literals

  const mySym = Symbol("key")
  const jsUser = {
    name : "arslan ",
    age : 12,
    [mySym]: "man",
    gender : "male", 
  }
  // console.log(jsUser["name"]);
  // console.log(jsUser[mySym]);
  jsUser.name = "urslan"
  jsUser.Symbol = "my key"

  console.log(jsUser.mySym);