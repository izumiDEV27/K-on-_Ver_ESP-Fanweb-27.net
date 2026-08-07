$cssContent = @"

/* --- DARK MODE --- */
body.dark-mode {
  --bg: #1e1e24;
  --primary: #a370e0;
  --secondary: #d66ba8;
  --text: #e0e0e0;
  --accent: #d4b248;
}

body.dark-mode main {
  background-color: rgba(30, 30, 30, 0.6);
  border-color: var(--primary);
}

body.dark-mode header p {
  background-color: rgba(30, 30, 30, 0.7);
}

body.dark-mode .episode-card {
  background-color: #2a2a35;
  border-color: var(--secondary);
}

body.dark-mode .popup {
  background: var(--bg);
  border-color: var(--secondary);
}

/* --- WATCHED EPISODES --- */
.episode-card.watched {
  opacity: 0.7;
  border: 2px solid #5cb85c !important;
  box-shadow: 0 4px 12px rgba(92, 184, 92, 0.4);
}
.episode-card.watched h3::after {
  content: " ✅ Visto";
  color: #5cb85c;
  font-size: 0.8em;
  margin-left: 5px;
}
"@

Add-Content -Path "temporada1\style_temporada1.css" -Value $cssContent -Encoding UTF8
Add-Content -Path "t3mp0rada2\t3mporada2.css" -Value $cssContent -Encoding UTF8
Add-Content -Path "ura-on\Ura0n.css" -Value $cssContent -Encoding UTF8
