import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'cmp-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

    ngOnChanges() : void {
        this.starWidth = this.rating * 86/5;
    }
    
    @Output () ratingClicked: EventEmitter <string> = new EventEmitter<string>();

    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}