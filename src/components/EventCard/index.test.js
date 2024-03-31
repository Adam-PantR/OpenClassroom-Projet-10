import { render, screen } from "@testing-library/react";
import EventCard from "./index";

describe("When a event card is created", () => {
  it("an image is display with alt value", () => {
    render(<EventCard imageSrc="http://src-image" imageAlt="image-alt-text" date={new Date("2022-04-01")} 
    title="test event"
    
    label="test label"
    />);
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  it("a title, a label and a month are displayed", () => {
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        month="Avril"
        date={new Date("2022-04-01")}
      />
    );
    const titleElement = screen.getByText(/test event/);
    const monthElement = screen.getByText(/avril/);
    const labelElement = screen.getByText(/test label/);
    expect(titleElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(monthElement).toBeInTheDocument();
  });
  describe("with small props", () => {
    it("a modifier small is added", () => {
      render(
        <EventCard
          imageSrc="http://src-image"
          imageAlt="image-alt-text"
          title="test event"
          label="test label"
          date={new Date("2022-04-01")}
          small
        />
      );
      const cardElement = screen.getByTestId("card-testid");
      expect(cardElement.className.includes("EventCard--small")).toEqual(true);
    });
  });
});


describe('Page component EventCard', () => {
  it('renders the last EventCard', async () => {
    const lastEvent = [{
            cover: '/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png',
            title: "#DigitonPARIS",
            date:  "2022-01-29",
          }];

          render(
            <EventCard
              imageSrc={lastEvent[0].cover}
              imageAlt="image-alt-text"
              title={lastEvent[0].title}
              label="test label"
              date={new Date(lastEvent[0].date)}
              small
              data-testid="last-event-card"
            />
          );

    // await screen.findByText("Notre dernière prestation");
    // expect(screen.getByText('Notre dernière prestation')).toBeInTheDocument();

    await screen.findByText(lastEvent[0].title);
    expect(screen.getByText('DigitonPARIS')).toBeInTheDocument();
    
  });
});