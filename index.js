
let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}
 
let idArray3 = [] 
while (idArray3.length < 3){
  let randomEntry = selectRandomEntry(idNumbers);
  if (idArray3.includes(randomEntry)){
    console.log("ID number has already been selected");
  }
  else {
    idArray3.push(randomEntry);
  }
}
console.log(idArray3);

// Code your buildCrewArray function here:

function buildCrewArray(arr1, arr2){
  let crewArray = []
    for (let j = 0; j < arr2.length; j++){
      if (arr1.includes(arr2[j].astronautID)){
        crewArray.push(arr2[j]);
      }
  }
  return crewArray;
}



// Here are the candidates and the 'animals' array:

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let spaceAnimals = buildCrewArray(idArray3 , animals);

console.log(`${spaceAnimals[0].name}, ${spaceAnimals[1].name}, and ${spaceAnimals[2].name} are going to space!`);