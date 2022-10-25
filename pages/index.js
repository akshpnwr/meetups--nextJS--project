import MeetupList from '../components/meetups/MeetupList';

const dummy_meetups = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some city',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some city',
    description: 'This is the second meetup',
  },
];

export default function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}
