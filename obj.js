console.log("Task 1:");
let width = prompt("Enter the width"); //task 1
let height= prompt("Enter the height");
width = parseInt(width);
height = parseInt(height);
let sq;
let e = "Wrong number";
function calcRectangleArea(width, height)
{
    return width * height;
}
try
{
    sq = calcRectangleArea(width, height);
    if(!Number.isNaN(sq))
    {
        console.log(sq);
    }
    else
    {
        throw "Wrong number";
    }
}
catch(e)
{
    console.log(e);
}

console.log("Task 2:"); //task 2
function checkAge()
{
    const massage = document.getElementById("messanger");
    massage.innerHTML = "";
    let user = document.getElementById("user").value;
    try
    {
        if(user.trim() == "")  throw "The field is empty! Please enter your age";
        if(isNaN(user)) throw "It's not a number! Please enter your age";
        user = Number(user);
        if(user < 14)  throw "You're too young";
        else {massage.innerHTML = "You accept";}
    }
    catch(err)
    {
        massage.innerHTML = err;
    }
}

console.log("Task 3:"); //task 3
let ids = new Array;
function showUser(id)
{
    try
    {
        if(id < 0) {throw id;}
        else{return "{id: " + id + "}";}
    }
    catch(i)
    {
        return "Error: ID must not be negative: " + i;
    }
}

function showUsers(ids)
{
    for(let i = 0; i < 4; i++)
    {
        ids[i] = prompt("Enter the element number " + (i + 1));
        let str = showUser(parseInt(ids[i]));
        console.log(str);
    }
}

showUsers(ids);

console.log("Task 4:"); //task 4
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class MonthException
{
    constructor(month){this.month = month;}
    showMonthName(month)
    {
        try
        {
            for(let i = 0; i < months.length; i++)
            {
                if(i + 1 == month) {return months[i];}
                if(i + 1 == months.length && i + 1 != month) {throw "Incorrect month number";}
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }
}
let month = prompt("Enter the number");
let nam = new MonthException(month);
let sss = nam.showMonthName(month);
console.log(sss);