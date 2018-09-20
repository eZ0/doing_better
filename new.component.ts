import {Component, Input, OnChanges, SimpleChanges, OnInit} from "@angular/core";


@Component({
    selector: "vb-information-bar",
    styles: [require('./vb-information-bar.component.scss')],
    template: `

    <div *ngIf="hasLimitedUsageWarning" class="__content h-flex-row h-flex-space-between h-flex-align-center h-padding-double">
        <p class="__text">{{ limitedUsageTranslationKey | translate }}</p>
        <button class="__button vb-icon-button vb-icon-button--close h-margin-left-double" (click)="showWarning()">
            <i class="mdi mdi-close" ></i>
        </button>
        <p>{{amountOfWarnings}}</p>
    </div>
    
`
})

export class InformationBar implements OnChanges, OnInit {
    @Input() public limitedUsageTranslationKey: string = null;

    public amountOfWarnings: number = 0;

    public hasLimitedUsageWarning = false;

    public ngOnInit(): void {
        this.calculateAmoutOfWarnings();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('limitedUsageTranslationKey')) {
            this.hasLimitedUsageWarning = changes['limitedUsageTranslationKey'].currentValue !== null;
        }
    }

    public showWarning(): boolean {
        this.hasLimitedUsageWarning = !this.hasLimitedUsageWarning;
    }

    public calculateAmoutOfWarnings(): number {

    }
}