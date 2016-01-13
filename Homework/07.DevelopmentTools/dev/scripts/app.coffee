button = $('.btn-show')
hide = false

button.on 'click', ->
    hide = !hide

    $('.libs').hide() if hide
    button.text('Hide') if hide
    
    $('.libs').show() if !hide
    button.text('Show') if !hide