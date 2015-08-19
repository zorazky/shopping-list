$(document).ready(function(){

    $("#button").click(function(){

    	event.preventDefault();
 
    	var toAdd = $("input[name=checkListItem]").val();
    
        $(".list").append('<div class="itemBox addedItem"><div class="statusUncheck"></div><div class="itemName"><h2>' + toAdd + '</h2></div><div class="closeButton"></div>');
    
         
        
 
    });

     $(function() {  
        $( ".list" ).sortable({   
            placeholder: "ui-sortable-placeholder",
            axis: "y"   
        });  
    });  




    
    $(document).on("click", ".statusUncheck", function(){
    
       
        $(this).parent().addClass("boughtItem");
        $(this).parent().insertAfter($(".list"));
        $(this).removeClass("statusUncheck");
        $(this).addClass("statusCheck");
    
    });

    $(document).on("click", ".closeButton", function(){
    
       
        $(this).parent().remove();
        //$(this).remove();
        console.log("removed");
    
    });

    $(".itemBox").css("background-color","red");

});