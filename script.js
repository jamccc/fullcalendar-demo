document.addEventListener('DOMContentLoaded', function () {
  const initialLocaleCode = 'zh-cn';
  const calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locale: initialLocaleCode,
    buttonIcons: false, // show the prev/next text
    weekNumbers: true,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: 'https://fullcalendar.io/demo-events.json?overload-day', //事件列表
    dateClick: function (info, event) {
      //点击日期
      console.log('Clicked on: ' + info.dateStr);
      console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      console.log('Current view: ' + info.view.type);
      console.log(info)
      console.log(event)
      addTags()
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = 'red';
    },
    eventClick: function (info, event) {
      //点击日程
      console.log('Event: ' + info.event.title);
      console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      console.log('View: ' + info.view.type);
      console.log(info)
      console.log(event)
      // change the border color just for fun
      info.el.style.borderColor = 'red';
      removeTag()
    }
  });

  calendar.render();

  //增加日程
  function addTags() {
    const date = new Date('2020-08-20T09:00:00'); // will be in local time
    const dateEnd = new Date('2020-08-20T10:00:00'); // will be in local time
    calendar.addEvent({
      id:'jam',
      title: '增加日程测试',
      start: date,
      end: dateEnd,
      allDay: false
    });
  }
  //移出日程
  function removeTag(){
    const jam = calendar.getEventById('jam') // an event object!
    jam.remove()
  }
});