import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      subject: '',
      content:''
    });
  }

  onSubmitForm(){
    const formValue = this.contactForm.value;
    this.httpClient
      .post('http://api.paletoumaxi.me/cv/form', formValue)
      .subscribe(
        () => {
          console.log('formulaire envoyé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }
}
