import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      itemDetails: [''],
      amountPaid: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Numbers only
      actualAmount: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Numbers only
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // 10-digit number
      userName: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getItemById(+id).subscribe((item) => {
        this.form.patchValue(item);
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataService.addItem(this.form.value).subscribe({
        next: (response) => {
          console.log('Item added successfully', response);
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error('Error adding item:', error);
        },
      });
    } else {
      console.error('Form is not valid');
    }
  }
  
}
