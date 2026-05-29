
const errorFields = {   
    text:{
        maxLength:{
            type:"maxLength",
            message:"Maximum length is 50 characters"
        },minLength:{
            type:"minLength",message:"Minimum length is 5 characters"
        }
    },
    textbox:{
        maxLength:{
            type:"maxLength",
            message:"Maximum length is 500 characters"
        },
        minLength:{
            type:"minLength",message:"Minimum length is 20 characters"
        }
    },
    listItem:{
        
    },
    date:{
        required:{
            type:"required",
            message:"Date is required"
        }
    },
    title:{
        required:{
            type:"required",
            message:"Title is required"
        }
    },
    topic:{
        required:{
            type:"required",
            message:"Topic is required"
        }
    },
    type:{
        required:{
            type:"required",
            message:"Type is required"
        },
        validation:{
            type:"required",
            message:"Please supply a link or upload a file"
        }
    },
    file:{
        validation:["image/png","image/jpg","image/jpeg","image/*"],
        accept:{
            type:"accept",
            message:"Please only upload files of the following - png, jpg, jpeg"
        },
        size:{
            type:"size",
            message:"Please only upload files less than 20Mb"
        }
        
    },
    coach:{
        required:{
            type:"required",
            message:"Coach is required"
        }
    },
    tags:{
        minLength:{
            type:"minLength",message:"Minimum number of tags is 1"
        },
        maxLength:{
            type:"maxLength",message:"Maximum number of tags is 20"
        },
        maxLengthNote:{
            type:"maxLength",
            message:"Maximum number of tags for a note is 10"
        }
    },
    overview:{
        required:{
            type:"required",
            message:"Overview is required"
        }
    },
    keyDetails:{
        maxLength:{
            type:"maxLength",
            message:"Maximum number of entries is 10"
        }
    },
    sparring:{
        maxLength:{
            type:"maxLength",
            message:"Maximum number of entries is 6"
        }
    }
    //strengths_weaknesses:,
    //toReview:,
    //goals:,
}

export {
    errorFields
}