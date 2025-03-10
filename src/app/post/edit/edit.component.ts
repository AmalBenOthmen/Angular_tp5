import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
 imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  id!: number;
  post!: Post;
  form!: FormGroup;
  /*-------------------------------------------------------------------------------------
 Created constructor----------------------------------------------------------------------------------------*/
  constructor(
  public postService: PostService,
  private route: ActivatedRoute,
  private router: Router
  ) { }
  /**
  * Write code on Method
  *
  * @return response()
  */
  ngOnInit(): void {
  this.id = this.route.snapshot.params['postId'];
  this.postService.find(this.id).subscribe((data:
  Post)=>{
  this.post = data;
  });
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
  this.postService.update(this.id,
  this.form.value).subscribe((res:any) => {
  console.log('Post updated successfully!');
  this.router.navigateByUrl('post/index');
  })
  }
  }
