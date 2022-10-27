import MeetupDetail from '../../components/meetups/MeetupDetail';
function MeetupDetails(props) {
  const { meetupData: meetup } = props;
  return (
    <MeetupDetail
      address={meetup.address}
      title={meetup.title}
      description={meetup.description}
      image={meetup.image}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data
  // const { query } = useRouter();//cannot use here

  const { meetupId } = context.params;

  return {
    props: {
      meetupData: {
        id: meetupId,
        address: 'Some Street 5, Some City',
        title: 'A First Meetup',
        description: 'The meetup description',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
      },
    },
  };
}

export default MeetupDetails;
