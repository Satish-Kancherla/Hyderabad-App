
import big from "./images/bigdata.jpg";
import block from "./images/block.jpg";
import mobile from "./images/mobile.jpg";
import ab from "./images/ab.jpg";
// import abc from "./images/abc.jpg";
// import abcd from "./images/abcd.jpg";
import abcde from "./images/abcde.jpg";
// import abcdef from "./images/abcdef.jpg";
import it from "./images/it.jpg";
// import it1 from "./images/it-1.jpg";
import v3 from "./video/v3.mp4";
import v4 from './video/v4.mp4';

const Home = () => {
    return ( 
        <div className="container-main">
            <div className="home-video1">
                <div className="main">
                    <video  src={v3} autoPlay loop muted  /> 
                </div> 
            </div>
            
            <div className="pub">
                <h1>What We Do</h1>
            </div>
            <div className="images-a">
                <div className="img1">
                    <img src={big} alt=""/>
                    <h2>Block Chain Development</h2>
                    <div className="img1-p">
                        <div className="p-1">
                            <p>Block Chain Development</p> 
                        </div>
                        <div className="p-2">
                            <p>Increases the security and speeds up the exchange of information.</p>
                        </div>
                    </div>
                </div>
                <div className="img2">
                    <img src={block} alt=""/>
                    <h2>Big Data Analytics</h2>
                    <div className="img2-p">
                        
                        <div className="p-1">
                            <p>Big Data Analytics</p> 
                        </div>
                        <div className="p-2">
                            <p>Unleash the hidden patterns, unknown correlations, market trends, customer preferences, and other useful information.</p>
                        </div>
                    </div>
                </div>
                <div className="img3">
                    <img src={mobile} alt=""/>
                    <h2>Mobile App Development</h2>
                    <div className="img3-p">
                        
                        <div className="p-1">
                            <p>Mobile App Development</p> 
                        </div>
                        <div className="p-2">
                            <p>Get mobile apps across all the major platforms, including iOS (iPhone & iPad), Android, BlackBerry and Windows Mobile.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="images-b">
                <div className="img4">
                    <img src={ab} alt=""/>
                    <h2>ERP Solutions</h2>
                    <div className="img4-p">
                        <div className="p-1">
                            <p>ERP Solutions</p> 
                        </div>
                        <div className="p-2">
                            <p>Integrated management of main business processes, often in real time and mediated by software and technology.</p>
                        </div>
                    </div>
                </div>
                <div className="img5">
                    <img src={abcde} alt=""/>
                    <h2>Web Development & SEO</h2>
                    <div className="img5-p">
                        <div className="p-1">
                            <p>Web Development & SEO</p> 
                        </div>
                        <div className="p-2">
                            <p>Hyderabad Group offers a broad confluence of web development solutions that caters to both complex and simple business requirements.</p>
                        </div>
                    </div>
                </div>
                <div className="img6">
                    <img src={it} alt=""/>
                    <h2>IT Consulting</h2>
                    <div className="img6-p">
                        <div className="p-1">
                            <p>IT Consulting</p> 
                        </div>
                        <div className="p-2">
                            <p>Integrate new hardware, packaged and custom software, communications protocols and networks into your existing technology infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="child">
                <h1>Our Plus Points</h1>
            </div>
            <div className="points-a">
                <div className="point1">
                    <h3>TECHNICALLY ADVANCED</h3>
                    <p> State-of-the-art<br /> development tools and<br />
                     technologies available in<br /> the market today</p>
                </div>
                <div className="point2">
                    <h3>FLEXIBILITY</h3>
                    <p>Client specific<br />requirements with the <br />
                        flexibility to react quickly <br /> and adjust to any<br /> changes</p>
                </div>
                <div className="point3">
                    <h3>SPEED</h3>
                    <p>We can deliver with<br /> agility, quality the<br /> customized systems very<br /> quickly with our expertise</p>
                </div>
                <div className="point4">
                    <h3>REASONABLE COST</h3>
                    <p>No mark-up on any<br /> hardware and software<br /> bought from us, but charge<br /> openly and honestly in our<br /> labor rates</p>
                </div>
            </div>
            <div className="points-b" >
                <div className="point5">
                    <h3>DEDICATION</h3>
                    <p>Professionals in the truest<br /> sense of the word who<br /> ensure that the deadlines<br /> are met whatever be the<br /> circumstances</p>

                </div>
                <div className="point6">
                    <h3>EXPANDABILITY</h3>
                    <p>Highly skilled<br /> programmers, engineers,<br /> mathematicians and<br /> scientists for our clients'<br /> proprietary software<br /> development projects</p>

                </div>
                <div className="point7">
                    <h3>QUALITY TALENT</h3>
                    <p>A rigorous screening<br /> process, backed by technical<br /> interview, reference check<br /> and written test, that<br /> ensures quality</p>

                </div>
                <div className="point8">
                    <h3>SECURITY</h3>
                    <p>We are a 100% US Software<br /> Development Company and<br /> our legal, banking and<br /> accounting relationships are<br /> spread all over USA.</p>
                </div>
            </div>
            <div className="about">
            
                <div className="para">
                    <h1>ABOUT</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>

                </div>
                <div className="video4">
                    <video  src={v4} autoPlay loop muted  />
                </div>
            </div>
            <div className="data">
                <div className="year1"><h1>1998</h1><p>Year<br/> Established</p></div>
                <div className="year1"><h1>310</h1><p>Projects<br/> Completed</p></div>
                <div className="year1"><h1>1080</h1><p>Contractors<br/> Appointed</p></div>
                <div className="year1"><h1>48</h1><p>Awards<br/> Won</p></div>
            </div> 

        </div>
     );
}
 
export default Home;