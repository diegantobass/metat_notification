function sendFormByEmail(e)
{
  // Recipient emails of the notification
  var email = "dot@dotat.at";

  // Shenanigans
  var s = SpreadsheetApp.getActiveSheet();
  var headers = s.getRange(1,1,1,s.getLastColumn()).getValues()[0];
  var message = "";
  var subject = "inscription de ";

  // Loop through the array of form values (e) and append values to the message
  for(var i in headers)
    if (e.namedValues[headers[i]])
      message += headers[i] + ': \n'+ e.namedValues[headers[i]].toString() + "\n\n";

  // Insert variables from the spreadsheet into the subject
  subject += e.namedValues[headers[1]].toString() + " - " + (e.namedValues[headers[8]] ? e.namedValues[headers[8]].toString() : '');

  // Send the email
  MailApp.sendEmail(email, subject, message);

}
