//connect the 2 pub list div, make them sortable
$("#favourites").sortable({connectWith: "#other", receive: prefListAdd});
$("#other").sortable({connectWith: "#favourites", receive: prefListRemove});

//Refresh pub lists after clicking on a row in the person table
$('tr').click(function(){
    var $tr = $(this);
    var id=$($tr.find("td:nth-child(1)")).attr('data-id');
    console.log(id);
    if(typeof id!== 'undefined') {
        $.get("/people/getpreferences/" + id,
            function (data) {
                let $fav = $('#favourites');
                $fav.empty();
                if (typeof data.preferredList !== 'undefined') data.preferredList.forEach(function (p) {
                    //using jquery with text attribute to avoid html injection
                    let $head = $('<header class="draggable"></header>').text(p.name);
                    let $textElement = $("<li class='column' data-id='" + p._id + "'></li>").append($head);
                    $fav.append($textElement);
                });

                let $other = $('#other');
                $other.empty();
                if (typeof data.notPreferredList !== 'undefined') data.notPreferredList.forEach(function (p) {
                    //using jquery with text attribute to avoid html injection
                    let $head = $('<header></header>').text(p.name);
                    let $textElement = $("<li class='column' data-id='" + p._id + "'></li>").append($head);
                    $other.append($textElement);
                })
            });
    }
});

//highlight the clicked row, remove highlight from the other highlighted rows
$('.trow').click(function(){
    $('.highlight').removeClass('highlight');
    $(this).addClass('highlight');
});

//select first person
$( document ).ready(function() {
    $('tr:first-child').click();
});

/**
 * When pub dropped to preferred pubs, save it to db
 */
function prefListAdd(event, ui){
    $.post( "/people/addpreference/"+ $($('.highlight').find("td:nth-child(1)")).attr('data-id'),{pub: $(ui.item).attr('data-id')});
}
/**
 *pub removed from preferred pubs, save it to db
 */
function prefListRemove(event, ui){
    console.log($(ui.item).attr('data-id') + "  removed");
    $.post( "/people/delpreference/"+ $($('.highlight').find("td:nth-child(1)")).attr('data-id'),{pub: $(ui.item).attr('data-id')});
}