export function formattedDate(dateStr) {
    const d = new Date(dateStr)
    return [d.getDate(), d.getMonth()+1, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
  }
  