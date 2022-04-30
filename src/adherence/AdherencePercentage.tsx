const AdherencePercentage = (startDate, days, times, currentCount, name) => {
  return new Promise(res => {
    let tilldatecount = 0;
    let daysarray = days.split(':');
    let ttimes = times.split('-').length;
    let daysSet = new Set(daysarray);
    const today = new Date();
    let startingDate = new Date(startDate);
    let left = today.getDate() - startingDate.getDate();
    const weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    while (left >= 0) {
      if (daysSet.has(weeks[startingDate.getDay()])) {
        tilldatecount += ttimes;
      }
      left--;
      startingDate.setDate(startingDate.getDate() + 1);
    }

    res(Math.round((currentCount / tilldatecount) * 100));
  });
};

export default AdherencePercentage;
