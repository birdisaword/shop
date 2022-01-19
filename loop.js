// item card/////////////////////
// some text
// JOPAAAAAAAAAA
//xd
// nastya klass
$(document).ready(function() {
    $(".btn").click(function(){
         $('.text').text('loading . . .');
    
    $.ajax({
      type:"GET", contentType:"application/json", url:"https://pricentic.com/api/products",
      success: function(data) {
        $.each(data.entities, function( index, value ) {
            var card = [value];
      
        var item = "";
        var brand = "";
        var sale = "";
        var price = "";
        var photo = "";
        var itemContainerHTML = "";
        var itemUrl = "";
        var ratings = "";


        for (i=0; i < card.length; i++){
            item = '<li class="itemName">' + card[i].name + '</li>';
            brand = '<li class="brand">' + card[i].brand + '</li>';
            sale = '<li class="sale">' + 'Price now: ' + card[i].price + '</li>';
            price = '<li class="price">' + 'Original price: ' + card[i].originalPrice + '</li>';
            photo = '<img class="item_photo" src =' + card[i].thumbnailImageUrl + '>';
            itemUrl = '<a href class="Url">' + card[i].productUrl + '</a>';
            ratings = + card[i].rating;




            itemHTML = '<div class="item_card"><div class="item_photo">' + photo + '</div><div id="item_data"><ul id="item_info"><a class = "itemLink" target="_blank" href = + itemUrl + ><span>' + item + '</span></a>' + brand + price + sale + '</ul></div> <div class="stars-outer"><div class="stars-inner"> </div><div id="button_wrapper"><button type="button" class="button_buy" id="button_buy">buy</button></div></div>';

            itemContainerHTML += itemHTML;
          }




    

          
          var outputDiv = document.getElementById('itemContainer');
          outputDiv.innerHTML += itemContainerHTML;

        });
    },
},
        );
    });

});
 
      
    