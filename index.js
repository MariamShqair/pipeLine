var fs=require("fs")

function readFile(){
    let story= fs.readFileSync("story.txt").toString('utf-8').split(' ');
   return story;
}

readFile();
function deleteStopWord(story){
    let  stopword=  fs.readFileSync("stopword.txt").toString('utf-8').split(',');
        for(let i in story)
        { 
            if(stopword.includes(story[i])){
                story.splice(story[i],1);
            }
           
        }
        return story;
}

function countfrequency(story){
    let freqWord=[];
    // for(let i in story){
    //     if (freqWord.hasOwnProperty(story[i])) {
    //         freqWord[i].count++;
    //       } else {
    //         freqWord.push({key:story[i], count:1});
    //       }
        
    // }
    for(let i in story){
        // if (freqWord.hasOwnProperty(story[i])) {
        //     freqWord[i].count++;
        //   } else {
        //     freqWord.push({key:story[i], count:1});
        //   }
       // console.log(freqWord.find( name => name.key === story[i] ));
        if(freqWord.find( key => key.key === story[i] )){
            freqWord.find( key => key.key === story[i] ).count++;
      
        }else{
            freqWord.push({key:story[i],count:1});
        }
    }
    return freqWord;
}
function maxWordNumber(freqWord){
    let freqWordSorted =[];
    console.log(Object.values(freqWord[1]))
    freqWordSorted= freqWord.sort(function(a,b){return  b.count -  a.count})
    return freqWordSorted;
}

console.log(maxWordNumber(countfrequency(deleteStopWord(readFile()))));
