import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerComponent implements OnInit {
  addEmail = {
    company_name : '',
    contact_name : '',
    email : '',
    phone : '',
    company_website : ''
  };
  constructor(private mailService: MailService) { }

  ngOnInit() {
  }

  addNewEmail() {
    this.mailService.sendEmail(this.addEmail);
  }

}
