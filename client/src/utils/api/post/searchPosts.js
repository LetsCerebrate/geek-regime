import superagent from "superagent";

async function searchPosts (searchTerm) {
    const response = await superagent
        .get("/api/v1/post/search")
        .set("Content-Type", "application/json")
        .query({ searchTerm });

    return response?.body;
}

export default searchPosts;