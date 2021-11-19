function Test() {
  return (
    <div className="flex flex-col space-y-4">
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <div className="lite-shadow py-3 px-2 rounded  mx-auto text">
        lite-shadow
      </div>
      <div className="py-3 px-2 rounded  mx-auto new-shadow">new-shadow</div>
      <div className="py-3 px-2 rounded  mx-auto shadow-inner-xl">
        shadow-inner-xl
      </div>
      <button className="mx-auto">Button default</button>
      <button className="btn mx-auto">Button "btn"</button>
      <button className="btn-sec mx-auto">Button "btn-sec"</button>
      <a href="">default a</a>
      <a className="link" href="">
        link a
      </a>
      <p>
        <b>Lorem</b> <i>ipsum</i> dolor sit amet consectetur adipisicing elit.
        Quae veniam, aspernatur, natus laudantium commodi molestiae cum enim,
        nihil consectetur ab fugit praesentium temporibus ipsa quaerat. Odit
        voluptate nemo nihil magnam.
      </p>
    </div>
  );
}

export default Test;
