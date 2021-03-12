import { Injectable } from '@angular/core';
import { Course } from './course/course';
import { COURSES } from './course/mock-courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCourses():Observable<Course[]>
  {
    return of(COURSES);
  }

  getCourse(id:number): Course{
    let courses = COURSES;
    return courses.filter(x => x.id === id)[0];
  }


}