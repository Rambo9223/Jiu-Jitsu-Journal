// utils/getCurrentWeek.ts
export function getCurrentWeek(): Date[] {
  const today = new Date();
  const currentDay = today.getDay(); // 0 (Sun) - 6 (Sat)

  // Calculate how many days to subtract to get Monday
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  // Create array of 7 days (Mon → Sun)
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date;
  });
}
