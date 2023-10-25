const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const parentName = document.getElementById("parentName");
const Code = document.getElementById("code");
const signIn = document.getElementById("signIn");
const output = document.getElementById("output");

let nameListText =" ";
const namelist = [];
signIn.addEventListener("click", () => {
    const reg = {
        name : firstName.value,
        last : lastName.value,
        code : Code.value,
        parent : parentName.value,
    };
    namelist.push(reg)
    console.log(namelist);
    namelist.forEach( (reg,index) => {

        nameListText = nameListText + namelist[index];
        output.innerHTML = nameListText;
  
    });

    

    console.log(reg);
    // nameListText += "<li> esm: " + reg.name + ' ' + "famil : " + reg.last + "code meli " + reg.code + "parent name: " + reg.parent;
    // output.innerHTML= nameListText;

})


