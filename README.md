# NUS ORBITAL PROJECT 2022 - Track My Day 
### **An Orbital project by Cham Li Hui and Pwint Thiri Ko.**  

## Team Name 
### **Track My Day**  

## Level of Achievement 
### **Apollo 11**  

## Project Motivation 
As students that utilize the chrome extension Momentum, we were inspired by Momentum’s concept and wanted to create an aesthetically pleasing dashboard to enhance user productivity. Initially, we were planning to create a chrome extension, but after further discussion, decided our ideas would be better suited for a mobile app. We wanted to create an app that is both functional and personalizable, such that users would use it daily to help them keep track of their habits and better organize aspects of their lives.

## Aim & Vision 
Track My Day is a mobile app with a primary focus on tracking habits, such as exercise, sleep and water consumption. We will be implementing additional features, namely, to-do lists and notepads that can be sorted easily. Track My Day will be personalized for each user and allows customisation based on users’ preferences. We envision Track My Day to be a convenient, all-in-one productivity app users can utilize on a daily basis, and the features were decided with this goal in mind.

## Project Scope
Our Orbital project will be an application that can be run on mobile or tablet.
<br> 
The scope of our project can be divided into these parts:
1. **Setup:** Authentication, Registration, Login and Forgot Password pages, Navigation
2. **Core Features:** Home page, Notes page and To-do list page, Settings, Report Bugs
3. **Extended Features:** Details page with Calendar, Breakdown and Analysis, Share Your Progress
4. **Testing:** System Testing and User Testing  
<br>


## Core Features of App 

### Authentication
The authentication functions - Register, Login and Logout of the app are linked to the firebase backend database. When a new user registers his/her email and password on the app, the database will keep a record of his/her email and password. User is able to use the correct email and password combination to login. 

Restrictions: 
1. Users must enter a password that has at least 6 charcters
2. User cannot register with the same email and password for more than one time.
3. User with incorrect email or password combinations will not be able to login. 

Error messages will be shown on the phone screen when either of the restrictions are violated. 

**Current Progress:** Completed registration, login and logout. Authentication actions performed on app is successfully recorded on Firebase backend database. 

