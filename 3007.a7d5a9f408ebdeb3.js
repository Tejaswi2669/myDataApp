"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3007],{3007:(F,g,c)=>{c.r(g),c.d(g,{ListPageModule:()=>b});var l=c(177),u=c(4341),s=c(4742),a=c(8986),t=c(4438),m=c(8174);function p(e,r){if(1&e){const o=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td")(14,"ion-buttons")(15,"ion-button",7),t.bIt("click",function(){const i=t.eBV(o).$implicit,d=t.XpG();return t.Njj(d.editItem(i.id))}),t.nrm(16,"ion-icon",8),t.k0s(),t.j41(17,"ion-button",9),t.bIt("click",function(){const i=t.eBV(o).$implicit,d=t.XpG();return t.Njj(d.deleteItem(i.id))}),t.nrm(18,"ion-icon",10),t.k0s()()()()}if(2&e){const o=r.$implicit;t.R7$(2),t.JRh(o.name),t.R7$(2),t.JRh(o.itemDetails),t.R7$(2),t.JRh(o.amountPaid),t.R7$(2),t.JRh(o.actualAmount),t.R7$(2),t.JRh(o.phoneNumber),t.R7$(2),t.JRh(o.userName)}}function f(e,r){1&e&&(t.j41(0,"ion-text",11)(1,"p"),t.EFF(2,"No records found."),t.k0s()())}const h=[{path:"",component:(()=>{var e;class r{constructor(n,i){this.dataService=n,this.router=i,this.items=[]}ngOnInit(){this.loadItems()}loadItems(){this.dataService.getItems().subscribe(n=>{this.items=n},n=>{console.error("Error fetching items:",n)})}ionViewWillEnter(){this.loadItems(),this.dataService.getItems().subscribe(n=>{this.items=n})}editItem(n){this.router.navigate(["/edit",n])}deleteItem(n){this.dataService.deleteItem(n).subscribe(()=>{this.items=this.items.filter(i=>i.id!==n)},i=>{console.error("Error deleting item:",i)})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(m.u),t.rXU(a.Ix))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-list"]],decls:28,vars:2,consts:[["expand","block","color","primary","routerLink","/home"],[1,"ion-padding"],[1,"table-responsive"],[1,"records-table"],[2,"color","black"],[4,"ngFor","ngForOf"],["class","ion-text-center",4,"ngIf"],["color","primary",3,"click"],["slot","icon-only","name","create-outline"],["color","danger",3,"click"],["slot","icon-only","name","trash-outline"],[1,"ion-text-center"]],template:function(n,i){1&n&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"List of Pre Orders"),t.k0s()()(),t.j41(4,"ion-button",0),t.EFF(5," Back to Home Screen\n"),t.k0s(),t.j41(6,"ion-content",1)(7,"div",2)(8,"table",3)(9,"thead",4)(10,"tr")(11,"th"),t.EFF(12,"Name"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Item Details"),t.k0s(),t.j41(15,"th"),t.EFF(16,"Amount Paid"),t.k0s(),t.j41(17,"th"),t.EFF(18,"Actual Amount"),t.k0s(),t.j41(19,"th"),t.EFF(20,"Phone"),t.k0s(),t.j41(21,"th"),t.EFF(22,"User"),t.k0s(),t.j41(23,"th"),t.EFF(24,"Actions"),t.k0s()()(),t.j41(25,"tbody"),t.DNE(26,p,19,6,"tr",5),t.k0s()()(),t.DNE(27,f,3,0,"ion-text",6),t.k0s()),2&n&&(t.R7$(26),t.Y8G("ngForOf",i.items),t.R7$(),t.Y8G("ngIf",0===i.items.length))},dependencies:[l.Sq,l.bT,s.Jm,s.QW,s.W9,s.eU,s.iq,s.IO,s.BC,s.ai,s.N7,a.Wk],styles:[".table-responsive[_ngcontent-%COMP%]{width:100%;overflow-x:auto;margin-top:16px;padding:16px;border-radius:8px;background-color:#fff;box-shadow:0 4px 8px #0000001a}.records-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:16px}.records-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .records-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:12px;text-align:left}.records-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f0f0f0;font-weight:700;text-transform:uppercase;font-size:14px;color:#333}.records-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:16px;color:#555}.records-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}.records-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f1f7ff}.records-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{display:flex;gap:12px}.records-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 8px;--padding-end: 8px;--padding-top: 6px;--padding-bottom: 6px;--border-radius: 4px}.ion-text-center[_ngcontent-%COMP%]{margin-top:24px;font-size:18px;color:#888}"]}),r})()}];let P=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.iI.forChild(h),a.iI]}),r})(),b=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[l.MD,u.YN,s.bv,P]}),r})()}}]);