// https://www.codeschool.com/users/sebaek.json

$(function() {



  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/sebaek.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var completedCourses = response.courses.completed;
      $.each(completedCourses, function(index, course) {
        var $course = $("<div>", {class: 'course'});
        // var title = '<h3>' + course.title + '</h3>';
        var $title = $("<h3>", {text: course.title});
        // var image = '<img src = \'' + course.badge + '\'/>';
        var $image = $("<img>", {src: course.badge});
        // var button = '<a class="btn btn-primary" href=\'' + course.url + '\' targer="_blank">See course</a>'
        var $button = $("<a>", {class:'btn btn-primary', href: course.url, targer: '_blank', text: 'See course'});

        $course.append($title)
               .append($image)
               .append($button);
        $('#badges').append($course);
      });
    }
  });

});
