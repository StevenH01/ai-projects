import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="new-chat-box">
          <span>+</span>
           New Chat
        </div>
      </aside>
      <section className="chat-box">
        <div className="chat-input-holder">
          <textarea className="chat-input-text-area" placeholder="Type your message here">

          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
