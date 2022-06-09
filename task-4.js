let data = {
   id: 1,
   name: "Leanne Graham",
   username: "Bret",
   email: "Sincere@april.biz",
   address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
   },
   phone: "1-770-736-8031 x56442",
   website: "hildegard.org",
}

// 3. a) Use Spread Operator
const myData = {
   name: 'Alfredo Bangun',
   email: 'alfredobangun14@gmail.com',
   hobby: 'Coding'
}

data = {...data, ...myData}

// 3. b) Use Object Destructuring to get street and city
const { street, city } = data.address