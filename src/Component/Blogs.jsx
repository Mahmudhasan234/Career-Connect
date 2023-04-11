import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-28 my-2  lg:my-5 lg:mb-20'>
            <div className=''>
                <div>
                    <h1 className="text-2xl font-bold mt-5 mb-5">What is context Api?</h1>
                    <h1 className="text-lg font-semibold text-gray-600">Context API is a way for a React app to effectively produce a global variables that can be passed around different component. It is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-5 mb-5">What is a custom hook in react?</h1>
                    <h1 className="text-lg font-semibold text-gray-600">In React, a custom hook is a reusable function that allows user to pass props between components without duplicating code. Custom hooks are follows the naming convention of starting with the word "use". They can call other hooks and can contain state, effect, and context logic. Custom hooks are usually defined in separate files and can be imported into components just like any other module.</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-5 mb-5">What is useRef?</h1>
                    <h1 className="text-lg font-semibold text-gray-600"> useRef is a hook that returns a mutable ref object whose current property can be set and read. The useRef hook can be used to persist a value between renders without triggering a re-render, as it does not cause a component to update when the current property is changed.The useRef hook is often used to get a reference to a DOM element or to store mutable values that are not part of the component's state.</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-5 mb-5">What is useMemo?</h1>
                    <h1 className="text-lg font-semibold text-gray-600">In React, useMemo is a hook that allows memoize a value so that it is only recomputed when its dependencies change. Memoization is a technique used to optimize expensive computations by caching the results so that they can be reused if the inputs haven't changed.The useMemo hook takes two arguments: a function that returns a value and an array of dependencies. The function is only re-executed when one or more of the dependencies change. If the dependencies have not changed since the last render, the cached value is returned instead.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;