import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

function App() {

return (
<>
<main>

<div className="images">
<img id='tomorrowland' src="/tommorowland.png" alt="" />
<img id='navy-pier' src="/navy-pier.png" alt="" />
<img id='msi-chicago' src="/msi-chicago.png" alt="" />
<img id='phone' src="/phone.png" alt="" />
<img id='kikk' src="/kikk.png" alt="" />
<img id='kennedy' src="/kennedy.png" alt="" />
<img id='opera' src="/opera.png" alt="" />
</div>

<Canvas
id='canvas-elem'
style={{
height: "100vh",
width: "100vw",
position: "fixed",
top: 0,
left: 0,
zIndex: 1,
}}
>
<Dog />
</Canvas>

<section id='section-1'>

<nav>

<div className="nav-elem">

<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 401.23099 116.838">

<path d="M97.9212,84.4793c0-13.21301-7.2132-23.3924-25.54961-23.3924h-19.6172v46.7851h19.6172c18.3364,0,25.54961-10.1797,25.54961-23.3927Zm-13.3478,0c0,9.2356-5.1908,12.6737-12.404,12.6737h-6.6739v-25.3474h6.6739c7.2132,0,12.404,3.4381,12.404,12.6737Z"></path>

<path d="M100.972,107.872h37.078v-10.6516h-24.33701v-8.0222h21.37v-10.112h-21.37v-7.348h23.73v-10.6513h-36.47099v46.7851Z"></path>

<path d="M181.211,77.3335c0-11.7973-7.55-16.2466-19.28-16.2466h-20.29199v46.7851h12.741v-14.2919h7.55099c11.73,0,19.28-4.4493,19.28-16.2466Zm-13.213,0c0,4.5841-2.157,6.47169-7.34801,6.47169h-6.26999v-12.9434h6.26999c5.19101,0,7.34801,1.8876,7.34801,6.4717Z"></path>

<path d="M182.601,72.0079h14.76401v35.86411h12.741v-35.86411h14.763v-10.921h-42.26801v10.921Z"></path>

<path d="M219.575,101.66c0,4.23399,3.427,7.661,7.661,7.661,4.233,0,7.694-3.427,7.694-7.661,0-4.23331-3.461-7.69421-7.694-7.69421-4.23399,0-7.661,3.4609-7.661,7.69421Zm1.478,0c0-3.4941,2.755-6.35011,6.183-6.35011,3.427,0,6.216,2.856,6.216,6.35011,0,3.495-2.789,6.31699-6.216,6.31699-3.42799,0-6.183-2.822-6.183-6.31699Zm2.58701,3.797h2.42v-2.621h1.377l1.44501,2.621h2.621l-1.74701-3.091c.806-.336,1.41101-1.243,1.41101-2.251,0-1.781-1.14201-2.6211-3.091-2.6211h-4.436v7.9631Zm5.07401-5.309c0,.639-.403,.908-1.17601,.908h-1.478v-1.6804h1.478c.77301,0,1.17601,.2016,1.17601,.7724Z"></path>

</svg>

</div>

<div className="nav-elem">
<i className="ri-arrow-right-s-line"></i> Our Show reel
</div>

<div className="nav-elem">
<i className="ri-menu-3-line"></i>
</div>

</nav>

<div className="middle">

<div className="left">
<h1>WE <br /> Make <br /> Good <br /> Shit</h1>
</div>

<div className="right"></div>

</div>

<div className="bottom">

<div className="left"></div>

<div className="right">
<p>
Dogstudio is a multidisciplinary <br />
creative studio at the intersection <br />
of art, design and technology.
</p>
</div>

</div>

<div className="first-line"></div>
<div className="second-line"></div>

</section>

<section id='section-2'>

<div className="titles">

<div img-title="tomorrowland" className="title">
<small>2020 - ONGOING</small>
<h1>Tomorrowland</h1>
</div>

<div img-title="navy-pier" className="title">
<small>2020 - ONGOING</small>
<h1>Navy Pier</h1>
</div>

<div img-title="msi-chicago" className="title">
<small>2020 - ONGOING</small>
<h1>MSI Chicago</h1>
</div>

<div img-title="phone" className="title">
<small>2020 - ONGOING</small>
<h1>This Was Louise’s Phone</h1>
</div>

<div img-title="kikk" className="title">
<small>2020 - ONGOING</small>
<h1>KIKK Festival 2018</h1>
</div>

<div img-title="kennedy" className="title">
<small>2020 - ONGOING</small>
<h1>The Kennedy Center</h1>
</div>

<div img-title="opera" className="title">
<small>2020 - ONGOING</small>
<h1>Royal Opera Of Wallonia</h1>
</div>

</div>

</section>

<section id='section-3'>
  <div className="hero">

      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-left">
          <p className="small-text">THIS IS HOW WE DO IT</p>

          <h1>
            We’re crafting <br />
            emotional <br />
            experiences aimed <br />
            at improving <br />
            results
          </h1>
        </div>

        {/* RIGHT TEXT */}
        <div className="hero-right">

          <p>
            Dogstudio is a design & technology firm working globally from
            our offices based in Belgium and Chicago. Our strong focus on
            producing high quality & emotional brandings, digital products
            and experiences became a signature.
          </p>

          <p>
            We're passionate about moving people and solving problems for
            the likes of Microsoft, The Museum of Science And Industry Of
            Chicago, The Kennedy Center of Washington, Dragone, Quanta
            Magazine, and many more.
          </p>
          
        </div>

      </div>

    </div>
</section>

</main>
</>
)

}

export default App