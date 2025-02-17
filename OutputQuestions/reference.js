const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)


// A: false
// B: true
// C: TypeError
// D: ReferenceError
// Answer

// Answer: B
// The updateUser function updates the values of the email and password properties on user, if their values are passed to the function, after which the function returns the user object. The returned value of the updateUser function is the user object, which means that the value of updatedUser is a reference to the same user object that user points to. updatedUser === user equals true.

