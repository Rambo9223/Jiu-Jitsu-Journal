type LogFormValues = {
    date:string,
    topic:string,
    coach:string,
    tags:{name:string}[],
    overview:string,
    keyDetails:{name:string}[],
    strengths_weaknesses:string,
    toReview:string,
    goals:string,
    sparring:{partner:string,notes:string}[]
}

type NoteFormValues = {
    date:string,
    topic:string,
    overview:string,
    tags:{name:string}[],
}

type MediaFormValues = {
    title:string,
    date:string,
    type:string,
    link:string
    file:FileList
}



export type {
    LogFormValues,
    NoteFormValues,
    MediaFormValues
}