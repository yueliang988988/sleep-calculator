import { createRouter } from "./context";
import { z } from "zod";

const options: RequestInit = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.X_RAPID_API_KEY!,
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

export const exampleRouter = createRouter().query("hello", {
  async resolve() {
    let response = await fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=sleep%20cycle&pageNumber=1&pageSize=10&autoCorrect=false&fromPublishedDate=null&toPublishedDate=null', 
    options);
    let json = await response.json();
    return json;
  },
});
