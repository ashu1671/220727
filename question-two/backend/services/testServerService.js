import fetch from "node-fetch";

const BASE_URL = "http://20.244.56.144/test"; // Replace with actual

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return await res.json();
};

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/users/${userId}/posts`);
  return await res.json();
};

export const fetchComments = async () => {
  const res = await fetch(`${BASE_URL}/test/posts/${postId}/comments`);
  return await res.json();
};
