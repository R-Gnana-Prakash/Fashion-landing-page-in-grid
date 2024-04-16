import "./App.scss";

function App() {
  return (
    <div class="container">
      <div className="container__headings">
        <h1 className="container__headings_title">Choose your style</h1>
        <p className="container__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          deserunt asperiores libero possimus veniam. Unde dignissimos, ratione
          veritatis maiores repellendus, dolore voluptatem a inventore ad qui
          deserunt aliquid quidem earum!
        </p>
        <div className="container__actions">
          <div className="btn">Shop now</div>
          <div className="player"></div>
        </div>
      </div>

      <div className="container__title">
        <ul>
          <li>Fashion</li>
          <li>Elegant</li>
          <li>Trend</li>
        </ul>
      </div>

      <div className="container__carousel">hey</div>

      <div className="container__sub-heading">Trendy collections</div>
      <div className="container__sub-heading__cover"></div>
      <div className="container__sub-heading__content">
        <h3>Who We are </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          veritatis consequuntur, laboriosam harum, quos vel sequi perspiciatis
          odit assumenda maiores quaerat minima voluptates, nesciunt architecto
          est deserunt. Enim, impedit molestiae?
        </p>
        <div className="btn"></div>
      </div>
    </div>
  );
}

export default App;
