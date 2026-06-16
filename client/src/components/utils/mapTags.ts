function mapTags(tags:string[],entryTags:{name:string}[]){
    

    entryTags.forEach((tag)=>{
        if(!tags.includes(tag.name)){
            tags.push(tag.name);
        }
    })

    return tags
}

export {mapTags}