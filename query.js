import { PineconeClient } from "@pinecone-database/pinecone";
import { encode } from './encode.js';
/*
search.tsx => query.js (문장)
encoded query.js => proposition-thumbnail.tsx (문장)

scrap => upsert 부분이 완성되면

*/


async function query(sentence){

    const pinecone = new PineconeClient();
    await pinecone.init({
      environment: "us-west1-gcp-free",
      apiKey: "d5c2e7b8-2130-47af-b655-fa3acf7553d3",
    });
    
    const index = pinecone.Index("mefeto");

    const encoded_sentence = await encode(sentence);

        
    const queryRequest = {
        vector: encoded_sentence,
        topK: 2,
        includeValues: false,
        includeMetadata: true,
    //   filter: {
    //     genre: { $in: ["comedy", "documentary", "drama"] },
    //   },
        // namespace: "example-namespace",
    };

    let similar_sentences = []

    const queryResponse = await index.query({ queryRequest })
    .then(res => res['matches'])
    .then(res => {
        for(let i=0; i<res.length; i++)
        {
            similar_sentences.push(res[i]['metadata']['original_sentence']);
        }
    })

    // return queryResponse;
    return similar_sentences;
}

const re = await query("반도체");

console.log(typeof re);
console.log(re)