$(function(){document.getElementById("contact-form").addEventListener("submit",function(t){var e=new XMLHttpRequest;$(this);t.preventDefault(),e.open("POST","contact.php"),e.onreadystatechange=function(){4==e.readyState&&200==e.status?alert("norm"):(alert("not norm"),$(".form-send-failed").addClass("show-send-result"),console.log("notnot"))},e.send(new FormData(this))},!1)});