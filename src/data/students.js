export class Student {
	constructor(name, surname, idNumber, birthdate, gender, address, score) {
		this.name = name;
		this.surname = surname;
		this.idNumber = idNumber;
		this.birthdate = birthdate;
		this.gender = gender;
		this.address = address;
		this.score = score;
	}

	// Getters
	get getName() {
		return this.name;
	}

	get getSurname() {
		return this.surname;
	}

	get getIdNumber() {
		return this.idNumber;
	}

	get getBirthdate() {
		return this.birthdate;
	}

	get getGender() {
		return this.gender;
	}

	get getAddress() {
		return this.address;
	}

	get getScore() {
		return this.score;
	}

	// Setters
	set setName(newName) {
		this.name = newName;
	}

	set setSurname(newSurname) {
		this.surname = newSurname;
	}

	set setBirthdate(newBirthdate) {
		this.birthdate = newBirthdate;
	}

	set setGender(newGender) {
		this.gender = newGender;
	}

	set setAddress(newAddress) {
		this.address = newAddress;
	}

	set setScore(newScore) {
		this.score = newScore;
	}
}

export const students = [];
