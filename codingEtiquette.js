//----------------------------------------------//
// Title: Coding Etiquette                      //
// By: Dan Monaghan                             //
// Description:                                 //
// Do's and Don'ts for JS Students, A Guide     //
//----------------------------------------------//

//* Do Set a format to your work
//*
//* [top of file]
//* Imports
//* Defaults (global variables)
//* Definitions (funcitons, states)
//* Running code (where you run your functions)
//* Exports (if any)
//* [bottom of file]
//*
//*
//*
//* Do
//* Comment your work and name your functions and
//* variables so other programmers know what you
//* are trying to achieve

//* retreives a list of users from a database of users
const db = dbCon(username, password, conString)

///////////////////////////////////////////////////////

//! Don't
//! unveil company secrets in your code

//! no idea what this does but now it works!🤷
//! no touchy
const badDB = dbCon(
    'admin',
    'GetOffMyBackIts3AM,WillThatD0?', // bad idea
    'db://somesecurenetwork.network:3307/db?username=admin',
)

///////////////////////////////////////////////////////
