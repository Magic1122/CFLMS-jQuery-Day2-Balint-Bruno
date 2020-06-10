$(document).ready(() => {
    console.log('Document is loaded...')
    $('.container').on('click', (e) => {
        console.log(e)
        $(e.target).remove()
    })
})