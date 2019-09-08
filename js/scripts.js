/*$(document).ready(function () {
  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
  });
});*/
 /*$(document).ready(function () {
  var id = 1;  
  $("#test").change(function () {
            console.log("hit");
            $("select option:selected").each(function () {
                console.log($("select option:selected"));
                //var id = 1; moved this initialization up a scope level
                //on the line below I corrected the concatenation to have unique id's 
                $('body').append("<tr id='id'><td>" + $(this).text() + "</td><td id="+id+">X</td></tr>");
                id = id + 1;                    
            });
        })
        .trigger("change");

    $(".btn1").click(function () {
        $("#test").toggle();
    });
});
//may want to make the below statment more specific. Currently will remove parent element of any and all td elements.
$("body").on('click','td', function() {
    alert("test");
    $(this).parent().remove();
    var x = $(this).val();
});

//below function is not needed 
function removeItem(id) {
    var x = $(this).val();
    //console.log(id.val);
    //console.log(id);
    console.log();
    $(this).remove();
    //$('#overview').find('tr td').eq(id).remove();

}*/

$(document).ready(function () {
  var id = 1;
  //$("#subjectlist")
  $("#test")
      .change(function () {
          console.log("hit");
          $("select option:selected").each(function () {
              console.log($("select option:selected"));
              //var id = 1; moved this initialization up a scope level
              //on the line below I corrected the concatenation to have unique id's, and removed inline click event.
              $('body').append("<tr id='id'><td>" + $(this).text() + "</td><td id="+id+">" + "X" + "</td></tr>");
              id = id + 1;                    
          });
      })
      .trigger("change");

  $(".btn1").click(function () {
      //$("#subjectlist").toggle();
      $("#test").toggle();
  });
  $("body").on('click','td', function() {
    alert("test");
    $(this).parent().remove();
    var x = $(this).val();
});
});

/*
function removeItem(id) {
  console.log(id.val);
  console.log(id);
  $('#overview').find('tr td').eq(id).remove();
}*/