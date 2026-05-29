function mapTags(tags:string[],entryTags:{name:string}[]){
    
    //console.log(tags);

    entryTags.forEach((tag)=>{
        if(!tags.includes(tag.name)){
            tags.push(tag.name);
        }
    })

    //console.log(tags);
    return tags
}

export {mapTags}