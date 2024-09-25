const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    React.createElement(
        "div",
        {
            id: "child",
        },
        [
            React.createElement(
                "h1",
                {
                    id: "heading",
                },
                "Hello world!"
            ),
            React.createElement(
                "h2",
                {
                    id: "heading",
                },
                "Hello world! from h2"
            ),
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
