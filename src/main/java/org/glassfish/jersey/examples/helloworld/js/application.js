

$(document).ready(function(){

    $('.add_to_cart').on('click',function(){
       var barcode=$(this).data('barcode');
//       $.get("http://localhost:3000/inputs").done(function(Inputs){
//           var inputs=[];
//           if(Inputs!=""){
//               inputs=JSON.parse(Inputs);
//           }
//           inputs.push(barcode);
//           var data=JSON.stringify(inputs);
//
//           $.ajax({
//                   type:"POST",
//                   url:"http://localhost:3000/input",
//                   data:{"inputs":data}
//           }).done(function(){
//
//           });
//       });
       $.ajax({
              type:"POST",
              url:"http://localhost:3000/input",
              data:{"inputs":barcode}
       }).done(function(){

       });
    });

});