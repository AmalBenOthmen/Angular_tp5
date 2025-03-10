import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  form!: FormGroup;
  /*-----------------------------------------
 -------------------------------------------
 Created constructor----------------------------------------------------------------------------------------*/
  constructor(
  public postService: PostService,
  private router: Router
  ) { }
  /**
  * Write code on Method
  *
  * @return response()
  */
  ngOnInit(): void {
  this.form = new FormGroup({
  title: new FormControl('', [Validators.required]),
  body: new FormControl('', Validators.required)
  });
  }
  /**
  * Write code on Method
  *
  * @return response()
  */
  get f(){
  return this.form.controls;
  }
  /**
  * Write code on Method
  *
  * @return response()
 */
  submit(){
  console.log(this.form.value);
  this.postService.create(this.form.value).subscribe((res
  :any) => {
  console.log('Post created successfully!');
  this.router.navigateByUrl('post/index');
  })
  }
  
}
