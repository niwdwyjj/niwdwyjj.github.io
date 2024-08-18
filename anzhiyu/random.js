var posts=["artciles/2024/585b44c/","artciles/2024/4a17b156/","artciles/2024/ba1f84a6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };