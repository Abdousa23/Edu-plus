const moment = require('moment'); // Import moment.js for date manipulation

// Function to get the start and end dates of each month in the current year
function getMonthStartEndDates(year) {
  const monthStartEndDates = [];
  for (let month = 0; month < 12; month++) {
    const startOfMonth = moment().year(year).month(month).startOf('month').toDate();
    const endOfMonth = moment().year(year).month(month).endOf('month').toDate();
    monthStartEndDates.push({ startOfMonth, endOfMonth });
  }
  return monthStartEndDates;
}

// Controller to get the count of users for each month of the current year
const getUsersCountByMonth = async (req, res) => {
    console.log('test 1 has been passed ')
  const year = moment().year(); // Get the current year
  const monthStartEndDates = getMonthStartEndDates(year); // Get start and end dates of each month

  // Perform aggregation to count users for each month
  const usersCountByMonth = await Promise.all(monthStartEndDates.map(async (dates, index) => {
    const { startOfMonth, endOfMonth } = dates;
    const usersCount = await User.countDocuments({
      createdAt: { $gte: startOfMonth, $lte: endOfMonth }
    });
    return { month: index + 1, count: usersCount }; // Month is 1-indexed
  }));

  // Return the count of users for each month of the year
  res.status(200).json({ usersCountByMonth });
};

module.exports = getUsersCountByMonth


