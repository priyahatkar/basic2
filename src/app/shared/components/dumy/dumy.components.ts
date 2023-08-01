import { Component } from "@angular/core";


@Component({
    selector : "app-dumy",
    template :`
        <p>This is a component with only one file</p>
    `,
    styles : [
        `
        p{
            padding: 10px;
            background-color: #f1f1f1;
            color: blue;
            text-align: center;
            font-size: 20px;
        }
        `
    ]

})
export class DumyComponent{
    ngOnInit(): void {

    }
}