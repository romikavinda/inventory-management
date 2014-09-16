$(document).ready(function(){
    
    $('#barcode').click(function(){
        if(!$('#barcode').hasClass('mode-selected')){
            $('.mode-selected').removeClass('mode-selected');
            $('#barcode').addClass('mode-selected');
            $('#mode-storage').val('barcode');
        }
    });
    
    $('#bin').click(function(){
        if(!$('#bin').hasClass('mode-selected')){
            $('.mode-selected').removeClass('mode-selected');
            $('#bin').addClass('mode-selected');
            $('#mode-storage').val('bin');
        }
    });
    
    
    $('#BtnSubmitQuery').click(function(){
        var query = $('#txtSubmitQuery').val();
        $('#results-placeholder').empty();
        
        var data;
        
        // ajax communication for getting database results
        $.ajax({
            type: 'GET',
            url: '/php/search.php',
            data: {
                mode:   $('#mode-storage').val(),
                input:  $('#txtSubmitQuery').val()
            },
            success: function(result){
                // data comes back in json format

                // Create placeholder containers
               // data = $.parseJSON(result);
                 //       $.each(data.parts, function(part_index, part_vals){
                            
                   //         $.get("/php/populate-result-panes.php", function(container) {
                            
                                $('#results-placeholder').append(result);
                                //, function(){
                                    // nothing
                                //});

                                //console.log(part_vals.part_num);

                            //});

                        //});
                    /*
                    var i = 0;

                    if (container_count > 0)
                    {
                        console.log(index + " => " + container_count + "\n\n\n");
                        i++;
                        
                        $.get("/php/populate-result-panes.php", function(container) {
                            
                            $('#results-placeholder').addClass("c-" + i);
                            
                            $('#results-placeholder').append(container, function(){
                                .addClass( "test" + i );
                            });
                        });
                        
                    }*/
                    
                    /*
                    // fll in data
                    $.each(data.parts, function(arg, obj){
                        $('#part-location-data').each(function( index ){
                                $(this).html(obj.location);
                                //$(this).addClass(index);
                    });
                        $('#part-name-data').html(obj.name);
                        $('#part-num-data').html("PN: " + obj.part_num + "  | Bags: " + obj.num_bags + "  | Qty: " + obj.total_qty);
                    });
                    */
                }
        });

        $('#txtSubmitQuery').val('');
    });
    
    $('#txtSubmitQuery').keypress(function(e){
        if(e.which === 13){//Enter key pressed
            $('#BtnSubmitQuery').click();//Trigger search button click event
        }
    });
});