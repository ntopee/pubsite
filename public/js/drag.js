$("#favourites").sortable({connectWith: "#other"});

$("#other").sortable({connectWith: "#favourites"});