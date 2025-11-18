import {userList} from "../model/usermodel.js";
export function handleUsers(req,resp){
    const usersData = userList();
    console.log(usersData);

    resp.render('userss', {users:usersData});

    
}