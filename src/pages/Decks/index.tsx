import DeckCard from "../../components/DeckCard"
import Container from "../../components/Layout/Container"
import NewDeckCard from "../../components/NewDeckCard"
import Heading from "../../components/UIElements/Heading"
import SearchBox from "../../components/UIElements/SearchBox"

const Decks = () => {
  return (
    <Container>
      <div>
        <Heading text="Your Decks" />

        <div className="mt-10">
          <SearchBox />
        </div>
      </div>
      <div className="grid my-5 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <DeckCard />
        <DeckCard />
        <DeckCard />
        <DeckCard />
        <DeckCard />
        <DeckCard />

        <NewDeckCard />
      </div>
    </Container>
  )
}

export default Decks