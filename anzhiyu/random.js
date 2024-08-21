var posts=["artciles/ba1f84a6/","artciles/4a17b156/","artciles/585b44c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };