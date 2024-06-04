function Element(props)
{
      return (
            <div>
                  <h3>Todo-List</h3>
                  <ul>
                        <li>Item 1</li>
                        <li>Item ၂</li>
                        <li>Item ၃</li>
                        <li>Item ၄</li>
                  </ul>
            </div>
      )
};

ReactDOM.render(
      <Element content="React Content" />,
      document.getElementById("app"),
);