import logo from './tradinglogo.gif';
import stock from './topgainer_24.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Welcome to my trading app
        </p>
         <img src='https://source.unsplash.com/1600x900/?header'/> 
        <img src='https://source.unsplash.com/1600x900/?welcome'/>
        
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://source.unsplash.com/1201x501/?budget"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-red-900 mt-6 mb-3">Stock market analysis</h2>
        <p class="leading-relaxed text-base">Explore stock market today.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Click here</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://source.unsplash.com/1202x502/?cryptocurrency"/>
        </div>
        <h2 class="title-font text-2xl font-medium text-red-900 mt-6 mb-3">Block chain</h2>
        <p class="leading-relaxed text-base">Click here to know more about crypto.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Click here</button>
      </div>
    </div>
  </div>
</section>

       
        <br/>
        <br/>
        <p>Meanwhile you can watch this while the webpage gets updated.</p>
        <iframe width="500" height="500" src="https://www.youtube.com/embed/7thDk6RSsQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </header>
      <section className="Section">
        <h1>Tog gainers for today:</h1>
        <img src={stock} className="App-logo" alt="logo" />
        </section>


        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      
      <p className="leading-relaxed text-lg">Stay tuned for further updates</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Author:Harsh</h2>
      <p className="text-gray-500">Webdeveloper</p>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallery</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?fun"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/501x301/?cricket"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://source.unsplash.com/600x360/?game"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://source.unsplash.com/601x361/?weather"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/502x302/?science"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://source.unsplash.com/503x303/?maths"/>
        </div>
      </div>
    </div>
  </div>
</section>

<p>Want to know more about me checkout below link:</p>
<br/>
<a
          className="App-link"
          href="https://www.linkedin.com/in/harsh-raj-73a78113b"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here->Follow me on linkedin for more
        </a>
        <br/>
        <br/>
        <br/>
        <a
          className="App-link"
          href="https://github.com/HARSH-07"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here->You can also connect with me on github for collaboration
        </a>
        <br/>
        <br/>
 
    </div> 

    
  );
}

export default App;
