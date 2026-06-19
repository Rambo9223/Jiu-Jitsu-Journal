type UserType ={
    name:string,
    email:string,
    password:string,
    belt:string,
    settings:{
        appearance:string,
        reminders:boolean,
        notifications:string
    }    
}

export type  {
    UserType
}