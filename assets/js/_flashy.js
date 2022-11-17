export default function flashy(message) {
    var template = $($('#flashy-template').html())
    $('.flashy').remove()
    template
        .find('.flashy__body')
        .html(message)
        .attr('href', link || '#')
        .end()
        .appendTo('body')
        .hide()
        .fadeIn(3000)
        .delay(2800)
        .animate(
            {
                marginRight: '-100%'
            },
            3000,
            'swing',
            function() {
                $(this).remove()
            }
        )
}
