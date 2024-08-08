import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  darkMode: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  /**
   * @description Toggle dark mode
   * @returns void
   */
  toggleDarkMode(): void {
    const body = this.renderer.selectRootElement('body', true);
    if (this.darkMode === false) {
      this.darkMode = true;
      this.renderer.addClass(body, 'dark');
    } else {
      this.darkMode = false;
      this.renderer.removeClass(body, 'dark');
    }
  }
}
