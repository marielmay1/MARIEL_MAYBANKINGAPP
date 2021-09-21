## 1. Navigation Bar

- [x] Includes Create Account, Deposit, Withdraw, All Data, and Home pages
- [x] Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.
- [x] Styled with Bootstrap
- [x] Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.
- [x] Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.

## 2. Home Page

- [x] Includes bank title, image, and a welcome message.
- [x] Styled as a Bootstrap card.

## 3. Create Account Page

- [x] Includes a Bootstrap card with a form that has:
   - [x] Name input field
   - [x] Email address input field
   - [x] Password input field
   - [x] Create account button

## 4. Create Account Page Functionality

Create account page should include the following functionality:

- [x] Success message: Upon selecting the create account button the user should see a success message.
- [x] Add Another Account Button: Upon selecting the create account button, the user should see an add another account button.
- [x] Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
- [x] Name validation: The user receives an alert if the name field is left blank.
- [x] Email validation: The user receives an alert if this field is blank
- [x] Password validation: The user receives an alert if the password is less than 8 characters long.
- [x] Disable submit button if nothing is inputted

## 5. Deposit Page

Includes a Bootstrap card with a form that has:

- [x] Deposit input field
- [x] Deposit button
- [x] Balance information displays above deposit form on the card

## 6. Deposit Page Functionality

Deposit page should include the following functionality:

- [x] Updated Balance: When a user deposits, the balance updates.
- [x] Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received.
- [x] Not A Number Alert: User receives an alert if they add something that is not a number.
- [x] Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
- [x] Disable deposit button if nothing is input

## 7. Withdraw Page

Includes a Bootstrap card with a form that has:

- [x] Withdraw input field
- [x] Withdraw button
- [x] Balance information displays above deposit form on the card

## 8. Withdraw Page Functionality

Withdraw page should include the following functionality:

- [x] Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance.
- [x] Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed.
- [x] Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
- [x] Not A Number Alert: User receives an alert if they add something that is not a number.
- [x] Disable deposit button if nothing is input

## 9. All Data Page Functionality

All Data page includes the following functionality:

- [x] Track User Submissions: All user submissions appear on All Data page.
- [x] All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.