import {Component, Input, OnChanges, SimpleChanges, OnInit} from "@angular/core";


@Component({
    selector: "vb-information-bar",
    styles: [require('./vb-information-bar.component.scss')],
    template: `

    <div *ngIf="hasLimitedUsageWarning" class="__content h-flex-row h-flex-space-between h-flex-align-center h-padding-double">
        <p class="__text">{{ myTranslationKey | translate }}</p>
        <button class="__button vb-icon-button vb-icon-button--close h-margin-left-double" (click)="showWarning()">
            <i class="mdi mdi-close" ></i>
        </button>
        <p>{{amountOfWarnings}}</p>
    </div>
    
`
})

export class InformationBar implements OnChanges, OnInit {
    @Input() public myTranslationKey: string = null;

    public amountOfWarnings: number = 0;

    public hasLimitedUsageWarning = false;
    
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('myTranslationKey')) {
            this.hasLimitedUsageWarning = changes['myTranslationKey'].currentValue !== null;

            this.amountOfWarnings = this.calculateAmoutOfWarnings()
            console.log(this.amountOfWarnings)
        }
    }

    public showWarning(): boolean {
        this.hasLimitedUsageWarning = !this.hasLimitedUsageWarning;
    }

    public calculateAmoutOfWarnings(): number {
        var amount = 0;

        if (this.hasLimitedUsageWarning) {
            return amount;
        } else {
            amount = 666;

            this.myTranslationKey = 'too many warnings';
        }

    }
}