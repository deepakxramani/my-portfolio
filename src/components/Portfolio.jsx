import React, { useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import portfolios from "../components/portfolios.json"
import { Dialog } from 'primereact/dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


const Portfolio = () => {

  const [elements, setElements] = useState(3)
  const [visible, setVisible] = useState(false);
  const [demoLink, setDemoLink] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  const loadMore = () => {
    setElements(elements + elements)
  }
  const slice = portfolios.slice(0, elements);

  const handleDialogue = () => {
    
    return(
      <Dialog  draggable={false} modal={true} header="Project Demo:" headerStyle={{fontWeight:500, fontFamily: 'Raleway'}} visible={visible} style={{fontFamily: 'Raleway' ,width: '50vw', background: '#fff', padding:5, borderRadius:10 }} onHide={() => {if (!visible) return; setVisible(false); }} breakpoints={{ '960px': '90vw', '641px': '100vw' }}>

        <div style={{display:'flex', alignItems:'center',justifyContent:'center', flexDirection:'column', gap:15}}>
               
               
               {videoLink?<iframe className='demoVideo' style={{width:matchesSM?'100%':330, height:matchesSM?315:250,borderRadius:15}}  src={videoLink} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
               : <img alt='not-found' src='assets/notfoundimg.gif' style={{width:matchesSM?'55%':320}}/>}

               <div>
                <p style={{fontWeight:600}}>Live Demo: <a className='demoLink' href={demoLink} target='_blank' rel="noreferrer" style={{color:'red', fontWeight:600, textDecoration:'aquamarine'}}>Click Here</a></p>
               </div>

               </div>
            </Dialog>
    )
  }

  const handleDialogueState = (demolink,videolink) =>{
    setVisible(true)
    setDemoLink(demolink)
    setVideoLink(videolink)
  }
  
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 flex items-center flex-col">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
      <Zoom duration={1000} delay={0+100} fraction={0} cascade={true}>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        </Zoom>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {slice.map(({ id, src,demolink,videolink,codelink }) => (
          <Zoom duration={0+1000} delay={0+100} fraction={0} cascade={true}>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden object-fit">
              <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 ease-in hover:scale-110 w-full h-48 object-cover" />
              <div className="flex items-center justify-center p-4">
                <button onClick={()=> handleDialogueState(demolink,videolink)} className="w-1/2 px-6 py-3 m-4 bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer text-white rounded-md duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 bg-gray-800 border-solid border-2 border-sky-500 text-white rounded-md duration-200 hover:scale-105">
                  <a href={codelink} target='blank'>Code</a>
                </button>
              </div>
            </div>
            </Zoom>
          ))}
        </div>
       
      </div>
      <Zoom duration={1000} delay={0+100} fraction={0} cascade={true}>
      <div className='flex items-center'>
        <button 
        className='text-white w-28 h-10 rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer mt-16'
        onClick={()=> loadMore()}
          >
            Load More
        </button>
        </div>
        </Zoom>
        {visible? handleDialogue() : null}
    </div>
    
  );
  
};

export default Portfolio;