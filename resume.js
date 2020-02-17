let coolSkills = ["Wakeboarding", "Robotics", "Python"];
let mySkills = ["Spanish", "Piano", "Robotics", "DIY Projects", "Wakeboarding", "HTML", "CSS", "Javascript", "Python"]
let name = "liz mccreight";
let cap = name.toUpperCase();

function displayPosition(company, title, description) {
    console.log("* " + title + " at " + company + " - " + description);
};
function displaySkills(skill) {
    if (coolSkills.indexOf(skill) !== -1) {
        console.log("* BAM: " + skill);
        } else {
        console.log("* " + skill);
        }
    };

console.log(cap);
console.log("Career: Full Stack Developer");
console.log("Bio: Licensed Boat Driver");
console.log(" ");
console.log("My Interests:");
console.log("* crafts");
console.log("* reading");
console.log("* health");
console.log("* nature");
console.log("* science");
console.log(" ");
console.log("My Previous Experience:");
displayPosition("Martin, Nuñez and Malone, LLC", "Accountant", "did taxes for individuals and corporations");
displayPosition("Nature Company", "Social Media Manager", "managed social media accounts for several resorts, a marina, aquarium and nature park");
displayPosition("Resort", "Digital Marketer", "managed digital ads and used Google Analytics to optimize");
console.log(" ");
console.log("My Skills:");
displaySkills("Spanish");
displaySkills("Piano");
displaySkills("Robotics");
displaySkills("DIY Projects");
displaySkills("Wakeboarding");
displaySkills("HTML");
displaySkills("CSS");
displaySkills("Javascript");
displaySkills("Python");