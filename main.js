// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘



/*




function isAdmin(usrObject)
{
    for (let i = 0; i < usrObject.length; i++)
  {
            
    if(usrObject.userRole[i] === 'ADMIN')
    {

        return true;
    }
  }
}

console.log(isAdmin())


user object 
user=
*/

function isAdmin(user)
{
  if(user.userRole === 'ADMIN')
  {
     return true;
  } else {return false;}
}


//function getEmail

function getEmail (user)
{
 let firstName = user.firstName
 let lastName = user.lastName
 let email = (`${firstName}.${lastName}@codeimmersives.com`)
 return email.toLowerCase();
}

console.log(getEmail)


//getPlaylistLength

function getPlaylistLength (playlist) {
     
    let length = playlist.songs.length
     return length;
}

// function getHardestHomework
/*
parameters :
homework array

homework = { 
    name: string
    averageScore: number
}


return type: string




*/


function getHardestHomework(homeworkArray){

  let lowestHw = homeworkArray[0];
  for(let i = 0; i <homeworkArray.length; i++)
  {
    if(homeworkArray[i].averageScore < lowestHw.averageScore)
    {
        lowestHw = homeworkArray[i];

    }
    
  }
  
  return lowestHw.name;

}

  console.log(getHardestHomework)


//create Phonebook

function createPhonebook(namesArray, numbersArray){

    let phonebook={};
    for(let i=0; i < namesArray.length; i++)
    {
    phonebook[namesArray[i]] = numbersArray[i]
         
    }
    return phonebook
}


console.log(createPhonebook)




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};