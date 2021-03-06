import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GroupsService} from "../../service/groups.service";
import {AuthService} from "../../service/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
    selector: 'app-main-group',
    templateUrl: './main-group.component.html',
    styleUrls: ['./main-group.component.css']
})
export class MainGroupComponent implements OnInit {

    links = [['Transactions', 'join'], ['Settle debts', 'debts'], ['Members', 'members'], ['Recent activity', 'activities']];
    group_id: String | null | undefined;
    tab: String | null | undefined;
    activeLink: String | null | undefined;
    name: string | undefined;
    color: string | undefined;
    currency: string | undefined;


    constructor(private route: ActivatedRoute, private redirectRouter: Router, private service: GroupsService) {


    }

    ngOnInit(): void {

        // Get id param
        this.route.paramMap.subscribe( paramMap => {
            this.group_id = paramMap.get('id');
            this.tab = paramMap.get('tab');
            this.activeLink = this.tab;
        });

        // Get group information
        this.service.getGroup(this.group_id).subscribe((res: any) => {
            this.color = res[0];
            this.currency = res[1];
            this.name = res[2];
        });

    }

    getLink(url: string) : string {
        return "/group/" + this.group_id + "/" + url;
    }


}
