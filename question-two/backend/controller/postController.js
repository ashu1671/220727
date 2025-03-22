import { fetchPosts, fetchComments } from "../services/testServerService.js";

export const getPostsByType = async (req, res) => {
  try {
    const posts = await fetchPosts();

    const postsWithCommentCounts = await Promise.all(
      posts.map(async (post) => {
        const comments = await fetchCommentsForPost(post.id);
        return {
          ...post,
          commentCount: comments.length,
        };
      })
    );

    const maxCommentCount = Math.max(
      ...postsWithCommentCounts.map((p) => p.commentCount)
    );

    const popularPosts = postsWithCommentCounts.filter(
      (post) => post.commentCount === maxCommentCount
    );

    res.json(popularPosts);
  } catch (error) {
    console.error("Error fetching popular posts:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
