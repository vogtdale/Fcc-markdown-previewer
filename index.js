marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App() {


    const [editor, setText] = React.useState("");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">FreecodeCamp MarkDown Previewer</h1>
            <textarea 
                name="text" 
                id="editor"
                rows="10" 
                className="textarea"
                value={editor}
                defaultValue="`hellow`"
                onChange={(e) => setText(e.target.value)}
            >
            
            </textarea>
            <h3 className="mt-3">Output</h3>

            {/* custom component */}
            <Preview id="preview" markdown={editor} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div 
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer}),
        }}
        id="preview"    
        ></div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));