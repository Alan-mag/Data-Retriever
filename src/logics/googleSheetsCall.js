import { config } from "../../config";
import moment from 'moment';

moment.locale('en', {
  week: {
      dow: 1,
  }
});

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Interactions!A1:H",
        valueRenderOption: "FORMATTED_VALUE"
      })
      .then(
        response => {
          const data = response.result.values;
          const interactions = buildMonths(data.map(interaction => ({
            time_stamp: interaction[1],
            your_name: interaction[2],
            contact_name: interaction[3],
            date: interaction[4],
            time: interaction[5],
            purpose: interaction[6],
            contact_type: interaction[7],
            meeting_notes: interaction[8],
            contact_phone_number: interaction[9],
            contact_email: interaction[10],
            next_steps: interaction[11],
            referral: interaction[12],
            outcome: interaction[13],
            contact_website: interaction[14],
            business_name: interaction[15],
            business_address: interaction[16],
            business_phone_number: interaction[17],
            contact_title: interaction[18],
          }))) || [];
          callback({
            interactions
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function buildMonths(sheetInteractions) {
  // console.log(sheetInteractions);
  let monthlyInteractions = [];
  let curMonth = moment().month();
  monthlyInteractions.push({ name: months[curMonth], interactions: 0 });
  for (let i = 0; i < 12; i++) {
    curMonth++;
    if (curMonth > 11) {
      curMonth = 0;
    }
    monthlyInteractions.push({
      name: months[curMonth], interactions: 0
    })
  }
  let monthInteractions = sortInteractionByMonths(sheetInteractions, monthlyInteractions);
  let weekInteractions = sortedWeeklyInteractions(
    sheetInteractions.filter(interaction => {
      return (interaction.date && isWithinAWeek(interaction.date) || interaction.time_stamp && isWithinAWeek(interaction.time_stamp));
    })
  );
  let sortedData = {
    monthData: monthInteractions,
    weekData: weekInteractions
  }
  return sortedData;
}

function sortInteractionByMonths(interactions, monthlyObj) {
  interactions.forEach(interaction => {
    if (interaction.time_stamp === 'Timestamp' || interaction.time_stamp === undefined) { return; }
    let interactionMonth = isNaN(interaction.date) || interaction.date === "" ? moment(interaction.time_stamp).get('month') : moment(interaction.date).get('month');
    let monthAbbr = moment(((interactionMonth + 1)).toString()).format('MMM');
    if (monthAbbr === 'Invalid date') { // should catch this at beginng ex. time_stamp = "     "
      return;
    }
    if (monthAbbr == 'Sep') {
      console.log(interaction)
    }
    // call getMonth index
    let monthIndex = getMonthIndex(monthAbbr, monthlyObj);
    monthlyObj[monthIndex].interactions++;
  });
  return monthlyObj;
}

function getMonthIndex(monthAbbr, monthsArr) {
  let returnIndex;
  monthsArr.forEach((month, index) => {
    if (monthAbbr === month.name) {
      returnIndex = index;
    }
  })
  return returnIndex;
}

// to update = generalize a method for calculating 
// up to current month or day (for loop thing)
function sortedWeeklyInteractions(interactionsPastWeek) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let curDay = moment().day();
  let sortedInteractions = [];

  sortedInteractions.push({ name: days[curDay], interactions: 0 });

  for (let i = 0; i < 7; i++) {
    curDay++;
    if (curDay > 6) {
      curDay = 0;
    }
    sortedInteractions.push({
      name: days[curDay], interactions: 0
    })
  }
  let today = moment();
  interactionsPastWeek.map((interaction) => {
    let interactionActualDate = interaction.date ? interaction.date : moment(interaction.time_stamp).format('MM DD YYYY');
    let dayDif = today.diff(interactionActualDate, 'days');
    let dayKey = Object.keys(sortedInteractions[Math.abs(dayDif - 6)])[1];
    let dayIndex = Math.abs(dayDif - 7);
    sortedInteractions[dayIndex][dayKey]++;
  })
  return sortedInteractions;
}

function isWithinAWeek(momentDate) {
  let aWeekOld = moment().subtract(7, 'days').startOf('day');
  return moment(momentDate).isAfter(aWeekOld);
}