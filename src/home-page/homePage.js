import Navigation from "../navigation/navigation";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <section className="d-flex bg-start-section border-radius-bottom z-10">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column text-light col-md-6">
              <div className="p-3 mt-5">
                <h1 className="">
                  We know how it is hard to find a game you like.
                </h1>
              </div>
              <div className="p-3 mt-5">
                <p className="lead">
                  Thats why we are here to help you find just the perfect game
                  you like. We have over 200,000 games to look at!
                </p>
              </div>
              <div className="p-3">
                <button className="btn btn-primary"><span className="h3">Find a game</span></button>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mb-5 text-light col-md-6">
                <img className="img-fluid w-cod-image" src={require("./media/game.png")}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
