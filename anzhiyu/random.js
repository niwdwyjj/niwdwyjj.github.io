var posts=["2024/08/07/hello-world/","2024/08/08/Linux_DirStruct/","2024/08/08/Linux_UserCommand/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };