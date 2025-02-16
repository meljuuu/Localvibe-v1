const express = require("express");
const {
  createPost,
  getAllPosts,
  updateLikes,
  addReplies,
  updateReplyLikes,
  addReply,
  updateRepliesReplyLike,
  deletePost,
  updateShares, // Add the sharePost controller
} = require("../controllers/post");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/create-post").post(isAuthenticatedUser, createPost);

router.route("/get-all-posts").get(isAuthenticatedUser, getAllPosts);

router.route("/update-likes").put(isAuthenticatedUser, updateLikes);

router.route("/add-replies").put(isAuthenticatedUser, addReplies);

router.route("/add-reply").put(isAuthenticatedUser, addReply);

router
  .route("/update-replies-react")
  .put(isAuthenticatedUser, updateReplyLikes);

router
  .route("/update-reply-react")
  .put(isAuthenticatedUser, updateRepliesReplyLike);

router.route("/delete-post/:id").delete(isAuthenticatedUser, deletePost);

router.route("/update-share").put(isAuthenticatedUser, updateShares); // New route for sharing a post

module.exports = router;
