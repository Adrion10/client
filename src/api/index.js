import axios from "axios";

const url = "http://localhost:8585/posts";
export const fetchPosts = () => axios.get(url);
