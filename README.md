# NUS ORBITAL PROJECT 2022 - Track My Day 
### **An Orbital project by Cham Li Hui and Pwint Thiri Ko.**  

![Track My Day](./readme_assets/diagrams/trackmyday.png)
  
  # Table of Contents  
  - [Important Links & Documents](#important-links--documents)
  - [What's new in Milestone 3?](#whats-new-in-milestone-3)
  - [Project Introduction](#project-introduction)  
      - [Team Information](#team-information)  
      - [Project Motivation](#project-motivation)  
      - [Aim & Vision](#aim--vision)  
      - [User Stories & Experience](#user-stories--experience)  
      - [Project Scope](#project-scope)
  - [Concept Diagrams](#concept-diagrams)  
      - [Component Interaction](#component-interaction)  
      - [User Flow Map](#user-flow-map)
  - [Features](#features)  
      - [Authentication](#1-authentication)  
          - [Authentication](#authentication)  
          - [Login Page](#login-page)  
          - [Register Page](#register-page)  
          - [Forgot Password Page](#forgot-password-page)  
          - [Profile Page](#profile-page)  
          - [Delete Account](#delete-account)  
      - [Core Features](#2-core-features-of-app)  
          - [Habits (Home Page)](#habits-home-page)  
          - [Notes & To-Do List](#notes--to-do-list)  
          - [Drawer](#drawer)  
          - [User Details](#user-details)  
          - [Navigation](#navigation)  
          - [Settings](#settings)  
      - [Extended Features](#3-extended-features-of-app)  
          - [View Details Page](#view-details-page)  
          - [About Us Page](#about-us-page)  
          - [FAQ Page](#faq-page)  
          - [Notifications](#notifications)   
          - [Error Handling](#error-handling)   
  - [Backend Database](#4-backend-database)  
      - [Firebase Firestore Database](#firebase-firestore-database)  
      - [Firebase Realtime Database](#firebase-realtime-database)  
  - [Testing](#5-testing)  
  - [Timeline and Progress Chart](#timeline-and-progress-chart)  
  - [Tech Stack](#tech-stack) 
  - [Software Engineering Practices](#software-engineering-practices)   
  - [Conclusion](#conclusion)

# Important Links & Documents  
**[1. GitHub Repository & README](https://github.com/lihuicham/nus-orbital-project-2022)**  

**[2. Project Poster](https://drive.google.com/file/d/1CGu4T8KHQxMVlKYjaHPzs1KFxtaJxETo/view?usp=sharing)**  

**[3. Project Video 📺](https://youtu.be/0sXy3uWyvM4)**  

**[4. Project Log](https://docs.google.com/document/d/1lzUOJ71JTVQP_y-cWFw_vw1JclCSUFteBu6YtgPo6-A/edit)**  

**[5. Milestone 3 Google Drive Folder](https://drive.google.com/drive/folders/1hbSiGgI8AQzhq_WigtTu3QDPAddWhNlb?usp=sharing)**

**[6. Proof of Concept: Download Track My Day App](https://drive.google.com/file/d/1h96ByWI4m1E9CScxBl9__jdGQK-J2-sU/view?usp=sharing)**  
Please download the APK file using your mobile device (e.g. phone), you can access the file via our google drive (Milestone 3 Skylab Submission folder) and download it. It will show up as a regular mobile application on your phone screen. Launch the app and try out Track My Day !  

To view *data visualizations* (View Details page) of habits, we provide a sample account below that has pre-recorded user and habits data.  

**Sample account:**   
**Email: hearts@gmail.com**  
**Password: 123456** 

However, to enjoy the full experience of using Track My Day, we encourage you to create a new account via the Registration page.  

Note: For the sample account, the profile picture is not going to appear when log in. To try out the profile picture feature, do create a new account and upload your own picture. You can edit your profile picture too. 


**[7. Special: Read our journey of creating Track My Day](https://medium.com/@lihuicham/our-journey-of-creating-a-mobile-app-11968f0ccb93)**  
Li Hui and Hazel wrote a blog post to share their Orbital journey and some behind-the-scenes stories in developing Track My Day.  

# What's New in Milestone 3?
- Diagrams for Component Interaction & User Flow Map in README
- Toggle password visibility
- Upload profile picture  
- Realtime database 
- New version of Notes page 
- New version of View Details page with progress indicator and charts (data visualizations)
- About Us page 
- FAQ page
- User (Usability) Testing  
- Updated project poster for Milestone 3
- Updated project demo video (full) for Milestone 3 
- Special: A blog post about the journey of developing Track My Day  

### Bugs Squashed 
- Delete button in Notes page is fixed. Notes page is revamped with new design. 
- Each user has individual collection in database when created (each user is unique).
- User details (e.g. login credentials and personal details) are sync to realtime database.
- Data points in View Analytics charts are correctly presented in terms of date and time. 

### Edge Features Developed  
- Toggle password visibility (eye icon).
- Mean, percentage difference, circular progress indicator and monthly progress chart (calendar) for data analytics and visualization in View Details page. 
- Able to upload and re-upload profile picture in drawer via the camera icon.
- Enhance users understanding to Track My Day with About Us and FAQ page. 


# Project Introduction
## Team Information  
#### Team Name: **Track My Day** 
#### Team Number: **5295**  
#### Level of Achivement: **Apollo 11**  


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
3. **[Extended Features:](#3-extended-features-of-app)** View details (Data Visualization), About Us page, FAQ page, Notifications
4. **[Backend Database: ](#4-backend-database)** Firebase Firestore, Realtime database
5. **[Testing: ](#5-testing)** Unit, Integration, End-to-end (E2E), System, User (Usability) Testing 

** _Note: Drawer includes user details, navigation tabs, report issues and log out._

# Concept Diagrams  
## Component Interaction  
This diagram shows the interaction of the files in the app.
![Component Interaction Diagram](./readme_assets/diagrams/ComponentInteraction.png)

## User Flow Map  
The User Flow Map depicts the possible actions a user can take in our app and the results.
![User Flow Map](./readme_assets/diagrams/UserFlowMap.png)

# Features
## 1. Authentication 

![Authentication](./readme_assets/compiled-images/Authentication.png)

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

**--> Watch a demo video of our authentication page: [Authentication](https://drive.google.com/file/d/1xWIzDYKHUzd6D6qKcYUCSQ4jK0D9KHmg/view?usp=sharing)**

### Login Page 
The login page is the first page the user is brought to upon opening the app. This page allows the user to switch to the Register page as well as the Forgot Password page. The eye icon allows toggling of password visibility.      

The user logs in using their email and password, and authentication is implemented as mentioned above. Upon logging in, the user will be brought to the Home page.  

**Current progress:** Complete.   

### Register Page
A new user registers using their email and password at the Register page. The repeat password field ensures that the user enters the correct password both times and an error message will appear if the passwords are different. This page also has eye icons for password visibility toggling.  

After registration, the user is guided to the Profile page to register their personal details which will be stored in the Firestore database.  

**Current progress:** Complete  

### Forgot Password Page 
The user enters their email in the Forgot Password page. This page has been linked to Firebase and the user receives an email with a link to reset their password. Upon resetting their password, the user can only login with the new password.  

**Current progress:** Complete.

**--> Watch a demo video of our Forgot Password page: [Forgot Password](https://drive.google.com/file/d/1R_w4zVejvdAYDRRyeUPJz_24s--Pl0rT/view?usp=sharing)** 

### Profile Page 
The app will also collect the user’s personal details and goals which will be used in the Analysis page. The user can set their username, birthday and enter a favorite quote here. They can also set goals such as amount of sleep per night, amount of water drunk per day and amount of time spent studying, exercising or reading daily.  

The user will only encounter this page once immediately after registration. After registration, the user will be guided to the Profile page where they fill in these details. Upon pressing the button to register, a pop up will appear to confirm that the user has registered their details. The user will be added into the Firestore database and Realtime Database with these details recorded. Afterwards, if the user wants to make any changes, they can do so in ‘Settings’ where a separate page is created for changing these details. Any updates will also be recorded in Firestore and Realtime Database.  

**Current progress:** Complete.  

### Delete Account
Users can delete their account in the app. There will be a red 'Delete Account' button at the Settings and when clicked, the users will have to log in again with the correct username and password for additional safety.  

After logging in, there will be an alert to remind the user that deleting the account is an irreversible action. If the user chooses to delete the account, the user will be removed from the Firebase Authentication, Firestore and Realtime Database.  

**Current progress:** Complete.

## 2. Core Features of App

![Home](./readme_assets/compiled-images/Home.png)

### Habits (Home page)
The home page serves the main function of this app - tracking habits. The trackers include water tracker, sleep tracker, read tracker etc. We redesigned the home page in Milestone 2. We call the home page - "Habits", named according to the appearance and layout of the trackers in the home page.  

The trackers can have different units and maximum values e.g. 24 hours, 10 liters, 50 kilograms and so on. This allows the trackers to be flexible in tracking all sorts of habits. Other than default trackers, users can customize their own trackers too.  
We use a slider to increase the value of each tracker instead of a dropdown menu or a picker. The slider is included for the user to adjust the value. Each tracker has its own unit that is suitable for the habit that the tracker is tracking. This feature greatly enhances the user experience.  

There will also be a “View Details” button at the bottom right corner of each tile (habit tracker) and clicking it will navigate to the view details page of each tracker.  
When the user clicks the “Confirm” button, the value of each tracker will be recorded or “written” into our backend database (Firebase Firestore). More details about write, read and update in the following section - Firebase Firestore. 

*Note:  
**From The Ring to Habits** - We understand that the changes in the layout of the home page is the biggest change in our app. Previously (in Liftoff and Milestone 1), we decided that the trackers should be designed as different proportions of a ring, and hence our home page will only contain “The Ring”.*  

*However, we tested the ring design, consulted the tutor from the UI/UX workshop and discussed between us, we decided that the ring design was limiting the number of habit trackers we can have on The Ring (home page). Since it is just a hollow circle shape (literally, a ring shape), it can only be divided into at most 5 sections if the user wishes to have an aesthetically pleasing UI. We experimented with more trackers, which simulated the real-life use of the app. However, The Ring became really messy and packed because each tracker shared a small chunk of the circle ring. This greatly impacted the UI and UX of the app, and limited the app’s habit tracking ability and deviated from the project’s purpose.*  

*Hence, we took a step back and redesigned the habit trackers and the home page. Going forward, we will be implementing the habit trackers as tile-shaped items in the home page.* 

**Current progress:** Basic habits - water, sleep, read, exercise and etc have been added to Habits. All components - slider confirm button and view details button are completed. Integrated frontend (confirm button) with backend database (Firebase Firestore). Completed all working features and UI design.  

**--> Watch a demo video of Habits: [Habits 📺](https://drive.google.com/file/d/1k6K7tc9mmgB_ra-eyCTUKxR747TtdUrh/view?usp=sharing)**  

### Notes & To-Do List 
Notes & to-do lists are meant to satisfy the quick note taking needs of the users. Both pages support simple typing.  

As both pages are meant for simple note taking, we do not intend to add more features such as bolded / italic words, add a photo or link function. We wish to maintain the simplicity of the features and minimalistic design of  the app.  

Current progress: Both pages completed with full functions. 
 
#### Notes  
For notes, the user can add (save), edit and delete notes. When the “+” button at the bottom right corner is clicked, a new page (which is a modal) for adding & editing the notes will be visible. All notes are arranged in one screen and users can scroll to view their notes. Users can also choose to view the notes in “Full View” or “List View” (collapsed notes).  

**--> Watch a demo video of Notes: [Notes 📺](https://drive.google.com/file/d/1matQlFcFgpAlKZSv6F480w7M7dLr6DP2/view?usp=sharing)**  

#### To-Do List
Users can add a new todo item by typing in the text box and pressing the “+” button. Users can delete individual todo items by tapping on each of them.  

**--> Watch a demo video of To-Do List: [To-Do List 📺](https://drive.google.com/file/d/1qgq1DNexN3jURlnbD-Zb8ezk21bAvj7l/view?usp=sharing)**  

![Drawer](./readme_assets/compiled-images/Drawer.png)

### Drawer 
Drawer can be viewed when the user swipe right on any of the screens or pages. The drawer consists of three sections - user details, navigation tabs, and footer. 

1. **User details:** It shows the user’s profile image, username, email and favourite quote. 
2. **Navigation tabs:** Home, Settings, About Us and FAQ. 
3. **Footer:** Report Issues (contact developers via email) and Log Out.  

Report Issues button will open the default mailing app on the user’s phone (e.g. Gmail or Outlook) and send an email titled “Issues With Track My Day” to the developer of this app.  

**Current Progress:** Navigation tabs are completed and working. Report Issue and Log Out button are completed and working. UI design of drawer completed.  

**--> Watch a demo video of Drawer: [Drawer 📺](https://drive.google.com/file/d/1qiom-aAh2lUH_4pg5RtMkqOxREYMw7xt/view?usp=sharing)**  

### User Details  
When a new accout is created, the default profile picture will be applied. The user can change their profile picture by clicking on the camera icon beside the profile picture.  

**--> Watch a demo video of Profile Picture: [Profile Picture 📺](https://drive.google.com/file/d/1Krg3G3d29KnL3T8vH4m3do0fF9iyrQ2r/view?usp=sharing)** 

Whenever a user updates their email, username or favourite quote, it will be reflected in the drawer immediately.

### Navigation
Track My Day uses React Navigation package to navigate between different screens. The types of navigation we are using are: stack, drawer and material bottom tabs.  

1. **Stack navigation:** All buttons (e.g. to View Details button) 
2. **Drawer navigation:**  Home page (Habits), Settings, About Us page, FAQ page, Log Out 
3. **Material Bottom tabs navigation:** Home page (Habits), To-do page, Notes page  

**Current Progress:** Completed. Able to navigate between different pages. 

**--> Watch a demo video of Navigation: [Navigation 📺](https://drive.google.com/file/d/1qijlm3A3TTf4v0Yy_p9OZWEHRXnU3_ac/view?usp=sharing)**  

### Settings 
Like all apps, there must be a Settings button. Things that are included in Settings are: change personal details, change email and password, delete account and turn on/off notification. This page is heavily linked to Firebase and Firestore.  

The user will be prompted to log in again before they can perform critical actions such as changing email or password, or deleting their account. This is to ensure that the correct user is authorizing these actions. When changing their email, if the new email is already taken, the user will be informed via an error message and the change will not be carried out. Before account deletion, the user will be informed that the action is irreversible and they can choose to go back or proceed with the deletion.  

**Current Progress:** This page has the following sections: Notifications toggle on/off, Update personal details, Change email or password and Delete Account. All sections are complete except Notifications toggle.

**--> Watch a demo video of Settings: [Settings 📺](https://drive.google.com/file/d/1P72npPYSDLMmft3HQdRFFsz4LRE_oPin/view?usp=sharing)**   

## 3. Extended Features of App 

![View Details](./readme_assets/compiled-images/View-Details.png)

### View Details Page 
Once the user clicks the “View Details” button at the bottom right of the icon, the user will be directed to a details page. We include the following components in the “View Details” page.  

1. **Analytics:** Since habits are tracked in terms of days in Habits, the data size collected for the habits are suitable for analysis. Here, the user can see the percentage of their goal that they have achieved so far.   

2. **Circular Progress Chart:** This animated chart shows how far the user has come in achieving their goal. The number in the middle of the ring is the average of their logged data (data for each day/number of days) whereas the entire ring adds up to their goal amount. For example, if the user's sleep goal is 8 hours, the ring will be complete at 8 hours. If the user has slept for 6, 7, 8 hours in the past 3 days, the number in the middle will show (6+7+8/3) = 7. The units will be in hours for sleep.

3. **Calendar:** Although our app tracks the daily progress of the user’s habits, we want a calendar to track the monthly progress of the user’s habits. Each day, a square will only be filled in when the user achieves their goal for the day. The calendar is designed for the visualization of the user’s progress and encourages the users to keep up with their streaks.   

4. **Chart:** We use a line chart that shows the user’s progress in tracking his/her water consumption habit for visualization of analytics. The data for the line chart is read from the Firebase Firestore.  

_Note: The View Details pages for Social Media and Pet Time do not contain the calendar because this is not something people usually have goals for. These habits were created with the aim of allowing users to view the trends in their social media usage or time spent with their pets. Thus, only the progress chart and line chart are included since they are the more useful features._

**Current Progress:** Completed.

![Extended](./readme_assets/compiled-images/Extended.png)

### About Us Page  
This page contains information about our motivations for creating Track My Day, what the user can do on the app and **links to our GitHub repository, Milestone poster and video as well as a blog post about our journey**.  

**Current Progress:** Completed.

**--> Watch a demo video of About Us Page: [About Us Page 📺](https://drive.google.com/file/d/1U_aGp_QZTYpCoSh_vDaVSkR7Uya7gM2R/view?usp=sharing)**  

### FAQ Page  
Sometimes, users may have questions or suggestions to improve our app. The FAQ page uses bounce-in animation and contains answers to the most common questions. There is also a question on 'Need more help?' for users to reach out if the questions in the page do not adequately address the user's concern.  

**Current Progress:** Completed.  

**--> Watch a demo video of FAQ Page: [FAQ Page 📺](https://drive.google.com/file/d/1p2GD4mRs7Vzf1fQ0CYG9fT3gWSYyoVnt/view?usp=sharing)**  

![Modals](./readme_assets/compiled-images/Modals.png)

### Notifications 
We used local push notifications via Expo CLI for the app’s notification. The app will notify the user everyday at 9pm to use Track My Day.  

**Current Progress:** Completed. Toggling on/off is not yet complete.  

### Error Handling  
We replaced Firebase auto-generated messages to customized error messages for Track My Day. We made sure that all error messages and modals are appropriate and easy to understand. 

**Current Progress:** Completed.

## 4. Backend Database  

### Firebase Firestore Database 

### Structure of Data  
- db/users/{userId}/habits/{habitName}/days/{dayId} in Firestore database  
- userId (string) is the randomly generated user.uid where user is the currently logged in user  
- habitName (string) is name of each habit, as shown in Habits (Home page). Eg. READ, EXERCISE, WATER and etc  
- Collection: users, habits, days ; Document: userId, habitName, dayId  
- Each userId document field: birthday, exerciseGoal, favQuote, id, sleepGoal, studyGoal, username, waterGoal   
- Each dayId document field: date, id, name, unit, value  

**Users Collection**  
![FirestoreUsers](./readme_assets/firebase/FirestoreUsers.png)  

**Habits Collection**  
![FirestoreHabits](./readme_assets/firebase/FirestoreHabits.PNG)  

**Days Collection** 
![FirestoreDays](./readme_assets/firebase/FirestoreDays.PNG) 

### Create Data  
A new 'userId' document with a unique document ID is created when a new user registers their personal details.  

The fields of this document will contain all the information filled up from the Profile page during registration. The randomly generated uid of each user is used as the document ID to allow read, delete or update operations on the user's information.  

The 'habits' collection is created when the user logs the first habit. When the user presses the 'Confirm' button on any tile, the 'habits' collection, 'habitName' document, 'days' collection and 'dayId' document will be created. If the habit has never been logged before, pressing 'Confirm' will create new collections and documents from 'habitName' collection onwards. If the user logs a habit for the first time on that day, a new 'dayId' document will be created.  

Since the date of day is used as the document's id, it is unique. Hence, if a user changes the value within 24 hours, the same document will be updated and no new documents will be created.


### Read Data  
Data from the 'habits' collection is used in the 'View Details' page. The 'value' field is used to calculate the user's average progress. For instance, if the habit is EXERCISE, the data logged in the value fields for all the days will be added up and divided by the number of days to show their average progress, which is then used in the circular progress chart. Days data is used in the calendar to show the days that the user has achieved their goal as well as in the line chart to show the user's value logged daily.  

### Update Data  
The user updates their personal details on a separate page under ‘Settings’. Clicking a specific update button will update the corresponding field in the Firebase database. Before the user can change their email address or password, they will be prompted to sign in again. Login rules are the same as in the Login page. The user’s email will be updated via Firebase authentication as well as in the Realtime database.  

If the user changes the value of the slider in a tile and presses 'Confirm', the habit data for that day will change to reflect the new value in the 'value' field of the dayId document. If the user logs a habit multiple times on one day, only the last log will be considered.

### Delete Data  
Before an account can be deleted, the user has to sign in again to confirm their identity. A modal will pop up to allow this. Login rules are the same as in the Login page. Deleting an account will delete the user’s data from Firebase authentication, Firestore database and Realtime database. In the Firestore database, the userId collection for that user will be deleted. 

**--> Watch a demo video of User Collection: [Firestore User 📺](https://drive.google.com/file/d/18yV1PlLZtKF6YFBHQ_aIqclHnYMsBY4I/view?usp=sharing)**  
**--> Watch a demo video of Habits Collection: [Firestore Habits 📺](https://drive.google.com/file/d/1i71MfNZnemTmHp_y3Az5K5KGqVj-aeVo/view?usp=sharing)**

### Firebase Realtime Database  
![Firebase Realtime Database](./readme_assets/firebase/RealtimeDatabase.png)  
After the user registers their details in the Profile page, these details (email, username, favourite quote, goals) will be stored in the Realtime Database. Every user is assigned a default profile picture upon registration, which is also recorded in the Realtime Database.  

Upon updating email, username or favourite quote, the changes will be recorded in the Realtime Database and immediately reflected in the Drawer of the app. Changes to goals will be recorded to adjust the details in the View Details page when calculating the user's progress as a percentage.

**--> Watch a demo video of Realtime Database: [Firebase Realtime Database 📺](https://drive.google.com/file/d/1G0q_GlozJvwva5pIhhfdtRXYqG12mZl_/view?usp=sharing)** 

## 5. Testing 

We performed unit, integration, end-to-end, system and user (usability) testing in Orbital. 

**[Read the Testing documentation.](https://docs.google.com/document/d/1C29gLA-c5yeohHu0ahHg1QZRiEsqnHGG6vKC9_89wVk/edit?usp=sharing)**

# Timeline and Progress Chart

## Orbital 2022 Timeline 
**Liftoff:** 9 - 16 May 2022  
**Milestone 1:** 16 - 30 May 2022  
**Milestone 2:** 30 May - 27 June 2022  
**Milestone 3:** 27 June - 25 July 2022   
**Splashdown:** 25 July - 24 August 2022 

## Progress Chart of Track My Day 
![Progress Chart](./readme_assets/diagrams/Progress.png)

# Tech Stack  
We used these tools to create the project:  

- Development: React Native, React Native Navigation 
- Backend database: Firebase Authentication, Firestore, Realtime database
- Languages: JavaScript, HTML, CSS  
- UI design: dopelycolors, icons8, OUCH
- Version Control: Git, GitHub 
- Software and Devices: Andriod, Expo Go 
- CLI: Expo  
- Poster & Video: Canva, Adobe Premiere Pro 

# Software Engineering Practices  
- Iterative development  
- Follow the 'KISS' principle  
- Readable code  
- Unit, Integration, E2E, System and User (Usability) Testing  
- Error messages that are easy to understand  
- Presence of 'Cancel' and 'Back' buttons  
- Version control with Git  

# Conclusion 
Finally, we reach the end of Orbital. We never thought that we are capable of building an app on our own given our limited knowledge in programming. We would like to express our gratitude to all mentors, peers and moderators of NUS Orbital 2022. Through this project, we gain tremendous knowledge and precious experience in the software engineering field. After completing Orbital, we are now more prepared for future challenges to us and Track My Day. 

We welcome you to [download](https://drive.google.com/file/d/1h96ByWI4m1E9CScxBl9__jdGQK-J2-sU/view?usp=sharing) Track My Day on your mobile device and hope you enjoy the app's experience. A summary of the documentation is presented as our [project poster](https://drive.google.com/file/d/1CGu4T8KHQxMVlKYjaHPzs1KFxtaJxETo/view?usp=sharing). To understand how Track My Day works, you can [watch the project demo video](https://youtu.be/0sXy3uWyvM4). Additionally, you can [view our project log](https://docs.google.com/document/d/1lzUOJ71JTVQP_y-cWFw_vw1JclCSUFteBu6YtgPo6-A/edit) to know the working hours and allocated tasks for each member. If you are interested in our journey of creating Track My Day app and participating in Orbital, you can [read our blog post](https://medium.com/@lihuicham/our-journey-of-creating-a-mobile-app-11968f0ccb93). Alternatively, you can view all Orbital submission files in the About Us page in Track My Day app.  

Thank you. 

By Cham Li Hui & Pwint Thiri Ko, July 2022. 






























