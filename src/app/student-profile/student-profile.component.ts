import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  student = {
    name: 'John Doe',
    id: 'S12345',
    class: 'Grade 10',
    section: 'A',
    attendancePercentage: 85
  };

  tasks = [
    { task: 'Math Homework', status: 'Completed', dueDate: '2024-10-10' },
    { task: 'Science Project', status: 'Pending', dueDate: '2024-10-15' },
    { task: 'English Essay', status: 'In Progress', dueDate: '2024-10-18' },
  ];
}
