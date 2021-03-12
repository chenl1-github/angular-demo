import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { Course } from '../course/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[]=[];
  selectedCourse : Course={};

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(res=>this.courses=res);
  }

  onSelect(course:Course):void{
    this.selectedCourse = course;
  }

}
