import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-user',
    templateUrl: './user.component.html',
    imports: [CommonModule],
    styles: [
        `
            .offline {
                color: white;
            }
        `,
    ]
})
export class UserComponent {

    userId: number = 10;
    userStatus: string = "Offline";

    constructor() {
        this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getUserStatus() {
        return this.userStatus;
    }

    getColor() {
        if (this.userStatus === 'online') {
            return 'green';
        }
        return 'red';
    }

}
