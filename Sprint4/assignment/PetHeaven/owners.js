$(document).ready(function() {

  // Function to fetch and display speaker data from a JSON file
  function fetchSpeakerData(file) {
    $.getJSON("json_files/" + file + ".json", function(data) {
      // Clear the main content area
      $("main").empty();

      // Loop through each speaker in the JSON data and append their details to the main content area
      data.speakers.forEach(function(speaker) {
        var title = $("<h1>").text(speaker.title);
        var image = $("<img>").attr("src", speaker.image).attr("alt", speaker.title);
        var month = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
        var description = $("<p>").text(speaker.text);

        $("main").append(title, image, month, description);
      });
    }).fail(function() {
      // Error handling for the case when the JSON file cannot be loaded
      $("main").empty().append("<p>Error loading speaker. Please try again later.</p>");
    });
  }

  // Event listener for clicking on navigation links
  $("#nav_list a").click(function(e) {
    e.preventDefault(); // Prevent the default action of the link

    var title = $(this).attr("title");

    // Fetch and display the speaker data based on the link's title attribute
    fetchSpeakerData(title);
  });
});
