function sendMail(contactForm) {
	emailjs.send("service_4vbdhwr", "template_pxecv3f", {
		"from_name": contactForm.name.value,
		"from_email": contactForm.emailaddress.value,
		"message": contactForm.summary.value
	}, "user_SymNMEJn92ZzIBFoCXRIY").then(function (response) {
		console.log("SUCCESS", response);
	}, function (error) {
		console.log("FAILED", error);
	});
	//prevent invalid email
	event.preventDefault();
	var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var email_input = $('#emailaddress').val();
	if (email_reg.test(email_input) == false) {
		window.alert('the email is invalid.')
	}
	contactForm.reset();
	return false; // To block from loading a new page
}
//the placeholder change after submit
$(document).ready(function () {
	$('#contact-form').submit(function () {
		$('#summary').attr('placeholder', 'your message is received.');
	});
});