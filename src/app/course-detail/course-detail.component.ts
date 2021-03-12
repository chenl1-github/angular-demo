import { Component, OnInit, Input } from '@angular/core';
import { Course } from './../course/course';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  static i = 1;
  @Input() course: Course={};

  
  constructor(private route: ActivatedRoute,
  private router: Router,
  private courseService : CourseService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.paramMap.get('id');

    this.course = this.courseService.getCourse(Number(id));
  }

}
