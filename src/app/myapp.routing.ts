import { RouterModule, Routes } from "@angular/router";
import { SelectRoomComponent } from "./service-to-store-data-for-component/select-room/select-room.component";
import { ChildComponent } from "./sharing-data-via-input/child/child.component";
import { ParentComponent } from "./sharing-data-via-input/parent/parent.component";

const routes : Routes= [
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path :'room', component: SelectRoomComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
