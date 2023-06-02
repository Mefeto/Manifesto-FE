import 'node-fetch';
import * as cheerio from 'cheerio';

const scrap_link = async (pageIndex, pageSize) => {
  const url = "https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?";

  const params = {
    "Key": "d1330948229c4cf0802d3332896a753a",
    "Type": "json",
    "pIndex": pageIndex,
    "pSize": pageSize,
    "Age": '21',
  };
  
  const responses = await fetch(url + (new URLSearchParams(params).toString()))
  .then(res => res.json())
  .then(res => res['nzmimeepazxkubdpn'][1]['row'])

  let links = []
  for(let idx = 0; idx < responses.length; idx ++)
  {
    const link = responses[idx]['DETAIL_LINK'];

    links.push(link);
  }

  return links;
};

const scrap_contents = async (pageIndex, pageSize) => {

  const links = await scrap_link(pageIndex, pageSize);

  let contents = []

  for(let i =0; i<links.length; i++)
  {
    let res = await fetch(links[i])
    .then(res => res.text())
    
    const $ = cheerio.load(res);
    const content = $("div#summaryContentDiv").text();
    contents.push(content);
  }
  return contents;
}


export {scrap_contents};