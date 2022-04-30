const AdherencePercentage = (startDate, days, times, currentCount, name) => {
  //   console.log(startDate, days, times, currentCount)
  return new Promise((res, rej) => {
    let tilldatecount = 0;
    let daysarray = days.split(':');
    let ttimes = times.split('-').length;
    let daysSet = new Set(daysarray);
    const today = new Date();
    let startingDate = new Date(startDate);
    let left = today.getDate()-startingDate.getDate();
    console.log(left,name);
    const weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    while (left >= 0) {
   //  console.log(today, startingDate, weeks[startingDate.getDay()], name);

      if (daysSet.has(weeks[startingDate.getDay()])) {
        tilldatecount += ttimes;
      }
      left--;
      startingDate.setDate(startingDate.getDate() + 1);
    }
    //   console.log(tilldatecount,daysSet);

    res(Math.round((currentCount / tilldatecount) * 100));
  });
};

export default AdherencePercentage;
