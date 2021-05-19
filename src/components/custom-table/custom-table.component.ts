import { ApplicationFormComponent } from './../application-form/application-form.component';
import { DialogService } from './../services/dialog.service';
import { NotificationService } from './../services/notification.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicationFormService } from '../services/applicationFormService/application-form.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
})
export class CustomTableComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'fullName',
    'email',
    'mobile',
    'city',
    'departmentName',
    'actions',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: any;

  constructor(
    private service: ApplicationFormService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    // this.service.getEmployees().subscribe((list: any) => {
    //   let array = list.data;
    //   this.listData = new MatTableDataSource(array);
    //   this.listData.sort = this.sort;
    //   this.listData.paginator = this.paginator;
    //   this.listData.filterPredicate = (data, filter) => {
    //     return this.displayedColumns.some((ele) => {
    //       return (
    //         ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1
    //       );
    //     });
    //   };
    // });
    this.listData = new MatTableDataSource();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ApplicationFormComponent, dialogConfig);
  }

  onEdit(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ApplicationFormComponent, dialogConfig);
  }

  onDelete($key: any) {
    this.dialogService
      .openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.service.deleteEmployee($key);
          this.notificationService.warn('! Deleted successfully');
        }
      });
  }
}
