$( document ).ready(function() {
    $('#testB').DataTable();
    $('#testB_length').parent().remove();

    $('#testB_filter').parent().removeClass("col-sm-6");
    $('#testB_filter').parent().addClass("col-sm-12");
    

    // http://bootsnipp.com/snippets/d08Qj
    $(".tip-right").tooltip({
        placement: 'right'
    });
	});