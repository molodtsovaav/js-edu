/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    preferences = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
        if (!preferences){
          console.error('Пожалуйста укажите приортет студента');
          return;
        }
        
        if (knowsProgramming === undefined){
          console.error('Пожалуйста укажите входные параметры 1');
          return;
        }
        
        if (!config){
          console.error('Пожалуйста укажите входные параметры 2');
          return;
        }
      
        const javaScriptEducationHours = 800;
        const basicProgrammingEducationHours = 500;
          
        let personalEducationHours, studentPriority;
        
        if (knowsProgramming){
          personalEducationHours = javaScriptEducationHours;
        } else {
          personalEducationHours = javaScriptEducationHours + basicProgrammingEducationHours;
        }
        
        studentPriority = config[preferences];
        
        weeks = Math.ceil(personalEducationHours / studentPriority);
        
        return weeks;
      
  };
  