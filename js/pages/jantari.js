export default function Timetable(container) {
  const monthSchedule = [
    { date: "19-02-2026", weekday: "Thu", sehri: "05:36 AM", iftar: "06:16 PM" },
    { date: "20-02-2026", weekday: "Fri", sehri: "05:35 AM", iftar: "06:16 PM" },
    { date: "21-02-2026", weekday: "Sat", sehri: "05:34 AM", iftar: "06:17 PM" },
    { date: "22-02-2026", weekday: "Sun", sehri: "05:33 AM", iftar: "06:17 PM" },
    { date: "23-02-2026", weekday: "Mon", sehri: "05:32 AM", iftar: "06:18 PM" },
    { date: "24-02-2026", weekday: "Tue", sehri: "05:31 AM", iftar: "06:19 PM" },
    { date: "25-02-2026", weekday: "Wed", sehri: "05:30 AM", iftar: "06:19 PM" },
    { date: "26-02-2026", weekday: "Thu", sehri: "05:29 AM", iftar: "06:20 PM" },
    { date: "27-02-2026", weekday: "Fri", sehri: "05:28 AM", iftar: "06:21 PM" },
    { date: "28-02-2026", weekday: "Sat", sehri: "05:27 AM", iftar: "06:21 PM" },
    { date: "01-03-2026", weekday: "Sun", sehri: "05:26 AM", iftar: "06:22 PM" },
    { date: "02-03-2026", weekday: "Mon", sehri: "05:25 AM", iftar: "06:23 PM" },
    { date: "03-03-2026", weekday: "Tue", sehri: "05:24 AM", iftar: "06:23 PM" },
    { date: "04-03-2026", weekday: "Wed", sehri: "05:23 AM", iftar: "06:24 PM" },
    { date: "05-03-2026", weekday: "Thu", sehri: "05:22 AM", iftar: "06:25 PM" },
    { date: "06-03-2026", weekday: "Fri", sehri: "05:21 AM", iftar: "06:25 PM" },
    { date: "07-03-2026", weekday: "Sat", sehri: "05:20 AM", iftar: "06:26 PM" },
    { date: "08-03-2026", weekday: "Sun", sehri: "05:19 AM", iftar: "06:27 PM" },
    { date: "09-03-2026", weekday: "Mon", sehri: "05:18 AM", iftar: "06:27 PM" },
    { date: "10-03-2026", weekday: "Tue", sehri: "05:17 AM", iftar: "06:28 PM" },
    { date: "11-03-2026", weekday: "Wed", sehri: "05:16 AM", iftar: "06:28 PM" },
    { date: "12-03-2026", weekday: "Thu", sehri: "05:15 AM", iftar: "06:29 PM" },
    { date: "13-03-2026", weekday: "Fri", sehri: "05:14 AM", iftar: "06:29 PM" },
    { date: "14-03-2026", weekday: "Sat", sehri: "05:13 AM", iftar: "06:30 PM" },
    { date: "15-03-2026", weekday: "Sun", sehri: "05:12 AM", iftar: "06:30 PM" },
    { date: "16-03-2026", weekday: "Mon", sehri: "05:11 AM", iftar: "06:31 PM" },
    { date: "17-03-2026", weekday: "Tue", sehri: "05:09 AM", iftar: "06:32 PM" },
    { date: "18-03-2026", weekday: "Wed", sehri: "05:08 AM", iftar: "06:33 PM" },
    { date: "19-03-2026", weekday: "Thu", sehri: "05:07 AM", iftar: "06:33 PM" },
    { date: "20-03-2026", weekday: "Fri", sehri: "05:05 AM", iftar: "06:34 PM" },
  ];

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const todayStr = `${day}-${month}-${year}`;

  function to24Hour(timeStr) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function createRow(d, isToday = false) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "timetable-row";
    if (isToday) rowDiv.classList.add("today-row");

    const sehriDiv = document.createElement("div");
    sehriDiv.className = "sehri-box";
    sehriDiv.innerHTML = `${isToday ? '<div class="today-label">Today</div>' : ''}<span class="label">Sehri</span><span class="time">${to24Hour(d.sehri)}</span>`;

    const centerDiv = document.createElement("div");
    centerDiv.className = "center-info";
    centerDiv.innerHTML = `<p class="day">${d.weekday}</p><p class="date">${d.date}</p>`;

    const iftarDiv = document.createElement("div");
    iftarDiv.className = "iftar-box";
    iftarDiv.innerHTML = `<span class="label">Iftar</span><span class="time">${to24Hour(d.iftar)}</span>`;

    rowDiv.append(sehriDiv, centerDiv, iftarDiv);
    return rowDiv;
  }

  container.innerHTML = "";

  const todayData = monthSchedule.find(d => d.date === todayStr);
  if (todayData) {
    const todayContainer = document.createElement("div");
    todayContainer.className = "today-container";
    todayContainer.appendChild(createRow(todayData, true));
    container.appendChild(todayContainer);
  }

  const tableContainer = document.createElement("div");
  tableContainer.className = "timetable-table";

  monthSchedule.forEach(d => {
    if (d.date !== todayStr) {
      tableContainer.appendChild(createRow(d));
    }
  });

  container.appendChild(tableContainer);
}
