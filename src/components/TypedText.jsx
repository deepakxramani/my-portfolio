import React from 'react';
import Typed from 'typed.js';

function TypedText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Video Editor', 'Web Designer'],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypedText;