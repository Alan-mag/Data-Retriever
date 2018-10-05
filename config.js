export const config = {
  spreadsheetId: process.env.VIZ_SPREADSHEET_ID,
  tasksSpreadsheetId: process.env.TASKS_SPREADSHEET_ID // for punchlist
};

export const googleSheetsApiKey = process.env.GOOGLE_SHEETS_API_KEY;
export const tasksSheetApiKey = process.env.TASKS_SHEETS_API_KEY; // for punchlist