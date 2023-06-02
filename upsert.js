import { PineconeClient } from "@pinecone-database/pinecone";
import { encode } from './encode.js';
import { scrap_contents } from "./scrap.js";


async function upsert(pageIndex, pageSize){
  const pinecone = new PineconeClient();
  await pinecone.init({
    environment: "us-west1-gcp-free",
    apiKey: "d5c2e7b8-2130-47af-b655-fa3acf7553d3",
  });

  const index = pinecone.Index("mefeto");

  //scrap
  const texts = await scrap_contents(pageIndex, pageSize);

  //set vectors
  let vs = []
  for(let i=0; i< texts.length; i++)
  {
    const v = {
      id: `${i}`,
      values: await encode(texts[i]),
      metadata:{
        'original_sentence': texts[i],
      }
    }

    vs.push(v);
  }

  const upsertRequest = {
    vectors: vs,
    // namespace: "example-namespace",
  };
  
  
  const upsertResponse = await index.upsert({ upsertRequest });

  
  // response => error checking
  return upsertResponse;
}

const check = upsert(1, 3);
console.log(check);

export { upsert };