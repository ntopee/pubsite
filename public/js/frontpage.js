$("#favourites").sortable({connectWith: "#other", receive: addAttender});
$("#other").sortable({connectWith: "#favourites", receive: removeAttender});

//pub dropped to preferred pubs, save it to db
function addAttender(event, ui){
   // $.post( "/people/addpreference/"+ $($('.highlight').find("td:nth-child(1)")).attr('data-id'),{pub: $(ui.item).attr('data-id')});
}

//pub removed from preferred pubs, save it to db
function removeAttender(event, ui){
  //  console.log($(ui.item).attr('data-id') + "  removed");
  //  $.post( "/people/delpreference/"+ $($('.highlight').find("td:nth-child(1)")).attr('data-id'),{pub: $(ui.item).attr('data-id')});
}