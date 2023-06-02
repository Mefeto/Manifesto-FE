import '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';


async function encode(sentence){
    const mod = await use.load();
    const embeddings = await mod.embed(sentence);
    const encoded_sentence = embeddings.arraySync()[0];

    return encoded_sentence;
}

export { encode };