export const mutations = {
    SET_CATEGORIES(state , payload){
        state.categories = payload; 
        state.called.category = false 
      },
      SET_JOBS(state , payload){
        state.jobs = payload; 
        state.called.jobs = false 
      },
      SET_COURSES(state , payload){
        state.courses = payload; 
        state.called.course = false
      },
      SET_COURSESTATUS(state ){
        state.coursesStatus = state.courses.length;  
      },
      LOGOUT(state)
      {
        state.log ="out"
      },
      // SET_CATEGORYCALLED(state){
        
      // },
      // SET_COURSECALLED(state){
        
      // },


    SET_DATA(state , payload){
      state.data = payload;  
    },
    IS_LOADING(state , payload){
      state.isLoading = payload;
    }
  };