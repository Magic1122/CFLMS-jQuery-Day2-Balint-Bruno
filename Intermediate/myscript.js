$(document).ready(function() {

    $('*').css({ 'margin': '0', 'padding': '0' });

    const persons = (simpsons);
    console.log(persons)


    for (let i = 0; i < persons.length; i++) {

        let person = `<div class="person_wrapper">
	<img src="${persons[i].image}">
		<div class="person_name">
			<p>${persons[i].name}</p>
			<p class="person_relation">${persons[i].relation}</p>
		</div>
	</div>`;
        $('#wrapper').append(person);
    }




    let button = `<button class ="button" type="button">Famylize</button>`;
    $('body').append(button);





    $('.button').click(familize);

    function familize() {
        for (let i = 0; i < persons.length; i++) {
            if (!persons[i].family) {
                $(`.person_wrapper:nth-child(${i+1})`).addClass('nonFamily');
            } else {
                $(`.person_wrapper:nth-child(${i+1})`).addClass('family');
            }
        }
    }




});