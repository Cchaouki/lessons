/*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax
*/

//window.alert ("hello there") hadi bach tkharaj plaka 
document.write ("<h1>hello</h1>");//hadi bach nzid element flpage
console.log ("wellcome")//bach ykhrj text hadak f console



/*
  Console Methods
  - log
  - error
  - table

  Web API

  Styling Console
  - Directive %c hadi bach tselectioner l7aja li dirlha edit
*/
console.log ("log");
console.error ("errur");
console.table (["ousama","ahmed","elzero"]);//hadi bach tkharaj lasami hado f table f console mratbin

console.log ("js %cfile", "color:red;font-size:15px;");

/*ES6
*/
/*
Data Types intro
string hada ykon text binat ""
number  whada ykon ra9m basa7 bla hado "" kima lta7ta 
--array ==> object kima 10,15,7
--wkayn object ki tmdlo l names blast numbers
--wkayn object ki tmdlo information kima country w age kima l examples li lta7t
--boolean kima true false
*/
console.log (typeof "extend");
console.log (typeof 500);
console.log (typeof ["10","15","7"]);
console.log (typeof ["os","of","css"]);
console.log (typeof {name:'tracks',age:17,country:'alg'});
console.log (typeof true);
console.log (typeof false);
console.log (typeof undefined);
console.log (typeof null);

/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/
var user ="osama";
console.log (user);

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/


/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue whadi bach dir ignore lkach text code wykhrj text
  \n hadi bach tarja3 star
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\ Web \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");

/*
  Concatenation
*/

let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b);

console.log(a, b);


/*
  Template Literals (Template Strings)
*/

// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a = " \"\" " + b +
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);
/*

===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1


/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));


/*
  Assignment Operators
*/

/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log(100.10.toString());

console.log(100.554555.toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));

/*
  Math Object
  - round() hadi bach traja3 number lil9ima ta9ribiya likbira wala sghira 3la 7sab ba3d ,
  - ceil() hadi bach traja3 number l akbar 9ima 7ata kon ykon ba3d lfasila sghir
  - floor() whadi l3aks ta3 li fogha traja3 number l a9al 9ima
  - min()  hadi tkharajlk a9al ra9m fl majmo3a
  - max()  hadi tkharajlk akbar ra9m fl majmo3a
  - pow() hadi dirlk l os kima 2**2 dirha math.pow (2,2)
  - random() hadi tmdlk ra9m 3achwaai
  - trunc() [Es6] whadi tna7i ar9am ba3d lfasila wt7to number 3adi
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));


/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";
console.log(theName[2]); //hadi bach nselectioner letter li 7abha tabda mn 0
console.log(theName[2]);// hadi selecsionit letter 2
console.log(theName.charAt(2));//hadi bach nselectioner letter li n7bha tani
console.log(theName.length);//hadi bach tkharajli lkalma gdah fiha mn 7arf
console.log(theName.trim());//hadi bach tkharajli lkalma bla espace
console.log(theName.toLocaleUpperCase());//hadi bach dir lkalma uppercase
console.log(theName.toLocaleLowerCase());//hadi bach dir lkalma lowercase
console.log(theName.trim().charAt(2).toLocaleUpperCase());//hadi ki ndirhm kaml



/*
String Methods
- indexOf(Value [Mand], Start [Opt] 0)
- lastIndexOf(Value [Mand], Start [Opt] Length)
- slice(Start [Mand], End [Opt] Not Include End)
- repeat(Times) [ES6]
- split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";
console.log(a.indexOf("Web")); //hna bach t7awas 3la kalmet web f text outpot 7
console.log(a.indexOf("Web",8)); //hna bach t7awas 3la kalmet web f text w tabda mn 8 outpot -1
console.log(a.indexOf("o")); //hna bach t7awas 3la o f text outpot 5
console.log(a.lastIndexOf("o")); //hna bach t7awas 3la o basa7 mn lakhar w tarja3 basa7 l7sab 3adi mn lawal outpot 15
console.log(a.slice(2,7));//outpot zero hadi ta9ta3 kalma mn jomla tabda mn 2 wtkamal f 7 wala t9dr tabda b negative value outpot zero
console.log(a.slice(-5,-3)); //outpot ch
console.log(a.repeat(4));//hadi bach t3awd text
console.log(a.split());//hadi bach tgos blays f text 
console.log(a.split(""));//whna ygos gol 7arf outpot ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(a.split(" "));//whna ygos lespace w outpot ["Elzero","Web","School"]
console.log(a.split("",6));//hna bach ygos 6 marat brk  outpot['E', 'l', 'z', 'e', 'r', 'o'] 


/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);
console.log(a.substring(2,6));//hach bach tgos 9et3a mn text  outpot zero
console.log(a.substring(6,2));//hadi hna te3kesha wa7adha dirha mn 2 / 6  outpot zero
console.log(a.substring(-10,6));//hna negative value ydiro 0 wyabda outpot Elzero
console.log(a.substring(a.length - 5,a.length - 3));//hadi hna tari9a bach nabdaw mn lakhar outpot ch
console.log(a.substr(0,6));//hadi tani tkharajlk wch kayn  mn 0 7ata 6  outpot Elzero
console.log (a.substr(17));//hna yokhrj faragh lakhatr ltext kaml fih mn 0 l 16 w ana mdayro yabda mn 17
console.log(a.substr(-3));//hna yabda mn lakhar w ykamal wch kayn ba3d hadak l7arf outpot ool
console.log(a.substr(-5,2));//hna yabda mn -5 wyzid 2 horof ba3dha  brk outpot ch hada howa lfar9 binha wbin lifato 
console.log(a.includes("Web"));//hadi t7awaslk 3la lkalma ila kayna wala la w tkharajlk true wala false
console.log(a.includes("Web",8));//whna gotlo abda 7awas mn 8 ykharajli false lakhatr makanch
console.log(a.startsWith("E"));//hadi hnaya ychof lkalma tabda b E wala nn
console.log(a.startsWith("e",2));//hna ychof lkalma tabda b e wala la basa7 yabda mn 2 ygoli false
console.log(a.startsWith("z",2));//hna ygoli true
console.log(a.startsWith("zero",2));
console.log(a.endsWith("l"));//hadi bach tchof lkalma bach tkamal hna text kaml ykamal bl l yjini true
console.log(a.endsWith("o",6))//hna gotlo lkalma li lenght ta3ha 6 tkamal bl o wala nn yjini true

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toLocaleUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toLocaleUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6)+" "+a.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLocaleLowerCase()+a.slice(1).toLocaleUpperCase()); // eLZERO WEB SCHOOl

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");


/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);


/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
  Nested If
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {

  price -= discountAmount;

} else if (country === "Egypt") {

  if (student === true) {

    price -= discountAmount + 30;

  } else {

    price -= discountAmount + 10;

  }

} else {

  price -= 10;

}

console.log(price);


/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

  /*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = 0;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);


/*
  If Condition Challenge


let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
*/
let a =10;
a < 10 ? console.log(10):a >=10 && a <=40 ? console.log("10 to 40") : a > 40 ? console.log(">40"):console.log("unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
    console.log("Good");
  }

