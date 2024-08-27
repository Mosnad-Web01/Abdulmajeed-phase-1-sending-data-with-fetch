function submitDate(name , email){
    let data = {
        name: name,
        email: email
    };
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML += data.id;
        console.log(data.id);
    })
    .catch(error => {
        document.body.innerHTML += error.message;
    });
}
submitDate("ali","Ali@gmail.com");
// Add your code here
// function submitData(name, email) {
//     let data = {
//         name: name,
//         email: email
//     };
//     return fetch('http://localhost:3000/dogs', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.body.innerHTML += data.id;
//         console.log(data.id);
//     })
//     .catch(error => {
//         document.body.innerHTML += error.message;
//     });
//     submitData("ali","Ali@gmail.com");
// }
