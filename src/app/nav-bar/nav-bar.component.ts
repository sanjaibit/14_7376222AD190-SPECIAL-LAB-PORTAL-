import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  currentPage = 'home';  

  setCurrentPage(page: string) {
    this.currentPage = page;
  }
  isCollapsed = false;  // Controls sidebar collapse/expand state
  dropdownOpen = false; // Controls dropdown menu visibility

  toggleNavBar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Listen for clicks outside of the dropdown or nav bar
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;

    // Check if the clicked element is outside the dropdown or services button
    if (!targetElement.closest('.dropdown-trigger') && !targetElement.closest('.dropdown-menu') && this.isCollapsed) {
      this.dropdownOpen = false;
    }
  }
}
