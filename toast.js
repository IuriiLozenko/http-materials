const colors = {
  error: "red",
  success: "green",
  warning: "yellow",
  info: "blue",
};

function showToast(message, variant = "info") {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colors[variant],
    },
    // onClick: function(){} // Callback after click
  }).showToast();
}
