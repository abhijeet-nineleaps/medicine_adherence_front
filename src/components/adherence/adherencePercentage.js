const AdherencePercentage = (startDate, days, times, currentCount) => {
  return new Promise(res => {
    let tilldatecount = 0;
    let msPerDay = 86400000;
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const today = new Date();
    let startingDate = new Date(startDate);
    const utc1 = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const utc2 = Date.UTC(
      startingDate.getFullYear(),
      startingDate.getMonth(),
      startingDate.getDate(),
    );
    let left = (utc2 - utc1) / msPerDay;
    let daysSet = new Set(days.split(':'));
    while (left >= 0) {
      if (daysSet.has(weeks[startingDate.getDay()])) {
        tilldatecount += times.split('-').length;
      }
      left--;
      startingDate.setDate(startingDate.getDate() + 1);
    }
    res(Math.round((currentCount / tilldatecount) * 100));
  });
};

export default AdherencePercentage;
