import 'server-only';

export async function fetchTickets() {
  const res = await fetch(
    ' http://localhost:8000/tickets',
    {
      next: {
        revalidate: 30 // 30 seconds
      }
    }
  );

  return res.json();
}
