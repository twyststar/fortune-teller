$(document).ready(function(){



  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    var luckyResponses = [];
    var unluckyResponses = [];
    // $("#lucky-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyResponses.push($(this).val());
    });
    // $("#unlucky-responses").show();
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unluckyResponses.push($(this).val());

    });
    if (luckyResponses.length > unluckyResponses.length){
      $("#lucky-responses").show();
    } else {
      $("#unlucky-responses").show();
    }
    $("#fortune_survey").hide();
    console.log(luckyResponses.length);
    console.log(unluckyResponses.length);
  });
});
