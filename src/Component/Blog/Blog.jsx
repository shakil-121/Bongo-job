import React from "react"; 
import './Blog.css'

const Blog = () => {
  return (
    <div className="blogs">
      <h2>1. When should you use context API?</h2>
      <p>
        Ans: Context is designed to share data that can be considered as
        "global" to the whole app.
      </p>
      <br />
      <h2>2. What is a custom hook?</h2>
      <p>
        Ans: Custom Hooks are functions. Usually, they start with the word
        “use”.Custom Hooks allow us to access the React ecosystem in terms of
        hooks, which means we have access to all the known hooks like useState,
        useMemo, useEffect, etc.
      </p>
      <br />
      <h2>3. What is useRef?</h2>
      <p>
        Ans: One of the various hooks included in React is the useRef hook; it
        is used to reference an object inside a functional component and
        preserves the referenced object's state between re-renders.
      </p>
      <br />
      <h2>4. What is useMemo?</h2>
      <p>
        Ans: React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
      </p>
    </div>
  );
};

export default Blog;
