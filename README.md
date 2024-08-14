
SPECIAL LAB PORTAL

PROBLEM STATEMENT:

Members of the Special Lab are admitted through an interview process. These members are required to meet the targets set by the responsible authority. The development of products must adhere to industry standards and undergo review. Any transfers within the lab must be communicated to the relevant student and the supervisor. Student accomplishments will be showcased on the portal.

GOAL:

Develop a specialized lab portal featuring Cluster View of Lab Details, Student Enrollment Form, Lab Transfer Request Form, and Student Profiles.

SCOPE:

The scope includes a cluster view of lab details, a student enrollment form, a lab transfer request form, and student profiles. Additional considerations involve security, project review workflows, communication notifications, and user experience design. This aims to create an efficient platform for managing lab operations while enhancing communication and transparency.

CONSIDERATIONS:

Security: Implement authentication and authorization mechanisms to ensure only authorized users can access certain features or data. 

Review Process: Incorporate a workflow for project reviews, ensuring that all products meet industry standards before release.
Communication: Implement notifications or alerts to inform relevant parties (students, supervisors, authorities) about important updates or changes, such as transfers or joining reviews.

Portal Showcase: Develop a section of the portal dedicated to showcasing student accomplishments, such as completed projects, publications, or awards.

 User Experience: Design the portal with a user-friendly interface to make navigation and interaction intuitive for all users, including students, supervisors, and administrative staff.

TECHNOLOGICAL STACK:

 AngularJS: Front-end framework for web application development.

 Express.js: Back-end framework facilitating client-server communication.

 MongoDB: NoSQL database for storing student and staff data and lab records.

END USERS:

Students:
They are admitted through an interview process.
  They must meet set performance targets defined by the responsible authority.
They can book slots for lab activities using the booking system.
   Their achievements and accomplishments are showcased on the dedicated portal.
Faculty:
      They can conduct interviews to evaluate students who have booked lab activity slots.
  They can accept or reject students based on their performance in the interview and review process.
 Admin:
    They can add and manage student and faculty details in the admin page of the system.


SYSTEM OVERVIEW:
1. Lab Details Cluster View:
   Display comprehensive lab details including:
   - Introduction.
   - Achievements overview.
   - Ongoing projects.
   - Developed products.
   - Available seats.
               - Dynamic Update: Real-time update of available seats.

2. Student Enrollment Form:
   Provide a time-bound enrollment form with the following conditions:
   - Accessible within designated periods.
   - Automatic disabling post-period.
   - Exceptions case for valid reasons such as medical leave(special case registration).
 	  - Allocating separate slot for special case
   - Scheduling interview(Interview process).
   - Notification: Email notification of interview details to registered users.

3. Interview Process:
   Define interview steps:
   - Reminder to faculty and students.
   - Based on student performance, students can be selected or rejected.
   - Confirmation email for selected candidates.
   - Update student database.
   - Reschedule non-selected interviews.
   - Allocation to academic class if not selected(Even in rescheduling).

4. Lab Transfer Request Form:
 	  Enable students to apply for lab transfers. It is the same procedure as a new join like attending the interview, based on the performance he/she can selected or rejected.

5. Profile Update:
      Maintain up-to-date student profiles:
 	  - Regular updates based on achievements.


6. Special case registration:
	-  Registration
	-  Checking the originality 
	-  Scheduling the interview 
	- After the interview based on the staff's decision student can accept or reject 

FUNCTIONAL REQUIREMENTS:

User Authentication:

- Students: Register with official email IDs, then log in with email and password or sign in with Google.

- Staff: Admin provides username and password or sign in with Google.

Students:

1. Student Enrollment Form: 
Includes fields for Name, Roll number, Department, Email ID, Mobile Number, and Interested Special Lab.

2. Lab Transfer Request Form: 
Fields for Name, Roll number, Current Lab, Desired Lab, and Activity/Achievement score.

3. Student Profile:
 Displays personal and lab-related information along with achievements.

4. Student Achievements Showcase:
     Students can submit their accomplishments and achievements for showcasing.
    Admins can review and approve the submissions for display on the portal.
    The portal will prominently feature the approved student achievements.


Staff:

1. Lab Details View: Update lab activities, information, and available seats.

2. Student Profile: Update lab details and student activities.

Admin Dashboard:
   Admins can view and manage all aspects of the lab portal, including user details, applications, performance targets, product reviews, and student achievements.
     Admins can generate reports and analytics to support decision-making.

NON-FUNCTIONAL REQUIREMENTS:

Performance: 
The system must react to user actions in less than two seconds to ensure effective usability. It must also be able to support at least 100 concurrent users without experiencing appreciable performance loss.

Security: 
Authorized admin users should only be able to access sensitive capabilities through secure authentication systems, and user data must be secured both during transmission and storage.

Usability:
In the event of input mistakes or system failures, users should be guided by clear and succinct error messages that are presented in the user interface.

Reliability: 
In the event of a system failure or crash, data loss should be prevented by having a backup and recovery mechanism in place, and the system should be available around the clock with little downtime.

Scalability: 
The system should be built to support future requests for more features and functionalities, as well as an increase in the number of users and the volume of data it handles.


