$('tr').click(function(){
    var $tr = $(this);
    console.log("Kocsma lista frissítése ehhez a személyhez: " + $($tr.find("td:nth-child(1)")).text());
});
$('.trow').click(function(){
    $('.highlight').removeClass('highlight');
    $(this).addClass('highlight');

});