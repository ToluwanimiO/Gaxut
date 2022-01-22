// import axios from 'axios';
// const BASE_API_URL= '...';
// const API_URL_ENDPOINT = '...';
// const A = axios.create({ baseURL: String(BASE_API_URL) });
export const actions = {
  // GET_DATA({commit}){
  //   A.get(API_URL_ENDPOINT).then((res) =>{
  //     commit('SET_DATA' , res.data);
  //     commit('IS_LOADING' , false);
  //   }).catch((err) =>{
  //     console.error(err)
  //   });
  // }
  GET_CATEGORIES({commit}){
    window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
			.then(response=>
			{
				console.log(response.data,'gettingCats')
        commit('SET_CATEGORIES' , response.data);

				// this.categories = response.data
			})
  },
  GET_JOBS({commit}){
    window.axios.get("https://still-sands-03593.herokuapp.com/api/job")
      .then(response=>
      {
        console.log(response.data.results)
        commit('SET_JOBS',response.data.results);
      })
  },

  GET_CATEGORIES_LIST({commit}){
    window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
			.then(response=>
			{
				console.log(response.data,'gettingCats')
        commit('SET_CATEGORIES' , response.data);
        window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+response.data[0].slug+"/courses")
        .then(response=>
        {
          console.log(response.data.results,'gettingCourses')
          commit('SET_COURSES',response.data.results)
          // this.courses = response.data.results
          // this.coursesStatus = this.courses.length
        })
			})
  }
};