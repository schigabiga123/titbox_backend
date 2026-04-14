const net = require('net');

const HOST = '192.168.21.30';
const PORT = 5000;

const client = new net.Socket();

let buffer = '';
let lastStable = null;

// 🔌 Kapcsolódás
function connect() {
  client.connect(PORT, HOST, () => {
    console.log('✅ Connected to scale');

    // első trigger
    client.write('\n');
  });
}

// 📡 Adat fogadás (folyamatos mérés)
client.on('data', (data) => {
  buffer += data.toString();

  while (buffer.includes('\n')) {
    let line;
    [line, buffer] = buffer.split('\n', 2);

    line = line.trim();

    if (!line) continue;

    handleLine(line);
  }
});

// 🧠 Sor feldolgozás
function handleLine(line) {
  console.log('📦 RAW:', line);

  const parsed = parseWeight(line);

  if (!parsed) return;

  console.log('⚖️ MÉRT:', parsed);

  // csak stabil súly (opcionális)
  if (parsed.status === 'ST') {
    if (parsed.weight !== lastStable) {
      console.log('✅ STABIL SÚLY:', parsed.weight, 'kg');
      lastStable = parsed.weight;
    }
  }
}

// ⚖️ Parsing
function parseWeight(line) {
  // pl: ST,GS,       0KG

  const parts = line.split(',');

  if (parts.length < 3) return null;

  const status = parts[0]; // ST / US
  const mode = parts[1];   // GS / NT
  let weightRaw = parts[2];

  weightRaw = weightRaw.replace('KG', '').trim();

  const weight = parseFloat(weightRaw);

  if (isNaN(weight)) return null;

  return {
    status,
    mode,
    weight
  };
}

// 🔁 Ha polling kell (biztos ami biztos)
setInterval(() => {
  if (client.writable) {
    client.write('\n');
  }
}, 1000);

// ❌ Hiba kezelés
client.on('error', (err) => {
  console.error('❌ Error:', err.message);
});

// 🔌 Újracsatlakozás
client.on('close', () => {
  console.log('🔌 Connection closed, reconnecting in 2s...');

  setTimeout(() => {
    connect();
  }, 2000);
});

// 🚀 Indítás
connect();