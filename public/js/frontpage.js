//connect the 2 people list div, make them sortable
$("#favourites").sortable({connectWith: "#other", receive: addAttender});
$("#other").sortable({connectWith: "#favourites", receive: removeAttender});

var attending = [];

/**
 * Add the dropped in person to the list of attending people
 * update the table of pubs
 */
function addAttender(event, ui){
   attending.push($(ui.item).attr('data-id'));
    updatePubList();
}

/**
 * Remove the person from the list of attending people
 * update the table of pubs
 */
function removeAttender(event, ui){
    for(let i = 0; i < attending.length; i++){
        if ( attending[i] === $(ui.item).attr('data-id')) {
            attending.splice(i, 1);
            break;
        }
    }
    updatePubList();
}

/**
 * Post the current people on the attending list,
 * update the table of pubs with the result
 */
function updatePubList(){
    $.post( "/commonpreflist",$.param({ data: attending }, true), function (data) {
        let $table = $('#pubtable');
        $table.empty();
        if (typeof data.pubList !== 'undefined') data.pubList.forEach(function (p) {
            //using jquery with text attribute to avoid html injection
            let $row = $('<tr class="trow"></tr>');
            let $name =$('<td class="namecol"></td>').text(p.name);
            let $address =$('<td class="fullnamecol"></td>').text(p.address);
            let $open =$('<td class="favcol"></td>').text(p.open);
            $row.append($name, $address, $open);
            $table.append($row);
        }, "json");
    });
}
//todo valami rak itt
