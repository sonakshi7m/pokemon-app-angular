import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  isAdmin: boolean;
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.usersService.isAdmin;
  }

}
