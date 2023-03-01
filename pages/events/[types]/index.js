const EventsCatPage = () => {
    return (
      <div>
        <h1>Our Single Event</h1>

        <a href="/event/event1">Event 1</a>
        <a href="/event/event2">Event 2</a>
        <a href="/event/event3">Event 3</a>
        <a href="/event/event4">Event 4</a>
        <a href="/event/event5">Event 5</a>
        <a href="/event/event6">Event 6</a>
      </div>
    )
  } 
  
  export default EventsCatPage

  // these are for the dynamic paths
  export async function getStaticPaths() {

    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
      return {
          params: {
           types: ev.id.toString(), //name of the folder or file
          }
      }
    })

    return {
      paths: allPaths,
      fallback: false
    }
  }

  export async function getStaticProps(context) {
    console.log(context)
    return { props: {} }
  }