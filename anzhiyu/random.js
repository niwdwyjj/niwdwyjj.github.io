var posts=["artciles/2024/ba1f84a6/","artciles/2024/4a17b156/","artciles/2024/585b44c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };