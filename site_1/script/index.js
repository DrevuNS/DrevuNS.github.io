function f_loader() {
    setTimeout(function() {
        var loader = document.getElementById('page-loader');
        if ( !loader.classList.contains('done') ) {
            loader.classList.add('done');
        }
    }, 1000);
}