# NUS ORBITAL PROJECT 2022 - Track My Day 
### **An Orbital project by Cham Li Hui and Pwint Thiri Ko.**  
**[Github Repository](https://github.com/lihuicham/nus-orbital-project-2022)**    

**[Google Drive for Milestone 2](https://drive.google.com/drive/folders/1Mq71KuNAYKe8AkgMO25qQXlOgMgQXA0N?usp=sharing)**  

_Note:  
We recommend viewing our **GitHub README** for the latest update of the app.  
To view a collection of images, demo videos, project log, poster and full video of the app, visit our **Google Drive**. For best viewing experience (high resolution), watch the videos in full screen._

## Team Name 
### **Track My Day**  

## Team Number  
### **5295**

## Level of Achievement 
### **Apollo 11**  

## Project Motivation 
As students that utilize the chrome extension Momentum, we were inspired by Momentum’s concept and wanted to create an aesthetically pleasing dashboard to enhance user productivity. Initially, we were planning to create a chrome extension, but after further discussion, decided our ideas would be better suited for a mobile app. We wanted to create an app that is both functional and personalizable, such that users would use it daily to help them keep track of their habits and better organize aspects of their lives.

## Aim & Vision 
Track My Day is a mobile app with a primary focus on tracking habits, such as exercise, sleep and water consumption. We will be implementing additional features, namely, to-do lists and notepads that can be sorted easily. Track My Day will be personalized for each user and allows customisation based on users’ preferences. We envision Track My Day to be a convenient, all-in-one productivity app users can utilize on a daily basis, and the features were decided with this goal in mind.

## User Stories & Experience 
As a young adult who wants to transform into a better person, namely with good habits, I want a simple but aesthetically pleasing tracker that is able to assist me on that.  

As an individual who wants to improve efficiency, I want a tracker that can show me my progress for the habits that I wish to pick up in a simplest and most straightforward way.  

As a modern user of digital devices, I wish to see a simplistic and minimalistic design in productivity and self-improvement mobile apps.  

As a student who is always on the go, I want an app that can allow me to take down quick notes or checklists, and viewing them should be easy.  

As a user of productivity apps, I want to have an awesome user experience on such apps. Along with functional user interface and aesthetically pleasing design, these features will greatly motivate me to stick with my goals and habits.  


## Project Scope
Our Orbital project will be an application that can be run on mobile or tablet.
<br> 
The scope of our project can be divided into 5 parts. Click the links to jump to each section. 

1. **[Authentication:](#1-authentication)** Authentication, Login, Registration, Forgot Password, Profile pages and Delete Account

2. **[Core Features:](#2-core-features-of-app)** Home page, Notes page, To-do list page, Drawer**, Navigation, Settings
3. **[Extended Features:](#3-extended-features-of-app)** Notification, View details (Calendar & Analysis), Share Your Progress  
4. **[Firebase Firestore (database):](#4-firebase-firestore-database)** Structure of Data, Create Data, Read Data, Update Data, Delete Data 
5. [**Testing:**](#5-testing) Unit, Integration, End-to-end (E2E), System, User Testing 

** _Note: Drawer includes user details, navigation tabs, report issues and log out._
<br><br>

## 1. Authentication 

### Authentication
The authentication features - Login, Logout, Register, Forgot Password, Reset Password  and Delete Account  of the app are linked to the firebase backend database. When a new user registers his/her email and password on the app, the database will keep a record of his/her email and password. User is able to use the correct email and password combination to login. Firebase Authentication will process respective actions when any of the authentication features are performed by the user. 

Restrictions: 
1. Users must enter a password that has at least 6 characters
2. Users cannot register with the same email and password for more than one time.
3. Users with incorrect email or password combinations will not be able to login. 
4. Users will be prompted to re-enter their password if the passwords do not match during registration.

Error messages will be shown on the phone screen when any of the restrictions are violated. 
Resetting the password also makes use of Firebase authentication and after a new password is set, the user can only log in with the new password.


**Current Progress:** Completed frontend UI and integration with Firebase Authentication database.  

**--> Watch a demo video of our authentication page: [Authentication]()**

### Login Page 
The login page is the first page the user is brought to upon opening the app. This page allows the user to switch to the Register page as well as the Forgot Password page. The user logs in using their email and password, and authentication is implemented as mentioned above. Upon logging in, the user will be brought to the Home page. 

**Current progress:** Complete.   

![Login Page](./readme_assets/Login.jpeg)  

### Register Page
A new user registers using their email and password at the Register page. The repeat password field ensures that the user enters the correct password both times and an error message will appear if the passwords are different. After registration, the user is guided to the Profile page to register their personal details which will be stored in the Firestore database.  

**Current progress:** Complete  

![Register Page](./readme_assets/Register.jpeg)  

### Forgot Password Page 
The user enters their email in the Forgot Password page. This page has been linked to Firebase and the user receives an email with a link to reset their password. Upon resetting their password, the user can only login with the new password.  

**Current progress:** Complete.  

![Forgot Password Page](./readme_assets/ForgotPassword.jpeg)  

### Profile Page 
The app will also collect the user’s personal details and goals which will be used in the Analysis page. The user can set their username, birthday and enter a favorite quote here. They can also set goals such as amount of sleep per night, amount of water drunk per day and amount of time spent studying or exercising daily.  

The user will only encounter this page once immediately after registration. After registration, the user will be guided to the Profile page where they fill in these details. Upon pressing the button to register, a pop up will appear to confirm that the user has registered their details. The user will be added into the Firestore database with these details recorded. Afterwards, if the user wants to make any changes, they can do so in ‘Settings’ where a separate page is created for changing these details. Any updates will also be recorded in Firestore.  

**Current progress:** Complete.  

![Profile Page](./readme_assets/Profile.jpeg)  

### Delete Account
Users can delete their account in the app. There will be a delete account button at the settings and when clicked, the users will have to log in again with the correct username and password. After logging in, there will be an alert to remind the user that deleting the account is an irreversible action. If the user chooses to delete the account, the user will be removed from the Firebase Authentication and Firestore.  

**Current progress:** Complete.

![Delete Account](./readme_assets/DeleteAccount.jpeg)  

![Confirm Deletion](./readme_assets/ConfirmDeleteAccount.jpeg)

## 2. Core Features of App

### Tiles (Home Page)
The home page serves the main function of this app - tracking habits. The trackers include water tracker, sleep tracker, read tracker etc. We redesigned the home page in Milestone 2. We call the home page - “Tiles”, named according to the appearance and layout of the trackers in the home page.  

The trackers can have different units and maximum values e.g. 24 hours, 10 liters, 50 kilograms and so on. This allows the trackers to be flexible in tracking all sorts of habits. Other than default trackers, users can customize their own trackers too.  
We use a slider to increase the value of each tracker instead of a dropdown menu or a picker. The slider is included for the user to adjust the value. Each tracker has its own unit that is suitable for the habit that the tracker is tracking. This feature greatly enhances the user experience.  

There will also be a “View Details” button at the bottom right corner of each tile (habit tracker) and clicking it will navigate to the view details page of each tracker.  
When the user clicks the “Confirm” button, the value of each tracker will be recorded or “written” into our backend database (Firebase Firestore). More details about write, read and update in the following section - Firebase Firestore. 

_Note:  
**From The Ring to Tiles** - We understand that the changes in the layout of the home page is the biggest change in our app. Previously (in Liftoff and Milestone 1), we decided that the trackers should be designed as different proportions of a ring, and hence our home page will only contain “The Ring”.  

However, we tested the ring design, consulted the tutor from the UI/UX workshop and discussed between us, we decided that the ring design was limiting the number of habit trackers we can have on The Ring (home page). Since it is just a hollow circle shape (literally, a ring shape), it can only be divided into at most 5 sections if the user wishes to have an aesthetically pleasing UI. We experimented with more trackers, which simulated the real-life use of the app. However, The Ring became really messy and packed because each tracker shared a small chunk of the circle ring. This greatly impacted the UI and UX of the app, and limited the app’s habit tracking ability and deviated from the project’s purpose.  

Hence, we took a step back and redesigned the habit trackers and the home page. Going forward, we will be implementing the habit trackers as “tiles” in the home page._  

**Current progress:** Basic habits - water, sleep, read, exercise and etc have been added to Tiles. All components - slider confirm button and view details button are completed. Integrated frontend (confirm button) with backend database (Firebase Firestore). Completed all working features and UI design.  

**--> Watch a demo video of Tiles: [Tiles 📺](https://drive.google.com/file/d/1qjN_XWHHIvRYA-MAlK9ewGo7MXftWZag/view?usp=sharing)**  

![Tiles](./readme_assets/Home.jpg)  

### Notes & To-Do List 
Notes & to-do lists are meant to satisfy the quick note taking needs of the users. Both pages support simple typing, and the to-do list supports an additional checkbox feature.  

As both pages are meant for quick and simple note taking, we do not intend to add more features such as bolded words, add a photo or link function. We wish to maintain the simplicity of the features and minimalistic design of the app.  

**Current Progress:** Normal notes & todo list functions done. With basic UI design. Incomplete functions: Search function (unable to filter) and delete button in Notes page, for now, tap anywhere in the yellow box to delete. 

#### Notes
For notes, the user can add and delete notes. All notes will be visible in one screen and users can scroll to view their notes. Users can swipe to delete the notes.  

**--> Watch a demo video of Notes: [Notes 📺](https://drive.google.com/file/d/1qhzXf-iBGun7XZjSQATp-M0N9kCZG8qk/view?usp=sharing)**  

![Notes](./readme_assets/Notes.jpg)  

<br>

#### To-Do List
The todo list has a tap to delete task function, and to view different todo lists, users only have to swipe (like Tinder) to view the next or previous todo lists.  

**--> Watch a demo video of To-Do List: [To-Do List 📺](https://drive.google.com/file/d/1qgq1DNexN3jURlnbD-Zb8ezk21bAvj7l/view?usp=sharing)**  

![To-Do](./readme_assets/Todo.jpg)  

### Drawer 
Drawer can be viewed when the user swipe right on any of the screens or pages. The drawer consists of three sections - user details, navigation tabs, and footer. 

1. **User details:** It shows the user’s profile image and favourite quote. 
2. **Navigation tabs:** Home and Settings. 
3. **Footer:** Report Issues (contact developers via email) and Log Out. 

Report Issues button will open the default mailing app on the user’s phone (e.g. Gmail or Outlook) and send an email titled “Issues With Track My Day” to the developer of this app.  

**Current Progress:** Navigation tabs are completed and working. Report Issue and Log Out button are completed and working. UI design of drawer completed.  

**--> Watch a demo video of Drawer: [Drawer 📺](https://drive.google.com/file/d/1qiom-aAh2lUH_4pg5RtMkqOxREYMw7xt/view?usp=sharing)**  

![Drawer](./readme_assets/Drawer.jpg)  

### Navigation
Track My Day uses React Navigation package to navigate between different screens. The types of navigation we are using are: stack, drawer and material bottom tabs.  

1. **Stack navigation:** All buttons (eg. to View details button) 
2. **Drawer navigation:**  Home page (Tiles), Settings, Log Out 
3. **Material Bottom tabs navigation:** Home page (Tiles), To-do page, Notes page 

**Current Progress:** Completed. Able to navigate between different pages. 

**--> Watch a demo video of Navigation: [Navigation 📺](https://drive.google.com/file/d/1qijlm3A3TTf4v0Yy_p9OZWEHRXnU3_ac/view?usp=sharing)**  

### Settings 
Like all apps, there must be a Settings button. Things that are included in Settings are: change personal details, change email and password, delete account and turn on/off notification. This page is heavily linked to Firebase and Firestore.  

The user will be prompted to log in again before they can perform critical actions such as changing email or password, or deleting their account. This is to ensure that the correct user is authorizing these actions. When changing their email, if the new email is already taken, the user will be informed via an error message and the change will not be carried out. Before account deletion, the user will be informed that the action is irreversible and they can choose to go back or proceed with the deletion.  

**Current Progress:** This page has the following sections: Notifications toggle on/off, Update personal details, Change email or password and Delete Account. Completed sections: Update personal details, change email or password and delete account. Will navigate to respective pages when clicked.  

**--> Watch a demo video of Settings: [Settings 📺]()**  

![Settings](./readme_assets/Settings.jpeg)  

## 3. Extended Features of App 

### View Details Page 
Once the user clicks the “View Details” button at the bottom right of the icon, the user will be directed to a details page. We include the following components in the “View details” page.  

1. **Calendar:** Although our app tracks the daily progress of the user’s habits, we want a calendar to track the monthly or even yearly progress of the user’s habits. The calendar is designed for the visualization of the user’s progress and encourages the user’s to keep up with their streaks. 

2. **Analytics:** Since habits are tracked in terms of days in Tiles, the data size collected for the habits are suitable for analysis. Using a water tracker as an example, the analysis will be on the number of water consumption (liters) in a day. We use a line chart that shows the user’s progress in tracking his/her water consumption habit for visualization of analytics. The data for the line chart is read from the Firebase Firestore. 
Calendar and Analysis are placed together in the same “View details” page. By highlighting a certain period of days in the calendar, the analytics will show a line graph of values within this period of days, for the respective habits tracked.  

**Current Progress:** Completed Analytics - able to read data from database and present data as line chart. Basic UI done.  

![View Details](./readme_assets/Analytics.jpg)  

### Notifications 
We used local push notifications via Expo CLI for the app’s notification. The app will notify the user everyday at 9pm to use Track My Day.  

**Current Progress:** Completed.  

![Notifications](./readme_assets/Notification.jpg)  

### Share Your Progress
We consider that millennials like to share their daily moments on social media, hence we wish to implement a “Share Your Progress” function in our app as a bonus feature. This function will connect the app with social media platforms like Instagram, Facebook and Twitter.  

## 4. Firebase Firestore (database)

### Structure of Data 

#### For Profile: 
- db/users/{userId} in Firestore database
- userId (string) = the randomly generated user.uid where user is the currently logged in user
- Collection: users ; Document: userId
- Each userId document field: birthday, exerciseGoal, favQuote, id, sleepGoal, studyGoal, username, waterGoal

#### For View Details: 
- db/habits/{habitName}/days/{dayId} in Firestore database
- habitName (string) = name of each habit, as shown in Tiles. Eg. READ, EXERCISE, WATER and etc. 
- dayId (string) = date of the day Eg. 20220624 for June 24, 2022. 
- Collection: habit & days ; Document: habitName, dayId
- Each dayId document field: date, id, name, unit, value  

### Create Data 

#### For Profile: 
- When a new user registers their personal details, a document will be added to the users collection in Firebase with these details.
- The document ID for each new document is set as the currently logged in user’s ID in order to read, delete or update the user’s information which requires the document ID of the document the operation would be performed on. 
- User ID is also unique, meaning that each user will only have one document created for them.  

**--> Watch a demo video of Firestore Habits: [Firestore User 📺]()**  

![Firestore User](./readme_assets/FirestoreUser.png)


#### For View Details: 
- Add and update document, integrating frontend Tiles to backend database
- A new document of {dayId} will be created in the days collection when the user selects a value using the slider at Tiles. If the document is not created yet, a new document will be created as the user selects the value. If the document has been created (which means the user has selected a value before), the document will be updated with the new value when the user selects a new value using the same slider at Tiles. All documents are created specific for each habit tracked, with respective paths. 
- We use {dayId} for each document’s id for the easy retrieval of data to be used in other components. 
- _Note: Since the date of day is used as the document's id, it is unique. Hence, if a user changes the value within 24 hours, the same document will be updated and no new documents will be created._

### Read Data 

#### For Profile: 
- Data is retrieved from Firebase and is specific to each user

#### For View Details: 
- used in Analytics in “View details” page 
- Data is retrieved from Firestore and is specific to each habit, with their respective paths. 
- We use the “value” field in each document for analysis  

**--> Watch a demo video of Firestore Habits: [Firestore Habits 📺](https://drive.google.com/file/d/1mQhwyXvufG-RMuEUdkKmk4a4hg7tD5N_/view?usp=sharing)**  

![Firestore Habits](./readme_assets/FirestoreHabits.PNG)  

### Update Data 

#### For Profile: 
- The user updates their personal details on a separate page under ‘Settings’. Clicking a specific update button will update the corresponding field in the Firebase database.
- The user will be prompted to sign in again before they can change their email address or password. Login rules are the same as in the Login page. The user’s email will be updated via Firebase authentication.

### Delete Data: 

#### For Profile: 
- Before an account can be deleted, the user has to sign in again to confirm their identity. A modal will pop up to allow this. Login rules are the same as in the Login page.
- Deleting an account will delete the user’s data from Firebase authentication as well as Firestore database.

## 5. Testing 

### Unit Testing 


### Integration Testing 



### End-to-end (E2E) Testing 



### System Testing 



### User Testing
To be completed in Milestone 3


## Demo Video of Full App 
**[Track My Day 📺](https://drive.google.com/file/d/193cktDOThD_8xiZXwiProduKkNioxztW/view?usp=sharing)**

## Timeline and Progress Chart

### Orbital 2022 Timeline 
**Liftoff:** 9 - 16 May 2022  
**Milestone 1:** 16 - 30 May 2022  
**Milestone 2:** 30 May - 27 June 2022  
**Milestone 3:** 27 June - 25 July 2022  
**Splashdown:** 25 July - 24 August 2022 

### Progress Chart of Track My Day 
![Progress Chart](./readme_assets/Progress.png)

### Project Log
Project Log provides description on the tasks distribution of Cham Li Hui and Pwint Thiri Ko and their respective time spent on developing the app.  

**[Read our Project Log](https://docs.google.com/document/d/1lzUOJ71JTVQP_y-cWFw_vw1JclCSUFteBu6YtgPo6-A/edit?usp=sharing)**


## Tech Stack for Milestone 2 
We used these tools to create the project:  

- Development: React Native, React Native Navigation 
- Backend database: Firebase Authentication, Firestore
- Languages: JavaScript, HTML, CSS  
- UI design: dopelycolors, icons8 
- Version Control: Git 
- Software and Devices: Andriod, Expo Go 
- CLI: Expo  

## What We Intend to Achieve in Milestone 3? 
Going forward, for Milestone 3, we plan to: 
- Swiping animation and functionality for to-do list 
- Custom Tracker 
- Calendar for analytics in View Details page
- Share Your Progress
- System & User testing 
- UI design: Uniform theme color and font family 

## Milestone 2 Poster 
![Milestone 2 Poster]()




























