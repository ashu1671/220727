import { fetchUsers, fetchUserPosts } from "../services/testServerService.js";

export const getTopUsers = async (req, res) => {
  try {
    const users = await fetchUsers();

    const userPostCounts = await Promise.all(
      users.map(async (user) => {
        const posts = await fetchUserPosts(user.id);
        return { ...user, postCount: posts.length };
      })
    );

    const topUsers = userPostCounts
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 5);

    res.json(topUsers);
  } catch (error) {
    console.error("Error fetching top users:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
