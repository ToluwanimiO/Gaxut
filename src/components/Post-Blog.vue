<template>
    <div>
        <div id="editor">
            <div class="alert alert-success" v-bind:class="{'d-none':data_response.truth,'alert-danger':data_response.success}"  role="alert">
                {{data_response.value}}
            </div>
            <p class="title-text text-center">Create new Blog</p>
            <input type="text" class="form-control topic-input" placeholder="Blog Topic" v-model="blogPost.title"/>
            <quill-editor v-model="blogPost.content" 
                ref="quillEditor"
                :options="editorOption">
            </quill-editor>
        </div>
        <button class="mx-auto btn btn-primary publish-btn d-block" @click="postBlog">Publish</button>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'PostBlog',
  components: {
    // HelloWorld
  },
  data(){
    return{
        token:"",
        blogPost:{
            title:null,
            content:null,
            // author:"anonymous"
        },
        editorOption: {
            theme: 'snow'
        },
        data_response:{
            truth:true,
            value:"",
            success:false
        }
    }
  },
  created:function(){
      console.log(localStorage.getItem("userdetails"))
      if(localStorage.getItem("userdetails")){
          this.token = JSON.parse(localStorage.getItem("userdetails")).token
          console.log(this.token)
      }
  },
  methods: {
    postBlog:function(){
        window.axios.post("https://still-sands-03593.herokuapp.com/api/blog/create-post/",this.blogPost,
        {
            headers: {
                Authorization: 'Token  ' + this.token
            }
        })
        .then(response =>{ 
            if(response.status == 201){
                this.data_response.truth = false
                this.data_response.value = "Post succesfully created"
                this.data_response.success = false
                this.$router.push({path:"/blog"})
            }
        })
        .catch(err=>{
            if(err.response.status == 401){
                this.data_response.truth = false              
                this.data_response.value = "Please login to create a post"
                this.data_response.success = true
            }
        });
    }
  },
}
</script>

<style>
    .title-text{
        font-size:25px; 
    }
     #editor{
        padding:80px 20px 120px; 
        height: 450px;
    }
    .publish-btn{
        margin-top: 150px
    }
    .topic-input
    {
        width: 100%;
        display: block;
    }
    @media (min-width: 530px) {
        .publish-btn{
            margin-top: 100px
        }
    }
    @media (min-width: 830px) {
        #editor{
            padding:130px 100px 120px; 
            height: 550px;
        }
        .publish-btn{
            margin-top: 70px
        }
    }
   
    #editor .quill-editor {
        height: 100%
    }
</style>
