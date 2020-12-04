function sendMail(contactForm) {
	emailjs.send("service_4vbdhwr", "template_pxecv3f", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"message": contactForm.summary.value
		}, "user_SymNMEJn92ZzIBFoCXRIY")
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
	contactForm.reset();
	return false; // To block from loading a new page
}

$(document).ready(function(){
  $('#contact-form').submit(function(){
    $('#summary').attr('placeholder','your message is received.');
  });
});