chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'autofill') {
    // Use the information in msg.data to fill in the appropriate fields on the Indian FRRO Form C site
    // For example:
    document.querySelector('#applicant_surname').value = msg.data.applicant_surname;
    document.querySelector('#applicant_givenname').value = msg.data.applicant_givenname;
    // ...
  }
});
