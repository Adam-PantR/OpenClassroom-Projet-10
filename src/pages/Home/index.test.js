import { fireEvent, getByTestId, getByText, getByTitle, render, screen } from "@testing-library/react";
import Home from "./index";
import Page from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      screen.findByText("Message envoyé !");
    });
  });

});

// describe("When the page is loaded", () => {
//   it("Should create an image", async () => {
//     const lastEvent = [{
//       cover: '/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png',
//       title: "#DigitonPARIS",
//       date:  "2022-01-29T20:28:45.744Z",
//     }];
    
//     render(<Page />);
    
//     await screen.findByText("Notre dernière prestation");
//     expect(screen.getByText('Notre dernière prestation')).toBeInTheDocument();

//     const eventCard = await screen.findByTestId("card-testid");
//     console.log("eventCard:", eventCard);

//     expect(eventCard).toHaveAttribute("src", lastEvent[0].cover);
//     expect(eventCard).toHaveTextContent(lastEvent[0].title);
//   })
// });
