import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string= 'List of Course';
  // courses : string[];
  courses: Course[]=[];
  selectedCourse: Course={};
  constructor(private courseService : CourseService, private messageService: MessageService){}
  /* constructor(courseService : CourseService) { 
    this.courses = courseService.getCourses();
  } */

  ngOnInit(): void {
    this.getCourse();
    this.messageService.addMessage("course loaded.")
  }

  getTitle(): string {
    return this.title;
  }

  onSelect(course:Course):void{
    this.selectedCourse = course;
    this.messageService.addMessage("course added:"+course.name);
  }

  getCourse():void{
    this.courseService.getCourses()
      .subscribe(res=>this.courses=res);
  }
  
}
