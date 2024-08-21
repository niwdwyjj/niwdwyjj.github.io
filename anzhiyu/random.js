var posts=["artciles/ba1f84a6/","artciles/585b44c/","artciles/4a17b156/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };