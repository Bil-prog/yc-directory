import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: "John Doe"},
    _id: 1,
    description: "This is a description",
    image: "https://th.bing.com/th/id/OIP.8joW0v1HPdGOAF_KdWJ87wHaD4?w=299&h=180&c=7&r=0&o=5&pid=1.7",
    category: "Real Estate",
    title: "Real Estate Startup",
    }]
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    
    </div>
  );
}
