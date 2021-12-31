<template>
    <div>
        <section id="privacy">
                <div class="container">
                    <div class="title">
                        <h5>{{postDetail.title}}</h5><br>
                        <div class="row details">
                        <div class=" col"><p class="text-muted"><i class="fa fa-edit"></i> By {{postDetail.author}}</p></div>
                        <div class=" col "><p class="text-muted"><i class="fa fa-calendar-alt"></i> {{postDetail.date_updated | truncate(10)}}</p></div>
                        <div class=" col"><p class="text-muted"><i class="fa fa-hourglass-start"></i> 3 Mins Read</p></div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card blog_details">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                            </div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <p class="text-left">
                            {{postDetail.content}}
                        </p>
                        <div class="title">
                            <h5 class="mb-3">Share:</h5>
                            <div class="row" id="share_icons">
                                <div class="col-1"><a href=""><i class="fab fa-whatsapp"></i></a></div>
                                <div class="col-1"><a href=""><i class="fab fa-facebook"></i></a></div>
                                <div class="col-1"><a href=""><i class="fab fa-linkedin-in"></i></a></div>
                                <div class="col-1"><a href=""><i class="fab fa-twitter"></i></a></div>
                            </div>
                        </div>
                        <!--comments-->
                        
                            <div class="comments pt-5">
                                <div class="box-comments">
                                        <span class="note-comments text-regular">2 Comments Found</span>
                                        <ul class="list-comments">
                                            <li>
                                                <span class="user-avatar"><img src="../assets/images/avatar-user1.png" alt=""></span>
                                                <div class="user-comments">
                                                    <h4 class="heading-regular"> Albert Carroll</h4>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram. Qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                                    <a href="#" class="reply">reply</a>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="user-avatar"><img src="../assets/images/avatar-user1.png" alt=""></span>
                                                <div class="user-comments">
                                                    <h4 class="heading-regular"> Sandra Porter</h4>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram. Qui sequitur.</p>
                                                    <a href="#" class="reply">reply</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <!--write comments-->
                        <div class="row">    
                            <div class="col-md-8 write-comments">
                                <div class="box-comments">
                                    <div class="title-write">
                                        <h4 class="heading-regular">Write Comment</h4>
                                    </div>
                                    <form>
                                        <div class="input-box your-comment">
                                            <textarea placeholder="Your Comment" v-model="comment.body" cols="1" rows="1"></textarea>
                                        </div>
                                        <div class="input-box email">
                                            <input type="text" placeholder="Email Address" v-model="comment.email">
                                        </div>
                                        <div class="input-box password">
                                            <input type="text" placeholder="Password">
                                        </div>
                                        <div class="buttons-set">
                                            <a href="#" @click="postComment"  title="Log In" class="btn btn-warning text-regular text-uppercase">POST COMMENT</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="title mt-5">
                            <h5>Also Read</h5>
                        </div>
                        
                    </div>

                    <div class="row mt-5 mb-5" >
                        <div class="col-lg-4" v-for="(item,index) in posts" :key="index">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">{{item.title}}</h5></a>
                                    <p class="text-muted">{{item.date_updated | truncate(10)}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">4 Harmful Myth that Harm Cats</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card blog_details mb-3">
                                <img src="../assets/images/photoshop.jpg" alt="" class="card-img-top">
                                <div class="card-body">
                                    <a href=""><h5 class="card-title">The State of Learning And Development</h5></a>
                                    <p class="text-muted">January 20,2021</p>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    
                </div>
        </section>
        <section id="cta">
            <div class="container background-register">
                <div class="row" id="cta_details">
                    <div class="col-lg-6 ">
                        <div>
                            <h5 class="text-center text-light text-lg-left">Ready to Join <br> Gaxut??</h5>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <a href="#"  class="btn start-tutor" value="">Register Now</a>
                </div>
                </div>
            </div>
		</section>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'BlogDetail',
  components: {
    // HelloWorld
  },
  data(){
    return{
        comment:{
            body:null,
            email:"anonymous"
        },
        postDetail:{
            author:'',
            content:'',
            date_updated:'',
            title:''

        },
        posts:[]
    }
  },
  methods: {
    postComment:function(){
    //     window.axios.post(`"https://still-sands-03593.herokuapp.com/api/blog/comment/${this.comment.email}"`,this.comment.body)
    //   .then(response=>console.log(response))
    window.axios.post("https://still-sands-03593.herokuapp.com/api/blog/comment/"+this.comment.email,{comment: this.comment.body})
        .then(response=>console.log(response));
    }
  },
  created: function(){
      console.log(this.$route.params.blogId)
      window.axios.get("https://still-sands-03593.herokuapp.com/api/blog/"+this.$route.params.blogId)
      .then(response=>
      {
        //   console.log(response)
        
          this.postDetail.author=response.data.author          
          var content=response.data.content
          var doc = new DOMParser().parseFromString(content, "text/xml");
          this.postDetail.content=doc.firstChild.innerHTML
          this.postDetail.date_updated=response.data.date_updated
          this.postDetail.title=response.data.title


      })
      //
      if(!(localStorage.getItem('posts')))
      {
        window.axios.get("https://still-sands-03593.herokuapp.com/api/blog/")
        .then(response=>
        {
            console.log("my response is..",response)
            localStorage.setItem("posts",JSON.stringify(response.data.results))
            var postsList=JSON.parse(localStorage.getItem("posts"))
            this.posts.push(postsList[0])
            this.posts.push(postsList[1])
            this.posts.push(postsList[2])
        })
        .catch(error=>console.log("my error is ...",error))
      }else{
          var postsList=JSON.parse(localStorage.getItem("posts"))
          this.posts.push(postsList[0])
          this.posts.push(postsList[1])
          this.posts.push(postsList[2])
      }
      
  },
  filters: {
        truncate: function(data,num){
            const reqdString = 
              data.split("").slice(0, num).join("");
            return reqdString;
        }
    }
}
</script>

