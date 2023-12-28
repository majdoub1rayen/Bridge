import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, tap } from 'rxjs';
import { courses } from 'src/app/model/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  AddCourseForm: FormGroup | undefined = undefined;
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:9010';
  getAllCourse(): Observable<courses[]> {
    return this.http.get<courses[]>(`${this.apiUrl}/course`);
  }
  public getCourseById(id: any): Observable<courses> {
    return this.http.get<courses>(`${this.apiUrl}/course/getbyid/${id}`);
  }
}
