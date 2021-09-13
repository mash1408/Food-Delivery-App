# princeofpersia-home-food-delivery-application
#Instructions for Installation
```npm install```
``` npm start ```

#Routes
```
-*/home/menu*
-*/home/menu/filters/price/from-to*
-*/cook/register*
-*/cook/login*
-*/customer/register*
-*/customer/login*

```
US00: Home Page
Description:
The User Should be able to see the Full overview of the Webapp.
Scenario:
When the User Opens the Homepage, He Should be able to See the basic purpose, Features of the web app. The User Should be able to Input His/Her pin code and press the “Find Food Button”.
On the top Banner, There is a Login/Signup Button Where the user can directly sign up/login.
Upon Scrolling of the Page, The user Must be able to see The Key Features of the app ie: 
Map System Locator, Filtering the upon On the Users Choice, Lightning- Fast Delivery.
Upon Further Scrolling, The user must be able to see the about us sections, Which tells the user which services we provide and “Who are we?”.
Further, We included Some pictures of Our Top Chefs from each Region to Signify The Quality of food and the support we provide to our Chefs.
Lastly, We have our Contact Us Form wherein Our customers/ Visitors can directly Reach out to us with their queries by Filling up the Form and We Shall Reply to him by email which the user provided.
In the first section,
When The user Inputs His/Her Pincode and clicks the “Find Food” Button, The user will be diverted to The Page where he can see the Food Dishes and the Chefs Available In only His/Her area.
In case, We do not provide service/ There are no Chefs Available in the user’s Area, then We Display “Sorry, There are No Chefs Available in your Locality”.


Acceptance criteria:
    1. On the “/” Route, Of the Website Url, The user must be able to see the Homepage.
    2. The Home page must be able to Give the Full Overview of the app at a stretch.
    3. The homepage must Contain a form to Enter the User Pincode or to automatically track the location of the user.
    4. The homepage must contain an About us section to Tell the user about ourselves.
    5. The Homepage must consist of a Description of all the Key Features of the Web app.
    6. The Homepage Must Contain a Login and Signup Button which should Divert to Their Respective forms upon Clicking.
    7. The Homepage Must Contain a Contact Us form to Address Customer and Visitors Queries.


US01: Login/Register

Description:
User should be able to register and login as a user using a phone number/email address

Scenario:
When the user opens the login page, he should be able to enter his email address/phone number and password to login into his account. A login button should be present which submits the form and redirects the user to the homepage.
If he doesn’t have an account, he should have an option to register himself as a user. There must be a checkbox present where a user can choose to register as a Chef/user. There should be a register button that will save all his details such as name, address, phone number, email, and password.
 
Acceptance criteria:
    8. The user should be able to see his login page with a form where he is asked to enter his email/phone number and password. Both fields are mandatory.
    9. A login button must submit the form and redirect the user to the home page.
    10. On the register page, a user should have an option (maybe a checkbox) to Register as a Chef or as a user.
    11. A register form should contain the fields - “Full name”, “Address”, “Email”, “Phone”, “Password” and “Confirm Password” and Checkbox for Chef/user Signup. All fields must be mandatory.

US02: Menu Page
Description: 
The user should be able to see all the Dishes Prepared by all the Chefs available in the user’s Locality.
Scenario:
When the user is taken to the Menu page, The user will be shown his/her location on the top banner. There will be an Option to Search on the top right in order to find a particular dish/Chef and a cart Icon towards his right wherein he can see how many items are added to his cart.

Below, There are Filteration options Based on Delivery-time, ratings, Cost: Low to high, Cost: High to low etc. Upon clicking on any of these filters, The Opted filters will be applied, and the Particular filtered Dishes/ Chefs will be shown.

The Dishes will be arranged in the remaining Space of the pages In Tiles format, wherein Each tile will Have a Border, An image of the Dish Covering over 60% of the tile, Dish Name in Bold and the Name of the Chef In Subtitles.
Followed By the Ratings, Time is taken for Delivery and The type of Food i.e Non-Veg or Veg.
A highlighted button view-more will be provided which upon Clicking, The user will be diverted to the specific Dish page and can add the dish to his/her cart from there. 

Acceptance Criteria 
    1. The user Should be able to see the Dishes on the page.
    2. The user should be able to filter out the dishes based on his/her choice.
    3. The user must be diverted to the Dish details page /Dish Details page When clicked on the View more button.
    4. The user should be able to Do the following tasks without necessarily logging in.
    5. The user must be able to use the search feature to find a particular dish/Chef.
    6. The user must be able to see the label beside the dish whether it is veg or non-veg.

US03:  Dish DETAIL PAGE
Description: 
The user should be able to see the Dish details of the home chetonon-vegf. 
Scenario:
the user wants to view the selected Dish details. Given I'm the user when I select the food Dish or home Chefs I should be able to see the Detail Dish profile of the home Chefs.

And then the user should be able to search for the dishes in the "search bar"
And The user should be able to select the "veg only" option in the checkbox. 
The user should be able to select the "favourites" option. 

