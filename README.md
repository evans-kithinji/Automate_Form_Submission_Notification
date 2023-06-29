## To receive email notifications whenever a new entry is submitted on your Google Form, you can set up a trigger using Google Apps Script. 

## Here's a step-by-step guide on how to achieve this:

### 1. Open your Google Form.

### 2. Click on the three-dot menu in the top-right corner and select "Script editor." This will open a new tab with the Google Apps Script editor.

### 3. Clear out any existing code in the editor and replace it with the following code:

![formAutomationFunction js](https://github.com/evans-kithinji/Automate_Form_Submission_Notification/assets/105270837/545a4a04-2803-47c8-9d5b-be344fbf89d2)

#### a. Replace "your-email@example.com" with your email address where you want to receive the notifications.

#### b. Save the script by clicking on "File" > "Save" or by pressing Ctrl+S (Windows) or Command+S (Mac).

#### c. Click on 'Triggers' on the left side menu of the Apps Script dashboard.

![triggers](https://github.com/evans-kithinji/Automate_Form_Submission_Notification/assets/105270837/7f981c34-e1b8-4080-b220-63634926f785)

#### d. Click on the "+ Add Trigger" button in the bottom right corner.

![Addtrigger](https://github.com/evans-kithinji/Automate_Form_Submission_Notification/assets/105270837/f6f17e48-762f-429d-a28c-5c06e8e1c738)

#### e. In the "Choose which function to run" dropdown, select "formSubmissionNotification".

![formsubmission](https://github.com/evans-kithinji/Automate_Form_Submission_Notification/assets/105270837/c0cf0ccf-41a8-435f-85b0-f619774e7c8b)


#### f. In the "Select event source" dropdown, choose "From form".

#### g. In the "Select event type" dropdown, choose "On form submit".

#### h. Click "Save" to create the trigger.

From now on, whenever someone submits a response to your Google Form, you'll receive an email notification at the specified email address. Make sure your Google Form is connected to a Google account so that the script can run and send the email notifications.
