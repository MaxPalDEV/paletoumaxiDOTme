import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // FontAwesome Icons
  sendIcon = faPaperPlane;

  contactForm!: FormGroup;
  siteKey = "6Lcl4pYcAAAAABS5-VpXZAXNFH0ZnnrReXFwedTt";
  showMsg: boolean = false;

  contact = {
    name: "",
    email: "",
    subject: "",
    content: ""
  }


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.initForm();
  }



  initForm(){
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      subject: new FormControl(this.contact.subject, [
        Validators.required
      ]),
      content: new FormControl(this.contact.content, [
        Validators.required
      ])
    });
  }

  get name() { return this.contactForm.get('name')!; }
  get email() { return this.contactForm.get('email')!; }
  get subject() { return this.contactForm.get('subject')!; }
  get content() { return this.contactForm.get('subject')!; }



  onSubmitForm(){
    const formValue = this.contactForm.value;
    this.httpClient
      .post('https://rest.paletoumaxi.me/cv/form', formValue)
      .subscribe(
        () => {
          console.log('formulaire envoyé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      this.contactForm.reset();
      this.showMsg= true;

  }


}
