import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostCommentModel } from 'app/appModels/PostCommentModel';
import { FormsModule } from '@angular/forms';
import { ContentService } from 'app/appServices/content.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'post-comment',
    templateUrl: './postComment.component.html'
})

export class PostComment implements OnInit {
    @Input() public userComment: PostCommentModel;
    @Output() onSubmitted = new EventEmitter<PostCommentModel>();
    public submitted: boolean = false;
    constructor(private contentService: ContentService) {

    }

    ngOnInit() {

    }

    save(f: NgForm) {
        if (f.valid) {
            this.contentService.postUserComment(f.value)
                .then(() => this.updateCommentList(f));
        }
    }

    updateCommentList(form: NgForm) {
        this.submitted = true;
        form.reset();
        this.userComment = new PostCommentModel(form.value.articleId)
        this.onSubmitted.emit(form.value);
    }
}