// get all tasks from team
// this week or next week parameters
// will be used to create printable export
import { firebasedb } from '../firebase/firebase';

export const generateTaskReport = (week) => {
  return new Promise((resolve, reject) => {
    pullTasks(week).then(result => {
      setTimeout(() => {
        // let formattedData = result.join();
        resolve(result);
      }, 2000)
    }).catch(err => {
      console.log(err)
    })
  })
}

// need to clean - multiple async operations
const pullTasks = (week) => {
  let taskPromise = new Promise((resolve, reject) => {
    // first row in csv file
    let tasksArray = [];
    let titles = ['Team Member', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; // this needs to be ordered correctly
    tasksArray.push(titles);
    
    
    let row = [];
    firebasedb.ref('users/').once('value').then((snapshot) => {
      let users = snapshot.val();
      Object.keys(users).forEach((userId) => {
       firebasedb.ref(`users/${userId}`).once('value').then((snapshot) => {
          row = [];
          let userInfo = snapshot.val();
          let memberName = userInfo.username;
          if (memberName === 'Test' || memberName === 'Monique') { return; }
          row.push(memberName);
          let tasks = userInfo.tasks;
          let weekDays = tasks[week.reportWeek].lanes;
          for (let day in weekDays) {
            let dayTasks = weekDays[day].cards ? weekDays[day].cards : ' ';
            if(dayTasks) {
              let curDayTasks = [];
              for (let task in dayTasks) {
                // console.log(weekTasks[task].title)
                curDayTasks.push(dayTasks[task].title);
              }
              row.push(curDayTasks.toString().replace(","," "));
            }
          }
          row = [row[0], row[2], row[4], row[5], row[3], row[1]] // for formatting days correcly
          tasksArray.push(row);
        })
      })
      resolve(tasksArray);
    })
  })
  return taskPromise;
}
