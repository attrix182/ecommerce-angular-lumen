import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'os-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

@HostListener('scroll', ['$event'])

export class NavComponent implements OnInit {
  public toggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onWindowScroll(event: any) {
    let element = document.querySelector('.navbar') as HTMLElement;
    let scrollTop = event.srcElement.children[0].scrollTop;

    if (scrollTop > 0) {
      element.classList.add('nav-sticky');
    } else {
      element.classList.remove('nav-sticky');
    }
  }

  toggleNavbar() {
    let element = document.querySelector('.navbar-toggler') as HTMLElement;
    let element2 = document.querySelector('.navCol') as HTMLElement;

    if (!this.toggle) {
      element.classList.add('collapsed');
      element2.classList.add('show');
      this.toggle = true;
    } else {
      element.classList.remove('collapsed');
      element2.classList.remove('show');
      this.toggle = false;
    }
  }
}
