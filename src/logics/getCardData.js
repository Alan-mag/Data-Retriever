
// Template, Scholarship Reception, Holiday Party
import { config } from "../../config";
import moment from 'moment';

// should run once a week at 1:10am on Mondays
export function getTasks(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.tasksSpreadsheetId,
        range: "Student Success Brunch!B1:I",
        valueRenderOption: "FORMATTED_VALUE"
      })
      .then(
        response => {
          const data = response.result.values;
          const tasks = data.map(task => ({
            task_name: task[0],
            prop1: task[1],
            status: task[2],
            start_date: task[3],
            end_date: task[4],
            days_to_complete: task[5],
            assignee: task[6],
            description: task[7],
          })) || [];
          callback({
            tasks
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

/* Possible multi-range sheet search :: https://developers.google.com/sheets/api/samples/reading
{
  "spreadsheetId": spreadsheetId,
  "valueRanges": [
    {
      "range": "Sheet1!B1:B1000",
      "majorDimension": "COLUMNS",
      "values": [
        ["Cost",20.5,15,100,135.5]
      ]
    },
    {
      "range": "Sheet1!D1:D1000",
      "majorDimension": "COLUMNS",
      "values": [
        ["Ship Date",42430,42444,42449,42449]
      ]
    }
  ]
}
*/

// add tasks search and call api for creating/deleting 
// tasks for each person on the team

// take next week lanes and update to this week
// update next week lanes with proper dates and clear cards
// parse next week tasks from punchcards and add to 
// appropriate users 'next week' tasks