The user should be able to see the following categories:
    • Breakfast 
    • Lunch 
    • Dessert 

The system shows me the "breakfast" category, "Lunch" Category And "Dessert" Category with available "number of items" in each category And  then the system shows:
 "Dish name" for each Dish Item. 
 "Dish type (veg/non-veg)" for each Dish item. 
 "Price" for each Dish item.
 "ADD" button for each Dish item and I click the ADD button then the system adds the item to the cart. 


Schedule order 
The user should be able to schedule the "Time AM/PM" option for the order  
The system shows the "SUBMIT" Button for the scheduled order 

Home-chef profile 
The user should be able to see the Home-Chef profile details. 
The system shows a "profile picture" of the homechef And it shows "name", "place", "contact", "email", "social media accounts" which shows "Instagram", "Facebook" and "twitter".

Acceptance Criteria 
    7. The user should be able to click on the "ADD button" which adds the dish item to the cart. 
    8. The Cart should contain "Dish name" "Dish type" "quantity" "price per item" "subtotal"  fields 
    9. All the fields should be required. 
    10. The user should be able to click on the "checkout" button which places the order. 
    11. The user should be able to schedule the order timing. 
    12. Order "Time" field is required. 
    13. The user should be able to click on the "Submit" button which submits the schedule for the order.

US04:  ADDING DISH TO CART

Description: 
the user should be able to add the dishes from a particular Chef to the cart. 

Cart: The user should be able to see how many "number of items" are added to the cart. 

The user should be able to see the Dish item details added in the cart as:
The system shows:
"veg/non veg" Dish type. 
 "number of items" in the cart
 "no. of quantity per item" 
 "Price" of items 
 "subtotal" of items added in cart And 
The system shows a "Checkout" Button. 


Scenario:
the user adds any particular dish to the cart ready to order immediately. 
The user confirms the order, selects the delivery address and proceeds to pay in cash. 

Acceptance Criteria 
    • User heads to the cart to view/confirm order details. 
    • User needs to login/sign up before proceeding further
    • Only dishes from one particular Chef can be ordered at once. 
    • User selects the quantity of each dish
    • User Confirms the address
    • User obliges for cash on delivery. 
    • User clicks on the confirm order button to order in immediately. 


Admin-end
US01: Login/Register
Description:
Chef should be able to register and log in as a Chef using a phone number/email address

Scenario:
When the Chef opens the login page, he should be able to enter his email address/phone number and password to login into his account. A login button should be present which submits the form and redirects the Chef to his dashboard.
If he doesn’t have an account, he should have an option to register himself as a Chef. There must be a checkbox present where a user can choose to register as a Chef/user. There should be a register button that will save all his details such as name, address, phone number, email, and password.
 
Acceptance criteria:
    12. The Chef should be able to see his login page with a form where he is asked to enter his email/phone number and password. Both fields are mandatory.
    13. A login button must submit the form and redirect the Chef to the home page.
    14. On the register page, a user should have an option (maybe a checkbox) to log in as a Chef or as a user.
    15. A register form should contain the fields - “Full name”, “Address”, “Email”, “Phone”, “Password” and “Confirm Password”. All fields must be mandatory.
    16. On clicking register, the form must be submitted and saved and the Chef’s details must be entered on the database and also available for the users to see.



US02: Add new dish
Description:
Chef should be able to add a food item which will be displayed on their page
 
Scenario:
The chef should be able to see a form where he can enter food details such as:
    • Dish name
    • Dish type (Veg/Nonveg)
    • Description
    • Price

Acceptance criteria:
    1. The user should be able to click on “Add new dish” which takes him to a form.
    2. The form should contain “Dish name”, “Dish type”, “Description” and “Price” fields.
    3. All the fields should be required.
    4. Add dish button should be present which will save the details of the dish.
    5. When the form is saved the food item should appear on the Chef’s page.
 



US03: View and update orders
Description:
The chef should be able to view and update a list of all orders he received
 
Scenario:
The chef should be able to see a table where all the orders from customers are received. An order should contain “Order no.”, “Delivery date”, ”Delivery time”, “Customer Name”, “Status” and “Total bill”. When clicked on an order a detailed view of all orders should be present. Here the Chef should also be able to update the status of each order.


Acceptance criteria:
    1. Users should be able to view all the orders
    2. Each order should have “Order no.”, “Date”, “Customer Name”, “Status” and “Total bill” columns.
    3. When clicked on an order, the Chef should get details of the order. Details should contain food items ordered and price of each item, real-time status of the order (confirmed / preparing / out for delivery /delivered/cancelled).
    4. The chef should be able to accept/reject a pending order.
    5. On accepting, the Chef should get an option to enter the delivery time of the order and the status of the order should be changed to “Confirmed”.
    6. On rejecting the order, the Chef should be able to enter a reason for cancelling the order and the status of the order should be changed to “Cancelled”.
    7. The chef should be able to change the status of a confirmed order to “Preparing”.
    8. Once the dish is prepared, the Chef should be able to change the status to “Out for delivery”.
    9. Once delivered, the Chef should be able to change the status to “Delivered”.