// W Position May Change
if (st.charAt(st.indexOf("W")).toLocaleLowerCase() === "w") {
  console.log("Good");
}
if (st !== "string") {
    console.log("Good");
  }
  
  if ( typeof (+st)=== "number") {
    console.log("Good");
  }
  
  if (st.split(" ",1)+st.split(" ",1) === "ElzeroElzero") {
    console.log("Good");
  }

  /*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/Number

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`); //hadi bach ykharajli ahmed
console.log(`Hello ${myFriends[2]}`); //whna ykharajli sayed
console.log(`${myFriends[1][2]}`); //whna yro7 l mohamed w ykharajli h
console.log(`Hello ${myFriends[3][1]}`);//whna yro7 l array li fl array lawla wykharaj ali
console.log(`${myFriends[3][1][2]}`); // whna yro7 larray li fl array lawla w yzid yro7 l ali w ykharaj l

console.log(myFriends);
myFriends[1] = "Gamal"; //hna bach nmodifier 7aja fl array
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];//hna bach nbadal wch kayn b array
console.log(myFriends);

console.log(Array.isArray(myFriends));//hna tchofha array wala nn outpot true

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriends.length = 2;

console.log(myFriends);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");//hadi tzid 3anasr fl badya ta3 array

console.log(myFriends);

myFriends.push("Samah", "Eman");//whna tzid 3anasr flakhar

console.log(myFriends);

let first = myFriends.shift();// shift hadi tna7i l 3onsor lawal fl array

console.log(myFriends);

console.log(`First Name Is ${first}`); // outpot first name is osama

let last = myFriends.pop();//whna yna7i 3onsor mn lakharaj

console.log(myFriends);

console.log(`Last Name Is ${last}`);//outpot last name is eman

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));//hna y7awas 3la ahmed wykharajli 0
console.log(myFriends.indexOf("Ahmed", 2)); //hna y7awas 3la ahmed basa7 yabda mn 2 outpot 4

console.log(myFriends.lastIndexOf("Ahmed")); //hna y7awas 3la ahmed mn lakhar basa7 fl outpot y7sb 3adi mn lawal wykharajli 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); //whna y7awas 3la ahmed mn lakhar mn alaa li howa -2 wykharajli 0

console.log(myFriends.includes("Ahmed")); 
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());//sort bach tratab array w reverse t3ksha


/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());//hadi slice bach tgos array hna tkharajlk array kima rahi
console.log(myFriends.slice(1));//hna tgoslk array 3nd 1 sama tkharajlk mn sayed 7atan ameer
console.log(myFriends.slice(1, 3)); // hna tkharajlk sayed ali lakhatr nihaya tetgas tani
console.log(myFriends.slice(-3));//hna yabda mn osama bdina n7sbo mn lakhar wygos 3adi wykharaj osama gamal ammeer
console.log(myFriends.slice(1, -2)); //hna ykharaj sayed ali osama
console.log(myFriends.slice(-4, -2)); //hna ykharaj ali osama
console.log(myFriends);

myFriends.splice(1, 2, "Sameer", "Samara"); //hadi splice yna7i 3anasr wyzid 3anasr kima hna bda mn 1 na7a 2 wzad sammer w samara

console.log(myFriends);


/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);/*hna bach ndakhal 
arrays ta3 mynewfriends w schoolfreinds f array myfreinds wtani n9dr nzid item ll arrar */ 

