$(document).ready(function() {

    $('*').css({ 'margin': '0', 'padding': '0' });

    const persons = (simpsons);
    console.log(persons)


    for (let i = 0; i < persons.length; i++) {

        let person = `<div class="person_wrapper" id="person_wrapper${i + 1}">
	<img src="${persons[i].image}">
		<div class="person_name" id='person_name${i + 1}'>
			<p>${persons[i].name}</p>
			<p class="person_relation">${persons[i].relation}</p>
		</div>
		<div id="hobbies${i + 1}"></div>
	</div>`;
        $('#wrapper').append(person);
    }





for (let i = 1; i <= persons.length; i++) {
	$(`#person_wrapper${i}`).on('click', (e) => {
		$(`#hobbies${i}`).empty()
		console.log(e)
		let hobbiesNode
		persons.map((person, index) => {
			 hobbiesNode = person.hobbies.map((hobbie) => {
				return `<p>${hobbie}</p>`
			})
		})
		$(`#hobbies${i}`).append(hobbiesNode)
	})
}



$('.person_wrapper').on('dblclick', (e) => {
	console.log(e.target)
	$(e.target).remove()
})

});