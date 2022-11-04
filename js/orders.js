$('.submit').click(event => {
    event.preventDefault();
    const fname = $('#firstname').val();
    const lname = $('#lastname').val();
    const email = $('#email').val();
    const city = $('#city').val();
    const phone = $('#phone').val();
    const type = $('#food').val();
    const name = $('#name-of-food').val();

    $('.new-row').append(`
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${email}</td>
            <td>${city}</td>
            <td>${phone}</td>
            <td>${type}</td>
            <td>${name}</td>
        </tr>
    `)

    alert(`Name: ${fname} ${lname}, email: ${email}, city: ${city}, phone: ${phone},
            Order has been sent successfully!`)
    // console.log(`Name: ${fname} ${lname}, email: ${email}`)
});