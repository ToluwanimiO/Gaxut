<template>
    <div class="pagination">
      <span @click="previousPage" class="fa fa-chevron-left"></span>
      <span v-for="(number,idx) in paginationGroup" :key="idx" class="smallText">
          <span v-if="number <= pageCount"
            @click="changePage(number)"
            class="paginationItem" v-bind:class="{'active':currentPage === number}"          >
            <span>{{number}}</span>
          </span>
      </span>
      <span @click="nextPage" class="fa fa-chevron-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span className='bigText'>
        Showing page 
        {{currentPage}}&nbsp;of {{pageCount}} pages
      </span> 
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props:['total'],
  data(){
    return{
        paginationGroup:[],
        currentPage:1,
    }
  },
  methods: {
    nextPage:function(){
        if(this.currentPage<this.pageCount)
        {
            this.currentPage += 1
            let pageLimit =3
            let start =
            Math.floor((this.currentPage > 0 ? this.currentPage : 1 - 1) / pageLimit) *
            pageLimit;

            if (start && this.currentPage % 3 === 0) {
            start = start - 3;
            }

            this.paginationGroup =  new Array(3).fill().map((_, idx) => idx + start + 1);
            
            this.$emit('page', this.currentPage)
        }
        
    },
    previousPage:function(){
        if(this.currentPage>1)
        {
            this.currentPage -= 1
            let pageLimit =3
            let start =
            Math.floor((this.currentPage > 0 ? this.currentPage : 1 - 1) / pageLimit) *
            pageLimit;

            if (start && this.currentPage % 3 === 0) {
            start = start - 3;
            }

            this.paginationGroup =  new Array(3).fill().map((_, idx) => idx + start + 1);
            
            this.$emit('page', this.currentPage)
       }

    },
    changePage:function(num){
        this.currentPage = num
        
        this.$emit('page', this.currentPage)
    },
  },
  computed:{
    pageCount() {
		return this.total ? Math.ceil(this.total / 10) : 1;
	} 
  },
  created: function(){
      this.$emit('page', this.currentPage)
      let pageLimit =3
      let start =
        Math.floor((this.currentPage > 0 ? this.currentPage : 1 - 1) / pageLimit) *
        pageLimit;

        if (start && this.currentPage % 3 === 0) {
        start = start - 3;
        }

        this.paginationGroup =  new Array(3).fill().map((_, idx) => idx + start + 1);
    //   window.axios.get("http://still-sands-03593.herokuapp.com/api/conversations/")
    //   .then(response=>console.log(response))
  }
}
</script>

<style>
    .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .paginationItem {
    background: #fff;
    /* border: 2px solid #666; */
    padding: 15px 12px 15px;
    border-radius: 20%;
    /* height: 45px;
    width: 30px; */
    position: relative;
    margin: 0 5px;
    cursor: pointer;
    
    }

    .paginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    .smallText
    {
    font-size: 12px;
    }
    .bigText
    {
    font-size: 35px !important;
    }

    .prev,
    .next {
    background: #fff;
    border: none !important ;
    padding: 5px;
    color: green;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.4); */
    margin: 0 5px;
    cursor: pointer;
    }

    .paginationItem.active {
    /* border: 1px solid #888; */
    background-color: rgb(187, 185, 185);
    pointer-events: none;
    }

    .prev.disabled,
    .next.disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
    }

    .page-input {
    width: 2em;
    text-align: center;
    }

</style>