-> Watch a demo video of our authentication page: [Authentication](https://drive.google.com/file/d/1BuL07CN505TG56ysWAkK02LBswU0oojP/view?usp=sharing)

### Login Page 
There is a login page for the app. It consists of two things, email and password. If the user has forgotten their password, there is an option to reset the password by entering their registered username or email. New users can also create an account by clicking on ‘Register’.  

**Current progress:** The buttons lead to the correct pages, basic UI done. 

### Personal Details 
The app will also collect personal details of the user for further analysis and habit/goal/progress recommendations for the users. Personal details collected include: the number of hours the user spent to study/exercise per day; the number of hours the user slept per day; their occupation, smartphone usage, usual habits and goals they want to achieve through the app. 

**Current progress:** User details such as goals and usual habits are entered in the Registration page. This part is done with basic UI. Details that users input daily such as hours slept will be updated by the user in the Home page. This will be completed in Milestone 2.

### Home Page (The Ring)
The HOME page serves the main function of this app - tracking habits. Visually, the home page only contains one and only one thing - The Ring. The ring will be split into parts, each part is one habit that the user wishes to track. The time frame for habit tracking is daily (default). The app will provide a few default habits that are suitable for most users, these include: sleep, exercise, study, water and budget. Since there might be more habits that the user wishes to track, the app allows customized habits to be added into The Ring. 

![alt text](https://github.com/lihuicham/nus-orbital-project-2022/blob/notes/TRACK_MY_DAY/readme_images/home.png "Home")

Once the user clicks to view or edit a certain habit in The Ring, the icon and the progress of the habit will be shown in the empty space in the middle of The Ring. 

At the bottom right of the icon, there will be a “View Details” button. Users can click this button to view the detailed analysis and breakdown of the progress of their tracked habits and more (further explanation in the next section about extended features). 

**Current progress:** Basic habits (sleep, water and steps) have been added to the Ring. The clicking function works and generates the appropriate icon. Clicking on the page away from the Ring will remove the icon from view. With basic UI design.

-> Watch a demo video of our home page here: [Home (The Ring)](https://google.com)

### Notes & To-Do List 
Notes & to-do lists are meant to satisfy the quick note taking needs of the users. Both pages support simple typing, and the to-do list supports an additional checkbox feature. The todo list has a tap to delete task function, and to view different todo lists, users only have to swipe (like Tinder) to view the next or previous todo lists. 
For notes, the user can add and delete notes. All notes will be visible in one screen and users can scroll to view their notes.

![alt text](https://github.com/lihuicham/nus-orbital-project-2022/blob/notes/TRACK_MY_DAY/readme_images/notes.png "Notes and To-Do List")

As both pages are meant for quick and simple note taking, we do not intend to add more features such as bolded words, add a photo or link function. We wish to maintain the simplicity of the features and minimalistic design of the app. 

**Current Progress:** Normal note & todo list taking and deleting function done. With basic UI design. 

-> Watch a demo video of our todo list page: [To-Do List](https://drive.google.com/file/d/1JP8ni48-V1LorjkWYbHL-_KLtNTtyBQ-/view) 

-> Watch a demo video of our notes page here: [Notes](https://drive.google.com/file/d/1b7qtYZRf7ydyLoCoE2vfLBFN_BbtYcTh/view)

### Navigation 
Track My Day uses React Navigation package to navigate between different screens. The types of navigation we are using are: stack, drawer, bottom tabs and material top tabs navigations. 
1. **Stack navigation:** buttons (eg.back to home button) 
2. **Drawer navigation:**  profile, settings, day/night mode 
3. **Bottom tabs navigation:** home (the Ring), notes, todo
4. **Top tabs navigation:** View details - Swipe to see calendar, analytics, suggestions 

**Current Progress:** Completed. Able to navigate between different pages. 

-> Watch a demo video of our navigation here: [Navigation](https://drive.google.com/file/d/1Ft8r2sqhZ9vwz_q5egJx6ejmppROGLBc/view?usp=sharing)

### Settings 
Like all apps, there must be a setting button. Things that are included in the setting are: Change personal details, change username and password, day/night mode, turn on/off notification, report issues.  
<br>

## Extended Features of App 

### View Details Page 
Once the user clicks the “View Details” button at the bottom right of the icon, the user will be directed to a details page. We include the following things in the details page. 

1. **_Calendar:_** Although our app tracks the daily progress of the user’s habits, we want a calendar to track the monthly or even yearly progress of the user’s habits. The calendar is designed for the visualization of the user’s progress and encourages the user’s to keep up with their streaks. 
2. **_Analytics:_** Since habits are tracked in terms of days in The Ring, the data size collected for the habits are suitable for a detailed breakdown and analysis. Using a budget tracker as an example, we can have a detailed breakdown and analysis on the usage of the money - food, lifestyle and bills. If it is a water tracker, the analysis will be on the number of water consumption in a day and the gap between times of drinking water. 
3. **_Suggestions:_** The app knows the user from the user profile. Hence, combining the analytics and calendar, the app will give suggestions for the user. Suggestions can come in forms of suggested articles, links, webpages or videos. If the user is someone who is a heavy smartphone user but aims to improve his sleep habits, sleep an extra 2 hours everyday (6 hours to 8 hours), the suggestions can be articles related to scientifically proven ways to improve sleep (Why should we reduce screen time 2 hours before sleeping?) 
 
### Share Your Progress 
We consider that millennials like to share their daily moments on social media, hence we wish to implement a “Share Your Progress” function in our app as a bonus feature. This function will connect the app with social media platforms like Instagram, Facebook and Twitter. 

### Theme Color & Day/Night Mode
The app supports user customization in the display of the app interface: theme color and day/night mode. 

### Notifications & Sound
Our app will give the user screen on/off notifications. A simple example: Every 1 hour (or within every set time period), the app will remind the user to drink water (for water tracker).  
If the users completed their daily goal or hit a 5-days streak of maintaining their habits, the app system will give out a congratulation sound effect.  
<br>

## User Stories & Experience

As a young adult who wants to transform into a better person, namely with good habits, I want a simple but aesthetically pleasing tracker that is able to assist me on that. 

As an individual who wants to improve efficiency, I want a tracker that can show me my progress for the habits that I wish to pick up in a simplest and most straightforward way. 

As a modern user of digital devices, I wish to see a simplistic and minimalistic design in productivity and self-improvement mobile apps. 

As a student who is always on the go, I want an app that can allow me to take down quick notes or checklists, and viewing them should be easy. 

As a user of productivity apps, I want to have an awesome user experience on such apps. Along with functional user interface and aesthetically pleasing design, these features will greatly motivate me to stick with my goals and habits.  
<br>

## User Interface (Design) - Aesthetic, Sound & Music, Display
Color: Pastel theme, user customizable   
Display Mode: Day/NIght mode available   
Sound: Sound effects  
Music: Copyright-free music  
<br>

## Demo Video 

### **Track My Day App Demo Video:** [Track My Day](https://google.com)  
<br>

## Timeline & Progress Chart 
![alt text](https://github.com/lihuicham/nus-orbital-project-2022/blob/notes/TRACK_MY_DAY/readme_images/timeline.jpg "Timeline")  

## TechStack for Milestone 1 
We used these tools to create the project: 
- Frontend: React Native 
- Backend: Firebase
- Languages: JavaScript, HTML, CSS  
<br>

## What We Intend to Achieve in Milestone 2 ? 
Going forward, for Milestone 2, we plan to: 
- Complete the Home page
- Design basic trackers and a basic tracker template for users to customize based on their desired habit to track
- Add in a tinder-like swiping functionality for the to-do list
- Start working on Settings (notification, sound, theme, user profile information, night/day mode)
- Start working on Notifications
- Add a button to share progress on social media

