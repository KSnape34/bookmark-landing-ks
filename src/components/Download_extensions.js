import React from 'react'
import chrome from "../images/logo-chrome.svg"
import firefox from "../images/logo-firefox.svg"
import opera from "../images/logo-opera.svg"
import dots from "../images/bg-dots.svg"

export default function Download_extensions() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center mb-10">
            <h2 className="text-3xl mb-8 lg:text-4xl">Download the extension</h2>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
        </article>

        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-2xl text-center p-8 rounded">
                <img src={chrome} alt="Chrome logo" className="block mx-auto mb-4" />
                <h3 className="text-xl mb-4">Add to Chrome</h3>
                <p className="text-sm">Minimum version 62</p>
                <img src={dots} alt="Dots" className="block mx-auto my-4" />
                <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75 border-blue-600 border-2 hover:bg-transparent hover:text-blue-700 transition-all duration-200">Add and Install Extension</button>
            </div>

            <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-10">
                <img src={firefox} alt="Firefox logo" className="block mx-auto mb-4" />
                <h3 className="text-xl mb-4">Add to Firefox</h3>
                <p className="text-sm">Minimum version 55</p>
                <img src={dots} alt="Dots" className="block mx-auto my-4" />
                <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75 border-blue-600 border-2 hover:bg-transparent hover:text-blue-700 transition-all duration-200">Add and Install Extension</button>
            </div>

            <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-20">
                <img src={opera} alt="Opera logo" className="block mx-auto mb-4" />
                <h3 className="text-xl mb-4">Add to Opera</h3>
                <p className="text-sm">Minimum version 46</p>
                <img src={dots} alt="Dots" className="block mx-auto my-4" />
                <button className="btn-blue text-white py-2 px-4 rounded shadow-lg hover:opacity-75 border-blue-600 border-2 hover:bg-transparent hover:text-blue-700 transition-all duration-200">Add and Install Extension</button>
            </div>
        </article>

    </section>
      
    </>
  )
}