<style>
    .background-register
    {
        background: url(../assets/images/Group\ 17.png) !important;
        background-position: center !important;
    }
    .comments .note-comments {
        color: #484848;
        font-size: 20px;
        margin-bottom: 30px;
        float: left;
    }
    .comments .list-comments {
    float: left;
    }
    .comments .list-comments li {
    width: 100%;
    float: left;
    padding: 20px 0;
    }
    .comments .list-comments li .user-avatar {
    float: left;
    }
    .comments .list-comments li .user-comments {
    float: left;
    padding-left: 30px;
    }
    .comments .list-comments li .user-comments h4 {
    font-size: 20px;
    color: #484848;
    margin-bottom: 20px;
    }
    .comments .list-comments li .user-comments p {
    font-size: 14px;
    color: #484848;
    line-height: 1.6;
    margin-bottom: 20px;
    }
    .comments .list-comments li .user-comments a {
    color: #9f9f9f;
    font-size: 14px;
    }
    @media (min-width: 992px) {
    .comments .list-comments li .user-avatar {
        width: 8%;
    }
    .comments .list-comments li .user-comments {
        width: 92%;
    }
    }
    @media (max-width: 991px) {
    .comments .list-comments li .user-avatar {
        width: 20%;
    }
    .comments .list-comments li .user-comments {
        width: 80%;
    }
    }
    @media (min-width: 768px) {
    .comments {
        padding: 55px 0;
    }
    }
    @media (max-width: 767px) {
    .comments {
        padding: 25px 0;
    }
    }

    .write-comments .title-write h4 {
    color: #484848;
    font-size: 20px;
    margin-bottom: 30px;
    float: left;
    }
    .write-comments form .input-box {
    margin-bottom: 20px;
    }
    .write-comments form .your-comment {
    border-bottom: 1px solid #9f9f9f;
    width: 100%;
    float: left;
    padding-bottom: 45px;
    }
    .write-comments form .email {
    float: left;
    }
    .write-comments form .password {
    float: left;
    }
    .write-comments form input {
    padding: 15px;
    }
    .write-comments form textarea {
    padding-top: 15px;
    padding-left: 15px;
    height: 45px;
    }
    .write-comments form textarea, .write-comments form input {
    width: 100%;
    float: left;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #9f9f9f;
    color: #9f9f9f;
    font-size: 15px;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    }
    .write-comments form .buttons-set {
    text-align: right;
    margin-top: 30px;
    width: 100%;
    float: left;
    }
    .write-comments form .buttons-set a {
    padding: 18px 60px;
    font-size: 16px;
    color: #ffffff;
    display: block;
    float: right;
    }
    @media (min-width: 768px) {
    .write-comments form .email {
        margin-right: 4%;
    }
    .write-comments form .email, .write-comments form .password {
        width: 48%;
    }
    }
    @media (max-width: 767px) {
    .write-comments form .email, .write-comments form .password {
        width: 100%;
    }
    }
    .write-comments ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #9f9f9f;
    }
    .write-comments ::-moz-placeholder {
    /* Firefox 19+ */
    color: #9f9f9f;
    }
    .write-comments :-ms-input-placeholder {
    /* IE 10+ */
    color: #9f9f9f;
    }
    .write-comments :-moz-placeholder {
    /* Firefox 18- */
    color: #9f9f9f;
    }
</style>
