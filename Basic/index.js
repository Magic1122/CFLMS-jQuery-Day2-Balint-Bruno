console.log('JS is running...')

$(document).ready(() => {
    console.log('Document is loaded...')

    $('#bell').on('click', () => showText('You pushed the bell!'))
    $('#santa').on('click', () => showText('You pushed the santa!'))
    $('#white-box').on('click', () => showText('You pushed the white-box!'))

    const showText = (text) => {
        $('#result').text(text)
    }
})