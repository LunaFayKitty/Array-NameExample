const Mio = {
  name: "Mio",
  age: 30,
};

const Lily = {
  name: "Lily",
  age: 33,
};

const NAME = [Mio, Lily];
updateNames();

document.getElementById("Hinzufuegen").addEventListener("click", function () {
  let INPUT = document.getElementById("Input").value;
  let INPUT2 = document.getElementById("Input2").value;
  if (INPUT !== "" && INPUT2 !== "") {
    let NEWPERSON = { name: INPUT, age: INPUT2 };
    NAME.push(NEWPERSON);
    updateNames();
    // input leeren
    document.getElementById("Input").value = "";
    document.getElementById("Input2").value = "";
  } else {
    alert("Bitte einen Namen UND Alter eingeben!");
  }
});

document.getElementById("Entfernen").addEventListener("click", function () {
  let INPUT = document.getElementById("Input").value;
  if (INPUT !== "") {
    let index = NAME.findIndex((person) => person.name === INPUT);

    /* Mehrere Varianten Index gesuchten Namen finden!!

2)  let index = NAMES.indexOf(NAME.find((person) => person.name === INPUT));
  
3)  let index = NAMES.indexOf(NAMES.find(function(person) {
    return person.name === INPUT;}));

4)  let index = NAMES.findIndex(function(person) {
    return person.name === INPUT;});*/

    if (index !== -1) {
      NAME.splice(index, 1);
      updateNames();
      // input leeren
      document.getElementById("Input").value = "";
      document.getElementById("Input2").value = "";
    } else {
      alert("Der eingegebene Name wurde nicht gefunden.");
    }
  } else {
    alert("Bitte einen Namen eingeben!");
  }
});

function updateNames() {
  let NAMELIST = document.getElementById("Name");
  NAMELIST.innerHTML = "";

  NAME.forEach(function (person) {
    let LISTITEM = document.createElement("li");
    // Erster Buchstabe großschreiben
    let name = person.name[0].toUpperCase() + person.name.slice(1);
    LISTITEM.textContent = name + " / " + person.age;
    NAMELIST.appendChild(LISTITEM);
  });
}
