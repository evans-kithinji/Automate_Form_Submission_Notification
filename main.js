function formSubmissionNotification(e) {
  var emailAddress = "your-email@example.com"; // Enter your email address here
  var subject = "New form submission!";
  var message = "A new entry has been submitted on the form.";

  MailApp.sendEmail(emailAddress, subject, message);
}