console.log(allFriends);

console.log(allFriends.join());//hna join bach dirhm string w t9dr dir fiha l7aja li tfsel bin text w text
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}


/*
  Loop 
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]); //hna bach ydir push l myfriends f only names basa7 ykharaj ghir string
  }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }



/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop; //hna ki yal7ag l colors green ydir break ll mainloop
    }
  }
}

/*
  Loop For Advanced Example
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}

/*
  Products Practice
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}

/*
  Loop
  - While
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}
/*
  Loop
  - Do / While
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

//random function challenge
function checkStatus(a, b, c) {
  let myInps = [a, b, c];
  let name, age, hire;
  for (i = 0; i < myInps.length; i++) {
      typeof myInps[i] === "string"
          ? (name = myInps[i])
          : typeof myInps[i] === "number"
          ? (age = myInps[i])
          : typeof myInps[i] === "boolean" && myInps[i] === true
          ? (hire = "You Are Available For Hire")
          : typeof myInps[i] === "boolean" && myInps[i] === false
          ? (hire = "You Are Not Available For Hire")
          : console.log("Invalid data Input");
  }
  return `Hello ${name}, Your Age Is ${age}, ${hire}`;
}

console.log(checkStatus(38,"Osama") )

// Needed Output
//console.log(); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
/*   */

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
  console.log("Good");
}, 2000);

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
  return 10;
};

let print = () => 10;

let print = function (num) {
  return num;
};

let print = num => num;

let print = function (num1, num2) {
  return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20; //function thez mn local variables 
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();



/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);


/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);


/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);


/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(add);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);


//- forEach
<ul>
  <li class="active">One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<div class="content">
  <div>Div One</div>
  <div>Div Two</div>
  <div>Div Three</div>
</div>


/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());

/*
  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());

/*
  Object
  - Create Object With creat Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
  Object
  - Create Object With assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);


/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");



/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}



/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = "product";

document.body.appendChild(myMainElement);


/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};
/*
DOM. [CSS] 
- style 
-.cssText 
-- removeProperty(propertyName) [Inline, Stylesheet] 
- setProperty(propertyName, value, priority)
let element = document.getElementById("my-div"); */
element.style.color = "red";
element.style.fontWeight = "bold";
element.style.cssText = "font-weight: bold; color: green; opacity:0.9";
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.stylesheets[0].rules[0].style.removeProperty("line-height");
document.stylesheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important")

  /*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");
element.append(createdP) //hadi tzid 7aja f div m3a lakhar
element.prepend(createdP)//hadi tzid 7aja f div m3a lawal
element.before("hi") //hadi tzid 7aja 9bal div
element.after("hello") //hadi tzid 7aja ba3d div

// element.remove();


/*
  DOM [Traversing]
  - nextSibling      // hadi bach nro7o ll3onsor 9adr  li ba3d l7aja li rani fiha
  - previousSibling   // hadi bach nro7o ll3onsor 9adr  li 9bal l7aja li rani fiha
  - nextElementSibling  // hadi bach nro7o ll element 9adr  li ba3d l7aja li rani fiha
  - previousElementSibling // hadi bach nro7o ll element 9adr  li 9bal l7aja li rani fiha
  - parentElement //whadi bach nro7o llparent ta3 l l7aja li rani fiha
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
}

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p").cloneNode(true); //bach ndir noskha ll paragraph
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

