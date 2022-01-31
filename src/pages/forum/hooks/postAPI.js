import $ from "jquery";
import { apiAddresses } from "../../../appInfo";

const setUp = () =>
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true,
    },
  });

const createPost = (question, terminology, ontology, context, callback) => {
  setUp();
  $.post({
    url: apiAddresses.createPost,
    data: {
      question: question,
      terminology: terminology,
      ontology: ontology,
      context: context,
    },
    success: (data) => callback(data["post_id"]),
  });
};

const readPost = (post_id, callback) => {
  setUp();
  $.post({
    url: apiAddresses.readPost,
    data: { post_id: post_id },
    success: (data) => callback(data["post"], data["replies"]),
  });
};

const getPosts = (callback) => {
  setUp();
  $.post({
    url: apiAddresses.getPosts,
    success: (data) => callback(data["posts"]),
  });
};

const getAllPosts = (callback) => {
  setUp();
  $.post({
    url: apiAddresses.getAllPosts,
    success: (data) => callback(data["all_posts"]),
  });
};

const replyPost = (
  post_id,
  ontology,
  ontology_link,
  content,
  confidence_score,
  callback
) => {
  setUp();
  $.post({
    url: apiAddresses.replyPost,
    data: {
      post_id: post_id,
      ontology: ontology,
      ontology_link: ontology_link,
      content: content,
      confidence_score: confidence_score,
    },
    success: () => callback(),
  });
};

export { createPost, getPosts, getAllPosts, readPost, replyPost };
