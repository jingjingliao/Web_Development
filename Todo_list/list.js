// Check off specific Todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("change");
});

// Click and delete todos
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(1000, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    let todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(
      "<li><span> <i class='fas fa-trash'></i> </span>" + todoText + "</li>"
    );
  }
});

// toggle the plus icon
$("#icon").on("click", function () {
  $("input[type='text']").fadeToggle();
});
