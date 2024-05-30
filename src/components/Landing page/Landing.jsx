import React from 'react'
import './Landing.css'

function Landing() {
    return (
        <>
            <div class="flex-container">
                <div className="sub-container">
                    <div class="flex-one-left">
                        <div className="round1"></div>
                        <div className="round2"></div>
                        <div className="round3"></div>


                        <h1 className='land-heading'>The Best Way For <br /><span>Your Learning</span></h1>
                    </div>
                    <div className="flex-one-right">
                        <img src="https://i.postimg.cc/KvG26ZhM/Saly-16.png" alt="" />
                    </div>
                </div>

                {/* <div class="flex-two">
                        <div className="card1"><img src="https://i.postimg.cc/y8bKf6nh/freepik-export-20240423061703p3dw.png" alt="" />
                        <p>jshbdjfhbsjdbv</p></div>
                        <div className="card2"><img src="https://i.postimg.cc/fR6FtVBP/freepik-export-2024042306235447-Yl.png" alt="" /></div>
                        <div className="card3"><img src="https://i.postimg.cc/xjx6NkdP/freepik-export-20240423061111f-Kgx.png" alt="" /></div>

                   
                </div> */}

            </div>


<section class="articles">

<article>

<div class="article-wrapper1">
  <figure>
    <img src="https://i.postimg.cc/y8bKf6nh/freepik-export-20240423061703p3dw.png" alt="" />
  </figure>
  <div class="article-body">
    <h2>For Class 5 to 10</h2>
    
  </div>
</div>
</article>



  <article>

    <div class="article-wrapper2">
      <figure>
        <img src="https://i.postimg.cc/fR6FtVBP/freepik-export-2024042306235447-Yl.png" alt="" />
      </figure>
      <div class="article-body">
        <h2>For class XI & XII</h2>
        
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper3">
      <figure>
        <img src="https://i.postimg.cc/xjx6NkdP/freepik-export-20240423061111f-Kgx.png" alt="" />
      </figure>
      <div class="article-body">
        <h2>KEAM/NEET/JEE</h2>
       
      </div>
    </div>
  </article>
</section>

        </>
    )
}

export default Landing
