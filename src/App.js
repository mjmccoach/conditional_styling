import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
    const [evidence, setEvidence] = useState(false)

    function evidenceUpdate() {
      setEvidence(true)
    }

    useEffect(() => { if(evidence === false) {
      setEvidence(true)
    }
    }, [])
  
  
  
  return (
    <div onD={evidenceUpdate} className={`admin-user-row ${evidence ? "review-evidence" : ""}`}>
        Your mum
    </div>
  );
}

export default App;
