let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let question = "?"
let exclamation = "!"




var addExcitement = (...n) => {
    let buildMeUp = ""

        
    for (let i = 0; i < n[0].length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        
         if(i%3===0 && i!=0){
            buildMeUp = buildMeUp+n[1].repeat(n[2]);
        }
        
        buildMeUp = buildMeUp + " " + n[0][i];

        if(i+1===n[0].length){
            buildMeUp = buildMeUp+n[1].repeat(n[2]);
        }

       
        
 
        


        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

addExcitement(sentence, question,1);
addExcitement(sentence, exclamation,5);
addExcitement(sentence, exclamation,2);