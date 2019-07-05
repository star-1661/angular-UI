import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/X-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MailService {

  constructor(private http: HttpClient) { }
  // sendEmail(sendEmail) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/X-www-form-urlencoded');
  //   const sendmail = 'companyName=' + addEmail.company_name + '&contactName=' + addEmail.contact_name + '&email=' +
  //   addEmail.email + '&phone=' + addEmail.phone + '&companyWebsite=' + addEmail.company_website;

  // }

  sendEmail (addEmail) {
    this.http.post('https://www.blazinghog.com/backend/sendEmails.php',
    {
        'companyName': addEmail.company_name,
        'contactName': addEmail.contact_name,
        'email': addEmail.email,
        'phone': addEmail.phone,
        'companyWebsite': addEmail.companyWebsite
    })
    .subscribe(
        data => {
            console.log('POST Request is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
  }
}
