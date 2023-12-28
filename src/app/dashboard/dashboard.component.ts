import { Component, OnInit, ViewChild } from '@angular/core';
import { courses } from 'src/app/model/courses'; // Import the courses model
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CourseService } from 'src/app/service/course.service'; // Import the CourseService
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public courses: courses[] = [];
  dataSource!: MatTableDataSource<courses>;
  displayedColumns = ['title', 'photo_url', 'price'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private subscriptions: Subscription[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.courseService.getAllCourse().subscribe((response: courses[]) => {
        this.courses = response;
        this.dataSource = new MatTableDataSource(this.courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }
}
