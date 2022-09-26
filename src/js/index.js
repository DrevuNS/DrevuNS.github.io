function ff() {

    setTimeout(function() {
        var loader = document.getElementById('page-loader');
        if ( !loader.classList.contains('done') ) {
            loader.classList.add('done');
        }
    }, 1000);
}

function f() {

    //$(".first_block_txt").animate({opacity: "1"});

    $(".first_block_content").slideDown(750);

}

function f4() {

    var first_inp = document.getElementsByClassName("seventh_content_inp1")[0].value;

    var second_inp = document.getElementsByClassName("seventh_content_inp2")[0].value;

    var third_inp = document.getElementsByClassName("seventh_content_inp3")[0].value;

    if (first_inp == "DrevuNS") {

        alert("Всегда к вашим услугам!!!");

    }

    else {

        alert("Вы отправили сооющение:\n" + third_inp + "\nОт имени:\n" + first_inp + "\nС электронной почты:\n" + second_inp);

    }

}