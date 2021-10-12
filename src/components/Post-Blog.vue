<template>
    <div>
        <div id="editor">
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
        blogPost:{
            title:null,
            content:null,
            author:"anonymous"
        },
        editorOption: {
            theme: 'snow'
        }
    }
  },
  methods: {
    postBlog:function(){
        window.axios.post("https://still-sands-03593.herokuapp.com/api/blog/",this.blogPost)
        .then(response=>console.log(response));
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
