$('#intern-list').localScroll({
    hash: true,
    onAfterFirst: function() {
        $('html, body').scrollTo({ top: '-=25px' }, 'fast');
    }
});