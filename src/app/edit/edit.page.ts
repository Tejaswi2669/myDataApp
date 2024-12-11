import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataItem, DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  form: FormGroup;
  itemId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      itemDetails: [''],
      amountPaid: ['', [Validators.required, Validators.min(0)]],
      actualAmount: ['', [Validators.required, Validators.min(0)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^\\d{10}$')],
      ],
      userName: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Get itemId from route
    this.itemId = +(this.route.snapshot.paramMap.get('id') ?? 0);

    // Fetch item details using the itemId
    if (this.itemId) {
      this.dataService.getItemById(this.itemId).subscribe((item: DataItem) => {
        if (item) {
          this.form.patchValue(item);
        }
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataService.updateItem(this.itemId!, this.form.value).subscribe({
        next: (response) => {
          console.log('Item updated successfully', response);
          this.router.navigate(['/list']);
        },
        error: (err) => {
          console.error('Error updating item:', err);
        },
      });
    } else {
      console.error('Form is not valid');
    }
  }

  // Helper methods for validation feedback
  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} is required.`;
    }
    if (controlName === 'phoneNumber' && control?.hasError('pattern')) {
      return 'Phone number must be 10 digits.';
    }
    if ((controlName === 'amountPaid' || controlName === 'actualAmount') && control?.hasError('min')) {
      return `${controlName} must be a positive value.`;
    }
    return '';
  }
}
