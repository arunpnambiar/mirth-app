import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApplicationFormService {
  mirthDataList: any = [];

  constructor(private datePipe: DatePipe) {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false,
    });
  }

  getEmployees() {}

  insertEmployee(mirthData: any) {
    this.mirthDataList.push({
      fullName: mirthData.fullName,
      email: mirthData.email,
      mobile: mirthData.mobile,
      city: mirthData.city,
      gender: mirthData.gender,
      department: mirthData.department,
      hireDate:
        mirthData.hireDate == ''
          ? ''
          : this.datePipe.transform(mirthData.hireDate, 'yyyy-MM-dd'),
      isPermanent: mirthData.isPermanent,
    });
  }

  updateEmployee(mirthData: any) {
    this.mirthDataList.update(mirthData.$key, {
      fullName: mirthData.fullName,
      email: mirthData.email,
      mobile: mirthData.mobile,
      city: mirthData.city,
      gender: mirthData.gender,
      department: mirthData.department,
      hireDate:
        mirthData.hireDate == ''
          ? ''
          : this.datePipe.transform(mirthData.hireDate, 'yyyy-MM-dd'),
      isPermanent: mirthData.isPermanent,
    });
  }

  deleteEmployee($key: string) {
    this.mirthDataList.remove($key);
  }
}
