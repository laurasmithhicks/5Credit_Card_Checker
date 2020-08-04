// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]//8,5,6,9,3,7,5,9,0,8,0,1,3,8,0,8 //80
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]//1,5,6,5,5,6,3,7,3,8,5,5,2,4,6,9 //80
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]//351314029981266 //60
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred=(array)=>{
//	let newArray=[];
	let added=0;
	let i=array.length-1;
		while (i>=0){
			added=added+array[i];

			i--;
			if (array[i]*2<10){
				added=added+(array[i]*2);

			}
			else if (i>=0){
				added=added+(array[i]*2)-9;

			}
			i--;
		}
		if (added%10===0){
			return true;
		}
		else {
			return false;
		}
};
//console.log(validateCred(valid1));


const findInvalidCards=(arrayBatch)=>{
	let invalidCards=[];
	for (let i=0; i < arrayBatch.length-1; i++){

		if (validateCred(arrayBatch[i])===false){
			invalidCards.push(arrayBatch[i]);
		}
	}
	return invalidCards;
//	console.log(invalidCards);
};

findInvalidCards(batch);

const idInvalidCardCompanies=(invalidCards2)=>{
	const companies=[];
	for (i=0; i<invalidCards2.length-1; i++){
		if (invalidCards2[i][0]===3){
			if (companies.indexOf("Amex")===-1){
			companies.push("Amex");
//			console.log(companies);
			}
		}
		else if (invalidCards2[i][0]===4){
			if (companies.indexOf("Visa")===-1){
			companies.push("Visa");
//			console.log(companies);
			}
		}
		else if (invalidCards2[i][0]===5){
			if (companies.indexOf("MasterCard")===-1){
			companies.push("MasterCard");
//			console.log(companies);
			}
		}
		else if (invalidCards2[i][0]===6){
			if (companies.indexOf("Discover")===-1){
			companies.push("Discover");
//			console.log(companies);
			}
		}
		else {
			console.log("Company not found");
		}
	}
	
	return companies;
};

console.log(idInvalidCardCompanies(findInvalidCards(batch)));
