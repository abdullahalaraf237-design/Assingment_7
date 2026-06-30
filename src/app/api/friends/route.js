import friends from '../../../data/friends.json';

export async function GET() {
  return new Response(JSON.stringify(friends), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
