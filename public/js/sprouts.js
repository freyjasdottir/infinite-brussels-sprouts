// YOUR CODE GOES HERE
$(".more-sprouts").on("click", function(event) {
  event.preventDefault();

  var nextPage = $(".more-sprouts").attr('href');
  var nextPageNumber = nextPage.substr(nextPage.length - 1);

  var request = $.ajax({
    method: "GET",
    url: '/tweets.json?page=' + nextPageNumber
  });

  //Append the new list to the page
  request.done(function(tweetList) {

    for(var i = 0; i < tweetList.length; i++){
      var html = "";
      html += "<li class='tweet'> <div class='body'>" + tweetList[i]["text"] + "</div>" + "<div class='user'>" + tweetList[i]["username"] + "</div></li>";
      $("ul.tweets").append(html);
    }



  });

  //Find the href in .more-sprouts and update it
  nextPage = nextPage.replace(nextPageNumber, (parseInt(nextPageNumber) + 1).toString());
  $(".more-sprouts").attr("href", nextPage);

});
