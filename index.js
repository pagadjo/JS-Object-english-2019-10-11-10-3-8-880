document.write("<b>Program 1</b><br><br>")
function print(obj){
  for (var x in obj){
    document.write(" | " + x + " : " + obj[x] + " | ")
  }
}
var user = {}
document.write("<i>Create a null object and set its variable name as user; </i><br>")
document.write("var user = {}<br>");
document.write("<br><i>Add a surname attribute and set its value as Mike</i><br>")
user.surname = "Mike"
print(user);
document.write("<br><br><i>Add a name attribute and set its value as John</i><br>")
user.name = "John";
print(user);
user.name = "Peter";
document.write("<br><br><i>Modify the value of name attribute as Peter</i><br>")
print(user);
document.write("<br><br><i>Delete the name attribute of user</i><br>")
delete user.name;
print(user);

document.write("<br><br><b>Program 2</b><br><br>")
var sum =0 ;
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
  };
  for (var x in fruit){
    document.write(x +" : " + fruit[x] + "<br>")
    sum = sum + fruit[x];
  }
  document.write("<br><b>Total = " + sum + "</b>");