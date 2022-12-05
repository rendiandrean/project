window.alert("Hello Visitor!")

const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");
const language = prompt("What language can you speak??");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "english") {
   alert("Nice to meet you, " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "indonesia") {
   alert("Senang betemu denganmu, " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "japan") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
}