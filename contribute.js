function formatDate(date) {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); 
}

$(document).ready(function () {
  $('#contribution-grid').empty();
  getScrape(2025);
});

$('#days-2020').click(function () { 
  $('#contribution-grid').empty();
  getScrape(2020);
})
$('#days-2021').click(function () {
  $('#contribution-grid').empty();
  getScrape(2021);
})
$('#days-2022').click(function () {
  $('#contribution-grid').empty();
  getScrape(2022); 
})
$('#days-2023').click(function () {
  $('#contribution-grid').empty();
  getScrape(2023);
})
$('#days-2024').click(function () {
  $('#contribution-grid').empty();
  getScrape(2024);
})
$('#days-2025').click(function () {
  $('#contribution-grid').empty();
  getScrape(2025);
})

function getScrape(yearInput) {
 let year = yearInput?yearInput: 2025

  fetch(`http://52.65.174.177:3000/contributions?username=ZeveNor&year=${year}`)
  .then(response => response.json())
  .then(res => { 
    const contributionGrid = document.getElementById('contribution-grid');
    const data = res.daily_contributions;
    
    data.forEach(item => {
      item.date = new Date(item.date);
    });

    const rearrangeDates = (data) => {

      let arranged = [];
      let mon = [];
      let tue = [];
      let wed = [];
      let thu = [];
      let fri = [];
      let sat = [];
      let sun = [];

      let dayFinder = 0;

      let startChecker = false;
      let count = 0;

      let oldyear = year - 1;
      let nextyear = year + 1;
      let startDate = new Date(`${year}-01-01`).getDay();
      if (data.length <= 365) {
        if (startDate == 0) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 }) 
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-4`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-5`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-5`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 1) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-4`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-5`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 2) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-4`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 3) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 4) {
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 5) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
        }
      }
      else if (data.length <= 366) {
        if (startDate == 0) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-4`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-5`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 1) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-4`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 2) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-3`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 3) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
          data.push({ "date": `${nextyear}-1-2`, "dataLevel": 99, "amount": 99 })
        }
        else if (startDate == 4) {
          data.push({ "date": `${nextyear}-1-1`, "dataLevel": 99, "amount": 99 })
        }
      }

      for (i = 0; i <= 371; i++) {
        if (count <= data.length - 1) {
          dayFinder = new Date(data[count].date).getDay();
          startDay = new Date(`${year}-01-01`).getDay();
        } 

        if (startChecker == false) {
          if (startDay == 0) {
            sun.push(data[count]);
          }
          else if (startDay == 1) {
            sun.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            mon.push(data[count]);
          }
          else if (startDay == 2) {
            sun.push({ "date": `${oldyear}-12-30`, "dataLevel": 99, "amount": 99 })
            mon.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            tue.push(data[count]);
          }
          else if (startDay == 3) {
            sun.push({ "date": `${oldyear}-12-29`, "dataLevel": 99, "amount": 99 })
            mon.push({ "date": `${oldyear}-12-30`, "dataLevel": 99, "amount": 99 })
            tue.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            wed.push(data[count]);
          }
          else if (startDay == 4) {
            sun.push({ "date": `${oldyear}-12-28`, "dataLevel": 99, "amount": 99 })
            mon.push({ "date": `${oldyear}-12-29`, "dataLevel": 99, "amount": 99 })
            tue.push({ "date": `${oldyear}-12-30`, "dataLevel": 99, "amount": 99 })
            wed.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            thu.push(data[count]);
          }
          else if (startDay == 5) {
            sun.push({ "date": `${oldyear}-12-27`, "dataLevel": 99, "amount": 99 })
            mon.push({ "date": `${oldyear}-12-28`, "dataLevel": 99, "amount": 99 })
            tue.push({ "date": `${oldyear}-12-29`, "dataLevel": 99, "amount": 99 })
            wed.push({ "date": `${oldyear}-12-30`, "dataLevel": 99, "amount": 99 })
            thu.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            fri.push(data[count]);
          }
          else if (startDay == 6) {
            sun.push({ "date": `${oldyear}-12-26`, "dataLevel": 99, "amount": 99 })
            mon.push({ "date": `${oldyear}-12-27`, "dataLevel": 99, "amount": 99 })
            tue.push({ "date": `${oldyear}-12-28`, "dataLevel": 99, "amount": 99 })
            wed.push({ "date": `${oldyear}-12-29`, "dataLevel": 99, "amount": 99 })
            thu.push({ "date": `${oldyear}-12-30`, "dataLevel": 99, "amount": 99 })
            fri.push({ "date": `${oldyear}-12-31`, "dataLevel": 99, "amount": 99 })
            sat.push(data[count]);
          }
          startChecker = true;
        }
        else {
          if (dayFinder == 0) {
            sun.push(data[count]);
          }
          else if (dayFinder == 1) {
            mon.push(data[count]);
          }
          else if (dayFinder == 2) {
            tue.push(data[count]);
          }
          else if (dayFinder == 3) {
            wed.push(data[count]);
          }
          else if (dayFinder == 4) {
            thu.push(data[count]);
          }
          else if (dayFinder == 5) {
            fri.push(data[count]);
          }
          else if (dayFinder == 6) {
            sat.push(data[count]);
          }
        }
        count++;
      }
      arranged = sun.concat(mon, tue, wed, thu, fri, sat);
      console.log(sun);
      

      return arranged;
    };

    rearrangeDates(data).forEach(contribution => {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      
      let levelClass = 'inactive';
      let contributionText = 'No Contribution';
    
      const dateText = contribution.date;
    
      if (contribution.amount === 99) {
        levelClass = 'none';
      }
      else if (contribution.amount === 10) {
        levelClass = 'active-1';
        contributionText = `${contribution.amount} Contribution(s)`;
        dayElement.setAttribute('title', `${contributionText} on ${formatDate(dateText)}`);
        new bootstrap.Tooltip(dayElement);
      }
      else if (contribution.amount >= 5) {
        levelClass = 'active-2';
        contributionText = `${contribution.amount} Contribution(s)`;
        dayElement.setAttribute('title', `${contributionText} on ${formatDate(dateText)}`);
        new bootstrap.Tooltip(dayElement);
      }
      else if (contribution.amount > 0) {
        levelClass = 'active-3';
        contributionText = `${contribution.amount} Contribution(s)`;
        dayElement.setAttribute('title', `${contributionText} on ${formatDate(dateText)}`);
        new bootstrap.Tooltip(dayElement);
      }
      else if (contribution.amount === 0) { 
        levelClass = 'inactive';
        dayElement.setAttribute('title', `No Contributions on ${formatDate(dateText)}`);
        new bootstrap.Tooltip(dayElement);
      }

      dayElement.classList.add(levelClass);
      
      contributionGrid.appendChild(dayElement);
    });

    }
    )
}

