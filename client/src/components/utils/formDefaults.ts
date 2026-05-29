const newLogDefaults = {
        date:"",
        topic:"",
        coach:"",
        tags:[],
        overview:"",
        keyDetails:[],
        strengths_weaknesses:"",
        toReview:"",
        goals:"",
        sparring:[]
}

const noteDefaults = {
    date:new Date().toJSON().slice(0,16),
    topic:"",
    overview:"",
    tags:[]
}

const mediaDefaults = {
    title:"",
    date:new Date().toJSON().slice(0,16),
    type:"",
    link:"",
    file:""
}

export {
    newLogDefaults,
    noteDefaults,
    mediaDefaults
}